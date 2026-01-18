import { X, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const DifferenceSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const dontDo = [
    "Campanhas de marketing genéricas",
    "Estratégias de tamanho único",
    "Promessas vazias de viralizar",
    "Métricas de vaidade sem pedidos",
    "Táticas de curto prazo"
  ];

  const doDo = [
    "Sistemas de pedidos estruturados",
    "Estratégias de posicionamento personalizadas",
    "Frameworks focados em conversão",
    "Modelos de receita previsível",
    "Arquitetura de crescimento de longo prazo"
  ];

  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-24 section-glow">
      <div className="container px-5 sm:px-6 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4 block">O que nos torna diferentes</span>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold px-1">
            Clareza sobre o que{" "}
            <span className="gradient-text">entregamos</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {/* What we DON'T do */}
          <motion.div
            variants={staggerItem}
            className="relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-red-500/5 border border-red-500/20 backdrop-blur-sm"
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 text-red-500/80">
              O que NÃO fazemos
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
              {dontDo.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What we DO */}
          <motion.div
            variants={staggerItem}
            className="relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm card-glow"
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 text-primary">
              O que fazemos
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
              {doDo.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferenceSection;