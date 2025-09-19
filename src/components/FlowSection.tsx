import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Smartphone, BarChart3, MapPin } from "lucide-react";

const FlowSection = () => {
  const steps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cadastro",
      description: "Registre empresas, vendedores, entregadores, clientes e produtos na plataforma web",
      color: "primary"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Atribuição",
      description: "Sistema atribui entregas automaticamente aos entregadores via app mobile",
      color: "secondary"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Execução",
      description: "Entregadores iniciam rotas, capturam informações e finalizam entregas em tempo real",
      color: "primary"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análise",
      description: "Dashboards inteligentes geram insights e relatórios para otimização contínua",
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Fluxo de Utilização
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Veja como o PLUG transforma seu processo de entregas em 4 passos simples e eficientes.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  {/* Step Card */}
                  <Card className="bg-card-gradient shadow-card hover:shadow-elegant transition-all duration-300 w-64">
                    <CardContent className="p-6 text-center">
                      <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                        step.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`}>
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="mx-4">
                      <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Flow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index}>
                <Card className="bg-card-gradient shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`}>
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                            step.color === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                          }`}>
                            Passo {index + 1}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-px h-8 bg-primary"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="bg-hero-gradient border-0 shadow-elegant max-w-2xl mx-auto">
            <CardContent className="p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para otimizar suas entregas?
              </h3>
              <p className="text-white/90 mb-6">
                Implemente o PLUG hoje e veja a diferença em seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" className="px-6 py-3">
                  Solicitar Demonstração
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-6 py-3">
                  Falar com Consultor
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;