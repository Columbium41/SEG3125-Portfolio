function ExperienceSection() {
    const experiences = [
      {
        title: "Full Stack Cloud Developer",
        company: "Signiant Inc.",
        period: "Jan 2025 - Apr 2025",
        description:
          "Built and maintained features for frontend & backend microservices using React, Redux, Express, and AWS (DynamoDB, Lambda, EC2) in a collaborative team setting",
      },
      {
        title: "IT & Platform Support Co-op Student",
        company: "National Research Council Canada",
        period: "May 2024 - Aug 2024",
        description:
          "Redesigned internal staff tools by developing Power Apps Solutions for 8,000+ National Building Codes, utilizing Power Platform, .NET, & Azure",
      },
      {
        title: "Full Stack Developer",
        company: "University of Ottawa - CEED",
        period: "May 2023 - Apr 2024",
        description:
          "Developed & maintained features for a web app as part of a collaborative team, ensuring timely & efficient delivery using Ruby on Rails & AWS",
      },
    ]
  
    return (
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12 text-center">Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                  <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-gray-900"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ExperienceSection
  