import { invitationConfig as cfg } from '../config/invitationConfig';
import { useCountdown } from '../hooks/useCountdown';
import styles from './Countdown.module.css';

const pad = (n: number) => String(n).padStart(2, '0');

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.unit}>
      {/* key remount re-triggers the tick animation on change */}
      <span key={value} className={styles.value}>
        {value}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export function Countdown() {
  const t = useCountdown(cfg.event.countdownTargetUTC);

  return (
    <section id="countdown" className={`section ${styles.wrap}`} aria-label="Countdown">
      <div className="section-inner">
        <span className="section-kicker">Log Pose Reading</span>
        <h2 className="section-title">{cfg.countdown.title}</h2>

        {t.isComplete ? (
          <p className={styles.complete} role="status">
            {cfg.countdown.completedMessage}
          </p>
        ) : (
          <div className={styles.logPose} data-reveal="">
            <Unit value={String(t.days)} label="Days" />
            <span className={styles.sep} aria-hidden="true">:</span>
            <Unit value={pad(t.hours)} label="Hours" />
            <span className={styles.sep} aria-hidden="true">:</span>
            <Unit value={pad(t.minutes)} label="Minutes" />
            <span className={styles.sep} aria-hidden="true">:</span>
            <Unit value={pad(t.seconds)} label="Seconds" />
          </div>
        )}

        <p className={styles.target}>
          {cfg.event.dateDisplay} · {cfg.ceremony.time} (Philippine time)
        </p>
      </div>
    </section>
  );
}
