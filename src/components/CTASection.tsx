import { Button } from "@/components/ui/button";
import { ArrowRight, Bike } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants } from "@/hooks/useScrollAnimation";

const WHATSAPP_NUMBER = "5534984086550";

const CTASection = () => {
  const { ref, isInView } = useScrollAnimation();

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cta-section" className="relative py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 bg-primary/20 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-52 sm:w-60 md:w-72 lg:w-80 h-52 sm:h-60 md:h-72 lg:h-80 bg-orange-electric/15 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container relative px-5 sm:px-6 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/5 mb-5 sm:mb-6 md:mb-8">
            <Bike className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground">SCALE DELIVERY</span>
          </div>

          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-1">
            <span className="block sm:inline">Pronto para aumentar</span>{" "}
            <span className="gradient-text">os seus pedidos?</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2">
            Dê o primeiro passo rumo ao crescimento previsível. Aplique para um diagnóstico estratégico gratuito e descubra como o SCALE DELIVERY pode transformar seu delivery.
          </p>

          <div className="flex flex-col items-center gap-3 sm:gap-4 px-2 sm:px-0">
            <Button variant="glow" size="xl" className="group w-full sm:w-auto text-sm sm:text-base" onClick={handleWhatsAppClick}>
              Aplicar para Diagnóstico Estratégico
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              Aplicação gratuita · Sem compromisso · Vagas limitadas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;