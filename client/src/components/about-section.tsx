import { Download } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-heading font-bold text-cottage-brown mb-6">About Me</h2>
            <div className="space-y-6 text-cottage-brown/80 leading-relaxed">
              <p>
                I'm a software developer with a passion for creating functional and engaging digital experiences. My journey began with a fascination for problem-solving, which has evolved into a love for building clean, maintainable, and reliable applications.
              </p>
              <p>
                When I'm not coding, you'll often find me baking, reading, or exploring nature trails. These hobbies inspire my approach to development—careful, precise, and thoughtful, creating solutions that are both effective and enjoyable to use.
              </p>
              <p>
                I enjoy building backend systems, APIs, and exploring functional programming, always aiming to write code that is sustainable and grows gracefully over time. My goal is to create applications that solve problems while bringing a touch of delight to users.
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                download 
                className="inline-flex items-center bg-sage-green text-white px-6 py-3 rounded-full hover:bg-sage-green/90 transition-all duration-300 shadow-lg"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="lg:order-first">
            <img 
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Cozy workspace with plants and natural lighting" 
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="img-workspace"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
