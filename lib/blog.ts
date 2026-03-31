import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  author: { name: string; avatar: string };
  contentHtml: string;
  metaTitle: string;
  metaDescription: string;
};

const POSTS_DIR = path.join(process.cwd(), 'posts', 'posted');

function calcReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200) + ' min read';
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

async function parsePost(slug: string): Promise<BlogPost & { _rawDate: string }> {
  const filePath = path.join(POSTS_DIR, slug, 'index.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkHtml).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title ?? '',
    excerpt: data.metaDescription ?? '',
    date: formatDate(data.date),
    _rawDate: String(data.date),
    readTime: calcReadTime(content),
    tags: Array.isArray(data.tags) ? data.tags : [],
    image: data.coverImage ?? '',
    author: { name: 'Emre Ekener', avatar: '/portrait.webp' },
    contentHtml,
    metaTitle: data.metaTitle ?? data.title ?? '',
    metaDescription: data.metaDescription ?? '',
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const posts = await Promise.all(slugs.map(parsePost));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return posts
    .sort((a, b) => new Date(b._rawDate).getTime() - new Date(a._rawDate).getTime())
    .map(({ _rawDate, ...post }) => post);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const slugs = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  if (!slugs.includes(slug)) return null;
  return parsePost(slug);
}
