import { useI18n } from '@/hooks/useI18n';
import styles from './CharacterCard.module.css';

export function CharacterCard() {
  const { t } = useI18n();

  return (
    <aside className={styles.card}>
      <div className={styles.header}>
        <span>{t('char.id')}</span>
        <span className={styles.active}>● {t('char.active')}</span>
      </div>

      <div className={styles.frame}>
        <span className={`${styles.corner} ${styles.tl}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.tr}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.bl}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.br}`} aria-hidden="true" />
        <AvatarGlyph />
      </div>

      <dl className={styles.info}>
        <Row label={t('char.class')} value={t('char.classValue')} />
        <Row label={t('char.level')} value="42" tone="yellow" />
        <Row label={t('char.xp')} value="8,760 / 10,000" />
        <Row label={t('char.location')} value="PUEBLA.MX" />
        <Row label={t('char.languages')} value="ES // EN" />
        <Row label={t('char.statusLabel')} value={t('char.statusValue')} tone="green" />
      </dl>
    </aside>
  );
}

interface RowProps {
  label: string;
  value: string;
  tone?: 'cyan' | 'green' | 'yellow';
}

function Row({ label, value, tone = 'cyan' }: RowProps) {
  const valueClass =
    tone === 'green' ? styles.green : tone === 'yellow' ? styles.yellow : '';

  return (
    <div className={styles.row}>
      <dt className={styles.label}>{label}</dt>
      <dd className={`${styles.value} ${valueClass}`}>{value}</dd>
    </div>
  );
}

function AvatarGlyph() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Netrunner avatar">
      <defs>
        <linearGradient id="avatarGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#ff2a6d" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="38" r="18" fill="none" stroke="url(#avatarGradient)" strokeWidth="1.5" />
      <path d="M50 56 L50 52" stroke="#00f0ff" strokeWidth="1" />
      <path d="M30 90 Q30 65 50 60 Q70 65 70 90" fill="none" stroke="url(#avatarGradient)" strokeWidth="1.5" />
      <line x1="35" y1="38" x2="42" y2="38" stroke="#00f0ff" strokeWidth="2" />
      <line x1="58" y1="38" x2="65" y2="38" stroke="#ff2a6d" strokeWidth="2" />
      <circle cx="38" cy="38" r="1.5" fill="#00f0ff" />
      <circle cx="62" cy="38" r="1.5" fill="#ff2a6d" />
      <path d="M44 48 Q50 51 56 48" fill="none" stroke="#00f0ff" strokeWidth="1" />
      <path d="M20 20 L28 20 L28 28" fill="none" stroke="#00f0ff" strokeWidth="0.5" opacity="0.6" />
      <path d="M80 20 L72 20 L72 28" fill="none" stroke="#ff2a6d" strokeWidth="0.5" opacity="0.6" />
      <path d="M20 80 L28 80 L28 72" fill="none" stroke="#ff2a6d" strokeWidth="0.5" opacity="0.6" />
      <path d="M80 80 L72 80 L72 72" fill="none" stroke="#00f0ff" strokeWidth="0.5" opacity="0.6" />
      <text x="50" y="78" textAnchor="middle" fill="#00f0ff" fontFamily="monospace" fontSize="6" opacity="0.7">
        &lt;/&gt;
      </text>
    </svg>
  );
}
