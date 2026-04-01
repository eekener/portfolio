import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { CookieConsent } from '@/components/ui/cookie-consent';
import { GoogleAnalytics } from '@/components/ui/google-analytics';
import Script from 'next/script';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ekener.dev'),
  title: {
    default: 'Emre Ekener — WordPress Developer & Designer',
    template: '%s | Emre Ekener',
  },
  description:
    'Freelance WordPress developer based in Germany. I build fast, accessible, and beautifully crafted WordPress websites and WooCommerce stores.',
  keywords: [
    'WordPress developer',
    'WooCommerce developer',
    'freelance WordPress developer',
    'WordPress speed optimisation',
    'WordPress developer Germany',
    'custom WordPress themes',
    'WordPress maintenance',
  ],
  authors: [{ name: 'Emre Ekener', url: 'https://ekener.dev' }],
  creator: 'Emre Ekener',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://ekener.dev',
    siteName: 'Emre Ekener — WordPress Developer',
    title: 'Emre Ekener — WordPress Developer & Designer',
    description:
      'Freelance WordPress developer based in Germany. I build fast, accessible, and beautifully crafted WordPress websites and WooCommerce stores.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emre Ekener — WordPress Developer & Designer',
    description:
      'Freelance WordPress developer based in Germany. I build fast, accessible, and beautifully crafted WordPress websites and WooCommerce stores.',
    creator: '@EmreEkener07',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Skip to main content — WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[70] focus-visible:px-4 focus-visible:py-2 focus-visible:bg-background focus-visible:border focus-visible:border-border focus-visible:rounded-md focus-visible:text-sm focus-visible:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Skip to main content
        </a>
        {/* Temporary diagnostic: captures JS errors before React hydration */}
        <Script id="error-capture" strategy="beforeInteractive">{`
          (function() {
            window.__errors = [];
            function showErr(msg, src, line, col, err) {
              window.__errors.push(msg);
              var el = document.getElementById('__err_overlay');
              if (!el) {
                el = document.createElement('div');
                el.id = '__err_overlay';
                el.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;background:#0a0a0a;color:#ff6b6b;font:12px/1.6 monospace;padding:2rem;overflow:auto;white-space:pre-wrap;word-break:break-all;';
                el.innerHTML = '<b style="color:#fff;font-size:14px;">ekener.dev — JS diagnostic</b>\\n\\n';
                document.body ? document.body.appendChild(el) : document.addEventListener('DOMContentLoaded', function(){ document.body.appendChild(el); });
              }
              el.innerHTML += 'MSG: ' + msg + '\\n' + (err && err.stack ? 'STACK: ' + err.stack : '') + '\\n--- src: ' + src + ':' + line + ':' + col + '\\n\\n';
            }
            window.onerror = function(msg, src, line, col, err) { showErr(msg, src, line, col, err); return false; };
            window.onunhandledrejection = function(e) { showErr('UnhandledRejection: ' + (e.reason && e.reason.stack ? e.reason.stack : String(e.reason)), '(promise)', 0, 0, null); };
          })();
        `}</Script>
        {children}
        <CookieConsent />
        <GoogleAnalytics measurementId="G-8VJYJ537QT" />
      </body>
    </html>
  );
}
