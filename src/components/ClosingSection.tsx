import { invitationConfig as cfg } from '../config/invitationConfig';
import { Clouds } from './decor/Clouds';
import { ShipSilhouette } from './decor/ShipSilhouette';
import { Waves } from './decor/Waves';
import brookGif from '../../assets/char/brook.gif';
import styles from './ClosingSection.module.css';

export function ClosingSection() {
  return (
    <footer className={styles.wrap}>
      <Waves position="top" color="var(--parchment)" />
      <Clouds count={3} />
      <div className={styles.content} data-reveal="">
        <div className={styles.brookCircle} aria-hidden="true">
          <img src={brookGif} alt="" className={styles.brookImg} />
        </div>
        <p className={styles.message}>{cfg.closing.message}</p>
        <p className={styles.footer}>{cfg.closing.footer}</p>
      </div>
      <ShipSilhouette />
      <div className={styles.sea} aria-hidden="true" />
    </footer>
  );
}
