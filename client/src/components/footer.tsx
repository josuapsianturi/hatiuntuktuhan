import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <i className="fas fa-heart text-white"></i>
              </div>
              <span className="text-xl font-bold">Hati untuk Tuhan</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Menjangkau jiwa, menyatakan kasih-Nya melalui platform digital untuk kemuliaan Tuhan Yesus.
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors duration-300">Beranda</a>
              <a href="#scripture" className="block text-gray-300 hover:text-white transition-colors duration-300">Ayat Harian</a>
              <a href="#prayer" className="block text-gray-300 hover:text-white transition-colors duration-300">Permohonan Doa</a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-300">Tentang Kami</a>
            </div>
          </motion.div>
          
          {/* Social Media */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <motion.a 
                href="https://www.tiktok.com/@hatiuntuktuhan" 
                target="_blank" 
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <i className="fab fa-tiktok"></i>
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/hatiuntuktuhan/" 
                target="_blank" 
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <i className="fab fa-whatsapp"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-green-400 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <i className="fab fa-spotify"></i>
              </motion.a>
            </div>
            
            {/* Spotify Playlist Placeholder */}
            <div className="bg-gray-700 rounded-xl p-4 text-left">
              <h4 className="font-semibold mb-2">Playlist Rohani</h4>
              <p className="text-sm text-gray-400 mb-3">Musik worship untuk menyembah Tuhan</p>
              <div className="bg-green-500 rounded-lg p-3 text-center">
                <i className="fab fa-spotify text-xl mb-1"></i>
                <p className="text-xs">Dengarkan di Spotify</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            Made with 💖 to glorify Jesus
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Hati untuk Tuhan. Segala kemuliaan bagi Tuhan Yesus Kristus.
          </p>
          <div className="mt-4">
            <a 
              href="/admin" 
              className="text-xs text-gray-500 hover:text-gray-400 transition-colors duration-300"
            >
              Admin Panel
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
