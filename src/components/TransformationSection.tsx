import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const WHATSAPP_NUMBER = "5534984086550";

const TransformationSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`, "_blank", "noopener,noreferrer");
  };

  const before = [
    "Postando sem estratégia",
    "Receita mensal inconsistente",
    "Sem processo de vendas claro",
    "Dependente de sorte e tendências",
    "Esgotado sem resultados"
  ];

  const after = [
    "Conteúdo estratégico que converte",
    "Renda mensal previsível",
    "Sistema de vendas estruturado",
    "Decisões de crescimento baseadas em dados",
    "Crescimento sustentável do negócio"
  ];

  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] bg-primary/5 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px]" />
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
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4 block">Sua transformação</span>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-1">
            <span className="block sm:inline">De esforço caótico para</span>{" "}
            <span className="gradient-text">sistemas previsíveis</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            que funcionam enquanto você foca no que ama.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12"
        >
          {/* Before */}
          <motion.div variants={staggerItem} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-muted/50 to-transparent rounded-xl sm:rounded-2xl blur-xl opacity-50" />
            <div className="relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm h-full">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-muted/30 border border-border/50 mb-4 sm:mb-5 md:mb-6">
                <span className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">ANTES</span>
              </div>
              <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
                {before.map((item, index) => (
                  <li key={index} className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-muted-foreground/30" />
                    <span className="text-xs sm:text-sm md:text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After */}
          <motion.div variants={staggerItem} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-electric/20 rounded-xl sm:rounded-2xl blur-xl opacity-50" />
            <div className="relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-card/40 border border-primary/30 backdrop-blur-sm h-full card-glow">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/10 border border-primary/30 mb-4 sm:mb-5 md:mb-6">
                <span className="text-[10px] sm:text-xs font-medium text-primary uppercase tracking-wider">DEPOIS</span>
              </div>
              <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
                {after.map((item, index) => (
                  <li key={index} className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                    <span className="text-xs sm:text-sm md:text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center px-2 sm:px-0"
        >
          <Button variant="cta" size="lg" className="group w-full sm:w-auto text-sm sm:text-base" onClick={handleWhatsAppClick}>
            Iniciar Diagnóstico Estratégico
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationSection;
