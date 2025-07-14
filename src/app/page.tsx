// src/app/page.tsx
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScriptureSlider from "@/components/scripture-slider";
import DailyVerse from "@/components/daily-verse";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-50 to-beige-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Kenal <span className="text-yellow-400">Kasih Yesus</span>
                <br />
                Lebih Dalam
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Temukan kedamaian sejati dan kasih yang tak terbatas dari Yesus
                Kristus. Mari berjalanlah bersama dalam perjalanan iman yang
                penuh berkat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  className="bg-yellow-400 text-white hover:bg-yellow-500 shadow-lg"
                >
                  <a
                    href="https://www.instagram.com/hatiuntuktuhan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-sky-300 text-sky-600 hover:bg-sky-50"
                >
                  <a
                    href="https://www.tiktok.com/@hatiuntuktuhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M224,80a80,80,0,0,1-48-16v72a64,64,0,1,1-64-64v32a32,32,0,1,0,32,32V32h32a48,48,0,0,0,48,48Z" />
                    </svg>
                    TikTok
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="">
                <Image
                  src="/logo.png"
                  alt="Logo Hati Untuk Tuhan"
                  width={800}
                  height={600}
                  className="w-full h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScriptureSlider />
      <DailyVerse />
    </div>
  );
}
