import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Crown, Zap, Rocket } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "R$ 100",
      period: "mês",
      icon: <Zap className="w-8 h-8" />,
      description: "Ideal para pequenas empresas começando",
      features: {
        empresas: "1",
        cadastros: true,
        movimentos: true,
        dashboards: false,
        insights: false
      },
      highlight: false,
      buttonText: "Começar Agora"
    },
    {
      name: "Médio",
      price: "R$ 200",
      period: "mês",
      icon: <Crown className="w-8 h-8" />,
      description: "Perfeito para empresas em crescimento",
      features: {
        empresas: "3",
        cadastros: true,
        movimentos: true,
        dashboards: true,
        insights: false
      },
      highlight: true,
      buttonText: "Mais Popular"
    },
    {
      name: "Premium",
      price: "R$ 350",
      period: "mês",
      icon: <Rocket className="w-8 h-8" />,
      description: "Solução completa para grandes operações",
      features: {
        empresas: "Ilimitado",
        cadastros: true,
        movimentos: true,
        dashboards: true,
        insights: true
      },
      highlight: false,
      buttonText: "Solicitar Demo"
    }
  ];

  const FeatureRow = ({ label, basic, medio, premium }: { 
    label: string; 
    basic: string | boolean; 
    medio: string | boolean; 
    premium: string | boolean; 
  }) => (
    <div className="grid grid-cols-4 gap-4 py-3 border-b border-border last:border-b-0">
      <div className="font-medium text-foreground">{label}</div>
      <div className="text-center">
        {typeof basic === 'boolean' ? (
          basic ? <Check className="w-5 h-5 text-secondary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />
        ) : (
          <span className="text-foreground">{basic}</span>
        )}
      </div>
      <div className="text-center">
        {typeof medio === 'boolean' ? (
          medio ? <Check className="w-5 h-5 text-secondary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />
        ) : (
          <span className="text-foreground">{medio}</span>
        )}
      </div>
      <div className="text-center">
        {typeof premium === 'boolean' ? (
          premium ? <Check className="w-5 h-5 text-secondary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />
        ) : (
          <span className="text-foreground">{premium}</span>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Planos e Preços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos os planos incluem suporte técnico 
            e atualizações gratuitas.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.highlight 
                  ? "bg-hero-gradient border-0 shadow-elegant scale-105 text-white" 
                  : "bg-card border-border shadow-card hover:shadow-elegant"
              } transition-all duration-300`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  plan.highlight 
                    ? "bg-white/20" 
                    : "bg-hero-gradient"
                }`}>
                  <div className={plan.highlight ? "text-white" : "text-white"}>
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className={`text-2xl ${plan.highlight ? "text-white" : "text-primary"}`}>
                  {plan.name}
                </CardTitle>
                <p className={`text-sm ${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                    /{plan.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={plan.highlight ? "text-white/90" : "text-muted-foreground"}>
                      Empresas cadastradas
                    </span>
                    <span className={`font-semibold ${plan.highlight ? "text-white" : "text-foreground"}`}>
                      {plan.features.empresas}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={plan.highlight ? "text-white/90" : "text-muted-foreground"}>
                      Cadastros
                    </span>
                    <Check className={`w-5 h-5 ${plan.highlight ? "text-white" : "text-secondary"}`} />
                  </div>
                  <div className="flex justify-between">
                    <span className={plan.highlight ? "text-white/90" : "text-muted-foreground"}>
                      Movimentos
                    </span>
                    <Check className={`w-5 h-5 ${plan.highlight ? "text-white" : "text-secondary"}`} />
                  </div>
                  <div className="flex justify-between">
                    <span className={plan.highlight ? "text-white/90" : "text-muted-foreground"}>
                      Dashboards
                    </span>
                    {plan.features.dashboards ? (
                      <Check className={`w-5 h-5 ${plan.highlight ? "text-white" : "text-secondary"}`} />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className={plan.highlight ? "text-white/90" : "text-muted-foreground"}>
                      Insights/IA
                    </span>
                    {plan.features.insights ? (
                      <Check className={`w-5 h-5 ${plan.highlight ? "text-white" : "text-secondary"}`} />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
                
                <Button 
                  className={`w-full mt-6 font-semibold ${
                    plan.highlight 
                      ? "bg-white text-primary hover:bg-white/90" 
                      : ""
                  }`}
                  variant={plan.highlight ? undefined : "gradient"}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">
                Comparação Detalhada dos Planos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 py-4 border-b-2 border-primary font-semibold text-primary">
                <div>Recursos</div>
                <div className="text-center">Basic</div>
                <div className="text-center">Médio</div>
                <div className="text-center">Premium</div>
              </div>
              
              <FeatureRow 
                label="Empresas cadastradas" 
                basic="1" 
                medio="3" 
                premium="Ilimitado" 
              />
              <FeatureRow 
                label="Cadastros completos" 
                basic={true} 
                medio={true} 
                premium={true} 
              />
              <FeatureRow 
                label="Rotinas de movimentos" 
                basic={true} 
                medio={true} 
                premium={true} 
              />
              <FeatureRow 
                label="Dashboards avançados" 
                basic={false} 
                medio={true} 
                premium={true} 
              />
              <FeatureRow 
                label="Insights com IA" 
                basic={false} 
                medio={false} 
                premium={true} 
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;