import { invitationConfig as cfg } from '../config/invitationConfig';
import { ImageWithFallback } from './ImageWithFallback';
import styles from './HeroArtwork.module.css';

/** Showcase section for the baby photo / generated anime artwork. */
export function HeroArtwork() {
  return (
    <section className={`section ${styles.wrap}`} aria-label="Our little captain">
      <div className="section-inner">
        <span className="section-kicker">Captain on Deck</span>
        <h2 className="section-title">{cfg.artwork.title}</h2>
        <figure className={styles.figure} data-reveal="">
          <ImageWithFallback
            src={cfg.artwork.imageSrc}
            alt={cfg.artwork.imageAlt}
            placeholderLabel="Captain's portrait coming soon"
            aspectRatio="4 / 5"
            icon="compass"
            className={styles.art}
          />
          <figcaption className={styles.caption}>{cfg.artwork.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
