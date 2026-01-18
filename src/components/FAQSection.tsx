import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const faqs = [
    {
      question: "Para quem esse método é indicado?",
      answer: "O método SCALE DELIVERY é indicado para donos de delivery que já têm um negócio rodando, mas enfrentam dificuldades com previsibilidade de pedidos. É ideal para quem quer sair da dependência dos apps de terceiros e construir um canal próprio de vendas com estrutura sólida e resultados consistentes."
    },
    {
      question: "Como funciona o processo na prática?",
      answer: "O processo começa com um diagnóstico estratégico gratuito, onde analisamos a situação atual do seu delivery. A partir disso, desenvolvemos um plano personalizado focado em 4 pilares: posicionamento digital, estrutura de conversão no WhatsApp, clareza de cardápio e ofertas, e otimização do fluxo de pedidos. Cada etapa é implementada de forma gradual e acompanhada."
    },
    {
      question: "Em quanto tempo costumam aparecer os primeiros resultados?",
      answer: "Os primeiros resultados variam de acordo com a estrutura atual do negócio, mas geralmente começam a aparecer nas primeiras semanas de implementação. O foco não é em resultados rápidos e passageiros, mas sim em construir uma base sólida que gere pedidos previsíveis e sustentáveis a longo prazo."
    },
    {
      question: "O foco está em anúncios ou na estrutura do negócio?",
      answer: "O foco principal está na estrutura do negócio. Acreditamos que anunciar sem ter uma estrutura de conversão sólida é desperdiçar dinheiro. Por isso, primeiro organizamos o posicionamento, o cardápio e o fluxo de pedidos. Os anúncios entram como amplificador de algo que já funciona organicamente."
    },
    {
      question: "Como posso aplicar ou solicitar uma avaliação?",
      answer: "Para solicitar seu diagnóstico estratégico gratuito, basta clicar em qualquer botão desta página. Você será direcionado para o WhatsApp, onde poderá iniciar uma conversa com nossa equipe. A aplicação é gratuita, sem compromisso, e as vagas são limitadas para garantir atendimento personalizado."
    }
  ];

  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-5 sm:px-6 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4 block">
            Perguntas Frequentes
          </span>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold px-1">
            Dúvidas sobre o{" "}
            <span className="gradient-text">método</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-2.5 sm:space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={staggerItem}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg sm:rounded-xl bg-card/30 backdrop-blur-sm px-4 sm:px-5 md:px-6 overflow-hidden hover:border-primary/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left text-xs sm:text-sm md:text-base font-medium hover:no-underline py-3.5 sm:py-4 md:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xs sm:text-sm md:text-base pb-3.5 sm:pb-4 md:pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;