import { Container } from '@/components/layouts/Container';

export function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together.
          </p>
        </div>
      </Container>
    </section>
  );
}
