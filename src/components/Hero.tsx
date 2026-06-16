import { invitationConfig as cfg } from '../config/invitationConfig';
import { ImageWithFallback } from './ImageWithFallback';
import { Clouds } from './decor/Clouds';
import { Sparkles } from './decor/Sparkles';
import { ShipSilhouette } from './decor/ShipSilhouette';
import { Waves } from './decor/Waves';
import { scrollToSection } from '../utils/scrollToSection';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <header id="home" className={styles.hero}>
      <div className={styles.sunburst} aria-hidden="true" />
      <Clouds count={4} />
      <Sparkles count={8} />

      <div className={styles.content}>
        <p className={styles.kicker}>{cfg.hero.kicker}</p>
        <h1 className={styles.headline}>{cfg.hero.headline}</h1>
        <p className={styles.subheadline}>{cfg.hero.subheadline}</p>
        <p className={styles.tagline}>{cfg.hero.tagline}</p>

        <ImageWithFallback
          src={cfg.hero.imageSrc}
          alt={cfg.hero.imageAlt}
          placeholderLabel="Hero artwork coming soon — add hero-luffy-baby-placeholder.png"
          aspectRatio="16 / 9"
          icon="ship"
          lazy={false}
          className={styles.art}
        />

        <div className={styles.ctas}>
          <button
            type="button"
            className="btn"
            onClick={() => scrollToSection(cfg.hero.ctaPrimary.targetId)}
          >
            {cfg.hero.ctaPrimary.label}
          </button>
          <button
            type="button"
            className="btn btn--crimson"
            onClick={() => scrollToSection(cfg.hero.ctaSecondary.targetId)}
          >
            {cfg.hero.ctaSecondary.label}
          </button>
        </div>

        <p className={styles.date}>
          {cfg.event.dateDisplay} · {cfg.ceremony.time} · {cfg.ceremony.address}
        </p>
      </div>

      <ShipSilhouette />
      <Waves color="var(--ocean-deep)" />
    </header>
  );
}
