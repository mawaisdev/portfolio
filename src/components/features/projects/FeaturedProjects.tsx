import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layouts/Container';
import { ROUTES } from '@/types';

// Mock data - in a real app, this would come from a CMS or API
const featuredProjects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.',
    longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    demoUrl: 'https://demo.mawais.dev',
    githubUrl: 'https://github.com/mawaisdev/ecommerce',
    imageUrl: '/projects/ecommerce.jpg',
    featured: true,
    order: 1,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'A modern task management solution with drag-and-drop functionality, real-time collaboration, and advanced project tracking capabilities.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
    demoUrl: 'https://tasks.mawais.dev',
    githubUrl: 'https://github.com/mawaisdev/taskmanager',
    imageUrl: '/projects/taskmanager.jpg',
    featured: true,
    order: 2,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with location-based forecasts and historical data visualization.',
    longDescription: 'A comprehensive weather application featuring real-time forecasts, interactive maps, historical data analysis, and personalized weather alerts.',
    technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'Chart.js', 'PWA'],
    demoUrl: 'https://weather.mawais.dev',
    githubUrl: 'https://github.com/mawaisdev/weather-dashboard',
    imageUrl: '/projects/weather.jpg',
    featured: true,
    order: 3,
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
              in modern web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.demoUrl && (
                    <Button asChild variant="default" size="sm">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href={ROUTES.projects}>
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
