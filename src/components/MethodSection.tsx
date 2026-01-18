import { Instagram, MessageCircle, Tag, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const MethodSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const methods = [
    {
      icon: Instagram,
      title: "Posicionamento no Instagram",
      description: "Perfil estruturado para atrair quem compra, não quem apenas segue.",
      result: "audiência qualificada"
    },
    {
      icon: MessageCircle,
      title: "Estrutura de Conversão no WhatsApp",
      description: "Fluxos claros que transformam interesse em decisão de compra.",
      result: "maior intenção de compra"
    },
    {
      icon: Tag,
      title: "Clareza de Oferta",
      description: "Catálogo e promoções apresentados de forma estratégica.",
      result: "decisões mais rápidas"
    },
    {
      icon: TrendingUp,
      title: "Otimização do Fluxo de Vendas",
      description: "Cada etapa do processo calibrada para conversão.",
      result: "receita previsível"
    }
  ];

  return (
    <section id="method-section" className="relative py-14 sm:py-16 md:py-20 lg:py-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-primary/5 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px]" />
      
      <div className="container relative px-5 sm:px-6 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4 block">O Método</span>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-1">
            <span className="block sm:inline">SCALE COMPANY é um método proprietário,</span>{" "}
            <span className="gradient-text">não um serviço genérico</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            Um sistema completo que combina posicionamento, estrutura e conversão para criar vendas previsíveis e escaláveis. Desenvolvido especificamente para o mercado de moda.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto"
        >
          {methods.map((method, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-card/40 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-card/60 card-glow"
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-blue-electric/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <method.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2 md:mb-3">{method.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2.5 sm:mb-3 md:mb-4">{method.description}</p>
              
              {/* Result tag */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] sm:text-xs md:text-sm text-primary font-medium">Resultado: {method.result}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
