import { useState, useEffect } from 'react'
import { NavItem } from '../types'

interface HeaderProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems: NavItem[] = [
    { title: 'Home', path: 'home' },
    { title: 'About', path: 'about' },
    { title: 'Skills', path: 'skills' },
    { title: 'Experience', path: 'experience' },
    { title: 'Projects', path: 'projects' },
    { title: 'Contact', path: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.path))
      const scrollPosition = window.scrollY + 100 // Offset for header height

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    } shadow-md`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Muhammad Awais</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className={`hover:text-blue-600 transition-colors ${
                  activeSection === item.path ? 'text-blue-600' : ''
                }`}
              >
                {item.title}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute left-0 right-0 top-full ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          } shadow-md`}>
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className={`block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  activeSection === item.path ? 'text-blue-600' : ''
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
