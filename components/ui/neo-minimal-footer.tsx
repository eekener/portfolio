'use client'

import React from 'react'

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function FooterMark() {
  return (
    <svg
      width="28"
      height="24"
      viewBox="0 0 20 17"
      fill="none"
      aria-hidden="true"
    >
      <rect x="0" y="0"    width="20" height="3.5" rx="1.5" fill="currentColor" />
      <rect x="0" y="6.75" width="12" height="3.5" rx="1.5" fill="currentColor" opacity="0.5" />
      <rect x="0" y="13.5" width="20" height="3.5" rx="1.5" fill="currentColor" />
    </svg>
  );
}

const SocialLinks = [
  { Icon: GithubIcon,   label: 'GitHub',      href: 'https://github.com/eekener' },
  { Icon: XIcon,        label: 'X (Twitter)', href: 'https://x.com/EmreEkener07' },
  { Icon: LinkedinIcon, label: 'LinkedIn',    href: 'https://www.linkedin.com/in/emre-ekener-396a31148/' },
]

export function NeoMinimalFooter() {
  return (
    <footer aria-label="Site footer" className="max-w-7xl mx-auto bg-card/10 border-t rounded-t-lg border-card/10 flex flex-wrap pt-16 pb-8 relative overflow-hidden">

      {/* Background Tech Pattern */}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <FooterMark />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Building fast, accessible, and beautifully crafted web experiences.
              Let&apos;s build something great together.
            </p>

          </div>

          {/* Links Columns */}
          {[
            { title: "Navigate", links: [
              { label: "Services", href: "/#services" },
              { label: "Work",     href: "/#work" },
              { label: "Skills",   href: "/#skills" },
              { label: "Blog",     href: "/blog" },
              { label: "Contact",  href: "/#contact" },
            ]},
            { title: "Legal", links: [
              { label: "Privacy",        href: "/privacy" },
              { label: "Imprint",        href: "/imprint" },
            ]},
            { title: "Connect", links: [
              { label: "Twitter",  href: "https://x.com/EmreEkener07" },
              { label: "GitHub",   href: "https://github.com/eekener" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/emre-ekener-396a31148/" },
              { label: "Email",    href: "mailto:emre@ekener.dev" },
            ]},
          ].map((section) => (
            <div key={section.title} className="col-span-6 md:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-mono font-semibold text-foreground/70 uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm font-mono text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group w-fit">
                      <span className="w-2 h-2 rounded-full bg-muted/90 group-hover:bg-cyan-400 transition-all group-hover:w-4 duration-200" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-600 font-mono">
            // © 2026 EKENER.DEV. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 border-r border-white/10 pr-6 mr-2">
              {SocialLinks.map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="text-gray-600 hover:text-white transition-colors">
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] uppercase font-medium text-green-500/80 tracking-wider">Available for Work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
