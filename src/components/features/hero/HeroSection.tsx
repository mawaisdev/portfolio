import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layouts/Container';
import { ROUTES } from '@/types';

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-muted/20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm{' '}
              <span className="text-primary">Muhammad Awais</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Software Engineer specializing in full-stack development with modern web technologies.
              I build scalable applications and solve complex problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href={ROUTES.projects}>
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
