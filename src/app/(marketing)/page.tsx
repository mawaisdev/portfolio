import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { HeroSection } from '@/components/features/hero/HeroSection';
import { FeaturedProjects } from '@/components/features/projects/FeaturedProjects';
import { SkillsSection } from '@/components/features/about/SkillsSection';
import { CallToAction } from '@/components/features/hero/CallToAction';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <HeroSection />
        <FeaturedProjects />
        <SkillsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
