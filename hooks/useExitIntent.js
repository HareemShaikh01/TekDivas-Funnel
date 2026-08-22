// hooks/useExitIntent.js
'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

export function useExitIntent({
  delay = 4000,              // ms before it's allowed to arm
  storageKey = 'exitIntentShown',
  scrollThreshold = 0.25,    // must scroll 25% down before mobile scroll-up counts
} = {}) {
  const [show, setShow] = useState(false);
  const armed = useRef(false);
  const fired = useRef(false);

  const trigger = useCallback(() => {
    if (fired.current || sessionStorage.getItem(storageKey)) return;
    fired.current = true;
    sessionStorage.setItem(storageKey, '1');
    setShow(true);
  }, [storageKey]);

  useEffect(() => {
    if (sessionStorage.getItem(storageKey)) return;

    const armTimer = setTimeout(() => (armed.current = true), delay);

    // Desktop: mouse leaves toward the top of the viewport
    const onMouseLeave = (e) => {
      if (armed.current && e.clientY <= 0) trigger();
    };

    // Mobile: intercept first back-press only
    window.history.pushState({ guard: true }, '');
    const onPopState = () => {
      if (fired.current || !armed.current) return; // let it navigate normally
      trigger();
      window.history.pushState({ guard: true }, '');
    };

    // Mobile: fast upward scroll near top after decent scroll depth
    let lastY = window.scrollY;
    let lastT = Date.now();
    const onScroll = () => {
      if (!armed.current) return;
      const y = window.scrollY;
      const t = Date.now();
      const velocity = (lastY - y) / (t - lastT || 1);
      const depth = y / (document.body.scrollHeight - window.innerHeight);
      if (depth > scrollThreshold && y < 150 && velocity > 0.6) trigger();
      lastY = y;
      lastT = t;
    };

    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('popstate', onPopState);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(armTimer);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('scroll', onScroll);
    };
  }, [delay, storageKey, scrollThreshold, trigger]);

  return { show, close: () => setShow(false) };
}