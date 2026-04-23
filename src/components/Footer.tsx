import { useI18n } from '@/hooks/useI18n';
import styles from './Footer.module.css';

const SOCIAL_LINKS = [
  { label: 'github', href: 'https://github.com/' },
  { label: 'linkedin', href: 'https://linkedin.com/' },
  { label: 'email', href: 'mailto:hello@example.com' },
] as const;

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className={styles.footer}>
      <span className={styles.accent}>[</span> {t('footer.end')}{' '}
      <span className={styles.accent}>]</span>
      &nbsp;//&nbsp; NETRUNNER.EDUARDO &nbsp;//&nbsp;
      <span className={styles.accent}> {t('footer.connect')}</span>
      <span className={styles.links}>
        {SOCIAL_LINKS.map(({ label, href }, idx) => (
          <span key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
            {idx < SOCIAL_LINKS.length - 1 && ' · '}
          </span>
        ))}
      </span>
    </footer>
  );
}
