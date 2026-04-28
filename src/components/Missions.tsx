---import { useI18n } from '@/hooks/useI18n';
import { missions } from '@/data/missions';
import { SectionHeader } from './SectionHeader';
import type { Mission, MissionRarity, MissionStatus } from '@/types';
import type { TranslationKey } from '@/i18n';
import styles from './Missions.module.css';

const RARITY_KEYS: Record<MissionRarity, TranslationKey> = {
  legendary: 'mission.rarity.legendary',
  rare: 'mission.rarity.rare',
  common: 'mission.rarity.common',
};

const STATUS_KEYS: Record<MissionStatus, TranslationKey> = {
  deployed: 'mission.status.deployed',
  in_progress: 'mission.status.in_progress',
  archived: 'mission.status.archived',
};

const ACTION_BY_ID: Record<string, TranslationKey> = {
  ceilingPro: 'mission.action.visit',
  elektra: 'mission.action.case',
  portfolio: 'mission.action.here',
};

export function Missions() {
  const { t } = useI18n();

  return (
    <section className={styles.section}>
      <SectionHeader num="02" title={t('section.missions')} />

      <div className={styles.grid}>
        {missions.map((mission) => (
          <MissionCard key={mission.id} mission={mission} />
        ))}
      </div>
    </section>
  );
}

function MissionCard({ mission }: { mission: Mission }) {
  const { t } = useI18n();

  const cardClass = [styles.card, styles[mission.rarity]].filter(Boolean).join(' ');
  const actionKey = ACTION_BY_ID[mission.id] ?? 'mission.action.visit';-

  const handleClick = () => {
    if (mission.link) {
      window.open(mission.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button type="button" className={cardClass} onClick={handleClick}>
      <div className={styles.banner} aria-hidden="true" />
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.difficulty}>{t(RARITY_KEYS[mission.rarity])}</span>
          <span className={styles.status}>{t(STATUS_KEYS[mission.status])}</span>
        </div>

        <h3 className={styles.title}>{t(mission.titleKey as TranslationKey)}</h3>
        <p className={styles.desc}>{t(mission.descKey as TranslationKey)}</p>

        <div className={styles.rewards}>
          {mission.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className={styles.footer}>
          <span className={styles.xp}>+ {mission.xp.toLocaleString()} XP</span>
          <span className={styles.action}>{t(actionKey)}</span>
        </div>
      </div>
    </button>
  );
}
