/** Primary domain for SEO canonicals. picksite.online mirrors this site. */
export const PRIMARY_SITE = 'https://pickit.kids';

export const PCFK_BASE = 'https://phonecasesforkids.com';

const MIRROR_HOSTS = new Set(['picksite.online', 'www.picksite.online']);

/** UTM source reflects which funnel domain sent the click. */
export function utmSource(host: string): string {
  const h = host.replace(/^www\./, '');
  return MIRROR_HOSTS.has(h) ? 'picksite' : 'pickit';
}

export function pcfkHref(
  slot: string,
  host: string,
  extra?: { game?: string; category?: string },
): string {
  const parts = [extra?.game, extra?.category, slot].filter(Boolean);
  const campaign = parts.join('_');
  const params = new URLSearchParams({
    utm_source: utmSource(host),
    utm_medium: 'ad',
    utm_campaign: campaign,
  });
  return `${PCFK_BASE}?${params}`;
}

export function canonicalUrl(pathname: string): string {
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return `${PRIMARY_SITE}${path === '/' ? '/' : path}`;
}
