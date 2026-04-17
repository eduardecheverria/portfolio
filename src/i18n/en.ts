// English is the source of truth — all other locales must match these keys.
export const en = {
  // HUD
  'hud.status': 'SYS://ONLINE',
  'hud.node': 'NODE_PUEBLA-MX',
  'hud.encrypted': 'ENC_LINK_SECURE',
  'hud.toggleLang': 'Toggle language',

  // Hero
  'hero.tag': '// PROFILE.LOAD_COMPLETE',
  'hero.role': 'FRONTEND_NETRUNNER',
  'hero.specialty': 'REACT.SPECIALIST',
  'hero.bio':
    "4+ years architecting modern web platforms. Specialized in React, TypeScript & cloud-native systems. Currently scanning the net for high-frequency remote contracts. Status: AVAILABLE FOR HIRE.",
  'hero.cta.cv': '▸ DOWNLOAD_CV.PDF',
  'hero.cta.contact': '◆ INITIATE_CONTACT',

  // Character card
  'char.id': 'ID://0xE4U-04',
  'char.active': 'ACTIVE',
  'char.class': 'CLASS',
  'char.classValue': 'FRONTEND DEV',
  'char.level': 'LEVEL',
  'char.xp': 'XP',
  'char.location': 'LOCATION',
  'char.languages': 'LANGUAGES',
  'char.statusLabel': 'STATUS',
  'char.statusValue': 'AVAILABLE',

  // Section titles
  'section.stats': 'CORE.STATS',
  'section.missions': 'ACTIVE.MISSIONS',
  'section.quests': 'QUEST.LOG',

  // Skills
  'skill.frontend': 'Frontend Mastery',
  'skill.backend': 'Backend Ops',
  'skill.cloud': 'Cloud Engineering',
  'skill.database': 'Database Lore',
  'skill.performance': 'Performance Hacks',
  'skill.architecture': 'Architecture',

  // Missions
  'mission.ceilingPro.title': 'CeilingPro_Intl',
  'mission.ceilingPro.desc':
    'Corporate web platform for industrial cleaning company with 35+ years in market and Fortune-500 clients (Costco, Ikea, Panera Bread). Multi-page architecture, responsive design, conversion-focused UX.',
  'mission.elektra.title': 'Elektra.MX Platform',
  'mission.elektra.desc':
    'Frontend infrastructure for high-traffic retail platform. AWS-backed event pipeline, React/Redux state orchestration, significant perf gains achieved.',
  'mission.portfolio.title': 'Portfolio.exe',
  'mission.portfolio.desc':
    'This very interface. Cyberpunk-themed dev portfolio with HUD aesthetics, stat blocks, mission cards. React + TypeScript, no framework bloat.',

  'mission.rarity.legendary': '★ LEGENDARY',
  'mission.rarity.rare': '★ RARE',
  'mission.rarity.common': '★ COMMON',

  'mission.status.deployed': 'DEPLOYED',
  'mission.status.in_progress': 'IN_PROGRESS',
  'mission.status.archived': 'ARCHIVED',

  'mission.action.visit': 'VISIT_SITE ▸',
  'mission.action.case': 'VIEW_CASE ▸',
  'mission.action.here': 'YOU_ARE_HERE ▸',

  // Quests
  'quest.elektra.title': 'Frontend Developer',
  'quest.elektra.objective': 'Scale frontend systems for high-traffic retail ops',
  'quest.elektra.achievement.0': 'Architected React/Redux state layer for multi-module retail platform',
  'quest.elektra.achievement.1': 'Engineered AWS event pipeline (SQS, SNS, Lambda, CloudFront) for async ops',
  'quest.elektra.achievement.2': 'Achieved significant performance improvements through code-splitting & memoization',
  'quest.elektra.achievement.3': 'Built REST API integrations across distributed backend services',

  'quest.buap.title': 'IT Engineering Degree',
  'quest.buap.objective': 'Master fundamentals of computing & systems',
  'quest.buap.achievement.0': 'Computer science foundations: algorithms, data structures, OS',
  'quest.buap.achievement.1': 'Database design, distributed systems, software architecture',
  'quest.buap.achievement.2': 'Microsoft + British Council certifications unlocked',

  'quest.objective.prefix': 'Objective:',

  // Footer
  'footer.end': 'END_OF_TRANSMISSION',
  'footer.connect': 'CONNECT_VIA',
} as const;

export type TranslationKey = keyof typeof en;
export type Translations = Record<TranslationKey, string>;
