import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MethodSection from "@/components/MethodSection";
import PhasesSection from "@/components/PhasesSection";
import DifferenceSection from "@/components/DifferenceSection";
import ForWhoSection from "@/components/ForWhoSection";
import TransformationSection from "@/components/TransformationSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <PhasesSection />
      <DifferenceSection />
      <ForWhoSection />
      <TransformationSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
