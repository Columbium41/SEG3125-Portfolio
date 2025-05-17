import { useState } from "react"
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Charley Liu</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <HashLink to="/#home" className="px-3 py-2 text-sm font-medium hover:text-gray-900">
                Home
              </HashLink>
              <HashLink to="/#about" className="px-3 py-2 text-sm font-medium hover:text-gray-900">
                About
              </HashLink>
              <HashLink to="/#experience" className="px-3 py-2 text-sm font-medium hover:text-gray-900">
                Experience
              </HashLink>
              <HashLink to="/#projects" className="px-3 py-2 text-sm font-medium hover:text-gray-900">
                Projects
              </HashLink>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <HashLink
                to="/#home"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </HashLink>
              <HashLink
                to="/#about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </HashLink>
              <HashLink
                to="/#experience"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </HashLink>
              <HashLink
                to="/#projects"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </HashLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
