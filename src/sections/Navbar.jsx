function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Charley Liu</span>
          </div>
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="px-3 py-2 text-sm font-medium hover:text-gray-900">
                Home
              </a>
              <a href="#about" className="px-3 py-2 text-sm font-medium hover:text-gray-900">
                About
              </a>
              <a href="#experience" className="px-3 py-2 text-sm font-medium hover:text-gray-900">
                Experience
              </a>
              <a href="#projects" className="px-3 py-2 text-sm font-medium hover:text-gray-900">
                Projects
              </a>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
