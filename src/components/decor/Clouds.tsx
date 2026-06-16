import styles from './Clouds.module.css';

/** A layer of slowly drifting cartoon clouds. Purely decorative. */
export function Clouds({ count = 4 }: { count?: number }) {
  return (
    <div className={styles.clouds} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 120 60"
          className={`${styles.cloud} ${styles[`c${(i % 4) + 1}`]}`}
        >
          <path
            d="M25 48a14 14 0 0 1 3-27 19 19 0 0 1 36-6 15 15 0 0 1 22 12 13 13 0 0 1-4 21Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}
