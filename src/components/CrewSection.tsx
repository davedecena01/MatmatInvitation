import { invitationConfig as cfg, type CrewMember } from '../config/invitationConfig';
import { WantedPosterCard } from './WantedPosterCard';
import { Waves } from './decor/Waves';
import styles from './CrewSection.module.css';

function CrewGroup({ title, members }: { title: string; members: CrewMember[] }) {
  return (
    <div className={styles.group}>
      <h3 className={styles.groupTitle}>{title}</h3>
      <div className={styles.grid}>
        {members.map((member, i) => (
          <WantedPosterCard key={`${member.name}-${i}`} member={member} />
        ))}
      </div>
    </div>
  );
}

export function CrewSection() {
  return (
    <section id="crew" className={`section ${styles.wrap}`} aria-label="Family and godparents">
      <div className="section-inner">
        <span className="section-kicker section-kicker--light">{cfg.crew.subtitle}</span>
        <h2 className={`section-title ${styles.title}`}>{cfg.crew.title}</h2>

        <CrewGroup title="The Captains" members={cfg.crew.parents} />
        <CrewGroup title="The Elder Pirates" members={cfg.crew.grandparents} />
      </div>
      <Waves color="var(--parchment)" />
    </section>
  );
}
