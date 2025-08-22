import { Mail, Linkedin, Github, Phone, Dribbble } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "srushtidt03@gmail.com",
      color: "dusty-rose"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-7975924066",
      color: "sage-green"
    },
    {
      icon: Linkedin,
      title: "LinkedIn", 
      value: "www.linkedin.com/in/srushti-d-t-2a845526",
      color: "muted-terracotta"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "https://github.com/Srushti1722",
      color: "blush-pink"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Srushti1722", color: "dusty-rose" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/srushti-d-t-2a845526", color: "sage-green" }
  ];

  return (
    <section id="contact" className="py-20 bg-soft-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-heading font-bold text-cottage-brown mb-6">Let's Connect</h2>
        <p className="text-xl text-cottage-brown/70 mb-12 leading-relaxed">
          I'd love to hear about your project and discuss how we can bring your ideas to life. 
          Whether it's a new venture or an existing project that needs a gentle touch, let's chat!
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-dusty-rose/10 hover:shadow-xl transition-all duration-300"
                data-testid={`card-contact-${method.title.toLowerCase()}`}
              >
                <div className={`w-16 h-16 bg-${method.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`text-2xl text-${method.color} h-8 w-8`} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-cottage-brown mb-2">
                  {method.title}
                </h3>
                <p className="text-cottage-brown/70" data-testid={`text-${method.title.toLowerCase()}`}>
                  {method.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a 
                key={index}
                href={social.href}
                className={`w-12 h-12 bg-${social.color} text-white rounded-full flex items-center justify-center hover:bg-${social.color}/90 transition-all duration-300 hover:scale-110`}
                data-testid={`link-social-${index}`}
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
