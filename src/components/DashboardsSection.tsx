import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, MapPin, Clock, TrendingUp, Zap, Brain } from "lucide-react";
import dashboardImage from "@/assets/dashboard-image.png";
import analyticsImage from "@/assets/analytics-image.png";

const DashboardsSection = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Quantidade e Valor de Entregas",
      description: "Acompanhe o volume total e faturamento em tempo real"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Distância Percorrida",
      description: "Métricas precisas de quilometragem e otimização de rotas"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Tempo de Ciclo Completo",
      description: "Da venda ao retorno do entregador, controle total do processo"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Análise de Bairros",
      description: "Identifique regiões de alta/baixa demanda e picos sazonais"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Localização em Tempo Real",
      description: "Rastreamento GPS dos entregadores durante as rotas"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Comissionamento Automático",
      description: "Cálculo inteligente de comissões baseado em performance"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Dashboards e Relatórios Inteligentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transforme dados em insights poderosos com dashboards avançados e inteligência artificial 
            para otimizar suas operações de entrega.
          </p>
        </div>
        
        {/* Dashboard Images */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <img 
              src={dashboardImage} 
              alt="Dashboard de Entregas PLUG" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <img 
              src={analyticsImage} 
              alt="Analytics e Processamento de Dados PLUG" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-lg text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* AI Insights Highlight */}
        <div className="mt-16 text-center">
          <Card className="bg-hero-gradient border-0 shadow-elegant max-w-4xl mx-auto">
            <CardContent className="p-8 text-white">
              <div className="flex items-center justify-center mb-4">
                <Brain className="w-12 h-12 mr-4" />
                <h3 className="text-2xl font-bold">Insights Inteligentes com IA</h3>
              </div>
              <p className="text-lg text-white/90 mb-6">
                Nossa inteligência artificial analisa padrões de entrega, identifica outliers, 
                prevê demandas futuras e otimiza automaticamente rotas para máxima eficiência.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">+25%</div>
                  <div className="text-white/80">Eficiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">-30%</div>
                  <div className="text-white/80">Tempo de Rota</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">+40%</div>
                  <div className="text-white/80">ROI</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardsSection;