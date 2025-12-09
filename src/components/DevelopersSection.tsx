import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Vic from "../assets/Vic.jpeg"
import Nic from "../assets/Nic.jpeg"
import Luc from "../assets/Luc.jpeg"
import Yur from "../assets/Yur.jpeg"


const developers = [
  {
    name: "Victória Oliveira",
    role: "Full Stack Developer e Especialista em IA",
    avatar: Vic,
  },
  {
    name: "Nicolas Rodrigues",
    role: "Backend Developer e Soldado Brasileiro",
    avatar: Nic,
  },
  {
    name: "Lucas Grander",
    role: "UI/UX Designer",
    avatar: Luc,
  },
  {
    name: "Yuri Ferreira",
    role: "Backend Developer",
    avatar: Yur,
  },

];

const DevelopersSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça nosso <span className="gradient-text">Time</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Os desenvolvedores por trás do Sphere
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {developers.map((dev, index) => (
              <CarouselItem key={dev.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="dev-card text-center group hover:-translate-y-2 hover:shadow-glow">
                  <div className="relative mx-auto w-24 h-24 mb-4">
                    <div className="absolute inset-0 gradient-bg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                    <img
                      src={dev.avatar}
                      alt={dev.name}
                      className="relative w-24 h-24 rounded-full object-cover border-4 border-background shadow-soft"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {dev.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {dev.role}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-sphere-pink text-sphere-pink hover:bg-sphere-pink hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 border-sphere-pink text-sphere-pink hover:bg-sphere-pink hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default DevelopersSection;
