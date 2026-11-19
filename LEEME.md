# Sitio en Astro

## Comandos
```
npm install        # solo la primera vez
npm run dev        # desarrollo en http://localhost:4321
npm run build      # genera dist/ para subir a Hostinger
```

## Qué editar
| Qué | Dónde |
|---|---|
| Nombre, lema, WhatsApp, redes | `src/data/site.ts` |
| Servicios (textos, imágenes, animación de cada bloque) | `src/data/servicios.ts` |
| Cifras, valores y equipo de "Nosotros" | Al inicio de `src/pages/nosotros.astro` |
| Colores y fuentes | `src/styles/global.css`, bloque `:root` |
| Menú animado | `src/components/Nav.astro` |
| Galería de servicios del inicio | `src/components/FilmServicios.astro` (usa `imagen` de cada servicio; debe ser horizontal) |
| Pie de página (firma, titular, marcadores) | `src/data/pie.ts` y `src/components/PieCuero.astro` |
| Cierre del inicio (mosaico y fila de fotos) | `src/data/fundacion.ts` y `src/components/Fundacion.astro` |

## Imágenes y video
- Todo el material optimizado está en `public/media/` (fotos .webp, videos .mp4 sin audio, logo y favicon).
- Logo animado del inicio: `src/components/IntroLogo.astro` (tiempos en milisegundos en su script).
- Fondo y galería de cada servicio: `imagen` y `galeria` en `src/data/servicios.ts`.
- Los originales (sin optimizar) están en la carpeta `imagenes compartidas`; no se suben a la web.
- Para agregar fotos o videos nuevos, optimízalos antes: fotos a ~1920 px de ancho en .webp y videos cortos (10–15 s) sin audio, a menos de 2 MB.

## Subir a Hostinger
1. `npm run build`
2. hPanel → Administrador de archivos → `public_html`: sube **el contenido** de `dist/`.
