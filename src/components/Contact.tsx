import { FormEvent, useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Replace with your actual form submission logic
      // For example, using a service like EmailJS or a backend API
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
            )}
          </form>

          <div className="mt-8 pt-8 border-t">
            <h3 className="text-xl font-semibold mb-4">Other Ways to Connect</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                Email: <a href="mailto:m.awaiszafar123@gmail.com" className="text-blue-600 hover:underline">
                  m.awaiszafar123@gmail.com
                </a>
              </p>
              <p className="text-gray-600">
                LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  /in/yourusername
                </a>
              </p>
              <p className="text-gray-600">
                GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  @yourusername
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
