import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full bg-warm-cream/95 backdrop-blur-sm z-50 border-b border-dusty-rose/20 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-heading font-semibold text-cottage-brown">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-cottage-brown hover:text-dusty-rose transition-colors duration-300"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-cottage-brown hover:text-dusty-rose transition-colors duration-300"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-cottage-brown hover:text-dusty-rose transition-colors duration-300"
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-cottage-brown hover:text-dusty-rose transition-colors duration-300"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-cottage-brown hover:text-dusty-rose transition-colors duration-300"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          <button className="md:hidden text-cottage-brown" data-testid="mobile-menu-button">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
