import type { ButtonHTMLAttributes } from 'react';
import styles from './NeonButton.module.css';

type Variant = 'cyan' | 'magenta';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function NeonButton({ variant = 'cyan', className, children, ...rest }: Props) {
  const classes = [styles.btn, variant === 'magenta' ? styles.magenta : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
