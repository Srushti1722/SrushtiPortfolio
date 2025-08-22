import { Palette, Server, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Palette,
      title: "Frontend Development",
      color: "blush-pink",
      skills: ["JavaScript", "HTML", "CSS", "React", "Tailwind CSS", "jQuery"]
    },
    {
      icon: Server,
      title: "Backend Development", 
      color: "sage-green",
      skills: ["Java", "Python", "Node.js", "Express.js", "PHP", "Flask", "REST APIs", "VBA"]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      color: "muted-terracotta", 
      skills: ["Git", "GitHub", "Docker", "AWS", "Kubernetes", "CI/CD", "Postman", "MongoDB", "MySQL", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-soft-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading font-bold text-cottage-brown text-center mb-12">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-dusty-rose/10 hover:shadow-xl transition-all duration-300"
                data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-${category.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`text-2xl text-${category.color} h-8 w-8`} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-cottage-brown mb-2">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`bg-${category.color}/20 text-${category.color} px-3 py-1 rounded-full text-sm`}
                      data-testid={`skill-${skill.toLowerCase().replace(/\./g, '')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
