import styles from './SectionDivider.module.css';

export function SectionDivider() {
  return (
    <div className={styles.divider} aria-hidden="true">
      <span className={styles.rope} />
      <span className={styles.wheel}>&#9784;</span>
      <span className={`${styles.rope} ${styles.ropeRight}`} />
    </div>
  );
}
