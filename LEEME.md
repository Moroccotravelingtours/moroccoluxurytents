# moroccoluxurytents.com

Web estática (HTML, sin WordPress), en inglés y español, preparada para Netlify.

## Cambiar textos, teléfono o email
- Teléfono, email y dirección: `src/data.js`, en la parte superior (`config`)
- Actividades, jaimas y experiencias: `src/data.js`
- Textos generales (portada, FAQ…): `src/build.js`, en el objeto `T`
- Después de cambiar algo: `node src/build.js` (Netlify lo hace solo si usas GitHub)

## Fotos
Copia tus fotos en `site/images/` con los nombres de `site/images/README.txt`.
Si una foto no existe, la web muestra una foto libre de Unsplash.
IMPORTANTE: las jaimas (tent-luxury.jpg, tent-royal.jpg, tent-family.jpg, dinner.jpg) deben ser fotos REALES de tu campamento.

## Publicar
- Rápido: arrastra la carpeta `site` a app.netlify.com/drop
- Con GitHub: sube toda esta carpeta a un repositorio y conéctalo en Netlify (netlify.toml ya está configurado)
- El formulario de contacto funciona automáticamente con Netlify Forms
