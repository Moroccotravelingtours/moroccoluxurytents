/*
 * tracking.js: Google Analytics 4 + Google Ads + Meta Pixel + cookie banner (Consent Mode v2).
 * The same file is used on every site (tourdemarruecos, viaggipermarocco, moroccotripjoy,
 * luxurymoroccopackages, moroccoluxurytents).
 *
 * The IDs come from window.TRACKING_CONFIG, which the site writes into <head> from
 * tracking.config.json (or from the Netlify environment variables, which take priority).
 * If no ID is filled in, this script does nothing.
 *
 * Tracked automatically:
 *   - page views (also on Next.js navigation without a reload)
 *   - clicks on WhatsApp links / buttons that open WhatsApp  -> GA4 "whatsapp_click", Meta "Contact", Google Ads WhatsApp conversion
 *   - clicks on tel: links                                    -> GA4 "phone_click",   Meta "Contact"
 *   - clicks on mailto: links                                 -> GA4 "email_click",   Meta "Contact"
 *   - sent forms (the site calls window.cmTrack('lead', {...}))-> GA4 "generate_lead", Meta "Lead",    Google Ads lead conversion
 *
 * Consent: visitors in Europe (EU/UK/CH, by browser time zone) see a banner. Until they accept,
 * Google runs in Consent Mode "denied" (no cookies) and the Meta Pixel is not loaded.
 * Visitors elsewhere (Morocco, Latin America, Asia...) are tracked by default.
 */
(function () {
  'use strict';
  var C = window.TRACKING_CONFIG || {};
  var GA4 = (C.ga4 || '').trim();
  var ADS = (C.googleAds || '').trim();
  var META = (C.metaPixel || '').trim();
  if (!GA4 && !ADS && !META) return;

  var KEY = 'cm_consent_v1';
  var lang = (document.documentElement.lang || 'en').toLowerCase();

  function inEurope() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      return /^Europe\//.test(tz) || /^Atlantic\/(Canary|Madeira|Azores|Reykjavik|Faroe)$/.test(tz) || tz === 'Arctic/Longyearbyen';
    } catch (e) { return true; }
  }
  function getStored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function setStored(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  var stored = getStored();
  var needsBanner = !stored && inEurope();
  var granted = stored ? stored === 'granted' : !needsBanner;

  // ---------- Google (gtag.js with Consent Mode v2) ----------
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  var st = granted ? 'granted' : 'denied';
  gtag('consent', 'default', {
    ad_storage: st, ad_user_data: st, ad_personalization: st, analytics_storage: st,
    functionality_storage: 'granted', security_storage: 'granted', wait_for_update: 500
  });
  if (GA4 || ADS) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA4 || ADS);
    document.head.appendChild(s);
    gtag('js', new Date());
    if (GA4) gtag('config', GA4);
    if (ADS) gtag('config', ADS);
  }

  // ---------- Meta Pixel (only loaded with consent) ----------
  var metaLoaded = false;
  function loadMeta() {
    if (!META || metaLoaded) return;
    metaLoaded = true;
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq('init', META);
    window.fbq('track', 'PageView');
  }
  if (granted) loadMeta();

  function grant(yes) {
    setStored(yes ? 'granted' : 'denied');
    var v = yes ? 'granted' : 'denied';
    gtag('consent', 'update', { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v });
    if (yes) loadMeta();
  }
  // Lets a "cookie settings" link reopen the banner: <a href="#" onclick="cmCookies();return false">
  window.cmCookies = function () { showBanner(true); };
  // ...or any element with the attribute data-cm-cookies (used on the privacy pages)
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-cm-cookies]') : null;
    if (el) { e.preventDefault(); showBanner(true); }
  });

  // ---------- Page views on client-side navigation (Next.js) ----------
  // GA4 counts these itself (enhanced measurement); the Meta Pixel needs a PageView.
  var lastUrl = location.href;
  function onNav() {
    if (location.href === lastUrl) return;
    lastUrl = location.href;
    if (metaLoaded && window.fbq) window.fbq('track', 'PageView');
  }
  ['pushState', 'replaceState'].forEach(function (m) {
    var orig = history[m];
    if (!orig) return;
    history[m] = function () { var r = orig.apply(this, arguments); setTimeout(onNav, 0); return r; };
  });
  window.addEventListener('popstate', function () { setTimeout(onNav, 0); });

  // ---------- Events ----------
  var lastFire = {};
  function track(kind, params) {
    params = params || {};
    var now = Date.now();
    if (lastFire[kind] && now - lastFire[kind] < 1500) return; // double-click / double handler
    lastFire[kind] = now;
    var page = location.pathname;
    if (kind === 'lead') {
      if (GA4) gtag('event', 'generate_lead', { form_name: params.form || 'form', page_path: page });
      if (ADS && C.adsLeadLabel) gtag('event', 'conversion', { send_to: ADS + '/' + C.adsLeadLabel });
      if (metaLoaded && window.fbq) window.fbq('track', 'Lead', { content_name: params.form || 'form' });
    } else if (kind === 'whatsapp' || kind === 'phone' || kind === 'email') {
      if (GA4) gtag('event', kind + '_click', { page_path: page, link_location: params.where || '' });
      if (ADS && kind === 'whatsapp' && C.adsWhatsappLabel) gtag('event', 'conversion', { send_to: ADS + '/' + C.adsWhatsappLabel });
      if (ADS && kind !== 'whatsapp' && C.adsContactLabel) gtag('event', 'conversion', { send_to: ADS + '/' + C.adsContactLabel });
      if (metaLoaded && window.fbq) window.fbq('track', 'Contact', { content_name: kind });
    }
  }
  window.cmTrack = track;

  function kindOf(url) {
    url = String(url || '');
    if (/^(https?:)?\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com|chat\.whatsapp\.com)|^whatsapp:/i.test(url)) return 'whatsapp';
    if (/^tel:/i.test(url)) return 'phone';
    if (/^mailto:/i.test(url)) return 'email';
    return null;
  }
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var k = kindOf(a.getAttribute('href'));
    if (k) track(k, { where: a.className && String(a.className).indexOf('float') > -1 ? 'float' : '' });
  }, true);
  // Forms that open WhatsApp with window.open(...)
  var origOpen = window.open;
  window.open = function (url) {
    var k = kindOf(url);
    if (k) track(k, { where: 'form' });
    return origOpen.apply(window, arguments);
  };

  // ---------- Cookie banner ----------
  var TXT = {
    es: ['Usamos cookies para medir las visitas y mejorar nuestros anuncios.', 'Aceptar', 'Rechazar'],
    it: ['Usiamo i cookie per misurare le visite e migliorare i nostri annunci.', 'Accetta', 'Rifiuta'],
    fr: ['Nous utilisons des cookies pour mesurer les visites et améliorer nos publicités.', 'Accepter', 'Refuser'],
    de: ['Wir verwenden Cookies, um Besuche zu messen und unsere Werbung zu verbessern.', 'Akzeptieren', 'Ablehnen'],
    pl: ['Używamy plików cookie do mierzenia odwiedzin i ulepszania naszych reklam.', 'Akceptuję', 'Odrzucam'],
    pt: ['Usamos cookies para medir as visitas e melhorar os nossos anúncios.', 'Aceitar', 'Recusar'],
    ja: ['当サイトでは、アクセス解析と広告の改善のためにCookieを使用しています。', '同意する', '拒否する'],
    zh: ['我们使用 Cookie 来统计访问量并改进我们的广告。', '接受', '拒绝'],
    en: ['We use cookies to measure visits and improve our ads.', 'Accept', 'Decline']
  };
  var MORE = { es: 'Más información', it: 'Maggiori informazioni', fr: 'En savoir plus', de: 'Mehr erfahren', pl: 'Więcej informacji', pt: 'Saber mais', ja: '詳細', zh: '了解更多', en: 'Learn more' };

  function showBanner(force) {
    if (!force && !needsBanner) return;
    if (document.getElementById('cm-banner')) return;
    var code = lang.slice(0, 2);
    var t = TXT[code] || TXT.en;
    var more = MORE[code] || MORE.en;
    var css = document.createElement('style');
    css.textContent =
      '#cm-banner{position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483000;max-width:560px;margin:0 auto;' +
      'background:#fff;color:#222;border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.18);padding:14px 16px;' +
      'font:14px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;display:flex;flex-wrap:wrap;gap:10px;align-items:center}' +
      '#cm-banner p{margin:0;flex:1 1 260px}#cm-banner a{color:inherit;text-decoration:underline}' +
      '#cm-banner .cm-b{display:flex;gap:8px;margin-left:auto}' +
      '#cm-banner button{border:0;border-radius:999px;padding:9px 16px;font:inherit;font-weight:600;cursor:pointer}' +
      '#cm-banner .cm-y{background:#1f2a44;color:#fff}#cm-banner .cm-n{background:#eee;color:#222}';
    var box = document.createElement('div');
    box.id = 'cm-banner';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Cookies');
    var p = document.createElement('p');
    p.textContent = t[0] + ' ';
    if (C.privacyUrl) {
      var l = document.createElement('a');
      l.href = C.privacyUrl;
      l.textContent = more;
      p.appendChild(l);
    }
    var b = document.createElement('div');
    b.className = 'cm-b';
    var no = document.createElement('button');
    no.className = 'cm-n'; no.type = 'button'; no.textContent = t[2];
    var yes = document.createElement('button');
    yes.className = 'cm-y'; yes.type = 'button'; yes.textContent = t[1];
    no.onclick = function () { grant(false); box.remove(); };
    yes.onclick = function () { grant(true); box.remove(); };
    b.appendChild(no); b.appendChild(yes);
    box.appendChild(p); box.appendChild(b);
    document.head.appendChild(css);
    document.body.appendChild(box);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { showBanner(false); });
  else showBanner(false);
})();
