import { ExternalLink, Github } from "lucide-react";
import visageIdImage from "@assets/visageid_1755872750232.png";
import leaderboardImage from "@assets/image_1755873069652.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AllerLens - Allergy Ingredient Checker",
      description: "A smart application that detects allergy-causing ingredients in products by uploading images of ingredient lists. Uses OCR technology to extract text and flags allergens against personal allergy profiles.",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Food allergy checking application interface",
      technologies: ["React", "Python", "Flask", "OCR", "SQLite"],
      color: "blush-pink",
      demoUrl: "https://aller-lens-allergy-ingredient-check.vercel.app/",
      codeUrl: "https://github.com/Srushti1722/AllerLens-Allergy-Ingredient-Checker"
    },
    {
      title: "VisageID - Face Recognition System",
      description: "A video-based, dynamic face recognition system with an intuitive GUI designed for seamless identity verification and facial database management. Features real-time detection using LBPH algorithm and user registration capabilities.",
      image: visageIdImage,
      imageAlt: "Face recognition and biometric security system interface",
      technologies: ["Python", "OpenCV", "SQLite", "Tkinter", "NumPy"],
      color: "sage-green",
      demoUrl: "#",
      codeUrl: "https://github.com/Srushti1722/VisageID-Face-Recognition-System-with-GUI-"
    },
    {
      title: "SubSpace1 - User Management System",
      description: "A comprehensive full-stack authentication and user management platform featuring secure sign-in/sign-up functionality. Built with modern technologies including GraphQL backend and workflow automation capabilities.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "User authentication and management system interface",
      technologies: ["TypeScript", "React", "Hasura", "GraphQL", "n8n"],
      color: "muted-terracotta",
      demoUrl: "https://subspace17222.netlify.app/",
      codeUrl: "https://github.com/Srushti1722/SubSpace1"
    },
    {
      title: "Interactive Leaderboard System",
      description: "A dynamic full-stack leaderboard application where users can claim random points, add new participants, and track rankings in real-time. Features comprehensive points history and user management with cloud deployment.",
      image: leaderboardImage,
      imageAlt: "Interactive leaderboard and scoring system interface",
      technologies: ["JavaScript", "Node.js", "MongoDB", "CSS", "Vercel"],
      color: "blush-pink",
      demoUrl: "https://leaderboard-ochx.vercel.app/",
      codeUrl: "https://github.com/Srushti1722/Leaderboard"
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
                className="w-full h-48 object-center object-cover group-hover:scale-105 transition-transform duration-300"
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
