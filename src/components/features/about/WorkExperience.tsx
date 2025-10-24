import { Calendar, MapPin, Building } from 'lucide-react';

import { Container } from '@/components/layouts/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const workExperience = [
  {
    id: '1',
    company: 'OCloud Solutions',
    position: 'Software Engineer',
    startDate: new Date('2025-01-01'),
    endDate: null,
    current: true,
    location: 'Lahore, Pakistan',
    description: 'Leading development of cloud-based solutions and microservices architecture.',
    technologies: ['Next.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
    achievements: [
      'Improved application performance by 40% through code optimization',
      'Led a team of 3 developers in building a scalable e-commerce platform',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    id: '2',
    company: 'Kwanso',
    position: 'Full Stack Developer',
    startDate: new Date('2023-08-01'),
    endDate: new Date('2025-01-01'),
    current: false,
    location: 'Lahore, Pakistan',
    description: 'Developed and maintained web applications using modern JavaScript frameworks.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    achievements: [
      'Built 15+ responsive web applications for various clients',
      'Reduced API response time by 35% through database optimization',
      'Implemented automated testing increasing code coverage to 85%',
      'Collaborated with design team to create pixel-perfect UIs',
    ],
  },
  {
    id: '3',
    company: 'VU Solutions',
    position: 'Junior Developer',
    startDate: new Date('2022-04-01'),
    endDate: new Date('2022-08-01'),
    current: false,
    location: 'Lahore, Pakistan',
    description: 'Started my professional journey developing web applications and learning industry best practices.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    achievements: [
      'Developed 5+ small to medium web applications',
      'Learned version control and collaborative development practices',
      'Gained experience in responsive web design',
      'Contributed to bug fixes and feature implementations',
    ],
  },
];

export function WorkExperience() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              My professional journey in software development
            </p>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={job.id} className="relative">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{job.position}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {job.startDate.toLocaleDateString('en-US', { 
                            month: 'short', 
                            year: 'numeric' 
                          })} - {job.current ? 'Present' : job.endDate?.toLocaleDateString('en-US', { 
                            month: 'short', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                {index < workExperience.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-background border-2 border-muted rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
