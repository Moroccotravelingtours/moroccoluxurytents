// Generador estático: node src/build.js  → crea la carpeta /site
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config, photos, activities, tents, packages } from "./data.js";
import { posts } from "./blog.js";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const out = path.join(root, "site");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

// ---------- textos de interfaz ----------
const T = {
  en: {
    lang: "en", locale: "en_US",
    nav: { home: "Home", camp: "The Camp", acts: "Activities", exp: "Experiences", contact: "Contact" },
    book: "Book now", whatsapp: "WhatsApp us", enquire: "Enquire", discover: "Discover", all: "See all activities",
    heroKicker: "Luxury desert camp · Merzouga · Erg Chebbi",
    heroTitle: "Sleep in luxury<br>under the Sahara stars",
    heroText: "Private luxury tents in the heart of the Erg Chebbi dunes, with quads, buggies, 4x4 tours, camels and unforgettable nights in the Moroccan desert.",
    introKicker: "Welcome to the Sahara",
    introTitle: "A luxury camp in the golden dunes of Merzouga",
    introText: ["Morocco Luxury Tents is a boutique desert camp set among the highest dunes of Erg Chebbi, the most beautiful sand sea of Morocco. Here, the silence of the Sahara meets the comfort of a five-star hotel.", "Every tent has its own private bathroom, real beds and a terrace facing the dunes. Our local Berber team, born in Merzouga, takes care of every detail: from the camel trek at sunset to the dinner by the fire and the most thrilling adventures in the desert."],
    stats: [["150 m", "high dunes of Erg Chebbi"], ["15+", "desert activities"], ["100%", "private & tailor-made"], ["24/7", "local team on site"]],
    campTitle: "Our luxury tents", campText: "Comfort of a hotel, soul of the desert.",
    amenTitle: "Included in your stay",
    amen: ["Private bathroom & hot shower", "King-size beds & premium linen", "Dinner & breakfast", "Berber music by the fire", "Free Wi-Fi in the lounge", "Transfers from Merzouga village"],
    actsKicker: "Adventure & culture", actsTitle: "Activities in the Sahara", actsText: "Quads, buggies, 4x4, motorbikes, camels and authentic encounters — all private and organised by our own local team.",
    expKicker: "Desert experiences", expTitle: "Our signature stays", expText: "Every stay is tailor-made. Tell us your dates and we prepare your perfect desert experience.",
    whyTitle: "Why Morocco Luxury Tents",
    why: [["Local Berber team", "We were born in Merzouga. We know every dune, every family and every secret of the desert."], ["Private & exclusive", "Private activities, small camp, personal attention — never mass tourism."], ["Safety first", "Modern vehicles, helmets, expert guides and 24/7 assistance."], ["Tailor-made", "Proposals, honeymoons, families, photographers, groups: we adapt everything."]],
    faqTitle: "Frequently asked questions",
    faq: [["How do I get to the camp?", "We pick you up in Merzouga village and take you to the camp by 4x4 or on a camel. We can also organise private transfers from Marrakech, Fes, Errachidia airport or any city in Morocco."], ["When is the best time to visit?", "From October to May the weather is perfect. Summer is hot during the day but the nights are wonderful, and it is the season of the traditional sand bath."], ["Can I book only activities without sleeping at the camp?", "Yes. All our activities — quads, buggies, 4x4, motorbikes, camels — can be booked separately."], ["What are your prices?", "Every stay is private and tailor-made, so we prepare a personalised quote. Write to us on WhatsApp and you will receive an answer quickly."]],
    ctaTitle: "Your night in the Sahara starts here", ctaText: "Write to us on WhatsApp or send your request — our team answers quickly.",
    duration: "Duration", level: "Level", highlights: "Highlights", related: "More activities",
    actCta: "Book this activity", actCtaText: "Private activity — price on request. Tell us your date and number of people.",
    contactTitle: "Contact & booking", contactText: "Tell us your dates, the number of guests and the activities you like. We will send you a personalised proposal.",
    form: { name: "Full name", email: "Email", phone: "WhatsApp / phone", dates: "Travel dates", guests: "Number of guests", interest: "Activities that interest you", message: "Your message", send: "Send request", thanks: "Thank you! We will reply very soon." },
    footer: "Luxury desert camp and activities in the Erg Chebbi dunes, Merzouga, Morocco.",
    rights: "All rights reserved.",
    blogKicker: "Travel guide", blogTitle: "Sahara travel guide & tips", blogText: "Practical advice from our local team in Merzouga to prepare your desert trip.", readMore: "Read more", blogPageTitle: "Merzouga & Sahara Travel Blog | Morocco Luxury Tents", blogPageDesc: "Travel tips for Merzouga and the Sahara: best time to visit, how to get there, which activities to choose and what to pack.",
    homeTitle: "Luxury Desert Camp in Merzouga | Morocco Luxury Tents",
    homeDesc: "Luxury desert camp in Merzouga, Erg Chebbi: private luxury tents, quad and buggy rides, 4x4 tours, camel treks, motorbikes and dinners in the Sahara dunes.",
    campPageTitle: "Luxury Tents in Merzouga — Our Desert Camp | Morocco Luxury Tents",
    campPageDesc: "Discover our luxury tents in the Erg Chebbi dunes of Merzouga: private bathrooms, king-size beds, dinner by the fire and the Sahara stars.",
    actsPageTitle: "Merzouga Activities: Quad, Buggy, 4x4, Camel | Morocco Luxury Tents",
    actsPageDesc: "All activities in Merzouga desert: quad biking, dune buggy, 4x4 tours, enduro motorbike, camel trek, sandboarding, stargazing and cultural tours.",
    contactPageTitle: "Contact & Booking | Morocco Luxury Tents Merzouga",
    contactPageDesc: "Book your luxury tent and desert activities in Merzouga. Contact us on WhatsApp or by email for a personalised proposal.",
  },
  es: {
    lang: "es", locale: "es_ES",
    nav: { home: "Inicio", camp: "El campamento", acts: "Actividades", exp: "Experiencias", contact: "Contacto" },
    book: "Reservar", whatsapp: "Escríbenos por WhatsApp", enquire: "Consultar", discover: "Descubrir", all: "Ver todas las actividades",
    heroKicker: "Campamento de lujo · Merzouga · Erg Chebbi",
    heroTitle: "Duerme en el lujo<br>bajo las estrellas del Sáhara",
    heroText: "Jaimas privadas de lujo en el corazón de las dunas de Erg Chebbi, con quads, buggies, tours en 4x4, dromedarios y noches inolvidables en el desierto de Marruecos.",
    introKicker: "Bienvenidos al Sáhara",
    introTitle: "Un campamento de lujo en las dunas doradas de Merzouga",
    introText: ["Morocco Luxury Tents es un campamento boutique situado entre las dunas más altas de Erg Chebbi, el mar de arena más bonito de Marruecos. Aquí, el silencio del Sáhara se une a la comodidad de un hotel de cinco estrellas.", "Cada jaima tiene su propio baño privado, camas de verdad y una terraza frente a las dunas. Nuestro equipo bereber, nacido en Merzouga, cuida cada detalle: desde el paseo en dromedario al atardecer hasta la cena junto al fuego y las aventuras más emocionantes del desierto."],
    stats: [["150 m", "de altura en las dunas de Erg Chebbi"], ["15+", "actividades en el desierto"], ["100%", "privado y a medida"], ["24/7", "equipo local en el campamento"]],
    campTitle: "Nuestras jaimas de lujo", campText: "La comodidad de un hotel, el alma del desierto.",
    amenTitle: "Incluido en tu estancia",
    amen: ["Baño privado y ducha caliente", "Camas king-size y ropa de cama premium", "Cena y desayuno", "Música bereber junto al fuego", "Wi-Fi gratis en el salón", "Traslado desde el pueblo de Merzouga"],
    actsKicker: "Aventura y cultura", actsTitle: "Actividades en el Sáhara", actsText: "Quads, buggies, 4x4, motos, dromedarios y encuentros auténticos: todo privado y organizado por nuestro propio equipo local.",
    expKicker: "Experiencias en el desierto", expTitle: "Nuestras estancias exclusivas", expText: "Cada estancia es a medida. Dinos tus fechas y preparamos tu experiencia perfecta en el desierto.",
    whyTitle: "Por qué Morocco Luxury Tents",
    why: [["Equipo bereber local", "Nacimos en Merzouga. Conocemos cada duna, cada familia y cada secreto del desierto."], ["Privado y exclusivo", "Actividades privadas, campamento pequeño y atención personal: nunca turismo de masas."], ["La seguridad primero", "Vehículos modernos, cascos, guías expertos y asistencia 24/7."], ["A medida", "Pedidas de mano, lunas de miel, familias, fotógrafos, grupos: lo adaptamos todo."]],
    faqTitle: "Preguntas frecuentes",
    faq: [["¿Cómo llego al campamento?", "Te recogemos en el pueblo de Merzouga y te llevamos al campamento en 4x4 o en dromedario. También organizamos traslados privados desde Marrakech, Fez, el aeropuerto de Errachidia o cualquier ciudad de Marruecos."], ["¿Cuál es la mejor época para ir?", "De octubre a mayo el clima es perfecto. En verano hace calor de día pero las noches son maravillosas, y es la temporada del baño de arena tradicional."], ["¿Puedo reservar solo actividades sin dormir en el campamento?", "Sí. Todas nuestras actividades —quads, buggies, 4x4, motos, dromedarios— se pueden reservar por separado."], ["¿Cuáles son vuestros precios?", "Cada estancia es privada y a medida, por eso preparamos un presupuesto personalizado. Escríbenos por WhatsApp y te respondemos enseguida."]],
    ctaTitle: "Tu noche en el Sáhara empieza aquí", ctaText: "Escríbenos por WhatsApp o envía tu solicitud: nuestro equipo responde rápido.",
    duration: "Duración", level: "Nivel", highlights: "Lo más destacado", related: "Más actividades",
    actCta: "Reservar esta actividad", actCtaText: "Actividad privada, precio bajo petición. Dinos tu fecha y el número de personas.",
    contactTitle: "Contacto y reservas", contactText: "Dinos tus fechas, el número de personas y las actividades que te gustan. Te enviaremos una propuesta personalizada.",
    form: { name: "Nombre completo", email: "Email", phone: "WhatsApp / teléfono", dates: "Fechas del viaje", guests: "Número de personas", interest: "Actividades que te interesan", message: "Tu mensaje", send: "Enviar solicitud", thanks: "¡Gracias! Te responderemos muy pronto." },
    footer: "Campamento de lujo y actividades en las dunas de Erg Chebbi, Merzouga, Marruecos.",
    rights: "Todos los derechos reservados.",
    blogKicker: "Guía de viaje", blogTitle: "Guía y consejos para el Sáhara", blogText: "Consejos prácticos de nuestro equipo local en Merzouga para preparar tu viaje al desierto.", readMore: "Leer más", blogPageTitle: "Blog de viaje de Merzouga y el Sáhara | Morocco Luxury Tents", blogPageDesc: "Consejos de viaje para Merzouga y el Sáhara: mejor época, cómo llegar, qué actividades elegir y qué llevar.",
    homeTitle: "Campamento de lujo en Merzouga | Morocco Luxury Tents",
    homeDesc: "Campamento de lujo en el desierto de Merzouga, Erg Chebbi: jaimas privadas, quads, buggies, tours en 4x4, dromedarios, motos y cenas en las dunas del Sáhara.",
    campPageTitle: "Jaimas de lujo en Merzouga: nuestro campamento | Morocco Luxury Tents",
    campPageDesc: "Descubre nuestras jaimas de lujo en las dunas de Erg Chebbi, Merzouga: baño privado, camas king-size, cena junto al fuego y las estrellas del Sáhara.",
    actsPageTitle: "Actividades en Merzouga: quad, buggy, 4x4, dromedario | Morocco Luxury Tents",
    actsPageDesc: "Todas las actividades en el desierto de Merzouga: quads, buggies, tours en 4x4, moto enduro, dromedarios, sandboard, estrellas y tours culturales.",
    contactPageTitle: "Contacto y reservas | Morocco Luxury Tents Merzouga",
    contactPageDesc: "Reserva tu jaima de lujo y tus actividades en Merzouga. Contáctanos por WhatsApp o email para una propuesta personalizada.",
  },
};

// rutas por idioma
const R = {
  en: { home: "/", camp: "/luxury-camp/", acts: "/activities/", act: s => `/activities/${s}/`, contact: "/contact/", blog: "/blog/", post: p => `/blog/${p.slug}/` },
  es: { home: "/es/", camp: "/es/campamento/", acts: "/es/actividades/", act: s => `/es/actividades/${s}/`, contact: "/es/contacto/", blog: "/es/blog/", post: p => `/es/blog/${p.slugEs}/` },
};

// ---------- utilidades ----------
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const unsplash = (id, w) => `https://unsplash.com/photos/${id}/download?force=true&w=${w}`;
function img(key, alt, w = 1200, cls = "", eager = false) {
  const p = photos[key];
  return `<img class="${cls}" src="/images/${p.file}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" onerror="if(!this.dataset.f){this.dataset.f=1;this.src='${unsplash(p.unsplash, w)}'}else{this.style.opacity=0}">`;
}
const wa = (lang, text) => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text || (lang === "es" ? "Hola, me gustaría información sobre el campamento de lujo en Merzouga." : "Hello, I would like information about the luxury camp in Merzouga."))}`;

const ICONS = {
  quad: '<path d="M5 17a3 3 0 1 0 0-.01M19 17a3 3 0 1 0 0-.01M8 17h8M7 11l2-4h5l3 4M4 13l3-2h11l2 2"/>',
  buggy: '<path d="M5 17a3 3 0 1 0 0-.01M19 17a3 3 0 1 0 0-.01M8 17h8M6 12l3-6h6l3 6M9 6l-1 6M15 6l1 6M4 12h16"/>',
  jeep: '<path d="M6 17a2 2 0 1 0 0-.01M18 17a2 2 0 1 0 0-.01M3 15V9l2-3h10l3 4h3v5M8 15h8M5 9h13"/>',
  moto: '<path d="M5 17a3 3 0 1 0 0-.01M19 17a3 3 0 1 0 0-.01M8 17l4-6h4l3 6M12 11l-2-3H7M15 8h3"/>',
  camel: '<path d="M3 20v-6l2-4 3 1 2-4 3 3 3-1 2 3 3 1v7M7 20v-5M17 20v-5M20 11l1-3"/>',
  board: '<path d="M4 18c4-1 9-5 13-11M3 21h18M15 5l3 3"/>',
  star: '<path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/>',
  dinner: '<path d="M7 3v8M5 3v4a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 2-2 6 0 8v10"/>',
  music: '<path d="M9 18V5l11-2v13M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3zM20 16a3 3 0 1 1-3-3 3 3 0 0 1 3 3z"/>',
  tent: '<path d="M2 20L12 4l10 16zM12 4v16M8 20l4-6 4 6"/>',
  fossil: '<path d="M12 12m-1 0a1 1 0 1 0 2 0 3 3 0 0 0-6 0 5 5 0 0 0 10 0 7 7 0 0 0-14 0 9 9 0 0 0 9 9"/>',
  sun: '<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  market: '<path d="M3 9l2-5h14l2 5M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0zM5 13v8h14v-8"/>',
  camera: '<path d="M3 8h4l2-3h6l2 3h4v12H3zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>',
  check: '<path d="M5 12l5 5L20 7"/>',
  wa: '<path d="M3 21l1.7-5A9 9 0 1 1 8 19.4zM9 8.5c0 4 2.5 6.5 6.5 6.5l1-1.6-2-1-1 1c-1.2-.5-2.4-1.7-2.9-2.9l1-1-1-2z"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  clock: '<path d="M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>',
  gauge: '<path d="M12 14l4-4M3.5 18a9 9 0 1 1 17 0z"/>',
};
const icon = (n, s = 24) => `<svg class="ico" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;

// ---------- layout ----------
function layout({ lang, title, desc, pathname, alt, body, schema, ogImage = "hero" }) {
  const t = T[lang], r = R[lang];
  const other = lang === "en" ? "es" : "en";
  const url = config.domain + pathname;
  const navLink = (href, label) => `<a href="${href}"${href === pathname ? ' aria-current="page"' : ""}>${label}</a>`;
  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="${lang}" href="${url}">
<link rel="alternate" hreflang="${other}" href="${config.domain + alt}">
<link rel="alternate" hreflang="x-default" href="${config.domain + (lang === "en" ? pathname : alt)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${t.locale}">
<meta property="og:image" content="${unsplash(photos[ogImage].unsplash, 1200)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#1c140d">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
${(schema || []).map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n")}
</head>
<body>
<header class="site-header" id="top">
  <div class="wrap header-inner">
    <a class="logo" href="${r.home}" aria-label="${config.brand}">
      <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true"><path d="M4 32 L20 8 L36 32 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M20 8 V32 M14 32 L20 23 L26 32" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="31" cy="9" r="2" fill="currentColor"/></svg>
      <span><b>Morocco</b> Luxury Tents</span>
    </a>
    <nav class="nav" id="nav">
      ${navLink(r.home, t.nav.home)}
      ${navLink(r.camp, t.nav.camp)}
      ${navLink(r.acts, t.nav.acts)}
      <a href="${r.home}#experiences">${t.nav.exp}</a>
      ${navLink(r.blog, "Blog")}
      ${navLink(r.contact, t.nav.contact)}
      <a class="lang" href="${alt}" hreflang="${other}" lang="${other}">${other.toUpperCase()}</a>
      <a class="btn btn-gold btn-sm" href="${wa(lang)}" target="_blank" rel="noopener">${t.book}</a>
    </nav>
    <button class="menu-btn" aria-label="Menu" aria-controls="nav" aria-expanded="false" onclick="var n=document.getElementById('nav');var o=n.classList.toggle('open');this.setAttribute('aria-expanded',o)">${icon("menu")}</button>
  </div>
</header>
<main>
${body}
</main>
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <div class="logo logo-footer"><span><b>Morocco</b> Luxury Tents</span></div>
      <p>${t.footer}</p>
    </div>
    <div>
      <h4>${t.nav.acts}</h4>
      <ul>${activities.filter(a => a.featured).map(a => `<li><a href="${r.act(a.slug)}">${a[lang].name.split(" (")[0].split(" in the")[0].split(" en las")[0]}</a></li>`).join("")}</ul>
    </div>
    <div>
      <h4>${t.nav.contact}</h4>
      <ul>
        <li><a href="${wa(lang)}" target="_blank" rel="noopener">WhatsApp ${config.whatsappDisplay}</a></li>
        <li><a href="mailto:${config.email}">${config.email}</a></li>
        <li>${config.address}</li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-bottom">© ${new Date().getFullYear()} ${config.brand} · ${t.rights}</div>
</footer>
<a class="wa-float" href="${wa(lang)}" target="_blank" rel="noopener" aria-label="${t.whatsapp}">${icon("wa", 28)}</a>
<script>
var h=document.querySelector('.site-header');function s(){h.classList.toggle('scrolled',window.scrollY>40)}s();addEventListener('scroll',s,{passive:true});
var io='IntersectionObserver'in window&&new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal').forEach(function(el){io?io.observe(el):el.classList.add('in')});
</script>
</body>
</html>`;
}

// ---------- bloques ----------
const card = (a, lang) => {
  const d = a[lang];
  return `<a class="act-card reveal" href="${R[lang].act(a.slug)}">
  <div class="act-img">${img(a.photo, d.name, 800)}</div>
  <div class="act-body">
    <span class="act-icon">${icon(a.icon, 22)}</span>
    <h3>${d.name}</h3>
    <p>${d.short}</p>
    <span class="meta">${icon("clock", 16)} ${d.duration}</span>
  </div>
</a>`;
};

const postCard = (p, lang) => `<a class="act-card reveal" href="${R[lang].post(p)}">
  <div class="act-img">${img(p.photo, p[lang].title, 800)}</div>
  <div class="act-body"><h3>${p[lang].title}</h3><p>${p[lang].intro}</p><span class="meta">${T[lang].readMore} →</span></div>
</a>`;

const cta = (lang) => {
  const t = T[lang];
  return `<section class="cta">
  <div class="cta-bg">${img("camel2", "Sahara", 1800)}</div>
  <div class="wrap cta-inner reveal">
    <h2>${t.ctaTitle}</h2>
    <p>${t.ctaText}</p>
    <div class="btns"><a class="btn btn-gold" href="${wa(lang)}" target="_blank" rel="noopener">${icon("wa", 20)} ${t.whatsapp}</a><a class="btn btn-ghost" href="${R[lang].contact}">${t.nav.contact}</a></div>
  </div>
</section>`;
};

const pageHero = (photo, kicker, title, text) => `<section class="page-hero">
  <div class="hero-bg">${img(photo, title.replace(/<[^>]+>/g, ""), 1920, "", true)}</div>
  <div class="wrap page-hero-inner">
    <p class="kicker">${kicker}</p>
    <h1>${title}</h1>
    ${text ? `<p class="lead">${text}</p>` : ""}
  </div>
</section>`;

const businessSchema = lang => ({
  "@context": "https://schema.org",
  "@type": "Campground",
  name: config.brand,
  url: config.domain + R[lang].home,
  description: T[lang].homeDesc,
  telephone: "+" + config.whatsapp,
  email: config.email,
  image: unsplash(photos.hero.unsplash, 1200),
  priceRange: "$$$",
  address: { "@type": "PostalAddress", addressLocality: "Merzouga", addressRegion: "Drâa-Tafilalet", postalCode: "52202", addressCountry: "MA" },
  geo: { "@type": "GeoCoordinates", latitude: 31.1, longitude: -3.98 },
  amenityFeature: T[lang].amen.map(n => ({ "@type": "LocationFeatureSpecification", name: n, value: true })),
});
const faqSchema = lang => ({
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: T[lang].faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

// ---------- páginas ----------
const pages = [];
const add = (pathname, html) => pages.push([pathname, html]);

for (const lang of ["en", "es"]) {
  const t = T[lang], r = R[lang], o = R[lang === "en" ? "es" : "en"];

  // HOME
  add(r.home, layout({
    lang, title: t.homeTitle, desc: t.homeDesc, pathname: r.home, alt: o.home,
    schema: [businessSchema(lang), faqSchema(lang)],
    body: `
<section class="hero">
  <div class="hero-bg">${img("hero", t.heroKicker, 2000, "", true)}</div>
  <div class="wrap hero-inner">
    <p class="kicker">${t.heroKicker}</p>
    <h1>${t.heroTitle}</h1>
    <p class="lead">${t.heroText}</p>
    <div class="btns">
      <a class="btn btn-gold" href="${wa(lang)}" target="_blank" rel="noopener">${icon("wa", 20)} ${t.book}</a>
      <a class="btn btn-ghost" href="${r.acts}">${t.nav.acts}</a>
    </div>
  </div>
  <a class="scroll-hint" href="#intro" aria-label="Scroll"></a>
</section>

<section class="section intro" id="intro">
  <div class="wrap split">
    <div class="reveal">
      <p class="kicker kdark">${t.introKicker}</p>
      <h2>${t.introTitle}</h2>
      ${t.introText.map(p => `<p>${p}</p>`).join("")}
      <a class="link-arrow" href="${r.camp}">${t.nav.camp} →</a>
    </div>
    <div class="split-img reveal">${img("dunes", t.introTitle, 1200)}</div>
  </div>
  <div class="wrap stats reveal">${t.stats.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join("")}</div>
</section>

<section class="section sand">
  <div class="wrap">
    <div class="head reveal"><p class="kicker kdark">${t.actsKicker}</p><h2>${t.actsTitle}</h2><p>${t.actsText}</p></div>
    <div class="grid-3">${activities.filter(a => a.featured).concat(activities.filter(a => !a.featured).slice(0, 1)).map(a => card(a, lang)).join("")}</div>
    <div class="center"><a class="btn btn-dark" href="${r.acts}">${t.all}</a></div>
  </div>
</section>

<section class="section dark">
  <div class="wrap">
    <div class="head reveal"><p class="kicker">${t.nav.camp}</p><h2>${t.campTitle}</h2><p>${t.campText}</p></div>
    <div class="grid-3">${tents.map(x => `<article class="tent reveal"><div class="tent-img">${img(x.photo, x[lang].name, 900)}</div><h3>${x[lang].name}</h3><p>${x[lang].text}</p><div class="tags">${x[lang].tags.map(g => `<span>${g}</span>`).join("")}</div></article>`).join("")}</div>
    <div class="center"><a class="btn btn-ghost" href="${r.camp}">${t.discover}</a></div>
  </div>
</section>

<section class="section" id="experiences">
  <div class="wrap">
    <div class="head reveal"><p class="kicker kdark">${t.expKicker}</p><h2>${t.expTitle}</h2><p>${t.expText}</p></div>
    <div class="grid-3">${packages.map(p => `<article class="pack reveal"><div class="pack-img">${img(p.photo, p[lang].name, 900)}</div><div class="pack-body"><h3>${p[lang].name}</h3><ul>${p[lang].items.map(i => `<li>${icon("check", 16)} ${i}</li>`).join("")}</ul><a class="btn btn-dark btn-sm" href="${wa(lang, (lang === "es" ? "Hola, me interesa la experiencia: " : "Hello, I am interested in: ") + p[lang].name)}" target="_blank" rel="noopener">${t.enquire}</a></div></article>`).join("")}</div>
  </div>
</section>

<section class="section sand">
  <div class="wrap">
    <div class="head reveal"><h2>${t.whyTitle}</h2></div>
    <div class="grid-4">${t.why.map(([h, p], i) => `<div class="why reveal"><span class="num">0${i + 1}</span><h3>${h}</h3><p>${p}</p></div>`).join("")}</div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="head reveal"><p class="kicker kdark">${t.blogKicker}</p><h2>${t.blogTitle}</h2><p>${t.blogText}</p></div>
    <div class="grid-3">${posts.slice(0, 3).map(p => postCard(p, lang)).join("")}</div>
    <div class="center"><a class="btn btn-dark" href="${r.blog}">Blog</a></div>
  </div>
</section>

<section class="section sand">
  <div class="wrap narrow">
    <div class="head reveal"><h2>${t.faqTitle}</h2></div>
    ${t.faq.map(([q, a]) => `<details class="faq reveal"><summary>${q}</summary><p>${a}</p></details>`).join("")}
  </div>
</section>
${cta(lang)}`,
  }));

  // CAMP
  add(r.camp, layout({
    lang, title: t.campPageTitle, desc: t.campPageDesc, pathname: r.camp, alt: o.camp, schema: [businessSchema(lang)],
    body: `${pageHero("dunes", t.heroKicker, t.campTitle, t.campText)}
<section class="section">
  <div class="wrap split">
    <div class="reveal"><p class="kicker kdark">${t.introKicker}</p><h2>${t.introTitle}</h2>${t.introText.map(p => `<p>${p}</p>`).join("")}</div>
    <div class="split-img reveal">${img("dunes2", t.introTitle, 1200)}</div>
  </div>
</section>
<section class="section sand">
  <div class="wrap">
    ${tents.map((x, i) => `<article class="tent-row reveal${i % 2 ? " rev" : ""}"><div class="tent-row-img">${img(x.photo, x[lang].name, 1200)}</div><div class="tent-row-body"><h2>${x[lang].name}</h2><p>${x[lang].text}</p><div class="tags">${x[lang].tags.map(g => `<span>${g}</span>`).join("")}</div><a class="btn btn-dark btn-sm" href="${wa(lang, (lang === "es" ? "Hola, me interesa: " : "Hello, I am interested in: ") + x[lang].name)}" target="_blank" rel="noopener">${t.enquire}</a></div></article>`).join("")}
  </div>
</section>
<section class="section dark">
  <div class="wrap">
    <div class="head reveal"><h2>${t.amenTitle}</h2></div>
    <ul class="amen reveal">${t.amen.map(a => `<li>${icon("check", 18)} ${a}</li>`).join("")}</ul>
  </div>
</section>
${cta(lang)}`,
  }));

  // ACTIVITIES LIST
  add(r.acts, layout({
    lang, title: t.actsPageTitle, desc: t.actsPageDesc, pathname: r.acts, alt: o.acts, ogImage: "quad",
    schema: [{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: activities.map((a, i) => ({ "@type": "ListItem", position: i + 1, url: config.domain + r.act(a.slug), name: a[lang].name })) }],
    body: `${pageHero("quad", t.actsKicker, t.actsTitle, t.actsText)}
<section class="section sand">
  <div class="wrap"><div class="grid-3">${activities.map(a => card(a, lang)).join("")}</div></div>
</section>
${cta(lang)}`,
  }));

  // ACTIVITY PAGES
  activities.forEach((a, idx) => {
    const d = a[lang];
    const related = [1, 2, 3].map(k => activities[(idx + k) % activities.length]);
    add(r.act(a.slug), layout({
      lang, title: `${d.name} | Merzouga — ${config.brand}`, desc: `${d.short} ${t.actCtaText}`.slice(0, 160), pathname: r.act(a.slug), alt: o.act(a.slug), ogImage: a.photo,
      schema: [{ "@context": "https://schema.org", "@type": "TouristTrip", name: d.name, description: d.short, touristType: d.level, itinerary: { "@type": "Place", name: "Erg Chebbi, Merzouga, Morocco" }, provider: { "@type": "Organization", name: config.brand, url: config.domain } },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: t.nav.home, item: config.domain + r.home }, { "@type": "ListItem", position: 2, name: t.nav.acts, item: config.domain + r.acts }, { "@type": "ListItem", position: 3, name: d.name }] }],
      body: `${pageHero(a.photo, `<a href="${r.acts}">${t.nav.acts}</a> · Merzouga`, d.name, d.short)}
<section class="section">
  <div class="wrap act-layout">
    <div class="act-main reveal">
      <div class="facts"><div>${icon("clock", 20)}<span>${t.duration}</span><b>${d.duration}</b></div><div>${icon("gauge", 20)}<span>${t.level}</span><b>${d.level}</b></div></div>
      ${d.body.map(p => `<p>${p}</p>`).join("")}
      <h2>${t.highlights}</h2>
      <ul class="checks">${d.highlights.map(h => `<li>${icon("check", 18)} ${h}</li>`).join("")}</ul>
    </div>
    <aside class="book-box reveal">
      <span class="act-icon big">${icon(a.icon, 30)}</span>
      <h3>${t.actCta}</h3>
      <p>${t.actCtaText}</p>
      <a class="btn btn-gold full" href="${wa(lang, (lang === "es" ? "Hola, quiero reservar: " : "Hello, I would like to book: ") + d.name)}" target="_blank" rel="noopener">${icon("wa", 20)} WhatsApp</a>
      <a class="btn btn-dark full" href="${r.contact}">${t.nav.contact}</a>
    </aside>
  </div>
</section>
<section class="section sand">
  <div class="wrap"><div class="head"><h2>${t.related}</h2></div><div class="grid-3">${related.map(x => card(x, lang)).join("")}</div></div>
</section>
${cta(lang)}`,
    }));
  });

  // BLOG
  add(r.blog, layout({
    lang, title: t.blogPageTitle, desc: t.blogPageDesc, pathname: r.blog, alt: o.blog, ogImage: "camel",
    schema: [{ "@context": "https://schema.org", "@type": "Blog", name: t.blogTitle, url: config.domain + r.blog, blogPost: posts.map(p => ({ "@type": "BlogPosting", headline: p[lang].title, url: config.domain + r.post(p) })) }],
    body: `${pageHero("camel", t.blogKicker, t.blogTitle, t.blogText)}
<section class="section sand"><div class="wrap"><div class="grid-3">${posts.map(p => postCard(p, lang)).join("")}</div></div></section>
${cta(lang)}`,
  }));
  posts.forEach((p, i) => {
    const d = p[lang];
    const others = posts.filter(x => x !== p).slice(0, 3);
    add(r.post(p), layout({
      lang, title: `${d.title} | ${config.brand}`, desc: d.desc, pathname: r.post(p), alt: o.post(p), ogImage: p.photo,
      schema: [{ "@context": "https://schema.org", "@type": "BlogPosting", headline: d.title, description: d.desc, datePublished: p.date, dateModified: p.date, inLanguage: lang, image: unsplash(photos[p.photo].unsplash, 1200), mainEntityOfPage: config.domain + r.post(p), author: { "@type": "Organization", name: config.brand }, publisher: { "@type": "Organization", name: config.brand, url: config.domain } },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: t.nav.home, item: config.domain + r.home }, { "@type": "ListItem", position: 2, name: "Blog", item: config.domain + r.blog }, { "@type": "ListItem", position: 3, name: d.title }] }],
      body: `${pageHero(p.photo, `<a href="${r.blog}">Blog</a> · Merzouga`, d.title, d.intro)}
<section class="section"><article class="wrap narrow prose reveal">${d.body}
<div class="post-cta"><h3>${t.ctaTitle}</h3><p>${t.ctaText}</p><a class="btn btn-gold" href="${wa(lang)}" target="_blank" rel="noopener">${icon("wa", 20)} ${t.whatsapp}</a></div>
</article></section>
<section class="section sand"><div class="wrap"><div class="head"><h2>Blog</h2></div><div class="grid-3">${others.map(x => postCard(x, lang)).join("")}</div></div></section>`,
    }));
  });

  // CONTACT
  const f = t.form;
  add(r.contact, layout({
    lang, title: t.contactPageTitle, desc: t.contactPageDesc, pathname: r.contact, alt: o.contact, schema: [businessSchema(lang)],
    body: `${pageHero("camel3", t.heroKicker, t.contactTitle, t.contactText)}
<section class="section">
  <div class="wrap contact-grid">
    <form class="form reveal" name="booking-${lang}" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="${r.contact}?sent=1">
      <input type="hidden" name="form-name" value="booking-${lang}">
      <p hidden><label>Bot <input name="bot-field"></label></p>
      <div class="row"><label>${f.name}<input name="name" required autocomplete="name"></label><label>${f.email}<input type="email" name="email" required autocomplete="email"></label></div>
      <div class="row"><label>${f.phone}<input name="phone" autocomplete="tel"></label><label>${f.guests}<input type="number" min="1" name="guests"></label></div>
      <label>${f.dates}<input name="dates" placeholder="${lang === "es" ? "ej. 12–14 marzo" : "e.g. 12–14 March"}"></label>
      <fieldset><legend>${f.interest}</legend><div class="chips">${activities.map(a => `<label class="chip"><input type="checkbox" name="activities" value="${esc(a[lang].name)}"><span>${a[lang].name.split(" (")[0]}</span></label>`).join("")}</div></fieldset>
      <label>${f.message}<textarea name="message" rows="5"></textarea></label>
      <button class="btn btn-gold" type="submit">${f.send}</button>
      <p class="thanks" id="thanks" hidden>${f.thanks}</p>
    </form>
    <aside class="contact-side reveal">
      <a class="btn btn-gold full" href="${wa(lang)}" target="_blank" rel="noopener">${icon("wa", 20)} ${t.whatsapp}</a>
      <ul>
        <li><b>WhatsApp</b><a href="${wa(lang)}" target="_blank" rel="noopener">${config.whatsappDisplay}</a></li>
        <li><b>Email</b><a href="mailto:${config.email}">${config.email}</a></li>
        <li><b>${lang === "es" ? "Dirección" : "Address"}</b>${config.address}</li>
      </ul>
      <iframe title="Merzouga map" loading="lazy" src="https://www.google.com/maps?q=Erg+Chebbi+Merzouga&z=11&output=embed"></iframe>
    </aside>
  </div>
</section>
<script>if(location.search.indexOf('sent=1')>-1){document.getElementById('thanks').hidden=false}</script>`,
  }));
}

// ---------- escribir ----------
for (const [p, html] of pages) {
  const file = path.join(out, p, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}
fs.copyFileSync(path.join(root, "src/styles.css"), path.join(out, "styles.css"));
fs.mkdirSync(path.join(out, "images"), { recursive: true });
fs.writeFileSync(path.join(out, "images/README.txt"), "Pon aquí tus fotos con estos nombres (JPG, ~1600 px de ancho):\n" + Object.values(photos).map(p => "- " + p.file).join("\n") + "\nSi una foto no existe, la web usa una foto libre de Unsplash.\n");
fs.writeFileSync(path.join(out, "favicon.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#1c140d"/><path d="M6 31 L20 9 L34 31 Z M20 9 V31 M14.5 31 L20 23 L25.5 31" fill="none" stroke="#c9a25a" stroke-width="2"/></svg>`);
fs.writeFileSync(path.join(out, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${config.domain}/sitemap.xml\n`);
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(([p]) => `  <url><loc>${config.domain + p}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(out, "404.html"), layout({ lang: "en", title: "Page not found | " + config.brand, desc: "Page not found", pathname: "/404.html", alt: "/es/", body: pageHero("dunes", "404", "Lost in the dunes?", `<a class="btn btn-gold" href="/">Home</a>`) }));
console.log("Pages:", pages.length);
