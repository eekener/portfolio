'use client';

import { useState } from 'react';
import { Link2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ShareButtonsProps {
  url: string;
  title: string;
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function openPopup(href: string, name: string) {
  const w = 600, h = 540;
  const left = Math.round(window.screen.width / 2 - w / 2);
  const top = Math.round(window.screen.height / 2 - h / 2);
  window.open(href, name, `width=${w},height=${h},left=${left},top=${top},toolbar=0,menubar=0,scrollbars=1`);
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareOnX = () => {
    openPopup(
      `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      'share-x',
    );
  };

  const shareOnLinkedIn = () => {
    openPopup(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      'share-linkedin',
    );
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btnClass =
    'inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer';

  return (
    <div className="mt-14 pt-8 border-t border-border">
      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
        Share this article
      </p>
      <div className="flex flex-wrap gap-3">
        <button onClick={shareOnX} aria-label="Share on X / Twitter" className={btnClass}>
          <XIcon className="h-4 w-4" />
          Share on X
        </button>

        <button onClick={shareOnLinkedIn} aria-label="Share on LinkedIn" className={btnClass}>
          <LinkedInIcon className="h-4 w-4" />
          Share on LinkedIn
        </button>

        <button
          onClick={copyLink}
          aria-label={copied ? 'Link copied' : 'Copy link to clipboard'}
          className={cn(btnClass, copied && 'border-green-500/40 text-green-400 hover:text-green-400')}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" aria-hidden="true" />
              Copied!
            </>
          ) : (
            <>
              <Link2 className="h-4 w-4" aria-hidden="true" />
              Copy Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}
