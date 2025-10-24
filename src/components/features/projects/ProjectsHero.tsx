import { Container } from '@/components/layouts/Container';

export function ProjectsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A collection of web applications, mobile apps, and software projects
            that showcase my skills and passion for development.
          </p>
        </div>
      </Container>
    </section>
  );
}
