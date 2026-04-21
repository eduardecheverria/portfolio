import { useI18n } from '@/hooks/useI18n';
import { quests } from '@/data/quests';
import { SectionHeader } from './SectionHeader';
import type { Quest } from '@/types';
import type { TranslationKey } from '@/i18n';
import styles from './Quests.module.css';

export function Quests() {
  const { t } = useI18n();

  return (
    <section className={styles.section}>
      <SectionHeader num="03" title={t('section.quests')} />

      <div className={styles.list}>
        {quests.map((quest) => (
          <QuestEntry key={quest.id} quest={quest} />
        ))}
      </div>
    </section>
  );
}

function QuestEntry({ quest }: { quest: Quest }) {
  const { t } = useI18n();

  return (
    <article className={styles.quest}>
      <header className={styles.head}>
        <h3 className={styles.title}>
          {t(quest.titleKey as TranslationKey)} <span className={styles.at}>@</span> {quest.org}
        </h3>
        <span className={styles.time}>{quest.period}</span>
      </header>

      <p className={styles.objective}>
        {t('quest.objective.prefix')} {t(quest.objectiveKey as TranslationKey)}
      </p>

      <ul className={styles.achievements}>
        {quest.achievementKeys.map((key) => (
          <li key={key}>{t(key as TranslationKey)}</li>
        ))}
      </ul>

      <div className={styles.stack}>
        {quest.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </article>
  );
}
