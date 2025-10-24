import Image from 'next/image';
import { MapPin, Calendar, Code } from 'lucide-react';

import { Container } from '@/components/layouts/Container';
import { Badge } from '@/components/ui/badge';

export function AboutHero() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                I'm a passionate Software Engineer with 3+ years of experience building
                scalable web applications and solving complex technical challenges.
              </p>
              <p className="text-lg text-muted-foreground">
                Based in Lahore, Pakistan, I specialize in full-stack development using
                modern technologies like React, Next.js, and TypeScript. I love creating
                efficient, user-friendly applications that make a real difference.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>3+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Code className="h-4 w-4" />
                  <span>Full-Stack Developer</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Problem Solver</Badge>
                <Badge variant="secondary">Team Player</Badge>
                <Badge variant="secondary">Continuous Learner</Badge>
                <Badge variant="secondary">Detail Oriented</Badge>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image
                  src="/about/hero-image.jpg"
                  alt="Muhammad Awais - Software Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">3+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
