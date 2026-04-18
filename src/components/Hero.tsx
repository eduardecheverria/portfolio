import { useI18n } from '@/hooks/useI18n';
import { NeonButton } from './NeonButton';
import { CharacterCard } from './CharacterCard';
import styles from './Hero.module.css';

const HERO_NAME = 'EDUARDO_';

export function Hero() {
  const { t } = useI18n();

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.tag}>{t('hero.tag')}</p>

        <h1 className={styles.name} data-text={HERO_NAME}>
          EDUARDO<span className={styles.accent}>_</span>
        </h1>

        <p className={styles.role}>
          {t('hero.role')}
          <span className={styles.pipe}>//</span>
          {t('hero.specialty')}
        </p>

        <p className={styles.bio}>{t('hero.bio')}</p>

        <div className={styles.cta}>
          <NeonButton>{t('hero.cta.cv')}</NeonButton>
          <NeonButton variant="magenta">{t('hero.cta.contact')}</NeonButton>
        </div>
      </div>

      <CharacterCard />
    </section>
  );
}
