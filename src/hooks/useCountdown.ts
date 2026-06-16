import { useEffect, useState } from 'react';

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

function compute(targetMs: number): CountdownState {
  const diff = targetMs - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    isComplete: false,
  };
}

/** Live countdown to a fixed UTC instant (ISO string, e.g. '2026-08-11T02:00:00Z'). */
export function useCountdown(targetUTC: string): CountdownState {
  const targetMs = Date.parse(targetUTC);
  const [state, setState] = useState(() => compute(targetMs));

  useEffect(() => {
    if (Number.isNaN(targetMs)) return;
    const id = window.setInterval(() => {
      const next = compute(targetMs);
      setState(next);
      if (next.isComplete) window.clearInterval(id);
    }, 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  return state;
}
