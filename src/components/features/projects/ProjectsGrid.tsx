'use client';

import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layouts/Container';

// Mock data - in a real app, this would come from a CMS or API
const allProjects = [
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
    category: 'fullstack',
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
    category: 'fullstack',
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
    category: 'frontend',
  },
  {
    id: '4',
    title: 'Blog CMS',
    description: 'Content management system for blogs with markdown support and real-time editing.',
    longDescription: 'A modern blog CMS with markdown support, real-time editing, SEO optimization, and analytics dashboard.',
    technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    demoUrl: 'https://blog.mawais.dev',
    githubUrl: 'https://github.com/mawaisdev/blog-cms',
    imageUrl: '/projects/blog.jpg',
    featured: false,
    order: 4,
    category: 'fullstack',
  },
  {
    id: '5',
    title: 'API Gateway',
    description: 'Microservices API gateway with authentication, rate limiting, and load balancing.',
    longDescription: 'A robust API gateway solution for microservices architecture with advanced routing, authentication, and monitoring capabilities.',
    technologies: ['Node.js', 'Express.js', 'Redis', 'Docker', 'Kubernetes'],
    demoUrl: 'https://api.mawais.dev',
    githubUrl: 'https://github.com/mawaisdev/api-gateway',
    imageUrl: '/projects/api.jpg',
    featured: false,
    order: 5,
    category: 'backend',
  },
  {
    id: '6',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    longDescription: 'A comprehensive mobile banking solution with advanced security features, real-time notifications, and seamless user experience.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Biometric Auth'],
    demoUrl: 'https://banking.mawais.dev',
    githubUrl: 'https://github.com/mawaisdev/banking-app',
    imageUrl: '/projects/banking.jpg',
    featured: false,
    order: 6,
    category: 'mobile',
  },
];

const categories = [
  { id: 'all', label: 'All Projects', count: allProjects.length },
  { id: 'fullstack', label: 'Full Stack', count: allProjects.filter(p => p.category === 'fullstack').length },
  { id: 'frontend', label: 'Frontend', count: allProjects.filter(p => p.category === 'frontend').length },
  { id: 'backend', label: 'Backend', count: allProjects.filter(p => p.category === 'backend').length },
  { id: 'mobile', label: 'Mobile', count: allProjects.filter(p => p.category === 'mobile').length },
];

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Filter className="h-5 w-5" />
              <h2 className="text-2xl font-semibold">Filter by Category</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-1">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured
                    </Badge>
                  )}
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
