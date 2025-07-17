import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";

interface Scripture {
  text: string;
  reference: string;
  translation_name?: string;
}

export default function DailyScripture() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: scriptures, isLoading, error } = useQuery<Scripture[]>({
    queryKey: ['/api/scripture/collection'],
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  // Auto-advance scripture every 10 seconds
  useEffect(() => {
    if (!scriptures?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % scriptures.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [scriptures?.length]);

  const nextScripture = () => {
    if (scriptures?.length) {
      setCurrentIndex((prev) => (prev + 1) % scriptures.length);
    }
  };

  const previousScripture = () => {
    if (scriptures?.length) {
      setCurrentIndex((prev) => (prev - 1 + scriptures.length) % scriptures.length);
    }
  };

  if (isLoading) {
    return (
      <section id="scripture" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Ayat Harian</h2>
            <p className="text-gray-600 text-lg">Firman Tuhan untuk menguatkan iman Anda setiap hari</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-6 mx-auto w-16"></div>
            <div className="h-24 bg-gray-200 rounded mb-6"></div>
            <div className="h-6 bg-gray-200 rounded mb-4 w-32 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !scriptures?.length) {
    return (
      <section id="scripture" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Ayat Harian</h2>
            <p className="text-gray-600 text-lg">Firman Tuhan untuk menguatkan iman Anda setiap hari</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center">
            <i className="fas fa-exclamation-triangle text-3xl text-amber-500 mb-4"></i>
            <p className="text-gray-600">Tidak dapat memuat ayat harian. Silakan coba lagi nanti.</p>
          </div>
        </div>
      </section>
    );
  }

  const currentScripture = scriptures[currentIndex];

  return (
    <section id="scripture" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Ayat Harian</h2>
          <p className="text-gray-600 text-lg">Firman Tuhan untuk menguatkan iman Anda setiap hari</p>
        </div>

        <div className="relative">
          <motion.div
            className="bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 text-center shadow-lg"
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 30px rgba(59, 130, 246, 0.6)",
                "0 0 20px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-6">
              <i className="fas fa-book-open text-3xl text-blue-500 mb-4"></i>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-lg md:text-xl font-medium text-slate-800 mb-6 leading-relaxed">
                  "{currentScripture.text}"
                </blockquote>

                <cite className="text-blue-500 font-semibold text-lg">
                  {currentScripture.reference}
                </cite>

                {currentScripture.translation_name && (
                  <p className="text-gray-500 text-sm mt-2">
                    {currentScripture.translation_name}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              onClick={previousScripture}
              className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
              whileHover={{ y: -2, boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-chevron-left text-blue-500"></i>
            </motion.button>

            <div className="flex space-x-2">
              {scriptures.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-opacity duration-300 ${index === currentIndex ? 'bg-blue-500 opacity-100' : 'bg-blue-500 opacity-50'
                    }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextScripture}
              className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
              whileHover={{ y: -2, boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-chevron-right text-blue-500"></i>
            </motion.button>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              <i className="fas fa-sync-alt mr-2"></i>
              Ayat baru setiap hari
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
