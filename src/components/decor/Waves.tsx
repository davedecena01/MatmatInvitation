import styles from './Waves.module.css';

interface Props {
  /** 'top' flips the waves so they sit at the top of a section. */
  position?: 'top' | 'bottom';
  /** Wave fill — defaults to deep ocean. */
  color?: string;
  className?: string;
}

const WAVE_PATH =
  'M0 60 Q 90 20 180 60 T 360 60 T 540 60 T 720 60 T 900 60 T 1080 60 T 1260 60 T 1440 60 V 120 H 0 Z';

/** Layered animated ocean waves used as section dividers. */
export function Waves({ position = 'bottom', color, className }: Props) {
  const fill = color ?? 'var(--ocean-deep)';
  return (
    <div
      className={`${styles.waves} ${position === 'top' ? styles.top : ''} ${className ?? ''}`}
      aria-hidden="true"
    >
      <div className={`${styles.layer} ${styles.slow}`}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d={WAVE_PATH} fill={fill} opacity="0.35" />
        </svg>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d={WAVE_PATH} fill={fill} opacity="0.35" />
        </svg>
      </div>
      <div className={`${styles.layer} ${styles.fast}`}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d={WAVE_PATH} fill={fill} />
        </svg>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d={WAVE_PATH} fill={fill} />
        </svg>
      </div>
    </div>
  );
}
