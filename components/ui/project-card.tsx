'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  slug: string;
  client: string;
  title: string;
  desc: string;
  image: string;
  services: string[];
  tags: string[];
  year: string;
  className?: string;
}

export function ProjectCard({
  slug,
  client,
  title,
  desc,
  image,
  services,
  tags,
  year,
  className,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn('w-full', className)}
    >
      <Card className="group relative h-full overflow-hidden rounded-2xl border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 p-0">

        {/* Image — desaturated + dimmed, brightens on hover */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-all duration-700 brightness-[0.45] saturate-[0.3] group-hover:brightness-100 group-hover:saturate-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-30" />

          {/* Client badge — top left */}
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/70 backdrop-blur-sm text-[11px] font-mono tracking-wide">
              {client}
            </Badge>
          </div>

          {/* Year — top right */}
          <span className="absolute top-3.5 right-3 text-[11px] font-mono text-white/50">{year}</span>

          {/* Services — bottom left of image */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {services.map((service, i) => (
              <Badge key={i} variant="secondary" className="bg-background/60 backdrop-blur-sm text-[11px]">
                {service}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-5">
          <div className="space-y-1.5">
            <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 pb-1 border-b border-border/40">
            {tags.map((tag, i) => (
              <span key={i} className="text-[11px] font-mono text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA button — bottom left, small */}
          <Link
            href={`/work/${slug}`}
            className="self-start inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 hover:text-primary transition-colors group/btn"
          >
            View Case Study
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
