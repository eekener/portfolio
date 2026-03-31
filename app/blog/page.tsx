import { getAllPosts } from '@/lib/blog';
import { Header } from '@/components/ui/header';
import { NeoMinimalFooter } from '@/components/ui/neo-minimal-footer';
import { GlassBlogCard } from '@/components/ui/glass-blog-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — WordPress Development & WooCommerce Tips',
  description:
    'Practical guides on WordPress development, WooCommerce, performance optimisation, and web security from Emre Ekener — freelance WordPress developer based in Germany.',
  openGraph: {
    title: 'Blog — WordPress Development & WooCommerce Tips',
    description:
      'Practical guides on WordPress development, WooCommerce, performance optimisation, and web security.',
    url: '/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — WordPress Development & WooCommerce Tips',
    description:
      'Practical guides on WordPress development, WooCommerce, performance optimisation, and web security.',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section aria-label="Blog introduction" className="mx-auto max-w-5xl px-4 pt-16 pb-12">
          <span className="text-sm text-muted-foreground font-mono tracking-widest uppercase">Writing</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mt-2 mb-4">Blog</h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Thoughts on WordPress development, WooCommerce, performance, and the craft of building for the web.
          </p>
        </section>

        <div className="border-t border-border" />

        {/* Grid */}
        <section aria-label="Blog posts" className="mx-auto max-w-5xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <GlassBlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
                tags={post.tags}
              />
            ))}
          </div>
        </section>
      </main>

      <NeoMinimalFooter />
    </div>
  );
}
