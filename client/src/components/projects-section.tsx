import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Garden Planner App",
      description: "A React-based application that helps users plan and track their garden layouts, with features for crop rotation, seasonal planning, and harvest tracking.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Clean and modern web application interface",
      technologies: ["React", "Node.js", "MongoDB"],
      color: "blush-pink",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Cozy Recipe Keeper",
      description: "A digital cookbook that brings the warmth of handwritten recipes to the digital age, with family sharing features and ingredient shopping lists.",
      image: "https://images.unsplash.com/photo-1512317049220-d3c6fcaf6681?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Digital recipe book application with warm design",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      color: "sage-green",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Mindful Moments",
      description: "A mindfulness and wellness tracking app with gentle reminders, mood tracking, and nature-inspired meditation guides for daily well-being.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Wellness and mindfulness app interface",
      technologies: ["React Native", "Express", "SQLite"],
      color: "muted-terracotta",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Village Library System",
      description: "A community library management system with book lending, reading recommendations, and social features that bring the community together around books.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Digital library management system interface",
      technologies: ["Django", "JavaScript", "PostgreSQL"],
      color: "blush-pink",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading font-bold text-cottage-brown text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-dusty-rose/10 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <img 
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-cottage-brown mb-2">
                  {project.title}
                </h3>
                <p className="text-cottage-brown/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`bg-${project.color}/20 text-${project.color} px-2 py-1 rounded text-sm`}
                      data-testid={`tech-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.demoUrl}
                    className="text-dusty-rose hover:text-dusty-rose/80 transition-colors inline-flex items-center"
                    data-testid={`link-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="text-dusty-rose hover:text-dusty-rose/80 transition-colors inline-flex items-center"
                    data-testid={`link-code-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
