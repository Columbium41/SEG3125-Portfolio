import Tag from "../components/Tag"

function AboutSection() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Material UI",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Next.js",
    "Ruby on Rails",
    "Express",
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8 text-center">About Me</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Hello! I'm a passionate web developer pursuing my studies at the University of Ottawa. 
              I specialize in modern web frameworks such as React, Tailwind, and Ruby on Rails.
            </p>
            <p className="text-lg text-gray-600">
              My approach to designing websites revolves around creating clean and minimalistic user interfaces. 
              This involves: planning layouts, choosing color schemes, and ensuring responsiveness across multiple devices.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not programming, I like to engage in hobbies such as cooking, video games, table tennis, and weightlifting.
            </p>
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Web Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Tag key={skill} tag={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
