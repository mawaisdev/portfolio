import { GraduationCap, Calendar, Award } from 'lucide-react';

import { Container } from '@/components/layouts/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const education = [
  {
    id: '1',
    institution: 'University of the Punjab',
    degree: 'Bachelor of Computer Science',
    field: 'Computer Science',
    startDate: new Date('2019-09-01'),
    endDate: new Date('2023-06-01'),
    gpa: 3.3,
    description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and database systems.',
    achievements: [
      'Graduated with CGPA of 3.3/4.0',
      'Completed final year project on E-commerce Platform',
      'Active member of Computer Science Society',
      'Participated in multiple programming competitions',
    ],
  },
];

export function Education() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Education
            </h2>
            <p className="text-xl text-muted-foreground">
              My academic background and achievements
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu) => (
              <Card key={edu.id} className="relative">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        {edu.degree}
                      </CardTitle>
                      <div className="text-muted-foreground mt-1">
                        {edu.institution}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {edu.startDate.toLocaleDateString('en-US', { 
                            year: 'numeric' 
                          })} - {edu.endDate.toLocaleDateString('en-US', { 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          <span>CGPA: {edu.gpa}/4.0</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Field of Study:</h4>
                    <Badge variant="secondary">{edu.field}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
