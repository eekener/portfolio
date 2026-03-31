import type { Metadata } from 'next';
import { Header } from '@/components/ui/header';
import { NeoMinimalFooter } from '@/components/ui/neo-minimal-footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Emre Ekener',
  description: 'Privacy policy and data protection information for ekener.dev',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 md:py-24">

        <div className="mb-12">
          <span className="text-sm text-muted-foreground font-mono tracking-widest uppercase">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">Privacy Policy</h1>
          <p className="text-muted-foreground mt-4 font-mono text-sm">Last updated: March 2026</p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-foreground/80">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>
              This privacy policy explains how Emre Ekener (&quot;I&quot;, &quot;me&quot;, &quot;my&quot;) collects, uses,
              and protects your personal data when you visit this website, in accordance with the
              General Data Protection Regulation (GDPR) and applicable German data protection law.
            </p>
          </section>

          {/* 2. Data Controller */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. Data Controller</h2>
            <p>The controller responsible for the processing of personal data on this website is:</p>
            <address className="not-italic mt-3 border border-border rounded-lg p-4 font-mono text-xs text-muted-foreground leading-6">
              Emre Ekener<br />
              Freelance Web Developer<br />
              Eichtalstraße 20<br />
              38114 Braunschweig<br />
              Germany<br />
              <a href="mailto:emre@ekener.dev" className="text-foreground hover:underline">emre@ekener.dev</a>
            </address>
          </section>

          {/* 3. Data Collected */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. Data We Collect</h2>

            <h3 className="font-medium text-foreground mb-2">3.1 Server Log Data</h3>
            <p>
              When you visit this website, your browser automatically transmits the following data:
              anonymised IP address, date and time of access, URL accessed, referrer URL, browser
              type and version, and operating system. This data is processed on the legal basis of
              Art. 6(1)(f) GDPR (legitimate interests) to ensure the security and proper functioning
              of the website. Log data is deleted after 7 days.
            </p>

            <h3 className="font-medium text-foreground mb-2 mt-5">3.2 Contact by Email</h3>
            <p>
              If you contact me by email, I will process your name, email address, and any
              information you include in your message solely for the purpose of responding to your
              enquiry. Legal basis: Art. 6(1)(b) GDPR (pre-contractual measures) or
              Art. 6(1)(f) GDPR (legitimate interests). Data will be deleted as soon as it is no
              longer required to process your enquiry, unless a statutory retention obligation applies.
            </p>
          </section>

          {/* 4. Google Analytics */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4. Google Analytics</h2>
            <p>
              This website uses <strong className="text-foreground">Google Analytics 4</strong>, a
              web analytics service provided by Google LLC, 1600 Amphitheatre Parkway, Mountain View,
              CA 94043, USA (&quot;Google&quot;).
            </p>
            <p className="mt-3">
              Google Analytics uses cookies to collect information about how visitors use this website.
              The information generated about your use of this website — including your anonymised IP
              address — is transmitted to and stored by Google on servers in the United States.
            </p>
            <p className="mt-3">
              <strong className="text-foreground">IP anonymisation is enabled</strong> on this website.
              Google will truncate/anonymise the last octet of your IP address within the European
              Union prior to transmission. In exceptional cases only, the full IP address will be
              transmitted to a Google server in the USA and shortened there.
            </p>
            <p className="mt-3">
              <strong className="text-foreground">Legal basis:</strong> Google Analytics is only
              activated after you have given your explicit consent via the cookie consent banner
              (Art. 6(1)(a) GDPR). You may withdraw your consent at any time with effect for the future.
            </p>
            <div className="mt-4">
              <p className="font-medium text-foreground mb-2">Opt-out options:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Use the cookie consent banner on this website to decline analytics cookies</li>
                <li>
                  Install the{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-2"
                  >
                    Google Analytics opt-out browser add-on
                  </a>
                </li>
                <li>Disable cookies in your browser settings</li>
              </ul>
            </div>
            <p className="mt-3">
              A data processing agreement (DPA) pursuant to Art. 28 GDPR has been concluded with
              Google. For more information on how Google processes data, please refer to
              Google&apos;s{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2"
              >
                Privacy Policy
              </a>.
            </p>
          </section>

          {/* 5. Cookies */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. Cookies</h2>
            <p className="mb-4">
              Cookies are small text files stored on your device by your browser. This website uses
              the following cookies:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs font-mono" aria-label="Cookies used on this website">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-3 text-foreground">Cookie</th>
                    <th className="text-left px-4 py-3 text-foreground">Purpose</th>
                    <th className="text-left px-4 py-3 text-foreground">Duration</th>
                    <th className="text-left px-4 py-3 text-foreground">Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3"><code>cookie-consent</code></td>
                    <td className="px-4 py-3">Stores your cookie preferences</td>
                    <td className="px-4 py-3">1 year</td>
                    <td className="px-4 py-3">Necessary — Art. 6(1)(c) GDPR</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3"><code>_ga</code></td>
                    <td className="px-4 py-3">Google Analytics — distinguishes users</td>
                    <td className="px-4 py-3">2 years</td>
                    <td className="px-4 py-3">Consent — Art. 6(1)(a) GDPR</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3"><code>_ga_*</code></td>
                    <td className="px-4 py-3">Google Analytics — session state</td>
                    <td className="px-4 py-3">2 years</td>
                    <td className="px-4 py-3">Consent — Art. 6(1)(a) GDPR</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              You can block or delete cookies at any time through your browser settings. Please note
              that disabling cookies may affect the functionality of this website.
            </p>
          </section>

          {/* 6. Your Rights */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Your Rights Under the GDPR</h2>
            <p className="mb-3">You have the following rights regarding your personal data:</p>
            <ul className="space-y-2 ml-2">
              {[
                ['Right of access (Art. 15)', 'You may request a copy of the personal data I hold about you.'],
                ['Right to rectification (Art. 16)', 'You may request correction of inaccurate personal data.'],
                ['Right to erasure (Art. 17)', 'You may request deletion of your personal data ("right to be forgotten").'],
                ['Right to restriction (Art. 18)', 'You may request that I restrict the processing of your data.'],
                ['Right to object (Art. 21)', 'You may object to processing based on legitimate interests at any time.'],
                ['Right to data portability (Art. 20)', 'You may request your data in a structured, machine-readable format.'],
                ['Right to withdraw consent (Art. 7(3))', 'Where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing.'],
              ].map(([right, desc]) => (
                <li key={right} className="flex gap-2">
                  <span className="text-muted-foreground mt-0.5">—</span>
                  <span><strong className="text-foreground">{right}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact me at{' '}
              <a href="mailto:emre@ekener.dev" className="text-foreground underline underline-offset-2">
                emre@ekener.dev
              </a>.
            </p>
          </section>

          {/* 7. Supervisory Authority */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7. Right to Lodge a Complaint</h2>
            <p>
              You have the right to lodge a complaint with a supervisory authority at any time. The
              competent supervisory authority for Lower Saxony (Niedersachsen) is:
            </p>
            <address className="not-italic mt-3 border border-border rounded-lg p-4 font-mono text-xs text-muted-foreground leading-6">
              Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
              Prinzenstraße 5<br />
              30159 Hannover<br />
              Tel.: +49 511 120-4500<br />
              <a href="mailto:poststelle@lfd.niedersachsen.de" className="text-foreground hover:underline">
                poststelle@lfd.niedersachsen.de
              </a><br />
              <a
                href="https://www.lfd.niedersachsen.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline"
              >
                lfd.niedersachsen.de
              </a>
            </address>
          </section>

          {/* 8. International Transfers */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">8. International Data Transfers</h2>
            <p>
              Google Analytics may transfer data to servers located in the United States. This
              transfer is covered by Google&apos;s compliance with the EU–U.S. Data Privacy
              Framework (DPF), which the European Commission has recognised as providing an adequate
              level of data protection for personal data transferred from the EU.
            </p>
          </section>

          {/* 9. Changes */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
            <p>
              I may update this privacy policy from time to time to reflect changes in the law or
              in how I process personal data. The date at the top of this page indicates when it
              was last revised. Significant changes will be brought to your attention where reasonably
              practicable.
            </p>
          </section>

        </div>
      </main>
      <NeoMinimalFooter />
    </div>
  );
}
