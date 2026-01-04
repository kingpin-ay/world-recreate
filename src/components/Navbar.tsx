import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contacts', path: '#contacts' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              AM<span className="text-primary">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm cursor-pointer">
              Get in Touch
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg animate-in slide-in-from-top-5 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-3 rounded-lg text-base font-medium transition-colors shadow-sm">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
