import { useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Reveals every element marked with [data-reveal] as it scrolls into view
 * by adding the .revealed class (styles live in global.css).
 * With reduced motion enabled, everything is revealed immediately.
 */
export function useScrollReveal(): void {
  const reduced = useReducedMotion();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));

    if (reduced || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [reduced]);
}
