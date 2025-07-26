import HeroSection from "@/components/hero-section";
import SocialEmbeds from "@/components/social-embeds";
import DailyScripture from "@/components/daily-scripture";
import PrayerForm from "@/components/prayer-form";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import Navbar from "../client/src/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 overflow-x-hidden">
      <Navbar />
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
