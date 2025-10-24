import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layouts/Container';
import { ROUTES } from '@/types';

export function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to work together?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href={ROUTES.contact}>
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href={ROUTES.about}>
                Learn More About Me
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
