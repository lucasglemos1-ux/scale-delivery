import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const ProblemSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const problems = [
    "Posta todos os dias",
    "Investe em anúncios",
    "Tem seguidores",
    "Mas não tem vendas previsíveis"
  ];

  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-24 section-glow">
      <div className="container px-5 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Problem statement */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-1">
              A maioria das lojas de roupas fazem tudo certo
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
              Investem em anúncios, engajam com seguidores e seguem todos os conselhos de marketing por aí. Mesmo assim, mês após mês, o faturamento continua imprevisível. O esforço existe, mas os resultados não acompanham.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl glow-border bg-card/50 backdrop-blur-sm mb-8 sm:mb-10 md:mb-12 lg:mb-16 mx-1 sm:mx-0"
          >
            <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 md:left-8">
              <span className="text-4xl sm:text-5xl md:text-6xl text-primary/30 font-serif">"</span>
            </div>
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-center font-medium text-foreground/90 pt-3 sm:pt-4">
              Sem previsibilidade, todo mês é incerto.
            </blockquote>
          </motion.div>

          {/* Problem list */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl bg-card/30 border border-border/50 card-glow transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                  {index < 3 ? (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
                    </div>
                  )}
                  <span className={`text-xs sm:text-sm font-medium text-center ${index === 3 ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {problem}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
