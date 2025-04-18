import { Project } from '../types'

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Employee Management System',
      description: 'A comprehensive system built with NestJS and React for managing employee data, attendance, and performance metrics.',
      technologies: ['NestJS', 'React', 'PostgreSQL', 'Redis', 'AWS'],
      github: 'https://github.com/yourusername/ems'
    },
    {
      title: 'E-commerce Platform',
      description: 'A scalable e-commerce solution with features like real-time inventory management and payment processing.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://ecommerce-demo.example.com'
    },
    {
      title: 'Task Management API',
      description: 'RESTful API service for task management with authentication and role-based access control.',
      technologies: ['Express.js', 'PostgreSQL', 'JWT', 'Docker'],
      github: 'https://github.com/yourusername/task-api'
    }
  ]

  return (
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="mb-4 opacity-90">{project.description}</p>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 rounded-full text-sm dark:bg-gray-700 bg-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  GitHub
                </a>
              )}
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

