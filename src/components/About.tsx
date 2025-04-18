const About = () => {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              I'm Muhammad Awais, a software engineer from Lahore, Pakistan, with over 
              two years of experience in full-stack web development. I'm passionate about 
              leveraging technology to solve complex problems and aspire to build scalable, 
              innovative solutions that drive impact.
            </p>
            <p className="text-lg text-gray-700">
              My journey in software development has been driven by a constant desire to 
              learn and grow. I thrive in fast-paced Agile environments and believe in 
              the power of collaboration and continuous improvement.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded-full">
              {/* Add your profile image here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About