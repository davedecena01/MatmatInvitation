import { invitationConfig as cfg } from '../config/invitationConfig';
import { ImageWithFallback } from './ImageWithFallback';
import styles from './GiftGuide.module.css';

export function GiftGuide() {
  const { gcash } = cfg.giftGuide;
  return (
    <section id="gifts" className={`section ${styles.wrap}`} aria-label="Gift guide">
      <div className="section-inner">
        <span className="section-kicker">A Note on Treasure</span>
        <h2 className="section-title">{cfg.giftGuide.title}</h2>

        <div className={styles.chest} data-reveal="">
          <p className={styles.message}>{cfg.giftGuide.message}</p>

          <div className={styles.treasureNote}>
            <ImageWithFallback
              src={gcash.qrImageSrc}
              alt={gcash.qrImageAlt}
              placeholderLabel="GCash QR coming soon"
              aspectRatio="1 / 1"
              icon="chest"
              className={styles.qr}
            />
            <div className={styles.gcashDetails}>
              <p className={styles.gcashLabel}>GCash</p>
              <p className={styles.gcashName}>{gcash.name}</p>
              <p className={styles.gcashNumber}>{gcash.number}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
