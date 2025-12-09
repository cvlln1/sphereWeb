import { Calendar, Users, Star, MapPin, CreditCard, Bell } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Planejamento Simples",
    description: "Organize todos os detalhes da sua festa em um só lugar. Defina datas, horários e gerencie sua lista de tarefas com facilidade."
  },
  {
    icon: Users,
    title: "Contrate Profissionais",
    description: "Encontre e contrate DJs, buffets, decoradores e muito mais. Todos os fornecedores verificados e avaliados pela comunidade."
  },
  {
    icon: Star,
    title: "Avaliações Reais",
    description: "Veja avaliações e fotos de eventos anteriores. Escolha os melhores profissionais baseado em experiências reais."
  },
  {
    icon: MapPin,
    title: "Locais Incríveis",
    description: "Descubra espaços para eventos na sua região. Salões, chácaras, rooftops e muito mais para fazer sua festa perfeita."
  },
  {
    icon: CreditCard,
    title: "Pagamento Seguro",
    description: "Realize pagamentos de forma segura diretamente pelo app. Parcele em até 12x e tenha total controle financeiro."
  },
  {
    icon: Bell,
    title: "Lembretes Inteligentes",
    description: "Receba notificações sobre prazos, confirmações e dicas para não esquecer nenhum detalhe importante do seu evento."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">

           {/* YouTube Video Embed */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/20">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Y-W-w8yNiKU"
                title="Apresentação do Sphere"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>


          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como o <span className="gradient-text">Sphere</span> funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra como tornamos a organização de eventos mais simples e prazerosa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
