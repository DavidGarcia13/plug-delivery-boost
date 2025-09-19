import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Pronto para revolucionar suas entregas? Nossa equipe está aqui para ajudar 
            você a implementar a solução perfeita para seu negócio.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">E-mail</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/90 mb-4">Entre em contato via e-mail</p>
              <a 
                href="mailto:plug@plugentregas.com.br" 
                className="text-white font-semibold hover:text-white/80 transition-colors"
              >
                plug@plugentregas.com.br
              </a>
            </CardContent>
          </Card>
          
          {/* Phone */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">Telefone</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/90 mb-4">Ligue para nosso suporte</p>
              <a 
                href="tel:+5564999478851" 
                className="text-white font-semibold hover:text-white/80 transition-colors"
              >
                (64) 99947-8851
              </a>
            </CardContent>
          </Card>
          
          {/* WhatsApp */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/90 mb-4">Converse conosco agora</p>
              <a 
                href="https://wa.me/5564999478851" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-white/80 transition-colors"
              >
                (64) 99947-8851
              </a>
            </CardContent>
          </Card>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="hero"
            className="px-12 py-4 text-xl"
          >
            Entrar em Contato
          </Button>
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12 text-white/80">
          <p className="text-lg">
            Horário de atendimento: Segunda a Sexta, 8h às 18h
          </p>
          <p className="text-sm mt-2">
            Respondemos em até 24 horas úteis
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;