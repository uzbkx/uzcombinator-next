'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * Drop this anywhere in a client component tree to activate
 * Lenis smooth-scroll for that page. No wrapper div — pure effect.
 */
export function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
