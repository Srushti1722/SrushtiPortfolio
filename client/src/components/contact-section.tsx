import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Phone, Dribbble } from "lucide-react";

// This is the ContactSection component provided by the user, with minor adjustments
// for a standalone, complete React app.
function ContactSection() {
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
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Let's Connect</h2>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          I'd love to hear about your project and discuss how we can bring your ideas to life.
          Whether it's a new venture or an existing project that needs a gentle touch, let's chat!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                data-testid={`card-contact-${method.title.toLowerCase()}`}
              >
                <div className={`w-16 h-16 bg-${method.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`text-2xl text-${method.color} h-8 w-8`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600" data-testid={`text-${method.title.toLowerCase()}`}>
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

// The main App component to render the ContactSection
export default function App() {
  // Use a state to store the custom Tailwind CSS classes to prevent them from being purged
  const [tailwindClasses, setTailwindClasses] = useState('');

  useEffect(() => {
    // These are the classes dynamically generated in the component, which Tailwind might
    // otherwise not include. We force them into the class list here.
    const classes = [
      'bg-dusty-rose/20',
      'text-dusty-rose',
      'bg-sage-green/20',
      'text-sage-green',
      'bg-muted-terracotta/20',
      'text-muted-terracotta',
      'bg-blush-pink/20',
      'text-blush-pink',
      'bg-dusty-rose',
      'bg-sage-green',
      'hover:bg-dusty-rose/90',
      'hover:bg-sage-green/90',
    ].join(' ');
    setTailwindClasses(classes);
  }, []);


  return (
    <div className={`min-h-screen bg-soft-gray font-sans ${tailwindClasses}`}>
      <style>
        {`
        /* Define custom colors here to ensure they are included in the Tailwind build */
        .bg-soft-gray { background-color: #F8F5F2; }
        .text-cottage-brown { color: #5D4037; }
        .text-cottage-brown\\/70 { color: rgba(93, 64, 55, 0.7); }
        .border-dusty-rose\\/10 { border-color: rgba(214, 150, 162, 0.1); }
        .bg-dusty-rose\\/20 { background-color: rgba(214, 150, 162, 0.2); }
        .text-dusty-rose { color: #D696A2; }
        .bg-sage-green\\/20 { background-color: rgba(162, 178, 140, 0.2); }
        .text-sage-green { color: #A2B28C; }
        .bg-muted-terracotta\\/20 { background-color: rgba(198, 114, 95, 0.2); }
        .text-muted-terracotta { color: #C6725F; }
        .bg-blush-pink\\/20 { background-color: rgba(229, 153, 153, 0.2); }
        .text-blush-pink { color: #E59999; }
        .bg-dusty-rose { background-color: #D696A2; }
        .bg-sage-green { background-color: #A2B28C; }
        .hover\\:bg-dusty-rose\\/90:hover { background-color: rgba(214, 150, 162, 0.9); }
        .hover\\:bg-sage-green\\/90:hover { background-color: rgba(162, 178, 140, 0.9); }
        `}
      </style>
      <ContactSection />
    </div>
  );
}
