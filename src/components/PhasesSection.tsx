import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const WHATSAPP_NUMBER = "5534984086550";

const PhasesSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`, "_blank", "noopener,noreferrer");
  };

  const phases = [
    {
      number: "01",
      title: "Posicionamento",
      description: "Defina sua posição única no mercado e identidade de marca que atrai seus clientes ideais."
    },
    {
      number: "02",
      title: "Estrutura",
      description: "Construa os sistemas e processos que suportam crescimento sustentável e escalável."
    },
    {
      number: "03",
      title: "Conversão",
      description: "Implemente estratégias comprovadas que transformam interesse em vendas consistentemente."
    },
    {
      number: "04",
      title: "Escala",
      description: "Amplifique o que funciona e expanda seu alcance com resultados previsíveis."
    }
  ];

  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-52 sm:w-64 md:w-80 h-52 sm:h-64 md:h-80 bg-blue-electric/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-52 sm:w-64 md:w-80 h-52 sm:h-64 md:h-80 bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />
      </div>

      <div className="container relative px-5 sm:px-6 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            As 4 fases do <span className="gradient-text">SCALE</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 lg:gap-6 mb-8 sm:mb-10 md:mb-12"
        >
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative"
            >
              {/* Connector line */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="relative p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 h-full card-glow">
                {/* Phase number */}
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text opacity-50 mb-1.5 sm:mb-2 md:mb-3 lg:mb-4">
                  {phase.number}
                </div>
                
                {/* Content */}
                <h3 className="font-display text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1.5 sm:mb-2 md:mb-3">{phase.title}</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center px-2 sm:px-0"
        >
          <Button variant="cta" size="lg" className="group w-full sm:w-auto text-sm sm:text-base" onClick={handleWhatsAppClick}>
            Aplicar para Diagnóstico Estratégico
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PhasesSection;
