import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { AboutHero } from '@/components/features/about/AboutHero';
import { WorkExperience } from '@/components/features/about/WorkExperience';
import { Education } from '@/components/features/about/Education';
import { SkillsSection } from '@/components/features/about/SkillsSection';

export const metadata = {
  title: 'About',
  description: 'Learn more about Muhammad Awais, a Software Engineer with 3+ years of experience in full-stack development.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <AboutHero />
        <WorkExperience />
        <Education />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}
