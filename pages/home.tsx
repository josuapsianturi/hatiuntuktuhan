import HeroSection from "@/components/hero-section";
import SocialEmbeds from "@/components/social-embeds";
import DailyScripture from "@/components/daily-scripture";
import PrayerForm from "@/components/prayer-form";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <i className="fas fa-heart text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold text-slate-800">Hati untuk Tuhan</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">Beranda</a>
              <a href="#scripture" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">Ayat Harian</a>
              <a href="#prayer" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">Doa</a>
              <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">Tentang</a>
            </div>
            
            <button className="md:hidden text-gray-600 hover:text-blue-500">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </nav>
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
