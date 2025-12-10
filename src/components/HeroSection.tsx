import { Button } from "@/components/ui/button";
import logoSphere from "@/assets/bolas.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-sphere-pink/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sphere-purple/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sphere-orange/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <img
            src={logoSphere}
            alt="Sphere Logo"
            className="w-60 h-35 mx-auto mb-8 mt-8 animate-float"
          />
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <span className="gradient-text">Sphere</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          O app completo para organizar suas festas e contratar os melhores serviços.
          Tudo em um só lugar.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <a href="https://www.figma.com/proto/wBISXaytsWLqBBQPoSUUEt/Sphere?node-id=4640-6890&t=DjeiU60bXSsadwHW-1">
            <Button variant="hero" size="xl">
              Ver Demo Figma
            </Button>
          </a>

          <a href="https://www.figma.com/design/wBISXaytsWLqBBQPoSUUEt/Sphere?node-id=4640-6890&t=uH9vVoaIyEPf5jXM-1">
            <Button variant="hero" size="xl">
              Ver Protótipo Figma
            </Button>
          </a>
        </div>

        <div
          className="mt-16 flex items-center justify-center gap-8 text-muted-foreground animate-fade-in-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">10k+</p>
            <p className="text-sm">Downloads</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">500+</p>
            <p className="text-sm">Fornecedores</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">4.9★</p>
            <p className="text-sm">Avaliação</p>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col items-center justify-center gap-8 text-muted-foreground animate-fade-in-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que é o  <span className="gradient-text">Sphere</span>?
          </h2>

          <p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Sphere é um projeto desenvolvido para a disciplina de IHC do curso de Ciência da Computação, utilizando métodos do Google Design Sprint. Seu objetivo é criar um aplicativo simples e integrado para gerenciar a contratação de serviços e contato seus fornnecedores no contexto de gerenciamento de festas.

        </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
