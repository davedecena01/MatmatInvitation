import { useEffect, useRef, useState } from 'react';
import { invitationConfig as cfg } from '../config/invitationConfig';
import styles from './AudioToggle.module.css';

/**
 * Optional background-music toggle. Never autoplays. Renders nothing at all
 * while public/audio/adventure-theme.mp3 is missing, so the site degrades
 * gracefully. To remove music entirely: delete this component and its single
 * usage in App.tsx (or set audio.enabled = false in the config).
 */
export function AudioToggle() {
  const [available, setAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!cfg.audio.enabled) return;
    const audio = new Audio();
    audio.preload = 'metadata';
    audio.loop = true;
    const onReady = () => setAvailable(true);
    const onError = () => setAvailable(false);
    audio.addEventListener('loadedmetadata', onReady);
    audio.addEventListener('error', onError);
    audio.src = cfg.audio.src;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', onReady);
      audio.removeEventListener('error', onError);
      audioRef.current = null;
    };
  }, []);

  if (!available) return null;

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        // Browser blocked playback — keep the button, stay paused.
        setPlaying(false);
      }
    }
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? 'Pause adventure music' : cfg.audio.buttonLabel}
    >
      <span className={styles.icon} aria-hidden="true">
        {playing ? '❚❚' : '♪'}
      </span>
      <span className={styles.text}>
        {playing ? 'Pause Music' : cfg.audio.buttonLabel}
      </span>
    </button>
  );
}
