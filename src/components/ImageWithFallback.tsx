import { useState } from 'react';
import styles from './ImageWithFallback.module.css';

interface Props {
  src: string;
  alt: string;
  /** Friendly label shown on the placeholder card while the asset is missing. */
  placeholderLabel: string;
  /** CSS aspect-ratio value, e.g. '16 / 9' or '4 / 5'. Prevents layout shift. */
  aspectRatio?: string;
  icon?: 'anchor' | 'compass' | 'chest' | 'ship';
  className?: string;
  lazy?: boolean;
}

const ICONS: Record<NonNullable<Props['icon']>, string> = {
  // Original, simple decorative glyphs drawn as SVG paths.
  anchor:
    'M32 10a6 6 0 1 1-.1 0Zm0 12v28m0 0c-10 0-18-7-19-16h6c1 6 6 10 13 10s12-4 13-10h6c-1 9-9 16-19 16Zm-10-20h20',
  compass:
    'M32 8a24 24 0 1 0 0 48a24 24 0 0 0 0-48Zm0 6v6m0 24v6m18-18h-6m-24 0h-6m26-8-8 16-4-12Z',
  chest:
    'M14 26h36v22H14Zm0 0a18 10 0 0 1 36 0M30 34h4v6h-4Zm-16-8v22m36-22v22',
  ship: 'M12 44h40l-6 8H18Zm20-30v26m0-26 14 20H32Zm0 6L20 36h12',
};

/**
 * Renders an image, swapping to a themed parchment placeholder card if the
 * file is missing — the site looks finished even before assets exist.
 */
export function ImageWithFallback({
  src,
  alt,
  placeholderLabel,
  aspectRatio = '4 / 5',
  icon = 'anchor',
  className,
  lazy = true,
}: Props) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`${styles.frame} ${className ?? ''}`}
      style={{ aspectRatio }}
    >
      {errored ? (
        <div className={styles.placeholder} role="img" aria-label={alt}>
          <svg viewBox="0 0 64 64" className={styles.icon} aria-hidden="true">
            <path
              d={ICONS[icon]}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.label}>{placeholderLabel}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={lazy ? 'lazy' : 'eager'}
          className={styles.img}
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}
