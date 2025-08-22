export default function Footer() {
  return (
    <footer className="bg-cottage-brown text-warm-cream py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            {/* Decorative natural element */}
            <img 
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=50" 
              alt="Subtle natural branch decoration" 
              className="w-12 h-6 opacity-50"
              data-testid="img-decoration"
            />
          </div>
          <p className="text-warm-cream/80 mb-2" data-testid="text-copyright">
            © 2024 Sarah Developer. Crafted with care and cottage charm.
          </p>
          <p className="text-warm-cream/60 text-sm" data-testid="text-tagline">
            Built with love, nature inspiration, and lots of tea ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
