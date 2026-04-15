export type Locale = 'en' | 'es';

export type MissionRarity = 'common' | 'rare' | 'legendary';

export type MissionStatus = 'deployed' | 'in_progress' | 'archived';

export interface Skill {
  id: string;
  nameKey: string;
  level: number;
  tags: readonly string[];
}

export interface Mission {
  id: string;
  titleKey: string;
  descKey: string;
  rarity: MissionRarity;
  status: MissionStatus;
  xp: number;
  stack: readonly string[];
  link?: string;
}

export interface Quest {
  id: string;
  titleKey: string;
  org: string;
  period: string;
  objectiveKey: string;
  achievementKeys: readonly string[];
  stack: readonly string[];
}
