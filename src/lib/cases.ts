import casePool from '../data/case-pool.json';

export type CaseItem = (typeof casePool)[number];

const girls = casePool.filter(c => c.lean === 'girl');
const boys = casePool.filter(c => c.lean === 'boy');

/** Featured cases for sticky bar / post-game — mix of popular designs. */
export function featuredCases(count = 6): CaseItem[] {
  const picks = [
    girls[0], girls[1], girls[4],
    boys[0], boys[1], boys[2],
    girls[7], boys[7],
  ].filter(Boolean);
  return picks.slice(0, count) as CaseItem[];
}

/** Distribute cases across ad slots without overlap. */
export function adCaseSets() {
  return {
    hero: [girls[0], girls[1], boys[0], boys[1], boys[2]],
    preGame: [girls[2], girls[3], girls[4], boys[3], boys[4]],
    between: [girls[5], girls[6], boys[5], boys[6], boys[7]],
    footer: [girls[7], girls[8], girls[9], boys[8], boys[9]],
    postGame: [girls[0], girls[3], boys[0], boys[4], girls[6], boys[8]],
  };
}
