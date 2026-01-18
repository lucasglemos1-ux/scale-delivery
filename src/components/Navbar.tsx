import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_NUMBER = "5534984086550";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 z-10">
              <span className="font-display text-lg sm:text-xl font-bold gradient-text">
                SCALE COMPANY
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden sm:flex items-center gap-5 md:gap-6 lg:gap-8">
              <button
                onClick={scrollToTop}
                className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("method-section")}
                className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Serviço
              </button>
              <button
                onClick={() => scrollToSection("cta-section")}
                className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contato
              </button>
            </div>

            {/* Desktop CTA */}
            <Button variant="ctaOutline" size="sm" className="hidden sm:inline-flex text-xs sm:text-sm" onClick={handleWhatsAppClick}>
              Solicitar Diagnóstico
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-card/50 transition-colors z-10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl sm:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-6 pt-14">
            <button
              onClick={scrollToTop}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("method-section")}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Serviço
            </button>
            <button
              onClick={() => scrollToSection("cta-section")}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Contato
            </button>
            <Button variant="cta" size="lg" className="mt-4" onClick={() => { handleWhatsAppClick(); setMobileMenuOpen(false); }}>
              Solicitar Diagnóstico
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
