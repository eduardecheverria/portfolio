import { useI18n } from '@/hooks/useI18n';
import { useClock } from '@/hooks/useClock';
import type { Locale } from '@/types';
import styles from './Hud.module.css';

const LOCALES: ReadonlyArray<{ code: Locale; label: string }> = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export function Hud() {
  const { locale, setLocale, t } = useI18n();
  const time = useClock();

  return (
    <header className={styles.hud}>
      <div className={styles.side}>
        <div className={styles.indicator}>
          <span className={styles.dot} aria-hidden="true" />
          <span>{t('hud.status')}</span>
        </div>
        <span>{t('hud.node')}</span>
        <span>v4.20.26</span>
      </div>

      <div className={styles.side}>
        <span aria-label="Current time">{time}</span>
        <span className={styles.encrypted}>◆ {t('hud.encrypted')}</span>
        <div
          className={styles.langSwitch}
          role="group"
          aria-label={t('hud.toggleLang')}
        >
          {LOCALES.map((opt, idx) => (
            <span key={opt.code} style={{ display: 'contents' }}>
              <button
                type="button"
                onClick={() => setLocale(opt.code)}
                aria-pressed={locale === opt.code}
              >
                {opt.label}
              </button>
              {idx < LOCALES.length - 1 && <span className={styles.langDivider}>|</span>}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
