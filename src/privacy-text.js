// Privacy & cookie policy text (shared by tourdemarruecos, luxurymoroccopackages and moroccoluxurytents).
// privacyText(lang, { site, email }) -> { title, intro, updated, sections: [{ h, p: [..] }], cookiesBtn }
// The cookie-settings button needs the attribute data-cm-cookies (handled by tracking.js).

const COMPANY = 'STE CORAZON DE MARRUECOS SARL';
const ADDRESS = 'Ksar El Khamlia, Merzouga, Errachidia, Morocco (RC 16757 Errachidia, ICE 003244926000017)';
const UPDATED = '2026-11-24';

const T = {
  es: (s, e) => ({
    title: 'Política de privacidad y cookies',
    intro: `Esta política explica qué datos personales recoge ${s} y cómo los usamos.`,
    updated: `Última actualización: ${UPDATED}`,
    cookiesBtn: 'Configurar cookies',
    sections: [
      { h: 'Responsable', p: [`${s} es una web de ${COMPANY}, ${ADDRESS.replace('Morocco', 'Marruecos')}. Contacto: ${e}.`] },
      { h: 'Qué datos recogemos', p: ['Los datos que nos envías cuando nos escribes por el formulario, WhatsApp o email: nombre, email, teléfono, fechas, número de viajeros y los detalles de tu viaje.', 'Datos de navegación (páginas vistas, dispositivo, país aproximado) mediante cookies, solo si las aceptas cuando la ley lo exige.'] },
      { h: 'Para qué los usamos', p: ['Para responder a tu solicitud, preparar tu presupuesto y organizar tu viaje.', 'Para medir las visitas de la web y la eficacia de nuestros anuncios (Google Analytics, Google Ads y Meta).'] },
      { h: 'Con quién los compartimos', p: ['Solo con los proveedores necesarios para tu viaje (alojamientos, guías, transporte) y con los servicios técnicos que usamos: Netlify (alojamiento de la web), Google y Meta (estadísticas y publicidad) y WhatsApp. No vendemos tus datos.'] },
      { h: 'Cookies', p: ['Usamos cookies de Google Analytics, Google Ads y el Pixel de Meta para estadísticas y publicidad. A los visitantes de Europa les pedimos su consentimiento antes de activarlas. Puedes cambiar tu elección en cualquier momento con el botón de abajo o borrando las cookies de tu navegador.'] },
      { h: 'Cuánto tiempo los guardamos', p: ['Los datos de tu solicitud, el tiempo necesario para gestionar tu viaje y cumplir nuestras obligaciones legales. Los datos de las cookies, como máximo 26 meses.'] },
      { h: 'Tus derechos', p: [`Puedes pedir acceso, rectificación, supresión u oposición al uso de tus datos, y retirar tu consentimiento, escribiendo a ${e}. Tratamos los datos según la ley marroquí 09-08 y, para los visitantes de la Unión Europea, el Reglamento General de Protección de Datos (RGPD).`] },
    ],
  }),
  en: (s, e) => ({
    title: 'Privacy and cookie policy',
    intro: `This policy explains what personal data ${s} collects and how we use it.`,
    updated: `Last updated: ${UPDATED}`,
    cookiesBtn: 'Cookie settings',
    sections: [
      { h: 'Who we are', p: [`${s} is a website of ${COMPANY}, ${ADDRESS}. Contact: ${e}.`] },
      { h: 'What data we collect', p: ['The data you send us through the form, WhatsApp or email: name, email, phone, dates, number of travellers and the details of your trip.', 'Browsing data (pages viewed, device, approximate country) through cookies, only if you accept them where the law requires it.'] },
      { h: 'Why we use it', p: ['To answer your request, prepare your quote and organise your trip.', 'To measure visits to the website and the performance of our ads (Google Analytics, Google Ads and Meta).'] },
      { h: 'Who we share it with', p: ['Only with the suppliers needed for your trip (hotels, guides, transport) and with the technical services we use: Netlify (website hosting), Google and Meta (statistics and advertising) and WhatsApp. We never sell your data.'] },
      { h: 'Cookies', p: ['We use Google Analytics, Google Ads and Meta Pixel cookies for statistics and advertising. Visitors from Europe are asked for consent before they are activated. You can change your choice at any time with the button below or by deleting the cookies in your browser.'] },
      { h: 'How long we keep it', p: ['Request data: as long as needed to handle your trip and meet our legal obligations. Cookie data: 26 months at most.'] },
      { h: 'Your rights', p: [`You can ask to access, correct or delete your data, object to its use, or withdraw your consent by writing to ${e}. We process data under Moroccan Law 09-08 and, for visitors from the European Union, the General Data Protection Regulation (GDPR).`] },
    ],
  }),
  de: (s, e) => ({
    title: 'Datenschutz- und Cookie-Richtlinie',
    intro: `Diese Richtlinie erklärt, welche personenbezogenen Daten ${s} erhebt und wie wir sie verwenden.`,
    updated: `Zuletzt aktualisiert: ${UPDATED}`,
    cookiesBtn: 'Cookie-Einstellungen',
    sections: [
      { h: 'Verantwortlicher', p: [`${s} ist eine Website von ${COMPANY}, ${ADDRESS.replace('Morocco', 'Marokko')}. Kontakt: ${e}.`] },
      { h: 'Welche Daten wir erheben', p: ['Die Daten, die Sie uns über das Formular, WhatsApp oder E-Mail senden: Name, E-Mail, Telefon, Reisedaten, Anzahl der Reisenden und Einzelheiten Ihrer Reise.', 'Nutzungsdaten (aufgerufene Seiten, Gerät, ungefähres Land) über Cookies – nur mit Ihrer Einwilligung, wo das Gesetz sie verlangt.'] },
      { h: 'Wofür wir sie verwenden', p: ['Um Ihre Anfrage zu beantworten, Ihr Angebot zu erstellen und Ihre Reise zu organisieren.', 'Um die Besuche der Website und die Wirksamkeit unserer Werbung zu messen (Google Analytics, Google Ads und Meta).'] },
      { h: 'An wen wir sie weitergeben', p: ['Nur an die für Ihre Reise nötigen Partner (Unterkünfte, Guides, Transport) und an die technischen Dienste, die wir nutzen: Netlify (Hosting), Google und Meta (Statistik und Werbung) sowie WhatsApp. Wir verkaufen Ihre Daten nicht.'] },
      { h: 'Cookies', p: ['Wir verwenden Cookies von Google Analytics, Google Ads und dem Meta-Pixel für Statistik und Werbung. Besucher aus Europa werden vor der Aktivierung um ihre Einwilligung gebeten. Sie können Ihre Wahl jederzeit über die Schaltfläche unten oder durch Löschen der Cookies in Ihrem Browser ändern.'] },
      { h: 'Speicherdauer', p: ['Anfragedaten: so lange, wie es für Ihre Reise und unsere gesetzlichen Pflichten nötig ist. Cookie-Daten: höchstens 26 Monate.'] },
      { h: 'Ihre Rechte', p: [`Sie können Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen, der Nutzung widersprechen oder Ihre Einwilligung widerrufen: schreiben Sie an ${e}. Wir verarbeiten Daten nach dem marokkanischen Gesetz 09-08 und, für Besucher aus der EU, nach der Datenschutz-Grundverordnung (DSGVO).`] },
    ],
  }),
  pl: (s, e) => ({
    title: 'Polityka prywatności i plików cookie',
    intro: `Ta polityka wyjaśnia, jakie dane osobowe zbiera ${s} i jak z nich korzystamy.`,
    updated: `Ostatnia aktualizacja: ${UPDATED}`,
    cookiesBtn: 'Ustawienia cookie',
    sections: [
      { h: 'Administrator', p: [`${s} to strona firmy ${COMPANY}, ${ADDRESS.replace('Morocco', 'Maroko')}. Kontakt: ${e}.`] },
      { h: 'Jakie dane zbieramy', p: ['Dane, które przesyłasz nam przez formularz, WhatsApp lub e-mail: imię i nazwisko, e-mail, telefon, daty, liczbę podróżnych i szczegóły podróży.', 'Dane o przeglądaniu (odwiedzone strony, urządzenie, przybliżony kraj) za pomocą plików cookie – tylko za Twoją zgodą, gdy wymaga tego prawo.'] },
      { h: 'W jakim celu', p: ['Aby odpowiedzieć na Twoje zapytanie, przygotować ofertę i zorganizować podróż.', 'Aby mierzyć odwiedziny strony i skuteczność naszych reklam (Google Analytics, Google Ads i Meta).'] },
      { h: 'Komu je przekazujemy', p: ['Tylko dostawcom potrzebnym do Twojej podróży (hotele, przewodnicy, transport) oraz usługom technicznym, z których korzystamy: Netlify (hosting), Google i Meta (statystyki i reklama) oraz WhatsApp. Nie sprzedajemy Twoich danych.'] },
      { h: 'Pliki cookie', p: ['Używamy plików cookie Google Analytics, Google Ads i Piksela Meta do statystyk i reklamy. Odwiedzających z Europy prosimy o zgodę przed ich włączeniem. Możesz zmienić wybór w każdej chwili przyciskiem poniżej lub usuwając pliki cookie w przeglądarce.'] },
      { h: 'Jak długo je przechowujemy', p: ['Dane zapytania: tak długo, jak to potrzebne do obsługi podróży i spełnienia obowiązków prawnych. Dane z plików cookie: maksymalnie 26 miesięcy.'] },
      { h: 'Twoje prawa', p: [`Możesz zażądać dostępu do danych, ich sprostowania lub usunięcia, sprzeciwić się ich wykorzystaniu lub wycofać zgodę, pisząc na ${e}. Przetwarzamy dane zgodnie z marokańską ustawą 09-08 oraz, w przypadku osób z Unii Europejskiej, z RODO.`] },
    ],
  }),
  ja: (s, e) => ({
    title: 'プライバシーポリシー・Cookieポリシー',
    intro: `本ポリシーは、${s} が収集する個人情報とその利用方法について説明します。`,
    updated: `最終更新日：${UPDATED}`,
    cookiesBtn: 'Cookie設定',
    sections: [
      { h: '運営者', p: [`${s} は ${COMPANY}（${ADDRESS}）が運営しています。お問い合わせ：${e}`] },
      { h: '収集する情報', p: ['フォーム、WhatsApp、メールでお送りいただく情報：お名前、メールアドレス、電話番号、日程、人数、旅行の詳細。', 'Cookieによる閲覧情報（閲覧ページ、端末、おおよその国）。法律で必要な場合は、同意いただいたときのみ収集します。'] },
      { h: '利用目的', p: ['お問い合わせへの回答、お見積もりの作成、旅行の手配のため。', 'サイトの訪問数と広告の効果を測定するため（Google アナリティクス、Google 広告、Meta）。'] },
      { h: '第三者への提供', p: ['旅行に必要な提供者（宿泊施設、ガイド、交通機関）と、当社が利用する技術サービス（Netlify〈ホスティング〉、Google と Meta〈統計・広告〉、WhatsApp）にのみ提供します。個人情報を販売することはありません。'] },
      { h: 'Cookie', p: ['統計と広告のために Google アナリティクス、Google 広告、Meta ピクセルの Cookie を使用します。ヨーロッパからの訪問者には、有効にする前に同意をお願いしています。下のボタン、またはブラウザの Cookie を削除することで、いつでも設定を変更できます。'] },
      { h: '保存期間', p: ['お問い合わせ情報：旅行の手配と法的義務に必要な期間。Cookie のデータ：最長26か月。'] },
      { h: 'お客様の権利', p: [`ご自身の情報の開示、訂正、削除、利用停止、同意の撤回をご希望の場合は ${e} までご連絡ください。当社はモロッコ法 09-08、および EU からの訪問者については一般データ保護規則（GDPR）に従って情報を取り扱います。`] },
    ],
  }),
  'zh-cn': (s, e) => ({
    title: '隐私与 Cookie 政策',
    intro: `本政策说明 ${s} 收集哪些个人信息以及我们如何使用这些信息。`,
    updated: `最后更新：${UPDATED}`,
    cookiesBtn: 'Cookie 设置',
    sections: [
      { h: '运营方', p: [`${s} 由 ${COMPANY}（${ADDRESS}）运营。联系方式：${e}`] },
      { h: '我们收集的信息', p: ['您通过表单、WhatsApp 或电子邮件发送给我们的信息：姓名、邮箱、电话、日期、旅客人数及行程详情。', '通过 Cookie 收集的浏览信息（浏览的页面、设备、大致国家），在法律要求时仅在您同意后收集。'] },
      { h: '使用目的', p: ['回复您的咨询、准备报价并安排您的行程。', '统计网站访问量并衡量我们广告的效果（Google Analytics、Google Ads 和 Meta）。'] },
      { h: '信息共享', p: ['仅与您行程所需的供应商（酒店、导游、交通）以及我们使用的技术服务共享：Netlify（网站托管）、Google 和 Meta（统计与广告）以及 WhatsApp。我们绝不出售您的信息。'] },
      { h: 'Cookie', p: ['我们使用 Google Analytics、Google Ads 和 Meta Pixel 的 Cookie 进行统计和广告。对于来自欧洲的访客，我们会在启用前征求同意。您可以随时通过下方按钮或删除浏览器中的 Cookie 来更改选择。'] },
      { h: '保存期限', p: ['咨询信息：在安排行程和履行法律义务所需的期间内保存。Cookie 数据：最长 26 个月。'] },
      { h: '您的权利', p: [`您可以发送邮件至 ${e}，要求查阅、更正或删除您的信息，反对其使用或撤回同意。我们依据摩洛哥第 09-08 号法律处理信息，对于来自欧盟的访客，同时遵守《通用数据保护条例》（GDPR）。`] },
    ],
  }),
  'zh-tw': (s, e) => ({
    title: '隱私與 Cookie 政策',
    intro: `本政策說明 ${s} 蒐集哪些個人資料以及我們如何使用這些資料。`,
    updated: `最後更新：${UPDATED}`,
    cookiesBtn: 'Cookie 設定',
    sections: [
      { h: '經營者', p: [`${s} 由 ${COMPANY}（${ADDRESS}）經營。聯絡方式：${e}`] },
      { h: '我們蒐集的資料', p: ['您透過表單、WhatsApp 或電子郵件傳送給我們的資料：姓名、電子郵件、電話、日期、旅客人數及行程細節。', '透過 Cookie 蒐集的瀏覽資料（瀏覽的頁面、裝置、大致國家），在法律要求時僅於您同意後蒐集。'] },
      { h: '使用目的', p: ['回覆您的詢問、準備報價並安排您的行程。', '統計網站造訪量並衡量我們廣告的成效（Google Analytics、Google Ads 和 Meta）。'] },
      { h: '資料分享', p: ['僅與您行程所需的供應商（飯店、導遊、交通）以及我們使用的技術服務分享：Netlify（網站代管）、Google 和 Meta（統計與廣告）以及 WhatsApp。我們絕不出售您的資料。'] },
      { h: 'Cookie', p: ['我們使用 Google Analytics、Google Ads 和 Meta Pixel 的 Cookie 進行統計和廣告。對於來自歐洲的訪客，我們會在啟用前徵求同意。您可以隨時透過下方按鈕或刪除瀏覽器中的 Cookie 來變更選擇。'] },
      { h: '保存期限', p: ['詢問資料：在安排行程和履行法律義務所需的期間內保存。Cookie 資料：最長 26 個月。'] },
      { h: '您的權利', p: [`您可以寄信至 ${e}，要求查閱、更正或刪除您的資料，反對其使用或撤回同意。我們依據摩洛哥第 09-08 號法律處理資料，對於來自歐盟的訪客，同時遵守《一般資料保護規則》（GDPR）。`] },
    ],
  }),
};
T['es-mx'] = T.es;

export function privacyText(lang, { site, email }) {
  const f = T[lang] || T[String(lang).slice(0, 2)] || T.en;
  return f(site, email);
}
