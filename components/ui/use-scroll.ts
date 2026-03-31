'use client';
import React from 'react';

export function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial position
    setScrolled(window.scrollY > threshold);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
