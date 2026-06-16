import styles from './Sparkles.module.css';

/** Subtle anime-style sparkles / rising bubbles. Purely decorative. */
export function Sparkles({ count = 8 }: { count?: number }) {
  return (
    <div className={styles.sparkles} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={styles.spark} data-variant={i % 2} />
      ))}
    </div>
  );
}
