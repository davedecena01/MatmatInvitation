import { useState } from 'react';
import { invitationConfig as cfg } from '../config/invitationConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';
import skullFlagGif from '../../assets/ui/skull-flag.gif';
import robinGif from '../../assets/char/robin.gif';
import styles from './DressCode.module.css';

export function DressCode() {
  const [dealt, setDealt] = useState(false);
  const reduced = useReducedMotion();

  const handleDeal = () => setDealt(true);

  return (
    <section id="dresscode" className={`section ${styles.wrap}`} aria-label="Dress code">
      <div className="section-inner">
        <span className="section-kicker">{cfg.dressCode.subtitle}</span>
        <h2 className={`section-title ${styles.title}`}>{cfg.dressCode.title}</h2>

        <div className={styles.characterSlot} data-reveal="">
          <div className={styles.characterCircle}>
            <img src={robinGif} alt="Robin" className={styles.characterImg} />
          </div>
          <p className={styles.characterLabel}>ROBIN — FASHION OF THE HIGH SEAS</p>
        </div>

        <div className={styles.stage}>
          {/* Deck — fades + scales out after deal */}
          <div
            className={`${styles.deck} ${dealt ? styles.deckOut : ''}`}
            onClick={!dealt ? handleDeal : undefined}
            role={!dealt ? 'button' : undefined}
            tabIndex={!dealt ? 0 : undefined}
            aria-label={!dealt ? cfg.dressCode.prompt : undefined}
            onKeyDown={
              !dealt
                ? (e) => { if (e.key === 'Enter' || e.key === ' ') handleDeal(); }
                : undefined
            }
          >
            <div className={styles.deckCards} aria-hidden="true">
              <div className={`${styles.deckCard} ${styles.deckCard1}`} />
              <div className={`${styles.deckCard} ${styles.deckCard2}`} />
              <div className={`${styles.deckCard} ${styles.deckCardFront}`}>
                <div className={styles.deckBorder} />
                <img src={skullFlagGif} alt="" className={styles.deckFlag} />
                <span className={styles.deckLabel}>DRESS CODE</span>
              </div>
            </div>
            <div className={styles.prompt} aria-hidden="true">
              ☞ {cfg.dressCode.prompt}
            </div>
          </div>

          {/* Grid — fades in after deal */}
          <div
            className={`${styles.grid} ${dealt ? styles.gridVisible : ''}`}
            aria-live="polite"
          >
            {cfg.dressCode.items.map((item, i) => (
              <div
                key={item.title}
                className={styles.card}
                style={
                  dealt && !reduced
                    ? {
                        animation: `dealCard 0.6s cubic-bezier(.18,.9,.24,1) ${(i * 0.12).toFixed(2)}s both`,
                      }
                    : undefined
                }
              >
                <div
                  className={styles.badge}
                  style={{ animationDelay: `${(i * 0.4).toFixed(1)}s` }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
