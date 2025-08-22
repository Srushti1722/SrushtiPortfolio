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
                I'm a software developer with a passion for creating digital experiences that feel as warm and 
                inviting as a cottage garden. My journey began with a fascination for problem-solving and has 
                evolved into a love for crafting beautiful, functional applications.
              </p>
              <p>
                When I'm not coding, you'll find me tending to my garden, reading by the fireplace, or exploring 
                nature trails. This connection to the natural world influences my approach to development – 
                creating solutions that are both sustainable and delightful.
              </p>
              <p>
                I believe in writing clean, maintainable code that grows gracefully over time, much like a 
                well-tended garden. My goal is to build applications that not only solve problems but also 
                bring a little joy to users' daily lives.
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
