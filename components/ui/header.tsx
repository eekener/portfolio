'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const links = [
    { label: 'Services', href: isHome ? '#services' : '/#services' },
    { label: 'Work',     href: isHome ? '#work'     : '/#work' },
    { label: 'Skills',   href: isHome ? '#skills'   : '/#skills' },
    { label: 'Blog',     href: '/blog' },
  ];

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
        {
          'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow':
            scrolled && !open,
          'bg-background/90': open,
        },
      )}
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
          { 'md:px-2': scrolled },
        )}
      >
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity group" aria-label="Ekener.dev home">
          <EkenerMark />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link, i) => (
            <Link key={i} className={buttonVariants({ variant: 'ghost', size: 'sm' })} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-1">
            <Link href={isHome ? '#contact' : '/#contact'}>Contact</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={cn(
          'bg-background/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-4',
          )}
        >
          <div className="grid gap-y-2">
            {links.map((link) => (
              <Link
                key={link.label}
                className={buttonVariants({ variant: 'ghost', className: 'justify-start' })}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button className="w-full" asChild>
            <Link href={isHome ? '#contact' : '/#contact'} onClick={() => setOpen(false)}>
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

// ─── Logo components ──────────────────────────────────────

/**
 * Geometric mark: three stacked bars of descending width,
 * reading as both the letter "E" and a signal/data motif.
 * The top and bottom bars share full width; the middle is shorter,
 * creating asymmetry that feels intentional and modern.
 */
function EkenerMark() {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      {/* Top bar — full width */}
      <rect x="0" y="0"    width="20" height="3.5" rx="1.5" fill="currentColor" />
      {/* Middle bar — 60%, offset right to break symmetry */}
      <rect x="0" y="6.75" width="12" height="3.5" rx="1.5" fill="currentColor" opacity="0.5" />
      {/* Bottom bar — full width */}
      <rect x="0" y="13.5" width="20" height="3.5" rx="1.5" fill="currentColor" />
    </svg>
  );
}

