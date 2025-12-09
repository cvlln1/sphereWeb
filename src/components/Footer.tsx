import logoSphere from "@/assets/logo-sphere.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <img src={logoSphere} alt="Sphere" className="w-12 h-12 mb-4" />
          <p className="text-muted-foreground text-sm mb-4">
            Transformando a forma como você organiza suas festas
          </p>
          <p className="text-muted-foreground text-xs">
            © 2024 Sphere. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
