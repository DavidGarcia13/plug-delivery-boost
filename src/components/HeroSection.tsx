import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="PLUG - Sistema de Controle de Entregas" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Logo Area */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
              PLUG
            </h1>
          </div>
          
          {/* Main Slogan */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight">
            Conectando entregas, acelerando negócios.
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Gestão inteligente de entregas para empresas e entregadores
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="hero"
              className="px-8 py-4 text-lg"
            >
              Solicitar Demonstração
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;