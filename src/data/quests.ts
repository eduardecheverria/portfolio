import type { Quest } from '@/types';

export const quests: readonly Quest[] = [
  {
    id: 'elektra',
    titleKey: 'quest.elektra.title',
    org: 'Elektra.mx',
    period: 'OCT.2021 — OCT.2025',
    objectiveKey: 'quest.elektra.objective',
    achievementKeys: [
      'quest.elektra.achievement.0',
      'quest.elektra.achievement.1',
      'quest.elektra.achievement.2',
      'quest.elektra.achievement.3',
    ],
    stack: ['REACT', 'REDUX', 'AWS', 'LAMBDA', 'SQS', 'SNS', 'CLOUDFRONT', 'REST'],
  },
  {
    id: 'buap',
    titleKey: 'quest.buap.title',
    org: 'BUAP',
    period: 'EDU.COMPLETED',
    objectiveKey: 'quest.buap.objective',
    achievementKeys: [
      'quest.buap.achievement.0',
      'quest.buap.achievement.1',
      'quest.buap.achievement.2',
    ],
    stack: ['CS_FUNDAMENTALS', 'ALGORITHMS', 'SYSTEMS'],
  },
] as const;
