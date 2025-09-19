const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-4xl font-bold text-white mb-2">PLUG</h3>
            <p className="text-primary-foreground/80 text-lg">
              Conectando entregas, acelerando negócios.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-primary-foreground/80">
            <a href="#sobre" className="hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#dashboards" className="hover:text-white transition-colors">
              Recursos
            </a>
            <a href="#precos" className="hover:text-white transition-colors">
              Preços
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 text-primary-foreground/80">
            <div>
              <a href="mailto:plug@plugentregas.com.br" className="hover:text-white transition-colors">
                plug@plugentregas.com.br
              </a>
            </div>
            <div>
              <a href="tel:+5564999478851" className="hover:text-white transition-colors">
                (64) 99947-8851
              </a>
            </div>
          </div>
          
          {/* Domain */}
          <div className="mb-8">
            <a 
              href="https://plugentregas.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary font-semibold hover:text-secondary-light transition-colors text-lg"
            >
              plugentregas.com.br
            </a>
          </div>
          
          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60">
              © 2024 PLUG. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/40 text-sm mt-2">
              Sistema de Controle de Entregas Inteligente
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;