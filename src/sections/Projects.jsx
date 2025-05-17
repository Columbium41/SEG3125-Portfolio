import slugify from "slugify"
import { Link } from "react-router-dom"
import Tag from "../components/Tag"

function ProjectsSection() {
    const projects = [
      {
        title: "Service Site",
        description: "A service site.",
        tags: ["Tag1", "Tag2", "Tag3"],
        githubUrl: "#projects",
        url: "#projects",
      },
      {
        title: "Game",
        description: "A game.",
        tags: ["Tag1", "Tag2", "Tag3"],
        githubUrl: "#projects",
        url: "#projects",
      },
      {
        title: "E-Commerce Site",
        description: "An E-Commerce Site.",
        tags: ["Tag1", "Tag2", "Tag3"],
        githubUrl: "#projects",
        url: "#projects",
      },
      {
        title: "Analytics Site",
        description: "An analytics site.",
        tags: ["Tag1", "Tag2", "Tag3"],
        githubUrl: "#projects",
        url: "#projects",
      },
    ]
  
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
                  <Link
                    to={`/project/${slugify(project.title, { lower: true })}`}
                    className="cursor-pointer"
                  >
                    <div className="h-48 relative">
                      <img
                        src={project.image || "placeholder.png"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  <div className="px-6 pt-6 pb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Tag key={tag} tag={tag} />
                      ))}
                    </div>
                    <div className="flex space-x-4">
                    <a href={project.githubUrl} className="text-gray-600 hover:text-gray-900 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-1"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      <span className="text-sm">Code</span>
                    </a>
                    <a href={project.url} className="text-gray-600 hover:text-gray-900 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-1"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" x2="21" y1="14" y2="3"></line>
                      </svg>
                      <span className="text-sm">URL</span>
                    </a>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ProjectsSection
  