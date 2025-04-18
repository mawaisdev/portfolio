import { Skill } from '../types'

const Skills = () => {
  const skills: Skill[] = [
    { name: 'Node.js', category: 'backend' },
    { name: 'NestJS', category: 'backend' },
    { name: 'Express.js', category: 'backend' },
    { name: 'PostgreSQL', category: 'backend' },
    { name: 'AWS', category: 'devops' },
    { name: 'GraphQL', category: 'backend' },
    { name: 'Redis', category: 'backend' },
    { name: 'React.js', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'Vercel', category: 'devops' },
    { name: 'CI/CD', category: 'devops' },
    { name: 'AWS CloudFront', category: 'devops' },
  ]

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        
        <div className="mb-12">
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            I specialize in building scalable backend systems and user-friendly frontend 
            applications, helping teams deliver efficient, high-performance software.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                {/* Add icon here if available */}
                <h3 className="font-medium mt-2">{skill.name}</h3>
                <p className="text-sm text-gray-500 capitalize">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills