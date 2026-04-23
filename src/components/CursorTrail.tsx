import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import styles from './CursorTrail.module.css';

export function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const dot = dotRef.current;
    if (!dot) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (frame) return;
      frame = requestAnimationFrame(() => {
        dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
        frame = 0;
      });
    };

    const handleLeave = () => {
      dot.style.opacity = '0';
    };
    const handleEnter = () => {
      dot.style.opacity = '1';
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return <div ref={dotRef} className={styles.dot} aria-hidden="true" />;
}
