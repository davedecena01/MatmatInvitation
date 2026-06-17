import { useCallback, useEffect, useRef, useState } from 'react';
import { invitationConfig as cfg } from '../config/invitationConfig';
import { ImageWithFallback } from './ImageWithFallback';
import { Waves } from './decor/Waves';
import styles from './GalleryCarousel.module.css';

const AUTOPLAY_MS = 4200;

interface SlideStyle {
  transform: string;
  opacity: number;
  zIndex: number;
  filter: string;
  clickable: boolean;
}

function getSlideStyle(off: number): SlideStyle {
  const a = Math.abs(off);
  const s = off < 0 ? -1 : 1;
  if (a === 0) {
    return {
      transform: 'translateX(-50%) scale(1) rotateY(0deg)',
      opacity: 1, zIndex: 30,
      filter: 'drop-shadow(0 18px 26px rgba(8,16,36,.6))',
      clickable: false,
    };
  }
  if (a === 1) {
    return {
      transform: `translateX(calc(-50% + ${s * 60}%)) scale(0.82) rotateY(${-s * 20}deg)`,
      opacity: 0.92, zIndex: 20,
      filter: 'drop-shadow(0 12px 18px rgba(8,16,36,.5)) brightness(.86)',
      clickable: true,
    };
  }
  if (a === 2) {
    return {
      transform: `translateX(calc(-50% + ${s * 108}%)) scale(0.64) rotateY(${-s * 28}deg)`,
      opacity: 0.5, zIndex: 10,
      filter: 'drop-shadow(0 10px 14px rgba(8,16,36,.45)) brightness(.72)',
      clickable: true,
    };
  }
  return {
    transform: `translateX(calc(-50% + ${s * 150}%)) scale(0.52) rotateY(${-s * 30}deg)`,
    opacity: 0, zIndex: 1, filter: 'brightness(.7)', clickable: false,
  };
}

export function GalleryCarousel() {
  const items = cfg.gallery.items;
  const n = items.length;
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const touchStartRef = useRef(0);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const startAuto = useCallback(() => {
    clearInterval(timerRef.current);
    if (reduced) return;
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % n);
    }, AUTOPLAY_MS);
  }, [n, reduced]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, [startAuto]);

  const goTo = useCallback((i: number) => {
    setIndex(((i % n) + n) % n);
    startAuto();
  }, [n, startAuto]);

  const active = items[index];
  const sub = `Log ${String(index + 1).padStart(2, '0')}`;
  const counter = `${String(index + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`;

  return (
    <section id="gallery" className={`section ${styles.wrap}`} aria-label="Photo gallery">
      <div className="section-inner">
        <span className="section-kicker section-kicker--light">{cfg.gallery.subtitle}</span>
        <h2 className={`section-title ${styles.title}`}>{cfg.gallery.title}</h2>

        <div className={styles.carousel} data-reveal="">
          {/* 3D Stage */}
          <div
            className={styles.stage}
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
            onTouchStart={(e) => {
              pausedRef.current = true;
              touchStartRef.current = e.touches[0]?.clientX ?? 0;
            }}
            onTouchEnd={(e) => {
              const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartRef.current;
              if (Math.abs(dx) > 40) { dx < 0 ? goTo(index + 1) : goTo(index - 1); }
              pausedRef.current = false;
            }}
          >
            {items.map((item, i) => {
              let off = i - index;
              if (off > n / 2) off -= n;
              if (off < -n / 2) off += n;
              const { transform, opacity, zIndex, filter, clickable } = getSlideStyle(off);
              return (
                <div
                  key={item.src}
                  className={`${styles.slide} ${reduced ? styles.slideNoAnim : ''}`}
                  style={{ transform, opacity, zIndex, pointerEvents: clickable ? 'auto' : 'none', cursor: clickable ? 'pointer' : 'default' }}
                  onClick={clickable ? () => goTo(i) : undefined}
                  aria-hidden={opacity === 0}
                >
                  <div className={styles.posterWrap} style={{ filter }}>
                    <figure className={styles.posterFrame}>
                      <ImageWithFallback
                        src={item.src}
                        alt={item.alt}
                        placeholderLabel={`Photo coming soon — gallery-0${i + 1}.png`}
                        aspectRatio="360 / 510"
                        icon="anchor"
                      />
                    </figure>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Caption */}
          <div className={styles.captionArea}>
            <p className={styles.captionSub}>{sub} &middot; {counter}</p>
            <p className={styles.captionMain}>&ldquo;{active.caption}&rdquo;</p>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => goTo(index - 1)}
              aria-label="Previous photo"
            >
              &#10094;
            </button>
            <div className={styles.dots} role="tablist" aria-label="Choose slide">
              {items.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => goTo(index + 1)}
              aria-label="Next photo"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
      <Waves color="var(--parchment)" />
    </section>
  );
}
