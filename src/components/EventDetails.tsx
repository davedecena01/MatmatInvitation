import { invitationConfig as cfg } from '../config/invitationConfig';
import { Waves } from './decor/Waves';
import styles from './EventDetails.module.css';

const ICONS = {
  church:
    'M32 6v10m-6-5h12M32 16l-14 12v28h10V42a4 4 0 0 1 8 0v14h10V28Z',
  party:
    'M22 26 12 54l28-10Zm4-4 22 22M34 12l2 6 6 2-6 2-2 6-2-6-6-2 6-2Zm16 8 1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5Z',
  clock: 'M32 10a22 22 0 1 0 0 44 22 22 0 0 0 0-44Zm0 8v14l10 6',
  calendar:
    'M12 16h40v38H12Zm0 12h40M22 10v10m20-10v10m-20 16h4m6 0h4m6 0h4M22 46h4m6 0h4',
  pin: 'M32 8a16 16 0 0 1 16 16c0 12-16 30-16 30S16 36 16 24A16 16 0 0 1 32 8Zm0 10a6 6 0 1 0 .1 0Z',
} as const;

function Icon({ name }: { name: keyof typeof ICONS }) {
  return (
    <svg viewBox="0 0 64 64" className={styles.icon} aria-hidden="true">
      <path
        d={ICONS[name]}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface EventCard {
  icon: keyof typeof ICONS;
  title: string;
  venue: string;
  address: string;
  time: string;
  dateDisplay: string;
  mapUrl: string;
  mapButtonLabel: string;
}

function DetailCard({ card }: { card: EventCard }) {
  return (
    <article className={styles.card} data-reveal="">
      <div className={styles.cardHeader}>
        <Icon name={card.icon} />
        <h3 className={styles.cardTitle}>{card.title}</h3>
      </div>
      <ul className={styles.rows}>
        <li>
          <Icon name="pin" />
          <span>
            <strong>{card.venue}</strong>
            <br />
            {card.address}
          </span>
        </li>
        <li>
          <Icon name="clock" />
          <span>{card.time}</span>
        </li>
        <li>
          <Icon name="calendar" />
          <span>{card.dateDisplay}</span>
        </li>
      </ul>
      <a
        className="btn btn--crimson"
        href={card.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {card.mapButtonLabel}
      </a>
    </article>
  );
}

export function EventDetails() {
  return (
    <section id="details" className={`section ${styles.wrap}`} aria-label="Event details">
      <div className="section-inner">
        <span className="section-kicker section-kicker--light">The Voyage Plan</span>
        <h2 className={`section-title ${styles.title}`}>Event Details</h2>

        <div id="map" className={styles.grid}>
          <DetailCard card={{ icon: 'church', ...cfg.ceremony }} />
          <DetailCard card={{ icon: 'party', ...cfg.reception }} />
        </div>
      </div>
      <Waves color="var(--ocean-deep)" />
    </section>
  );
}
