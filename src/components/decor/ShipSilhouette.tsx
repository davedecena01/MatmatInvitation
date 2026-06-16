import styles from './ShipSilhouette.module.css';

/** A little pirate ship drifting across the horizon. Purely decorative. */
export function ShipSilhouette() {
  return (
    <div className={styles.lane} aria-hidden="true">
      <svg viewBox="0 0 120 100" className={styles.ship}>
        {/* hull */}
        <path d="M14 70h92l-12 20H28Z" fill="var(--navy-outline)" />
        {/* mast */}
        <rect x="58" y="14" width="4" height="56" fill="var(--navy-outline)" />
        {/* main sail */}
        <path d="M62 18c20 6 26 26 24 44H62Z" fill="var(--cloud-white)" />
        <path d="M58 22c-16 6-20 22-18 40h18Z" fill="var(--cloud-white)" opacity="0.85" />
        {/* flag */}
        <path d="M62 14h22l-6 6 6 6H62Z" fill="var(--crimson)" />
      </svg>
    </div>
  );
}
