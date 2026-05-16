import type { APIRoute } from 'astro';

const SITE = 'https://pickit.kids';

// Hand-rolled sitemap (the @astrojs/sitemap integration crashes on us).
// One page for now — add per-category pages here when they ship.
const urls = [
  { loc: '/', changefreq: 'daily',   priority: '1.0' },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
