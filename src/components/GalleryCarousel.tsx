import { useEffect, useRef, useState } from 'react';
import { invitationConfig as cfg } from '../config/invitationConfig';
import { ImageWithFallback } from './ImageWithFallback';
import { Waves } from './decor/Waves';
import styles from './GalleryCarousel.module.css';

export function GalleryCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const items = cfg.gallery.items;

  // Track which slide is centered (drives the dots, follows native swipes too).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const tr = track.getBoundingClientRect();
      const center = tr.left + tr.width / 2;
      let best = 0;
      let bestDist = Infinity;
      Array.from(track.children).forEach((slide, i) => {
        const r = slide.getBoundingClientRect();
        const dist = Math.abs(r.left + r.width / 2 - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    const slide = track.children[clamped] as HTMLElement | undefined;
    slide?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <section id="gallery" className={`section ${styles.wrap}`} aria-label="Photo gallery">
      <div className="section-inner">
        <span className="section-kicker section-kicker--light">{cfg.gallery.subtitle}</span>
        <h2 className={`section-title ${styles.title}`}>{cfg.gallery.title}</h2>

        <div className={styles.carousel} data-reveal="">
          <ul ref={trackRef} className={styles.track} aria-label="Gallery slides">
            {items.map((item, i) => (
              <li key={item.src} className={styles.slide} aria-label={`Slide ${i + 1} of ${items.length}`}>
                <figure className={styles.posterFrame}>
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    placeholderLabel={`Photo coming soon — gallery-0${i + 1}.png`}
                    aspectRatio="4 / 5"
                    icon="anchor"
                  />
                  <figcaption className={styles.caption}>{item.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <div className={styles.dots} role="tablist" aria-label="Choose slide">
              {items.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => goTo(active + 1)}
              disabled={active === items.length - 1}
              aria-label="Next photo"
            >
              ›
            </button>
          </div>
        </div>
      </div>
      <Waves color="var(--parchment)" />
    </section>
  );
}
