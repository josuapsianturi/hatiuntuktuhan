import HeroSection from "@/components/hero-section";
import SocialEmbeds from "@/components/social-embeds";
import DailyScripture from "@/components/daily-scripture";
import PrayerForm from "@/components/prayer-form";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const elementId = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(elementId || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between pr-2">
            <div className="flex items-center space-x-3">
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img src="/logo.png" alt="Logo Hati untuk Tuhan" width="48" height="48" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow" />
              </picture>
              <span className="text-xl font-bold text-slate-800">Hati untuk Tuhan</span>
            </div>
            
            <div className="hidden md:flex items-center">
              <a href="#home" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 mr-10">Beranda</a>
              <a href="#scripture" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 mr-10">Ayat Harian</a>
              <a href="#prayer" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 mr-10">Doa</a>
              <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">Tentang</a>
            </div>
            
            <button className="md:hidden text-gray-600 hover:text-blue-500" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} aria-label="Buka menu">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
            <nav className="flex flex-col items-start px-6 py-4 space-y-4">
              <a href="#home" className="text-gray-600 hover:text-blue-500 w-full" onClick={() => setMobileMenuOpen(false)}>Beranda</a>
              <a href="#scripture" className="text-gray-600 hover:text-blue-500 w-full" onClick={() => setMobileMenuOpen(false)}>Ayat Harian</a>
              <a href="#prayer" className="text-gray-600 hover:text-blue-500 w-full" onClick={() => setMobileMenuOpen(false)}>Doa</a>
              <a href="#about" className="text-gray-600 hover:text-blue-500 w-full" onClick={() => setMobileMenuOpen(false)}>Tentang</a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <SocialEmbeds />
        <DailyScripture />
        <PrayerForm />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
