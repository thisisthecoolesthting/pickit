import type { APIRoute } from 'astro';
import { CATEGORY_PAGES } from '@/lib/categories';
import { PRIMARY_SITE } from '@/lib/site';

const urls = [
  { loc: '/', changefreq: 'daily', priority: '1.0' },
  { loc: '/games', changefreq: 'weekly', priority: '0.9' },
  { loc: '/speed', changefreq: 'weekly', priority: '0.85' },
  { loc: '/daily', changefreq: 'daily', priority: '0.85' },
  ...CATEGORY_PAGES.map(c => ({
    loc: `/${c.slug}`,
    changefreq: 'daily',
    priority: '0.8',
  })),
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${PRIMARY_SITE}${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
