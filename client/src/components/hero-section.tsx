import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Icon */}
          <div className="mb-8 flex justify-center">
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-amber-500 rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <i className="fas fa-heart text-white text-3xl"></i>
            </motion.div>
          </div>
          
          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Jangkau Jiwa, Nyatakan Kasih-Nya
          </h1>
          
          {/* Hero Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Video pendek tentang Injil & Yesus Kristus yang menginspirasi dan membangun iman. Bergabunglah dengan komunitas rohani kami.
          </p>
          
          {/* CTA Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* TikTok Button */}
            <motion.a 
              href="https://www.tiktok.com/@hatiuntuktuhan" 
              target="_blank" 
              aria-label="Follow Hati untuk Tuhan on TikTok"
              className="group bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-tiktok text-xl group-hover:scale-110 transition-transform duration-300"></i>
              <span>Follow TikTok</span>
            </motion.a>
            
            {/* Instagram Button */}
            <motion.a 
              href="https://www.instagram.com/hatiuntuktuhan/" 
              target="_blank" 
              aria-label="Follow Hati untuk Tuhan on Instagram"
              className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-instagram text-xl group-hover:scale-110 transition-transform duration-300"></i>
              <span>Follow Instagram</span>
            </motion.a>
            
            {/* WhatsApp Button */}
            <motion.a 
              href="https://whatsapp.com/channel/0029Vb5nv4b89indhGAwaY0s" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join Hati untuk Tuhan WhatsApp Channel"
              className="group bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform duration-300"></i>
              <span>Join WhatsApp</span>
            </motion.a>
            
            {/* Spotify Button */}
            <motion.a 
              href="https://open.spotify.com/playlist/3bZfjBuLVHw0aC7UPAsUyg?si=xX-fFWyOSxqnCF7Kyx2sIQ" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen to Hati untuk Tuhan Spotify Playlist"
              className="group bg-green-400 hover:bg-green-500 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-spotify text-xl group-hover:scale-110 transition-transform duration-300"></i>
              <span>Playlist Rohani</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
