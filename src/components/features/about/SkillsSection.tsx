import { Container } from '@/components/layouts/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'HTML/CSS', level: 'expert' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express.js', level: 'advanced' },
      { name: 'Python', level: 'intermediate' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'GraphQL', level: 'intermediate' },
      { name: 'Microservices', level: 'intermediate' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'MySQL', level: 'intermediate' },
      { name: 'Redis', level: 'intermediate' },
      { name: 'Prisma', level: 'advanced' },
      { name: 'Mongoose', level: 'advanced' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 'expert' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'AWS', level: 'intermediate' },
      { name: 'Vercel', level: 'advanced' },
      { name: 'Figma', level: 'intermediate' },
      { name: 'Linux', level: 'intermediate' },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'expert':
      return 'bg-green-500';
    case 'advanced':
      return 'bg-blue-500';
    case 'intermediate':
      return 'bg-yellow-500';
    case 'beginner':
      return 'bg-gray-500';
    default:
      return 'bg-gray-500';
  }
};

export function SkillsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across different domains
              of software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.level}
                          </Badge>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                            style={{
                              width: skill.level === 'expert' ? '100%' :
                                     skill.level === 'advanced' ? '85%' :
                                     skill.level === 'intermediate' ? '65%' : '40%'
                            }}
                          />
                        </div>
                      </div>
                    ))}
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
