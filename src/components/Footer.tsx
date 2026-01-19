import { forwardRef } from "react";
import { Bike } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="relative py-8 sm:py-10 md:py-12 border-t border-border/30">
      <div className="container px-5 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-1.5 sm:gap-2 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Bike className="w-5 h-5 text-primary" />
              <span className="font-display text-lg sm:text-xl font-bold gradient-text">SCALE DELIVERY</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xs">
              Um método proprietário de crescimento para donos de delivery.
            </p>
          </div>

          <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
            © 2026 SCALE DELIVERY. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;