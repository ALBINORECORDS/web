// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio estático: `npm run build` genera la carpeta dist/ lista para subir a Hostinger.
// La integración de sitemap crea sitemap-index.xml en cada build (se envía a Google Search Console).
export default defineConfig({
  site: 'https://xn--albiorecords-dhb.com',
  integrations: [sitemap()],
});
