import { Button } from "@/components/ui/button";
import { ArrowRight, Bike, Package, MapPin, Clock, UtensilsCrossed, Truck } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5534984086550";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`, "_blank", "noopener,noreferrer");
  };

  const floatingIcons = [
    { Icon: Bike, className: "top-[15%] left-[8%] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12", delay: 0 },
    { Icon: Package, className: "top-[25%] right-[10%] w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10", delay: 0.5 },
    { Icon: MapPin, className: "bottom-[30%] left-[5%] w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11", delay: 1 },
    { Icon: Clock, className: "top-[40%] right-[6%] w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9", delay: 1.5 },
    { Icon: UtensilsCrossed, className: "bottom-[20%] right-[12%] w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10", delay: 2 },
    { Icon: Truck, className: "top-[60%] left-[10%] w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9", delay: 2.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-52 sm:w-64 md:w-80 h-52 sm:h-64 md:h-80 bg-orange-electric/15 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] md:w-[800px] h-[500px] sm:h-[600px] md:h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Floating delivery icons with glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, className, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: delay + 0.5 }}
            className={`absolute ${className}`}
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4 + index * 0.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: delay
              }}
              className="relative"
            >
              {/* Glow effect behind icon */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150" />
              <Icon className="relative text-primary/15 drop-shadow-[0_0_15px_hsl(25_95%_53%/0.3)]" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Subtle delivery pattern overlay */}
      <div className="absolute inset-0 delivery-pattern opacity-30" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container relative z-10 px-5 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/5 mb-5 sm:mb-6 md:mb-8"
          >
            <Bike className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground">SCALE DELIVERY</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-5 md:mb-6 leading-[1.15] sm:leading-tight px-1"
          >
            <span className="block sm:inline">Um método estruturado de</span>{" "}
            <span className="gradient-text">crescimento</span>{" "}
            <span className="block sm:inline">para donos de delivery</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-3 sm:mb-4 px-2"
          >
            Não é sobre entregar mais. É sobre vender melhor.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 sm:mt-6 md:mt-8 w-full sm:w-auto px-2 sm:px-0"
          >
            <Button variant="cta" size="xl" className="group w-full sm:w-auto text-sm sm:text-base" onClick={handleWhatsAppClick}>
              Solicitar Diagnóstico Estratégico
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4"
          >
            Aplicação gratuita · Sem compromisso
          </motion.p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;