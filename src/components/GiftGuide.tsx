import { invitationConfig as cfg } from '../config/invitationConfig';
import landbankQr from '../../assets/crew/treasure chest landbank.jpg';
import gcashQr from '../../assets/gcash-qr.png';
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

          <div className={styles.qrRow}>
            {/* GCash */}
            <div className={styles.qrItem}>
              <div className={styles.qrFrame}>
                <img
                  src={gcashQr}
                  alt={gcash.qrImageAlt}
                  className={styles.qrImg}
                />
              </div>
              <p className={styles.qrLabel}>GCash</p>
              <p className={styles.qrName}>{gcash.name}</p>
              <p className={styles.qrNumber}>{gcash.number}</p>
            </div>

            <div className={styles.divider} aria-hidden="true" />

            {/* Landbank */}
            <div className={styles.qrItem}>
              <div className={styles.qrFrame}>
                <img
                  src={landbankQr}
                  alt="Landbank QR code for gifts"
                  className={styles.qrImg}
                />
              </div>
              <p className={styles.qrLabel}>Landbank</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
