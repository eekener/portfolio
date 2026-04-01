'use client';

import Script from 'next/script';
import React from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const [hasConsent, setHasConsent] = React.useState(false);

  React.useEffect(() => {
    const check = () => {
      try {
        setHasConsent(localStorage.getItem('cookie-consent') === 'accepted');
      } catch {
        // localStorage blocked by Safari privacy settings — no analytics
      }
    };
    check();

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') check();
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
