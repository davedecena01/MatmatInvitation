import { useEffect, useRef, useState } from 'react';
import { invitationConfig as cfg } from '../config/invitationConfig';
import { scrollToSection } from '../utils/scrollToSection';
import styles from './FloatingNav.module.css';

export function FloatingNav() {
  const [open, setOpen] = useState(false);
  const fabRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLButtonElement>(null);

  // Close on Escape; move focus into / back out of the overlay.
  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        fabRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const navigate = (targetId: string) => {
    setOpen(false);
    // Let the overlay close before scrolling so layout is stable.
    requestAnimationFrame(() => scrollToSection(targetId));
  };

  return (
    <>
      <button
        ref={fabRef}
        type="button"
        className={styles.fab}
        aria-expanded={open}
        aria-controls="nav-overlay"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 64 64" className={styles.compassIcon} aria-hidden="true">
          <circle cx="32" cy="32" r="26" fill="var(--parchment)" stroke="currentColor" strokeWidth="4" />
          <circle cx="32" cy="32" r="19" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M45 19 36 36l-17 9 9-17Z" fill="var(--crimson)" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="32" cy="32" r="3" fill="currentColor" />
        </svg>
      </button>

      {open && (
        <div
          id="nav-overlay"
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false);
              fabRef.current?.focus();
            }
          }}
        >
          <nav className={styles.panel}>
            <p className={styles.panelTitle}>Chart Your Course</p>
            <ul className={styles.list}>
              {cfg.nav.map((item, i) => (
                <li key={item.targetId}>
                  <button
                    ref={i === 0 ? firstLinkRef : undefined}
                    type="button"
                    className={styles.link}
                    style={{ animationDelay: `${i * 45}ms` }}
                    onClick={() => navigate(item.targetId)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={styles.close}
              onClick={() => {
                setOpen(false);
                fabRef.current?.focus();
              }}
            >
              Close
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
