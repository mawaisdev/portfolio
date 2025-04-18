import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Full-Stack Software Engineer
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          with a Passion for Scalable Solutions
        </p>
        <div className="space-x-4">
          <Link
            to="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore My Work
          </Link>
          <Link
            to="/contact"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home