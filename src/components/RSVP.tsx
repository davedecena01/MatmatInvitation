import { invitationConfig as cfg } from '../config/invitationConfig';
import styles from './RSVP.module.css';

export function RSVP() {
  return (
    <section id="rsvp" className={`section ${styles.wrap}`} aria-label="RSVP">
      <div className="section-inner">
        <span className="section-kicker">Ship Log Entry</span>
        <h2 className="section-title">{cfg.rsvp.title}</h2>

        <div className={styles.card} data-reveal="unroll">
          <svg viewBox="0 0 64 64" className={styles.compass} aria-hidden="true">
            <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M44 20 36 36l-16 8 8-16Z" fill="var(--crimson)" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="32" r="3" fill="currentColor" />
          </svg>
          <p className={styles.message}>{cfg.rsvp.message}</p>
          <a
            className="btn btn--crimson"
            href={cfg.rsvp.formUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cfg.rsvp.buttonLabel}
          </a>
          <p className={styles.hint}>{cfg.rsvp.confirmationNote}</p>
        </div>
      </div>
    </section>
  );
}
