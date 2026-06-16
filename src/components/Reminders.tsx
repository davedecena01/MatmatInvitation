import { useState } from 'react';
import { invitationConfig as cfg } from '../config/invitationConfig';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Waves } from './decor/Waves';
import chopperGif from '../../assets/char/chopper.gif';
import styles from './Reminders.module.css';

export function Reminders() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const reduced = useReducedMotion();

  const toggle = (i: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="reminders" className={`section ${styles.wrap}`} aria-label="Event reminders">
      <div className="section-inner">
        <span className="section-kicker section-kicker--light">{cfg.reminders.subtitle}</span>
        <h2 className={`section-title ${styles.title}`}>{cfg.reminders.title}</h2>
        <p className={styles.hint}>☞ Tap an order to read it</p>

        <div className={styles.characterSlot} data-reveal="">
          <div className={styles.characterCircle}>
            <img src={chopperGif} alt="Chopper" className={styles.characterImg} />
          </div>
          <p className={styles.characterLabel}>CHOPPER — SHIP'S DOCTOR</p>
        </div>

        <div className={styles.list}>
          {cfg.reminders.items.map((reminder, i) => {
            const open = reduced || openItems.has(i);
            return (
              <div
                key={i}
                className={`${styles.item} ${open ? styles.itemOpen : ''}`}
                onClick={() => toggle(i)}
                role="button"
                aria-expanded={open}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') toggle(i);
                }}
                data-reveal=""
              >
                <div className={styles.header}>
                  <span
                    className={styles.badge}
                    style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }}
                    aria-hidden="true"
                  >
                    ✚
                  </span>
                  <span className={styles.itemTitle}>{reminder.title}</span>
                  <span
                    className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </div>
                <div className={styles.bodyWrap}>
                  <div className={styles.bodyInner}>
                    <p className={styles.body}>{reminder.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Waves color="var(--ocean-deep)" />
    </section>
  );
}
