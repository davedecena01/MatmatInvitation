import { invitationConfig as cfg } from '../config/invitationConfig';
import { Clouds } from './decor/Clouds';
import { ShipSilhouette } from './decor/ShipSilhouette';
import { Waves } from './decor/Waves';
import styles from './ClosingSection.module.css';

export function ClosingSection() {
  return (
    <footer className={styles.wrap}>
      <Waves position="top" color="var(--parchment)" />
      <Clouds count={3} />
      <div className={styles.content} data-reveal="">
        <svg viewBox="0 0 64 64" className={styles.hat} aria-hidden="true">
          {/* little straw hat */}
          <ellipse cx="32" cy="40" rx="26" ry="8" fill="var(--straw-yellow)" stroke="var(--navy-outline)" strokeWidth="3" />
          <path d="M16 40c0-14 7-22 16-22s16 8 16 22" fill="var(--straw-yellow)" stroke="var(--navy-outline)" strokeWidth="3" />
          <path d="M15 35h34" stroke="var(--crimson)" strokeWidth="6" />
        </svg>
        <p className={styles.message}>{cfg.closing.message}</p>
        <p className={styles.footer}>{cfg.closing.footer}</p>
      </div>
      <ShipSilhouette />
      <div className={styles.sea} aria-hidden="true" />
    </footer>
  );
}
