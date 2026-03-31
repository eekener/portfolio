'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

interface GlassBlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: { name: string; avatar: string };
  date: string;
  readTime: string;
  tags: string[];
  className?: string;
}

export function GlassBlogCard({
  slug,
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  tags,
  className,
}: GlassBlogCardProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn('w-full', className)}
    >
      <Card className="group relative h-full overflow-hidden rounded-2xl border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 p-0 flex flex-col">

        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

          {/* Tags — bottom left */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-background/50 backdrop-blur-sm text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-5 flex-1">
          <div className="space-y-1.5 flex-1">
            <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">{excerpt}</p>
          </div>

          {/* Author + read time */}
          <div className="flex items-center justify-between border-t border-border/50 pt-3">
            <div className="flex items-center gap-2">
              <Avatar className="h-7 w-7 border border-border/50">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-xs">
                <span className="font-medium text-foreground">{author.name}</span>
                <span className="text-muted-foreground">{date}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" aria-hidden="true" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* CTA button — bottom, small */}
          <Link
            href={`/blog/${slug}`}
            aria-label={`Read article: ${title}`}
            className="self-start inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 hover:text-primary transition-colors group/btn"
          >
            Read Article
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
