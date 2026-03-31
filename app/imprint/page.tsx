import type { Metadata } from 'next';
import { Header } from '@/components/ui/header';
import { NeoMinimalFooter } from '@/components/ui/neo-minimal-footer';

export const metadata: Metadata = {
  title: 'Imprint — Emre Ekener',
  description: 'Legal notice and imprint for ekener.dev',
};

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 md:py-24">

        <div className="mb-12">
          <span className="text-sm text-muted-foreground font-mono tracking-widest uppercase">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">Imprint</h1>
          <p className="text-muted-foreground mt-4 font-mono text-sm">
            Legal notice pursuant to § 5 TMG (German Telemedia Act)
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-foreground/80">

          {/* Contact */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Contact Information</h2>
            <address className="not-italic border border-border rounded-lg p-4 font-mono text-xs text-muted-foreground leading-7">
              <strong className="text-foreground text-sm">Emre Ekener</strong><br />
              Freelance Web Developer<br />
              Eichtalstraße 20<br />
              38114 Braunschweig<br />
              Germany<br /><br />
              Phone:{' '}
              <a href="tel:+4917682730479" className="text-foreground hover:underline">
                +49 176 82730479
              </a><br />
              Email:{' '}
              <a href="mailto:emre@ekener.dev" className="text-foreground hover:underline">
                emre@ekener.dev
              </a>
            </address>
          </section>

          {/* Responsible for content */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Responsible for Content
            </h2>
            <p>
              Responsible for editorial content pursuant to § 18(2) MStV
              (German Interstate Media Treaty):
            </p>
            <address className="not-italic mt-3 border border-border rounded-lg p-4 font-mono text-xs text-muted-foreground leading-6">
              Emre Ekener<br />
              Eichtalstraße 20<br />
              38114 Braunschweig<br />
              Germany
            </address>
          </section>

          {/* Online Dispute Resolution */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Online Dispute Resolution
            </h2>
            <p>
              The European Online Dispute Resolution (ODR) platform is provided by the European
              Commission to provide access to quality dispute resolution tools. You can visit this
              platform at{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2"
              >
                ec.europa.eu/consumers/odr
              </a>.
            </p>
            <p className="mt-3">
              I am not obliged to take part in dispute resolution proceedings before a consumer
              arbitration board, nor do I take part in such proceedings.
            </p>
          </section>

          {/* Liability for Content */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Liability for Content</h2>
            <p>
              The content of this website has been compiled with meticulous care and to the best of
              my knowledge. However, I cannot assume any liability for the up-to-dateness,
              completeness, or accuracy of any of the pages.
            </p>
            <p className="mt-3">
              Pursuant to § 7(1) TMG, I am responsible for my own content on these pages in
              accordance with general law. However, pursuant to §§ 8 to 10 TMG, I am not under any
              obligation to monitor external information provided or stored on this website. Once I
              am made aware of a specific legal infringement, I will immediately remove the content
              in question. Any liability in this respect will only be incurred from the point in time
              at which the infringement becomes known.
            </p>
          </section>

          {/* Liability for Links */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Liability for Links</h2>
            <p>
              This website contains links to external third-party websites over which I have no
              control. Therefore, I cannot accept any liability for the content of these external
              websites. The respective provider or operator is always responsible for the content of
              any linked site.
            </p>
            <p className="mt-3">
              The linked sites were checked for possible legal infringements at the time of linking
              and no illegal content was detectable. However, permanent monitoring of the content of
              linked pages is not reasonable without concrete evidence of a legal infringement. I
              will immediately remove any links upon becoming aware of legal infringements.
            </p>
          </section>

          {/* Copyright */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Copyright</h2>
            <p>
              The contents and works created by the site operator on these pages are subject to
              German copyright law. Duplication, processing, distribution, or any form of
              commercialisation of such material beyond the scope of copyright law shall require
              the prior written consent of its respective author or creator. Downloads and copies
              of this site are only permitted for private, non-commercial use.
            </p>
            <p className="mt-3">
              Where content on this site was not created by the operator, the copyrights of third
              parties are respected. Third-party content is identified as such. Should you become
              aware of a copyright infringement, please inform me accordingly. Upon notification
              of infringements, I will remove such content immediately.
            </p>
          </section>

        </div>
      </main>
      <NeoMinimalFooter />
    </div>
  );
}
