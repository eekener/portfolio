'use client';

import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const show = () => {
      try {
        const stored = localStorage.getItem('cookie-consent');
        if (!stored) setVisible(true);
      } catch {
        // localStorage blocked by Safari privacy settings — skip consent banner
      }
    };
    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void })
        .requestIdleCallback(show, { timeout: 3000 });
    } else {
      setTimeout(show, 3000);
    }
  }, []);

  const respond = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem('cookie-consent', value);
      window.dispatchEvent(new StorageEvent('storage', { key: 'cookie-consent', newValue: value }));
    } catch {
      // localStorage blocked — ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-border bg-background/95 backdrop-blur-md shadow-lg"
    >
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 py-4 md:py-5">
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
          We use cookies and Google Analytics to understand how visitors interact with this site.
          By clicking &quot;Accept&quot;, you consent to the use of analytics cookies.{' '}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => respond('declined')}
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
          >
            Decline
          </button>
          <button
            onClick={() => respond('accepted')}
            className={cn(buttonVariants({ size: 'sm' }))}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
