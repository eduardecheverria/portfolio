import type { Mission } from '@/types';

export const missions: readonly Mission[] = [
  {
    id: 'ceilingPro',
    titleKey: 'mission.ceilingPro.title',
    descKey: 'mission.ceilingPro.desc',
    rarity: 'legendary',
    status: 'deployed',
    xp: 3500,
    stack: ['PHP', 'JS', 'RESPONSIVE', 'SEO'],
    link: 'https://ceilingprohq.com',
  },
  {
    id: 'elektra',
    titleKey: 'mission.elektra.title',
    descKey: 'mission.elektra.desc',
    rarity: 'rare',
    status: 'deployed',
    xp: 4800,
    stack: ['REACT', 'REDUX', 'AWS', 'REST'],
  },
  {
    id: 'portfolio',
    titleKey: 'mission.portfolio.title',
    descKey: 'mission.portfolio.desc',
    rarity: 'common',
    status: 'deployed',
    xp: 600,
    stack: ['REACT', 'TYPESCRIPT', 'VITE'],
  },
] as const;
