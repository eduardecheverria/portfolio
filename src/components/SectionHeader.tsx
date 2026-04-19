import styles from './SectionHeader.module.css';

interface Props {
  num: string;
  title: string;
}

export function SectionHeader({ num, title }: Props) {
  return (
    <div className={styles.header}>
      <span className={styles.num}>{num}//</span>
      <h2 className={styles.title}>
        <span className={styles.bracket}>[</span> {title}{' '}
        <span className={styles.bracket}>]</span>
      </h2>
      <div className={styles.line} aria-hidden="true" />
    </div>
  );
}
