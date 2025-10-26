import { Metadata } from 'next';
import { Container } from '@/components/layouts/Container';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { BlogHero } from '@/components/features/blog/BlogHero';
import { BlogGrid } from '@/components/features/blog/BlogGrid';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read my latest articles about web development, TypeScript, React, and more.',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen py-16">
        <Container>
          <BlogHero />
          <BlogGrid />
        </Container>
      </main>
      <Footer />
    </>
  );
}
