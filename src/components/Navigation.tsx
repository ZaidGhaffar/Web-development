import { useState } from 'react'
import logo from '../assets/logo.svg'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="TrustLine" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-semibold">TrustLine</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
            <a href="/signin" className="text-gray-600 hover:text-gray-900">Sign in</a>
            <a
              href="/demo"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Book a demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</a>
          <a href="/pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
          <a href="/faq" className="block px-3 py-2 text-gray-600 hover:text-gray-900">FAQ</a>
          <a href="/signin" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Sign in</a>
          <a
            href="/demo"
            className="block px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
          >
            Book a demo
          </a>
        </div>
      </div>
    </nav>
  )
}

