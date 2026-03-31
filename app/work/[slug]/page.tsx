import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { Header } from '@/components/ui/header';
import { NeoMinimalFooter } from '@/components/ui/neo-minimal-footer';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.client}`,
    description: project.desc,
    openGraph: {
      title: `${project.title} — ${project.client}`,
      description: project.desc,
      url: `/work/${slug}`,
      type: 'article',
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} — ${project.client}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — ${project.client}`,
      description: project.desc,
      images: [project.image],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main id="main-content">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover brightness-[0.35] saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-12 max-w-5xl mx-auto">
          <Link
            href="/#work"
            className={buttonVariants({ variant: 'ghost', size: 'sm', className: 'mb-6 w-fit -ml-3 text-muted-foreground' })}
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back to Work
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.services.map((s) => (
              <Badge key={s} variant="secondary" className="bg-background/60 backdrop-blur-sm">
                {s}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-3">{project.title}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">{project.desc}</p>
        </div>
      </section>

      {/* Meta row */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Client</p>
            <p className="font-semibold">{project.client}</p>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Year</p>
            <p className="font-semibold">{project.year}</p>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Services</p>
            <p className="font-semibold">{project.services.join(', ')}</p>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Stack</p>
            <p className="font-semibold">{project.tags.join(', ')}</p>
          </div>
        </div>
      </section>

      {/* Device Mockups */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

          {/* Laptop */}
          <div className="relative w-full max-w-[600px] shrink-0">
            {/* Lid / screen bezel */}
            <div className="rounded-t-2xl rounded-b-sm border-[12px] border-b-[8px] border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden">
              {/* Camera dot */}
              <div className="h-4 bg-neutral-800 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
              </div>
              {/* Screen — relative so absolute child can fill it */}
              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={`${project.title} — desktop view`}
                  className="absolute inset-0 w-full h-full object-contain object-top"
                />
              </div>
            </div>
            {/* Hinge + base */}
            <div className="h-[5px] bg-neutral-700 mx-1" />
            <div className="h-[10px] bg-neutral-700 rounded-b-lg mx-0 shadow-md" />
            <div className="h-[3px] bg-neutral-600 rounded-b-2xl mx-10" />
          </div>

          {/* Phone — only shown when a mobile screenshot is provided */}
          {project.imageMobile && (
            <div className="relative shrink-0 w-[155px] md:w-[175px]">
              <div className="rounded-[2.8rem] border-[10px] border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden">
                {/* Dynamic island / notch */}
                <div className="h-8 bg-neutral-800 flex items-center justify-center">
                  <div className="w-16 h-4 bg-neutral-900 rounded-full" />
                </div>
                {/* Screen */}
                <div className="relative aspect-[9/19] overflow-hidden bg-neutral-900">
                  <img
                    src={project.imageMobile}
                    alt={`${project.title} — mobile view`}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
                {/* Home indicator */}
                <div className="h-7 bg-neutral-800 flex items-center justify-center">
                  <div className="w-12 h-1 bg-neutral-600 rounded-full" />
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Body */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-16">

        {/* Challenge */}
        <div>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">01 — Challenge</span>
          <h2 className="text-2xl font-bold tracking-tight mt-3 mb-5">The Problem</h2>
          <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
        </div>

        {/* Solution */}
        <div>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">02 — Solution</span>
          <h2 className="text-2xl font-bold tracking-tight mt-3 mb-5">My Approach</h2>
          <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
        </div>
      </section>

      {/* Results */}
      <section className="border-t border-border bg-card/30">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">03 — Results</span>
          <h2 className="text-2xl font-bold tracking-tight mt-3 mb-10">The Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.results.map((r) => (
              <div
                key={r.metric}
                className="rounded-xl border border-border/60 bg-background p-8 text-center"
              >
                <p className="text-5xl font-bold tracking-tighter">{r.value}</p>
                <p className="text-muted-foreground text-sm mt-2 font-mono">{r.metric}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-border">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Technologies</span>
        <div className="flex flex-wrap gap-3 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-sm bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-border">
        <Link href={`/work/${nextProject.slug}`} className="group block max-w-5xl mx-auto px-4 py-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Next Project</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{nextProject.client}</p>
              <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                {nextProject.title}
              </h3>
            </div>
            <ArrowRight className="h-8 w-8 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" aria-hidden="true" />
          </div>
        </Link>
      </section>

      </main>

      <NeoMinimalFooter />
    </div>
  );
}
