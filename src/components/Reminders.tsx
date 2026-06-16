import { invitationConfig as cfg } from '../config/invitationConfig';
import { Waves } from './decor/Waves';
import styles from './Reminders.module.css';

export function Reminders() {
  return (
    <section id="reminders" className={`section ${styles.wrap}`} aria-label="Event reminders">
      <div className="section-inner">
        <span className="section-kicker section-kicker--light">{cfg.reminders.subtitle}</span>
        <h2 className={`section-title ${styles.title}`}>{cfg.reminders.title}</h2>

        <ul className={styles.list}>
          {cfg.reminders.items.map((reminder, i) => (
            <li key={i} className={styles.item} data-reveal="">
              <span className={styles.badge} aria-hidden="true">
                {i + 1}
              </span>
              <span>{reminder}</span>
            </li>
          ))}
        </ul>
      </div>
      <Waves color="var(--ocean-deep)" />
    </section>
  );
}
