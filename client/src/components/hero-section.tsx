import profilePic from "@assets/pic0_1755872328851.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      {/* Soft natural background texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-dusty-rose/20">
          {/* Small profile photo */}
          <div className="mb-8">
            <img 
              src={profilePic} 
              alt="Srushti Tarnalle - Professional headshot" 
              className="w-16 h-16 rounded-full mx-auto shadow-md border-2 border-white object-cover"
              data-testid="profile-photo"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-cottage-brown mb-6">
            Hello, I'm <span className="text-dusty-rose">Srushti Tarnalle</span>
          </h1>
          <p className="text-xl md:text-2xl text-cottage-brown/80 mb-8 leading-relaxed">
            Software Developer & Engineer crafting beautiful, functional experiences
          </p>
          <p className="text-lg text-cottage-brown/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating intuitive digital solutions that bring joy to users' lives, 
            with a love for clean code and thoughtful design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-dusty-rose text-white px-8 py-3 rounded-full hover:bg-dusty-rose/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-dusty-rose border-2 border-dusty-rose px-8 py-3 rounded-full hover:bg-dusty-rose hover:text-white transition-all duration-300 shadow-lg"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
