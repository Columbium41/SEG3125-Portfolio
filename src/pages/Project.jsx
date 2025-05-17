import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { HashLink } from "react-router-hash-link"

function ProjectPage() {
  const { projectName } = useParams()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h1>
          <div className="h-1 w-20 bg-gray-900 mx-auto mb-6"></div>

          <p className="text-xl text-gray-600 mb-8">
            This project page is currently under construction. Check back soon for a detailed showcase of this work.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <HashLink
              to="/#projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Projects
            </HashLink>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProjectPage
