import { invitationConfig as cfg } from '../config/invitationConfig';
import styles from './InvitationMessage.module.css';

export function InvitationMessage() {
  return (
    <section className={`section ${styles.wrap}`} aria-label="Invitation message">
      <div className="section-inner">
        <div className={styles.scroll} data-reveal="unroll">
          <span className="section-kicker">{cfg.invitationMessage.title}</span>
          <p className={styles.body}>{cfg.invitationMessage.body}</p>
          <p className={styles.signoff} aria-hidden="true">⚓</p>
        </div>
      </div>
    </section>
  );
}
