import { Experience as ExperienceType } from '../types'

const Experience = () => {
  const experiences: ExperienceType[] = [
    {
      company: 'OCloud Solutions',
      role: 'Software Engineer',
      period: '2023 - Present',
      achievements: [
        'Developed and optimized high-performance backend systems',
        'Implemented multi-device authentication with 2FA',
        'Established efficient database schemas for scalability',
        'Integrated CI/CD pipelines for streamlined deployments'
      ]
    },
    {
      company: 'Kwanso',
      role: 'Full Stack Developer',
      period: '2021 - 2023',
      achievements: [
        'Built and deployed React.js and Next.js applications on Vercel',
        'Led development of an Employee Management System using NestJS, AWS, Redis, and PostgreSQL',
        'Optimized asset retrieval with AWS CloudFront and Redis caching',
        'Configured GraphQL APIs with Apollo and NestJS'
      ]
    }
  ]

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                  <p className="text-lg text-gray-600">{exp.role}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience