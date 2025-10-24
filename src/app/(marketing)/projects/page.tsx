import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { ProjectsHero } from '@/components/features/projects/ProjectsHero';
import { ProjectsGrid } from '@/components/features/projects/ProjectsGrid';

export const metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web applications, mobile apps, and software projects built with modern technologies.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <ProjectsHero />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}
