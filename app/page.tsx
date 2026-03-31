'use client';

import { Header } from '@/components/ui/header';
import { HeroSection } from '@/components/ui/hero-section';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns';
import { HoverSlider, TextStaggerHover, HoverSliderImageWrap, HoverSliderImage } from '@/components/ui/animated-slideshow';
import { NeoMinimalFooter } from '@/components/ui/neo-minimal-footer';
import { ContactForm } from '@/components/ui/contact-form';
import { ProjectCard } from '@/components/ui/project-card';
import { motion, useReducedMotion } from 'motion/react';
import { buttonVariants } from '@/components/ui/button';
import { projects } from '@/lib/projects';
import React from 'react';
import {
  Code2, Layers, Zap, Shield, Wrench, ShoppingCart,
  Mail, ChevronDown,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────

const SLIDES = [
  { id: 'slide-1', title: 'Web UI-UX Design',        imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2400&auto=format&fit=crop' },
  { id: 'slide-2', title: 'Design to Website',       imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2400&auto=format&fit=crop' },
  { id: 'slide-3', title: 'Web Development',         imageUrl: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=2400&auto=format&fit=crop' },
  { id: 'slide-4', title: 'Maintenance & Updates',   imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop' },
  { id: 'slide-5', title: 'Speed Optimization',      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400&auto=format&fit=crop' },
  { id: 'slide-6', title: 'Custom Functionality',    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2400&auto=format&fit=crop' },
];

const features = [
  { title: 'Custom Themes',      icon: Layers,        description: 'Pixel-perfect WordPress themes built from scratch — fully tailored to your brand and business goals.' },
  { title: 'Custom Development', icon: Code2,         description: 'Custom plugins and code snippets to add any functionality your site needs, cleanly and without bloat.' },
  { title: 'Bug Fixing',         icon: Wrench,        description: 'Fast diagnosis and resolution of WordPress issues, errors, and broken functionality — no matter how complex.' },
  { title: 'WooCommerce',        icon: ShoppingCart,  description: 'Full e-commerce builds with custom product pages, checkout flows, and third-party payment integrations.' },
  { title: 'Performance',        icon: Zap,           description: 'Core Web Vitals optimisation, caching, and image compression for faster load times and better search rankings.' },
  { title: 'Security',           icon: Shield,        description: 'Hardening, regular updates, backups, and malware monitoring to keep your WordPress site safe and online.' },
];

const testimonials: { text: string; image?: string; name: string; role?: string }[] = [
  {
    text: 'I can not say enough good things about Emre Ekener. I highly recommend him. He knows his stuff and he knows what it takes to get a website optimized, especially for speed improvement. His communication is excellent. He had things fixed and working much quicker than I expected. He always promptly responded back to any questions I had. He is very friendly and kind. I will definitely be using him again if there is a problem. Whoever is reading this, if you need work done to your website he is definitely the man to get it fixed!',
    name: 'Denise Davis',
    image: '/clients/denise-davis.webp',
  },
  {
    text: 'Emre handled everything from the WooCommerce setup to the server migration and speed optimisation. The whole process was smooth and professional — he kept us informed at every step and delivered exactly what we needed. Our store went live without a single issue and loads noticeably faster than before. Highly recommended.',
    name: 'Eray Fidanci',
    role: 'CEO, Pera Iklimlendirme',
    image: '/clients/eray-fidanci.webp',
  },
  {
    text: 'Perfect work! I highly recommend him.',
    name: 'Angelika Reimer',
    role: 'Life Coach, Lifejourney Coaching',
    image: '/clients/angelika-reimer.webp',
  },
  {
    text: 'Emre is a wonderful asset for someone who is new to WordPress to get his bearings and get the job done. Emre was patient and available, and always informative.',
    name: 'Brian Mckenzie',
    image: '/clients/brian-mckenzie.webp',
  },
  {
    text: 'Emre did everything amazingly well. He was able to remotely guide me through the install, plus trouble-shoot through all sorts of technical issues that arose on my side. He went above and beyond every step of the way, but was very patient and we got the job done!',
    name: 'Lucy Stacey',
    image: '/clients/lucy-stacey.webp',
  },
  {
    text: 'Emre has been an outstanding partner for Horse Radio Network. He keeps our site running smoothly, handles updates without any fuss, and is always quick to respond whenever something comes up. His knowledge of WordPress and server performance is excellent — our site loads faster than ever and we have not had a single security issue since he took over. I would not hesitate to recommend him.',
    name: 'Glenn Hebert',
    role: 'CEO, Horse Radio Network',
    image: '/clients/glenn-hebert.webp',
  },
  {
    text: 'Emre did a great job optimising our platform. The site loads significantly faster now and the server runs much more reliably. He understood exactly what was needed, communicated clearly throughout, and delivered results quickly. A true professional — we are very happy with his work and will continue working with him.',
    name: 'Feramez Durmus',
    role: 'CEO, Wayyzz',
    image: '/clients/feramez-durmus.webp',
  },
  {
    text: 'Emre was responsive, worked quickly and found a lot of bugs and updates that were slowing down my site. Will absolutely use again and would recommend without hesitation.',
    name: 'Natasha Borciani',
    role: 'Owner, Borciani London',
    image: '/clients/natasha-borciani.webp',
  },
  {
    text: 'Emre is a gem. Our business hired Emre after our last webmaster was let go for being untruthful. Emre is the exact opposite of that. Our online digital manager had nothing but positive praises about Emre. One of the many things Emre did extremely well was the restructuring of our hosting and domain services. He saved us a lot of money, our company hosting and domain services are now much more streamlined because of him. He also implemented a robust back-up system. And he contributed greatly to the front end of our website. At times when we had extremely urgent tasks, Emre was super quick to respond. We only have great things to say about him and the service he provided. I would highly recommend Emre as a webmaster.',
    name: 'Andreas Steiner',
    role: 'CEO, Stedtnitz',
    image: '/clients/andreas-steiner.webp',
  },
  {
    text: 'Emre is a great WordPress developer. He was able to sort out multiple issues with a third-party theme very easily and suggested other changes too. He was also great at analyzing our site\'s speed. A great person to work with.',
    name: 'Patrick DCruze',
    role: 'Marketing Manager, Neorise',
    image: '/clients/patrick-dcruze.webp',
  },
  {
    text: 'Emre did a great job! Something that has taken me weeks to figure out, he was able to resolve in less than an hour. He is very knowledgeable and I look forward to working with him again.',
    name: 'Dera Curliss',
    role: 'Scripted Gold Business Solutions',
    image: '/clients/dera-curliss.webp',
  },
  {
    text: 'Great job by Emre. Very motivated. Finished job immediately.',
    name: 'Benjamin Meyer',
    image: '/clients/benjamin-meyer.webp',
  },
  {
    text: 'Working with Emre has been a pleasure from start to finish. He understood our requirements quickly, communicated clearly throughout, and delivered results that exceeded our expectations. Our site is noticeably faster and the whole experience was stress-free. We will definitely be working with him again.',
    name: 'Allan Hansen',
    role: 'Marketing Manager, Septl',
    image: '/clients/allan-hansen.webp',
  },
  {
    text: 'Fast and professional service, work, and communication. Emre also communicated with all stakeholders of the project and therefore made this a worry-free experience from my standpoint. He was able to save and incorporate my website customizations that have been done by a programmer when we initially launched the site. The project was completed to my fullest satisfaction within a great time frame. I would recommend him and also hire him in a heartbeat.',
    name: 'Mark Mueckenheim',
    role: 'MCKNHM Architects',
    image: '/clients/mark.webp',
  },
  {
    text: 'Emre was super pleasant to work with. He\'s extremely reliable and detail-oriented. I knew I could fully trust the quality of the deliverables, and I\'m extremely happy with the results provided.',
    name: 'Tim Herbig',
    image: '/clients/tim-herbig.webp',
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

const PAGE_SIZE = 4;

// ─── Helpers ─────────────────────────────────────────────

function AnimatedSection({ children, className, delay = 0.1 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────

export default function Page() {
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);
  const visibleProjects = [...projects].reverse().slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section aria-label="Introduction" className="mx-auto max-w-5xl px-4">
        <HeroSection />
      </section>

      <div className="border-t border-border" />

      {/* SERVICES */}
      <section id="services" aria-label="Services" className="py-16 md:py-24">
        <AnimatedSection className="mx-auto max-w-5xl px-4 mb-10">
          <span className="text-sm text-muted-foreground font-mono tracking-widest uppercase">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">Services</h2>
        </AnimatedSection>
        <HoverSlider className="min-h-[420px] place-content-center px-6 md:px-12 bg-background text-foreground">
          <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col space-y-2 md:space-y-4">
              {SLIDES.map((slide, index) => (
                <TextStaggerHover
                  key={slide.id}
                  index={index}
                  className="cursor-pointer text-4xl font-bold uppercase tracking-tighter"
                  text={slide.title}
                />
              ))}
            </div>
            <HoverSliderImageWrap className="w-72 h-80">
              {SLIDES.map((slide, index) => (
                <div key={slide.id}>
                  <HoverSliderImage
                    index={index}
                    imageUrl={slide.imageUrl}
                    className="size-full max-h-80 rounded-lg"
                  />
                </div>
              ))}
            </HoverSliderImageWrap>
          </div>
        </HoverSlider>
      </section>

      <div className="border-t border-border" />

      {/* WORK */}
      <section id="work" aria-label="Selected work" className="mx-auto max-w-5xl px-4 py-24">
        <AnimatedSection className="mb-12">
          <span className="text-sm text-muted-foreground font-mono tracking-widest uppercase">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">Projects</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              aria-label="Load more projects"
            >
              Load More
              <ChevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </section>

      <div className="border-t border-border" />

      {/* SKILLS */}
      <section id="skills" aria-label="Core skills" className="py-16 md:py-24">
        <AnimatedSection className="mx-auto max-w-5xl px-4 mb-10">
          <span className="text-sm text-muted-foreground font-mono tracking-widest uppercase">What I Bring</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">Core Skills</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.4} className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      <div className="border-t border-border" />

      {/* TESTIMONIALS */}
      <section id="testimonials" aria-label="Testimonials" className="bg-background my-20 relative">
        <AnimatedSection className="container z-10 mx-auto">
          <div className="mx-auto max-w-5xl px-4 mb-10">
            <span className="text-sm text-muted-foreground font-mono tracking-widest uppercase">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">
              What clients say
            </h2>
          </div>
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </AnimatedSection>
      </section>

      <div className="border-t border-border" />

      {/* CONTACT */}
      <section id="contact" aria-label="Contact" className="mx-auto max-w-5xl px-4 py-24">
        <AnimatedSection className="max-w-2xl">
          <span className="text-sm text-muted-foreground font-mono tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 mb-6">Let&apos;s work together</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Have a project in mind? I&apos;m currently available for freelance work. Let&apos;s build something great.
          </p>

          <ContactForm />

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-4">Or reach me directly</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="mailto:emre@ekener.dev" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" /> emre@ekener.dev
              </a>
              <a href="https://www.linkedin.com/in/emre-ekener-396a31148/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com/eekener" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)" className={buttonVariants({ variant: 'ghost', size: 'lg' })}>
                <GithubIcon className="mr-2 h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FOOTER */}
      <NeoMinimalFooter />

    </main>
  );
}
