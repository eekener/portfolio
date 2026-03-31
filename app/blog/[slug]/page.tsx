import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Header } from '@/components/ui/header';
import { NeoMinimalFooter } from '@/components/ui/neo-minimal-footer';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { ShareButtons } from '@/components/ui/share-buttons';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Emre Ekener'],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost = allPosts[(currentIndex + 1) % allPosts.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main id="main-content">
      {/* Hero image */}
      <section className="relative h-[45vh] min-h-[360px] overflow-hidden">
        <Image
          fill
          priority
          sizes="100vw"
          src={post.image}
          alt={post.title}
          className="object-cover brightness-[0.3] saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-12 max-w-3xl mx-auto">
          <Link
            href="/blog"
            className={buttonVariants({ variant: 'ghost', size: 'sm', className: 'mb-6 w-fit -ml-3 text-muted-foreground' })}
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-background/60 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">{post.title}</h1>
        </div>
      </section>

      {/* Author + meta */}
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border border-border">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" aria-hidden="true" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 border-l-2 border-primary/40 pl-5 italic">
          {post.excerpt}
        </p>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Tags */}
        <div className="mt-14 pt-8 border-t border-border flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Share */}
        <ShareButtons
          url={`https://ekener.dev/blog/${post.slug}`}
          title={post.title}
        />
      </article>

      {/* Next post */}
      <section className="border-t border-border">
        <Link href={`/blog/${nextPost.slug}`} className="group block max-w-3xl mx-auto px-4 py-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Next Article</p>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex gap-2 mb-2">
                {nextPost.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[11px]">{t}</Badge>
                ))}
              </div>
              <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors max-w-xl">
                {nextPost.title}
              </h3>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all flex-shrink-0 ml-4" aria-hidden="true" />
          </div>
        </Link>
      </section>

      </main>

      <NeoMinimalFooter />
    </div>
  );
}
