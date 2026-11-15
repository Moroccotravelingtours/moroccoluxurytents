// ============================================================
//  CONFIGURACIÓN PRINCIPAL — cambia aquí teléfono, email, etc.
// ============================================================
export const config = {
  domain: "https://moroccoluxurytents.com",
  brand: "Morocco Luxury Tents",
  whatsapp: "212661998266",            // sin + ni espacios
  whatsappDisplay: "+212 661 998 266",
  email: "info@moroccoluxurytents.com",
  address: "Erg Chebbi dunes, Merzouga 52202, Morocco",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
};

// Fotos: el sitio intenta primero el archivo local /images/<archivo>.
// Si no existe, usa la foto libre de Unsplash indicada (licencia Unsplash).
// Para poner tus fotos: copia tu foto en /images con el mismo nombre.
export const photos = {
  hero:      { file: "hero.jpg",      unsplash: "sMV0Rv4UKKY" },
  dunes:     { file: "dunes.jpg",     unsplash: "yWbxfKurMH0" },
  dunes2:    { file: "dunes-2.jpg",   unsplash: "FVv0P5O6PC0" },
  camel:     { file: "camel.jpg",     unsplash: "NhlKx6Uvm3E" },
  camel2:    { file: "camel-2.jpg",   unsplash: "pVx6kKTJz9Y" },
  camel3:    { file: "camel-3.jpg",   unsplash: "nqqH7np9JGk" },
  camel4:    { file: "camel-4.jpg",   unsplash: "oXNUbXuEpbQ" },
  camel5:    { file: "camel-5.jpg",   unsplash: "pZh7PCw9gEo" },
  quad:      { file: "quad.jpg",      unsplash: "Zsqbptb_j-Y" },
  quad2:     { file: "quad-2.jpg",    unsplash: "Sbt5ZEVPFFg" },
  jeep:      { file: "4x4.jpg",       unsplash: "cqY3LKBqidM" },
  moto:      { file: "motorbike.jpg", unsplash: "WZPjP5QO8js" },
  moto2:     { file: "motorbike-2.jpg", unsplash: "QXlggc7lO8c" },
  buggy:     { file: "buggy.jpg",     unsplash: "vwEzotHfXZc" },
  sandboard: { file: "sandboarding.jpg", unsplash: "qcRQ2Ehx6Q8" },
  stars:     { file: "stars.jpg",     unsplash: "ogMsEsdsOXA" },
  stars2:    { file: "stars-2.jpg",   unsplash: "XaidrBZfEwU" },
  souk:      { file: "souk.jpg",      unsplash: "l50OANxqQXE" },
  spices:    { file: "spices.jpg",    unsplash: "tDKIGOPfB-0" },
  transfer:  { file: "transfer.jpg",  unsplash: "cqY3LKBqidM" },
  restaurant:{ file: "restaurant.jpg", unsplash: "XaidrBZfEwU" },
  restaurant2:{ file: "restaurant-2.jpg", unsplash: "XaidrBZfEwU" },
  // Fotos del campamento (fotos reales)
  tent1:     { file: "tent-luxury.jpg",  unsplash: "yWbxfKurMH0" },
  tent2:     { file: "tent-family-3.jpg", unsplash: "sMV0Rv4UKKY" },
  tent3:     { file: "tent-triple.jpg",  unsplash: "FVv0P5O6PC0" },
  tent4:     { file: "tent-suite-6.jpg", unsplash: "sMV0Rv4UKKY" },
  dinner:    { file: "dinner.jpg",       unsplash: "XaidrBZfEwU" },
};

// ============================================================
//  ACTIVIDADES
// ============================================================
export const activities = [
  {
    slug: "quad-atv-merzouga",
    photo: "quad",
    icon: "quad",
    featured: true,
    en: {
      name: "Quad Biking (ATV) in the Erg Chebbi Dunes",
      short: "Ride powerful quads across the highest golden dunes of the Moroccan Sahara.",
      duration: "1 h · 2 h · sunset ride",
      level: "All levels",
      body: [
        "Feel the adrenaline of riding a modern quad bike across the dunes of Erg Chebbi, where the sand rises up to 150 metres. Our guides lead you on safe, scenic tracks with stops on the crests for photos and silence.",
        "Choose a one-hour introduction, a two-hour loop around the great dune, or the magical sunset ride that ends with mint tea on top of the dunes. Helmets, goggles and scarves are included.",
      ],
      highlights: ["Recent 250–450 cc quads, automatic gearbox", "Private guide for your group", "Helmet, goggles and Berber scarf included", "Sunset stop with mint tea", "Pick-up at the camp"],
    },
    es: {
      name: "Quads (ATV) en las dunas de Erg Chebbi",
      short: "Conduce quads potentes por las dunas doradas más altas del Sáhara marroquí.",
      duration: "1 h · 2 h · ruta al atardecer",
      level: "Todos los niveles",
      body: [
        "Siente la adrenalina de conducir un quad moderno por las dunas de Erg Chebbi, donde la arena alcanza hasta 150 metros de altura. Nuestros guías te llevan por pistas seguras y espectaculares, con paradas en las crestas para fotos y silencio.",
        "Elige una iniciación de una hora, una vuelta de dos horas alrededor de la gran duna o la mágica ruta al atardecer, que termina con un té a la menta en lo alto de las dunas. Casco, gafas y turbante incluidos.",
      ],
      highlights: ["Quads recientes de 250–450 cc, cambio automático", "Guía privado para tu grupo", "Casco, gafas y turbante bereber incluidos", "Parada al atardecer con té a la menta", "Recogida en el campamento"],
    },
  },
  {
    slug: "buggy-merzouga",
    photo: "buggy",
    icon: "buggy",
    featured: true,
    en: {
      name: "Dune Buggy Adventure (Polaris & Can-Am)",
      short: "Drive a 2- or 4-seater buggy through the dunes — perfect for couples and families.",
      duration: "1 h · 2 h · half day",
      level: "Driving licence required for the driver",
      body: [
        "Sit side by side with your partner, friends or children and drive a powerful off-road buggy through the sand sea of Erg Chebbi. Buggies are safer and more comfortable than quads, with roll cage and seat belts.",
        "The half-day route crosses the dunes to the black desert, the nomad camps and the old mining villages — an unforgettable off-road day in the Sahara.",
      ],
      highlights: ["2 and 4-seater buggies", "Roll cage, seat belts and helmets", "Ideal for couples and families", "Private guide on a quad or 4x4", "Photos and video stops"],
    },
    es: {
      name: "Aventura en buggy por las dunas (Polaris y Can-Am)",
      short: "Conduce un buggy de 2 o 4 plazas por las dunas: perfecto para parejas y familias.",
      duration: "1 h · 2 h · medio día",
      level: "El conductor necesita carné de conducir",
      body: [
        "Siéntate junto a tu pareja, amigos o hijos y conduce un potente buggy todoterreno por el mar de arena de Erg Chebbi. Los buggies son más seguros y cómodos que los quads, con jaula antivuelco y cinturones.",
        "La ruta de medio día cruza las dunas hasta el desierto negro, los campamentos nómadas y las antiguas aldeas mineras: un día todoterreno inolvidable en el Sáhara.",
      ],
      highlights: ["Buggies de 2 y 4 plazas", "Jaula antivuelco, cinturones y cascos", "Ideal para parejas y familias", "Guía privado en quad o 4x4", "Paradas para fotos y vídeo"],
    },
  },
  {
    slug: "4x4-desert-tour-merzouga",
    photo: "jeep",
    icon: "jeep",
    featured: true,
    en: {
      name: "Private 4x4 Tour Around the Erg Chebbi Desert",
      short: "A full day by 4x4: nomads, Khamlia village, the desert lake, fossils and the black desert.",
      duration: "Half day · full day",
      level: "Easy — for everyone",
      body: [
        "Discover everything around Merzouga in a private Toyota Land Cruiser with an expert local driver. This is the best way to understand the desert and the people who live in it.",
        "The tour visits a nomad family for Berber tea, the Gnawa village of Khamlia with its live music, the seasonal lake Dayet Srji with its flamingos, the old Mifis mines, the black desert and the fossil fields. Lunch in a local house or a picnic in the dunes.",
      ],
      highlights: ["Private Land Cruiser with local driver", "Nomad family visit and Berber tea", "Gnawa music in Khamlia", "Desert lake, black desert and fossils", "Lunch or picnic included"],
    },
    es: {
      name: "Tour privado en 4x4 alrededor del desierto de Erg Chebbi",
      short: "Un día completo en 4x4: nómadas, Khamlia, el lago del desierto, fósiles y el desierto negro.",
      duration: "Medio día · día completo",
      level: "Fácil: para todos",
      body: [
        "Descubre todo lo que rodea Merzouga en un Toyota Land Cruiser privado con un conductor local experto. Es la mejor forma de entender el desierto y a la gente que vive en él.",
        "El tour visita a una familia nómada para tomar té bereber, el pueblo gnawa de Khamlia con su música en directo, el lago estacional Dayet Srji con sus flamencos, las antiguas minas de Mifis, el desierto negro y los campos de fósiles. Almuerzo en una casa local o pícnic en las dunas.",
      ],
      highlights: ["Land Cruiser privado con conductor local", "Visita a familia nómada y té bereber", "Música gnawa en Khamlia", "Lago del desierto, desierto negro y fósiles", "Almuerzo o pícnic incluido"],
    },
  },
  {
    slug: "enduro-motorbike-merzouga",
    photo: "moto2",
    icon: "moto",
    featured: true,
    en: {
      name: "Enduro & Off-Road Motorbike in the Sahara",
      short: "KTM enduro bikes and guided tracks for riders who want the real Dakar feeling.",
      duration: "2 h · half day · full day",
      level: "Riding experience required",
      body: [
        "Merzouga is one of the legendary stages of desert rallies. Ride a KTM enduro or trail motorbike with an experienced guide through sand, pistes and dunes, adapted to your level.",
        "Beginners can train on soft sand around the camp; experienced riders can push further to the black desert, Ouzina or Taouz. Full protective gear available.",
      ],
      highlights: ["KTM enduro and trail bikes", "Routes adapted to your level", "Helmet, boots and protection available", "Expert rally-experienced guide", "Support vehicle on long routes"],
    },
    es: {
      name: "Moto enduro y todoterreno en el Sáhara",
      short: "Motos enduro KTM y pistas guiadas para quien quiere vivir la sensación del Dakar.",
      duration: "2 h · medio día · día completo",
      level: "Se requiere experiencia en moto",
      body: [
        "Merzouga es una de las etapas legendarias de los rallies del desierto. Conduce una moto enduro o trail KTM con un guía experimentado por arena, pistas y dunas, adaptado a tu nivel.",
        "Los principiantes pueden practicar en arena blanda cerca del campamento; los expertos pueden llegar al desierto negro, Ouzina o Taouz. Equipo de protección completo disponible.",
      ],
      highlights: ["Motos enduro y trail KTM", "Rutas adaptadas a tu nivel", "Casco, botas y protecciones disponibles", "Guía experto con experiencia en rallies", "Vehículo de asistencia en rutas largas"],
    },
  },
  {
    slug: "camel-trek-sunset-merzouga",
    photo: "camel",
    icon: "camel",
    featured: true,
    en: {
      name: "Sunset & Sunrise Camel Trek",
      short: "The timeless way to cross the dunes — with a Berber cameleer, at golden hour.",
      duration: "1 h 30 · 2 h",
      level: "Easy — for everyone",
      body: [
        "Nothing is more iconic than a camel caravan crossing the dunes of Erg Chebbi at sunset. Your Berber cameleer leads the way while the sand changes from gold to red and purple.",
        "Climb the dune on foot for the best view, then return to the camp for dinner. Prefer the early morning? The sunrise trek is quieter and just as magical.",
      ],
      highlights: ["Private or small-group caravan", "Berber cameleer guide", "Sunset or sunrise", "Photo stop on the dune crest", "Can be combined with dinner in the dunes"],
    },
    es: {
      name: "Paseo en dromedario al atardecer y al amanecer",
      short: "La forma eterna de cruzar las dunas: con un camellero bereber, a la hora dorada.",
      duration: "1 h 30 · 2 h",
      level: "Fácil: para todos",
      body: [
        "Nada es más icónico que una caravana de dromedarios cruzando las dunas de Erg Chebbi al atardecer. Tu camellero bereber abre el camino mientras la arena pasa del dorado al rojo y al violeta.",
        "Sube la duna a pie para tener la mejor vista y vuelve al campamento para la cena. ¿Prefieres la mañana? El paseo al amanecer es más tranquilo e igual de mágico.",
      ],
      highlights: ["Caravana privada o en grupo reducido", "Camellero bereber", "Al atardecer o al amanecer", "Parada para fotos en la cresta", "Se puede combinar con cena en las dunas"],
    },
  },
  {
    slug: "sandboarding-merzouga",
    photo: "sandboard",
    icon: "board",
    en: {
      name: "Sandboarding on the Great Dunes",
      short: "Surf down the golden slopes of Erg Chebbi — fun for kids and adults.",
      duration: "1 h · 2 h",
      level: "All levels",
      body: [
        "Grab a board and slide down the soft dunes right next to the camp. Our team shows you the basics — standing up for the brave, sitting down for the kids.",
        "Combine it with your quad, buggy or camel trek for a full afternoon of desert fun.",
      ],
      highlights: ["Boards and wax included", "Easy slopes and big dunes", "Perfect for families", "Next to the camp"],
    },
    es: {
      name: "Sandboard en las grandes dunas",
      short: "Desliza por las laderas doradas de Erg Chebbi: diversión para niños y adultos.",
      duration: "1 h · 2 h",
      level: "Todos los niveles",
      body: [
        "Coge una tabla y deslízate por las dunas suaves junto al campamento. Nuestro equipo te enseña lo básico: de pie para los valientes, sentados para los niños.",
        "Combínalo con el quad, el buggy o el dromedario para una tarde completa de diversión en el desierto.",
      ],
      highlights: ["Tablas y cera incluidas", "Pendientes fáciles y grandes dunas", "Perfecto para familias", "Junto al campamento"],
    },
  },
  {
    slug: "stargazing-sahara",
    photo: "stars",
    icon: "star",
    en: {
      name: "Stargazing Night in the Sahara",
      short: "One of the darkest skies on Earth: the Milky Way above the dunes.",
      duration: "1 h 30 after dinner",
      level: "Easy — for everyone",
      body: [
        "Far from any city light, the Sahara sky above Merzouga is filled with thousands of stars. After dinner we walk to a quiet dune with blankets, cushions and hot tea.",
        "Our guide shows you the constellations and the nomad stories behind them. On request, a telescope session and night-sky photography.",
      ],
      highlights: ["Blankets, cushions and tea on the dune", "Constellations explained by a local guide", "Night photography tips", "Telescope on request"],
    },
    es: {
      name: "Noche de estrellas en el Sáhara",
      short: "Uno de los cielos más oscuros del planeta: la Vía Láctea sobre las dunas.",
      duration: "1 h 30 después de la cena",
      level: "Fácil: para todos",
      body: [
        "Lejos de cualquier luz, el cielo del Sáhara sobre Merzouga se llena de miles de estrellas. Después de la cena caminamos a una duna tranquila con mantas, cojines y té caliente.",
        "Nuestro guía te muestra las constelaciones y las historias nómadas que las acompañan. Bajo petición, sesión con telescopio y fotografía nocturna.",
      ],
      highlights: ["Mantas, cojines y té en la duna", "Constelaciones explicadas por un guía local", "Consejos de fotografía nocturna", "Telescopio bajo petición"],
    },
  },
  {
    slug: "private-dinner-dunes",
    photo: "dinner",
    icon: "dinner",
    en: {
      name: "Private Dinner in the Dunes",
      short: "A candle-lit table for two in the middle of the sand — ideal for proposals and honeymoons.",
      duration: "Evening",
      level: "Romantic",
      body: [
        "We set a private table on a dune with lanterns, carpets and candles. A Moroccan dinner — tagine, couscous, grilled meats and desserts — is served just for you under the stars.",
        "Planning a marriage proposal, a honeymoon or an anniversary? We take care of flowers, music, a photographer and every detail.",
      ],
      highlights: ["Private table with lanterns and carpets", "Moroccan gourmet menu", "Marriage proposals and anniversaries", "Live music and photographer on request"],
    },
    es: {
      name: "Cena privada en las dunas",
      short: "Una mesa con velas para dos en medio de la arena: ideal para pedidas de mano y lunas de miel.",
      duration: "Noche",
      level: "Romántico",
      body: [
        "Montamos una mesa privada sobre una duna con farolillos, alfombras y velas. Se os sirve una cena marroquí —tajín, cuscús, carnes a la parrilla y postres— solo para vosotros, bajo las estrellas.",
        "¿Preparas una pedida de mano, una luna de miel o un aniversario? Nos encargamos de las flores, la música, el fotógrafo y cada detalle.",
      ],
      highlights: ["Mesa privada con farolillos y alfombras", "Menú gourmet marroquí", "Pedidas de mano y aniversarios", "Música en directo y fotógrafo bajo petición"],
    },
  },
  {
    slug: "gnawa-music-khamlia",
    photo: "stars2",
    icon: "music",
    en: {
      name: "Gnawa Music in Khamlia Village",
      short: "Live Gnawa rhythms and mint tea in the famous village of Khamlia.",
      duration: "1 h 30",
      level: "Cultural",
      body: [
        "Khamlia is a small village south of Merzouga, home to the Gnawa community and their hypnotic music of drums and iron castanets.",
        "Sit with the musicians, share mint tea and learn the history of this unique culture. Our camp can also host a private Gnawa evening around the fire.",
      ],
      highlights: ["Live Gnawa performance", "Mint tea with the musicians", "History of the Gnawa people", "Private evening at the camp on request"],
    },
    es: {
      name: "Música gnawa en el pueblo de Khamlia",
      short: "Ritmos gnawa en directo y té a la menta en el famoso pueblo de Khamlia.",
      duration: "1 h 30",
      level: "Cultural",
      body: [
        "Khamlia es un pequeño pueblo al sur de Merzouga, hogar de la comunidad gnawa y de su música hipnótica de tambores y castañuelas de hierro.",
        "Siéntate con los músicos, comparte un té a la menta y conoce la historia de esta cultura única. El campamento también puede organizar una velada gnawa privada alrededor del fuego.",
      ],
      highlights: ["Actuación gnawa en directo", "Té a la menta con los músicos", "Historia del pueblo gnawa", "Velada privada en el campamento bajo petición"],
    },
  },
  {
    slug: "nomad-family-visit",
    photo: "camel3",
    icon: "tent",
    en: {
      name: "Visit a Nomad Family",
      short: "Share bread and tea with a Berber nomad family living in the desert.",
      duration: "1 h · 2 h",
      level: "Cultural",
      body: [
        "A respectful and authentic encounter with a nomad family living in their traditional tent. Watch how bread is baked in the sand and how life is organised in the desert.",
        "Part of every visit goes directly to the family. Can be done by 4x4, quad, buggy or camel.",
      ],
      highlights: ["Authentic nomad tent", "Bread baked in the sand and tea", "Local guide as translator", "Fair and respectful visit"],
    },
    es: {
      name: "Visita a una familia nómada",
      short: "Comparte pan y té con una familia nómada bereber que vive en el desierto.",
      duration: "1 h · 2 h",
      level: "Cultural",
      body: [
        "Un encuentro respetuoso y auténtico con una familia nómada en su jaima tradicional. Verás cómo se hornea el pan en la arena y cómo se organiza la vida en el desierto.",
        "Parte de cada visita va directamente a la familia. Se puede hacer en 4x4, quad, buggy o dromedario.",
      ],
      highlights: ["Jaima nómada auténtica", "Pan horneado en la arena y té", "Guía local como traductor", "Visita justa y respetuosa"],
    },
  },
  {
    slug: "fossils-minerals-tour",
    photo: "dunes",
    icon: "fossil",
    en: {
      name: "Fossils & Minerals Geological Tour",
      short: "Trilobites, ammonites and minerals — the Tafilalet is a paradise for geology lovers.",
      duration: "Half day · full day",
      level: "Easy",
      body: [
        "The region around Merzouga and Erfoud is one of the richest fossil areas in the world: 400-million-year-old trilobites, orthoceras and ammonites lie in the rock.",
        "Visit the fossil sites, a traditional workshop where marble fossils are cut and polished, and the old mines of Mifis. A must for families and collectors.",
      ],
      highlights: ["Real fossil sites in the desert", "Fossil workshop in Erfoud", "Old mines of Mifis", "Expert local guide"],
    },
    es: {
      name: "Tour geológico de fósiles y minerales",
      short: "Trilobites, amonites y minerales: el Tafilalet es un paraíso para los amantes de la geología.",
      duration: "Medio día · día completo",
      level: "Fácil",
      body: [
        "La región de Merzouga y Erfoud es una de las zonas de fósiles más ricas del mundo: trilobites, ortoceras y amonites de 400 millones de años están en la roca.",
        "Visita los yacimientos, un taller tradicional donde se cortan y pulen los fósiles de mármol y las antiguas minas de Mifis. Imprescindible para familias y coleccionistas.",
      ],
      highlights: ["Yacimientos reales en el desierto", "Taller de fósiles en Erfoud", "Antiguas minas de Mifis", "Guía local experto"],
    },
  },
  {
    slug: "sand-bath-merzouga",
    photo: "dunes2",
    icon: "sun",
    en: {
      name: "Traditional Sand Bath",
      short: "The ancestral Merzouga wellness ritual: buried in the warm Sahara sand.",
      duration: "Morning · summer season",
      level: "Wellness",
      body: [
        "Every summer, people travel to Merzouga for the traditional sand bath, believed by locals to relieve joint and muscle pain. You are buried up to the neck in the hot sand for a few minutes, then rest in a shaded tent with tea.",
        "Organised with a local specialist, best from June to September. Please ask your doctor if you have any health condition.",
      ],
      highlights: ["Ancestral local tradition", "With a local specialist", "Rest tent and tea afterwards", "June to September"],
    },
    es: {
      name: "Baño de arena tradicional",
      short: "El ritual ancestral de bienestar de Merzouga: enterrado en la arena caliente del Sáhara.",
      duration: "Mañana · temporada de verano",
      level: "Bienestar",
      body: [
        "Cada verano, muchas personas viajan a Merzouga para el baño de arena tradicional, que según la gente local alivia los dolores de articulaciones y músculos. Te entierran hasta el cuello en la arena caliente unos minutos y luego descansas en una jaima con té.",
        "Organizado con un especialista local, mejor de junio a septiembre. Consulta a tu médico si tienes algún problema de salud.",
      ],
      highlights: ["Tradición local ancestral", "Con un especialista local", "Jaima de descanso y té", "De junio a septiembre"],
    },
  },
  {
    slug: "rissani-market-tour",
    photo: "souk",
    icon: "market",
    en: {
      name: "Rissani Souk & Ksar Tour",
      short: "The historic market town of the Tafilalet: spices, donkeys' parking and old kasbahs.",
      duration: "Half day",
      level: "Cultural",
      body: [
        "Rissani, cradle of the Alaouite dynasty, hosts one of the most authentic markets in southern Morocco — famous for its 'donkey parking', dates and spices.",
        "Visit the souk, the ancient Ksar Abbar and the mausoleum of Moulay Ali Cherif, then taste the famous 'Berber pizza' (madfouna).",
      ],
      highlights: ["Authentic local souk", "Ksar and mausoleum visit", "Madfouna (Berber pizza) tasting", "Private car and guide"],
    },
    es: {
      name: "Zoco y ksar de Rissani",
      short: "La histórica ciudad mercado del Tafilalet: especias, el 'parking de burros' y antiguas kasbahs.",
      duration: "Medio día",
      level: "Cultural",
      body: [
        "Rissani, cuna de la dinastía alauí, acoge uno de los mercados más auténticos del sur de Marruecos, famoso por su 'parking de burros', sus dátiles y sus especias.",
        "Visita el zoco, el antiguo Ksar Abbar y el mausoleo de Moulay Ali Cherif, y prueba la famosa 'pizza bereber' (madfouna).",
      ],
      highlights: ["Zoco local auténtico", "Visita al ksar y al mausoleo", "Degustación de madfouna (pizza bereber)", "Coche privado y guía"],
    },
  },
  {
    slug: "sunrise-photography-tour",
    photo: "hero",
    icon: "camera",
    en: {
      name: "Sunrise Photography & Drone Tour",
      short: "The best light of the Sahara, with a guide who knows every dune.",
      duration: "2 h at sunrise",
      level: "All levels",
      body: [
        "We take you before dawn to the best viewpoints of Erg Chebbi for the soft morning light, the shadows on the dunes and the camel caravans.",
        "Ideal for photographers, influencers and couples who want unique pictures. A professional photographer can join on request.",
      ],
      highlights: ["Best viewpoints at sunrise", "By 4x4, quad or on foot", "Professional photographer on request", "Coffee and breakfast in the dunes"],
    },
    es: {
      name: "Tour de fotografía al amanecer",
      short: "La mejor luz del Sáhara, con un guía que conoce cada duna.",
      duration: "2 h al amanecer",
      level: "Todos los niveles",
      body: [
        "Te llevamos antes del amanecer a los mejores miradores de Erg Chebbi para la luz suave de la mañana, las sombras en las dunas y las caravanas de dromedarios.",
        "Ideal para fotógrafos, influencers y parejas que quieren fotos únicas. Bajo petición, puede acompañaros un fotógrafo profesional.",
      ],
      highlights: ["Los mejores miradores al amanecer", "En 4x4, quad o a pie", "Fotógrafo profesional bajo petición", "Café y desayuno en las dunas"],
    },
  },
];

// ============================================================
//  JAIMAS / TIENDAS
// ============================================================
export const tents = [
  {
    photo: "tent4",
    en: { name: "Desert Suite", text: "Our largest tent: a double bed and two single beds, a lounge with carved Berber chairs and leather poufs, a writing desk and a spacious private bathroom with shower and stone floor. Air-conditioned.", tags: ["Up to 4 guests", "Lounge & desk", "Air conditioning"] },
    es: { name: "Suite del desierto", text: "Nuestra jaima más grande: cama doble y dos camas individuales, salón con sillas bereberes talladas y pufs de cuero, escritorio y un amplio baño privado con ducha y suelo de piedra. Con aire acondicionado.", tags: ["Hasta 4 personas", "Salón y escritorio", "Aire acondicionado"] },
  },
  {
    photo: "tent1",
    en: { name: "Luxury Tent", text: "Spacious Berber tent with a double bed and an extra bed, a lounge corner and a large private bathroom: rain shower, double washbasin, toilet and hair dryer. Air-conditioned for summer and winter.", tags: ["2–3 guests", "Private bathroom", "Air conditioning"] },
    es: { name: "Jaima de lujo", text: "Jaima bereber amplia con cama doble y cama adicional, rincón de salón y un gran baño privado: ducha de lluvia, doble lavabo, inodoro y secador de pelo. Con aire acondicionado para verano e invierno.", tags: ["2–3 personas", "Baño privado", "Aire acondicionado"] },
  },
  {
    photo: "tent2",
    en: { name: "Family Tent", text: "A warm tent with a double bed and a single bed, handmade wooden headboards, Berber textiles and its own bathroom. Perfect for families or friends travelling together.", tags: ["Up to 3–4 guests", "Private bathroom", "Families"] },
    es: { name: "Jaima familiar", text: "Una jaima acogedora con cama doble y cama individual, cabeceros de madera artesanales, textiles bereberes y baño propio. Perfecta para familias o amigos que viajan juntos.", tags: ["Hasta 3–4 personas", "Baño privado", "Familias"] },
  },
  {
    photo: "tent3",
    en: { name: "Triple Tent", text: "Three comfortable single beds, Moroccan rugs, a private washbasin area and bathroom. Ideal for friends, small groups or children travelling with parents.", tags: ["3 guests", "Single beds", "Private bathroom"] },
    es: { name: "Jaima triple", text: "Tres cómodas camas individuales, alfombras marroquíes, zona de lavabo y baño privado. Ideal para amigos, grupos pequeños o niños que viajan con sus padres.", tags: ["3 personas", "Camas individuales", "Baño privado"] },
  },
];

// Galería del campamento (fotos reales)
export const gallery = ["tent-suite.jpg", "tent-suite-3.jpg", "tent-bathroom-view.jpg", "tent-suite-4.jpg", "tent-family.jpg", "tent-beds-ac.jpg", "bath-shower.jpg", "restaurant.jpg", "bath-double-sink.jpg", "tent-group.jpg", "restaurant-2.jpg", "bath-sink-onyx.jpg", "bathroom-3.jpg", "tent-bed-ac.jpg", "bath-toiletries.jpg", "tent-blankets.jpg", "restaurant-3.jpg", "tent-suite-2.jpg", "tent-suite-5.jpg", "4x4-2.jpg", "4x4-4.jpg"];

// ============================================================
//  EXPERIENCIAS (paquetes, sin precio)
// ============================================================
export const packages = [
  {
    photo: "camel4",
    en: { name: "Sahara Classic — 1 Night", items: ["Sunset camel trek", "Luxury tent with private bathroom", "Dinner & breakfast", "Berber music by the fire"] },
    es: { name: "Sáhara clásico — 1 noche", items: ["Paseo en dromedario al atardecer", "Jaima de lujo con baño privado", "Cena y desayuno", "Música bereber junto al fuego"] },
  },
  {
    photo: "quad",
    en: { name: "Desert Adventure — 2 Nights", items: ["Quad or buggy ride", "Private 4x4 tour of Erg Chebbi", "Camel trek & sandboarding", "Full board at the camp"] },
    es: { name: "Aventura en el desierto — 2 noches", items: ["Ruta en quad o buggy", "Tour privado en 4x4 por Erg Chebbi", "Dromedario y sandboard", "Pensión completa en el campamento"] },
  },
  {
    photo: "dinner",
    en: { name: "Romantic Sahara — Honeymoon", items: ["Luxury tent with private bathroom", "Private dinner in the dunes", "Sunrise camel trek for two", "Flowers, cake & photographer"] },
    es: { name: "Sáhara romántico — luna de miel", items: ["Jaima de lujo con baño privado", "Cena privada en las dunas", "Dromedario al amanecer para dos", "Flores, tarta y fotógrafo"] },
  },
];

// ============================================================
//  TRASLADOS
// ============================================================
export const transfers = {
  airports: [
    ["Errachidia (Moulay Ali Cherif)", "≈ 2 h"],
    ["Ouarzazate", "≈ 5 h"],
    ["Marrakech (Menara)", "≈ 9–10 h"],
    ["Fes (Saïss)", "≈ 7–8 h"],
    ["Casablanca (Mohammed V)", "≈ 10–11 h"],
    ["Agadir (Al Massira)", "≈ 10 h"],
    ["Tangier (Ibn Battouta)", "≈ 11–12 h"],
    ["Rabat (Salé)", "≈ 9–10 h"],
  ],
  en: {
    kicker: "Private transfers",
    title: "Airport & city transfers to Merzouga",
    text: "We organise private transfers to our camp from every airport and city in Morocco — with a professional driver, a comfortable air-conditioned vehicle and stops wherever you want.",
    points: ["Pick-up at the airport arrivals hall", "Modern air-conditioned vehicle (4x4 or minivan)", "Professional English- or Spanish-speaking driver", "Stops for photos, lunch and sightseeing on the way", "Multi-day routes via the Dades Valley, Todra Gorge or Ziz Valley", "Return transfer to any city or airport"],
    airportsTitle: "Airports we serve",
    timeLabel: "Driving time to Merzouga",
    note: "Times are approximate. Long journeys can be split into a 2- or 3-day private tour with a night on the way.",
  },
  es: {
    kicker: "Traslados privados",
    title: "Traslados desde aeropuertos y ciudades a Merzouga",
    text: "Organizamos traslados privados a nuestro campamento desde todos los aeropuertos y ciudades de Marruecos, con conductor profesional, vehículo cómodo con aire acondicionado y paradas donde tú quieras.",
    points: ["Recogida en la sala de llegadas del aeropuerto", "Vehículo moderno con aire acondicionado (4x4 o minivan)", "Conductor profesional que habla español o inglés", "Paradas para fotos, comer y visitar por el camino", "Rutas de varios días por el valle del Dadès, las gargantas del Todra o el valle del Ziz", "Traslado de vuelta a cualquier ciudad o aeropuerto"],
    airportsTitle: "Aeropuertos que cubrimos",
    timeLabel: "Tiempo en coche hasta Merzouga",
    note: "Tiempos aproximados. Los trayectos largos se pueden dividir en un tour privado de 2 o 3 días con noche en el camino.",
  },
};
