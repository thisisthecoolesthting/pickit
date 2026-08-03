/** SEO landing pages — slug maps to questions.json category id. */
export const CATEGORY_PAGES = [
  {
    slug: 'animals',
    id: 'animals',
    emoji: '🐶',
    name: 'Animals',
    title: 'Animal Would You Rather Questions for Kids | Pickit!',
    h1: 'Animal Would You Rather',
    description:
      '20+ silly animal Would You Rather questions for kids 9–12. Pet ponies, tiny dragons, talking parrots — free online game!',
    faqs: [
      {
        question: 'What is "Animal Would You Rather" for kids?',
        answer:
          "It's a free pick-one-or-the-other game with silly animal choices, like a pet pony in your bedroom vs. a tiny dragon in your backpack, or a friendly fox sidekick vs. a friendly owl sidekick. Kids tap their pick and get a fun reaction — no reading essays, no wrong answers.",
      },
      {
        question: 'Is Pickit safe for kids to play?',
        answer:
          'Yes. Pickit has no accounts, no sign-up, and no personal information collected — you just open the page and play. Questions are written to be age-appropriate for kids 9–12.',
      },
      {
        question: 'How many animal questions are in the game?',
        answer:
          'The Animal category has its own set of would-you-rather questions covering pets, sidekicks, and swimming buddies — ponies, dragons, foxes, owls, turtles, kangaroos, parrots, hamsters, penguins, flamingos, elephants, dolphins, and otters. Each round shuffles the questions so replays feel fresh.',
      },
      {
        question: 'Are there other Would You Rather categories besides animals?',
        answer:
          'Yes — Pickit also has Food, Superpowers, Adventure, Magic, Sports, Sweets & Treats, Silly Bodies, School & Friends, and Weather & Outdoors categories, plus a Speed round and a Daily challenge. Check out the full game hub to play them all.',
      },
    ],
  },
  {
    slug: 'food',
    id: 'food',
    emoji: '🍕',
    name: 'Food',
    title: 'Food Would You Rather Questions for Kids | Pickit!',
    h1: 'Food Would You Rather',
    description:
      'Pizza forever or taco mountains? Play 20 free food dilemmas for kids ages 9–12. No signup!',
  },
  {
    slug: 'superpowers',
    id: 'superpowers',
    emoji: '⚡',
    name: 'Superpowers',
    title: 'Superpower Would You Rather Questions for Kids | Pickit!',
    h1: 'Superpower Would You Rather',
    description:
      'Fly or be invisible? 20+ superhero Would You Rather choices for tweens. Free silly game!',
  },
  {
    slug: 'adventure',
    id: 'adventure',
    emoji: '🗺️',
    name: 'Adventure',
    title: 'Adventure Would You Rather for Kids | Pickit!',
    h1: 'Adventure Would You Rather',
    description:
      'Jungle balloons or crystal caves? Free adventure Would You Rather game for kids 9–12.',
  },
  {
    slug: 'magic',
    id: 'magic',
    emoji: '✨',
    name: 'Magic',
    title: 'Magic Would You Rather Questions for Kids | Pickit!',
    h1: 'Magic Would You Rather',
    description:
      'Cast spells or talk to animals? 20+ magical dilemmas. Free Would You Rather for kids!',
  },
  {
    slug: 'sports',
    id: 'sports',
    emoji: '⚽',
    name: 'Sports',
    title: 'Sports Would You Rather for Kids | Pickit!',
    h1: 'Sports Would You Rather',
    description:
      'Win gold or invent a new sport? Free sports Would You Rather questions for tweens.',
  },
  {
    slug: 'sweets',
    id: 'sweets',
    emoji: '🍫',
    name: 'Sweets & Treats',
    title: 'Candy & Sweets Would You Rather for Kids | Pickit!',
    h1: 'Sweets Would You Rather',
    description:
      'Chocolate river or cookie mountain? Silly candy Would You Rather game — free for kids 9–12.',
  },
  {
    slug: 'silly',
    id: 'silly_bodies',
    emoji: '💨',
    name: 'Silly Bodies',
    title: 'Funny Would You Rather Questions for Kids | Pickit!',
    h1: 'Silly Would You Rather',
    description:
      'Burp bubbles or sneeze glitter? Gross-but-funny Would You Rather for kids. Free & safe!',
  },
  {
    slug: 'school',
    id: 'school_friends',
    emoji: '📚',
    name: 'School & Friends',
    title: 'School & Friends Would You Rather for Kids | Pickit!',
    h1: 'School Would You Rather',
    description:
      'Homework that does itself or the best lunch ever? Free school Would You Rather for tweens.',
  },
  {
    slug: 'outdoors',
    id: 'weather_outdoors',
    emoji: '☀️',
    name: 'Weather & Outdoors',
    title: 'Outdoor Would You Rather for Kids | Pickit!',
    h1: 'Outdoor Would You Rather',
    description:
      'Sunny always or snow-day sledding forever? Free outdoor Would You Rather game for kids!',
  },
] as const;

export function categoryBySlug(slug: string) {
  return CATEGORY_PAGES.find(c => c.slug === slug);
}
