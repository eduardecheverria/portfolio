import { useI18n } from '@/hooks/useI18n';
import { useInView } from '@/hooks/useInView';
import { skills } from '@/data/skills';
import { SectionHeader } from './SectionHeader';
import type { Skill } from '@/types';
import type { TranslationKey } from '@/i18n';
import styles from './Stats.module.css';

export function Stats() {
  const { t } = useI18n();
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className={styles.section}>
      <SectionHeader num="01" title={t('section.stats')} />

      <div ref={ref} className={styles.grid}>
        {skills.map((skill) => (
          <StatBlock key={skill.id} skill={skill} animate={inView} />
        ))}
      </div>
    </section>
  );
}

interface BlockProps {
  skill: Skill;
  animate: boolean;
}

function StatBlock({ skill, animate }: BlockProps) {
  const { t } = useI18n();
  const width = animate ? `${skill.level}%` : '0%';

  return (
    <article className={styles.block}>
      <div className={styles.head}>
        <h3 className={styles.name}>{t(skill.nameKey as TranslationKey)}</h3>
        <span className={styles.value}>{skill.level}</span>
      </div>

      <div
        className={styles.bar}
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={styles.fill} style={{ width }} />
      </div>

      <div className={styles.tags}>
        {skill.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
