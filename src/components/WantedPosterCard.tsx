import type { CrewMember } from '../config/invitationConfig';
import styles from './WantedPosterCard.module.css';

/** Family-friendly anime bounty poster for a crew member. */
export function WantedPosterCard({ member }: { member: CrewMember }) {
  return (
    <article className={styles.poster} data-reveal="">
      <p className={styles.wanted}>Wanted</p>
      <div className={styles.portrait} aria-hidden="true">
        <svg viewBox="0 0 64 64" className={styles.portraitIcon}>
          {/* simple friendly pirate face glyph */}
          <circle cx="32" cy="34" r="16" fill="none" stroke="currentColor" strokeWidth="3" />
          <path
            d="M14 30c2-12 10-18 18-18s16 6 18 18l-18-6Z"
            fill="currentColor"
            opacity="0.85"
          />
          <circle cx="26" cy="34" r="2.4" fill="currentColor" />
          <circle cx="38" cy="34" r="2.4" fill="currentColor" />
          <path d="M26 42q6 5 12 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.role}>Role: {member.role}</p>
      <p className={styles.line}>Wanted for: {member.wantedFor}</p>
      <p className={styles.bounty}>Bounty: {member.bounty}</p>
    </article>
  );
}
