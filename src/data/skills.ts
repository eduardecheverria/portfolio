import type { Skill } from '@/types';

export const skills: readonly Skill[] = [
  {
    id: 'frontend',
    nameKey: 'skill.frontend',
    level: 95,
    tags: ['React', 'Redux', 'Vue', 'Vuex', 'TypeScript'],
  },
  {
    id: 'backend',
    nameKey: 'skill.backend',
    level: 78,
    tags: ['Node.js', 'Django', 'DRF', 'PHP'],
  },
  {
    id: 'cloud',
    nameKey: 'skill.cloud',
    level: 82,
    tags: ['AWS', 'Lambda', 'SQS', 'SNS', 'CloudFront'],
  },
  {
    id: 'database',
    nameKey: 'skill.database',
    level: 75,
    tags: ['PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
  },
  {
    id: 'performance',
    nameKey: 'skill.performance',
    level: 88,
    tags: ['Code Splitting', 'Lazy Load', 'Memoization'],
  },
  {
    id: 'architecture',
    nameKey: 'skill.architecture',
    level: 80,
    tags: ['Clean Code', 'Patterns', 'System Design'],
  },
] as const;
