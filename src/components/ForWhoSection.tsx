import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const ForWhoSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const forYou = [
    "Já tem delivery rodando, mas falta previsibilidade de pedidos",
    "Depende dos apps e quer canal próprio de vendas",
    "Está disposto a organizar processos antes de escalar",
    "Pensa no negócio como empresa de longo prazo"
  ];

  const notForYou = [
    "Busca resultado rápido sem mudar estrutura",
    "Quer apenas mais seguidores ou curtidas",
    "Não aceita ajustar atendimento e operação",
    "Ainda não tem cardápio e público validados"
  ];

  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 bg-primary/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]" />
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
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4 block">PARA QUEM</span>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            Este método é para você?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            SCALE DELIVERY não é para todos. Funciona melhor para quem está pronto para construir algo sólido.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {/* Is for you */}
          <motion.div
            variants={staggerItem}
            className="relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-card/40 border border-green-500/30 backdrop-blur-sm card-glow"
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-green-500" />
              </div>
              É para você se
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not for you */}
          <motion.div
            variants={staggerItem}
            className="relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-card/20 border border-red-500/30 backdrop-blur-sm"
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2.5 sm:gap-3 text-muted-foreground">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-red-500" />
              </div>
              Não é para você se
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-muted-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center text-xs sm:text-sm md:text-base text-muted-foreground mt-6 sm:mt-8 md:mt-10 max-w-xl mx-auto px-2"
        >
          Se você se identifica com o primeiro quadro, este método foi desenhado para você.
        </motion.p>
      </div>
    </section>
  );
};

export default ForWhoSection;