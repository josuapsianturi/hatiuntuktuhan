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
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img src="/logo.png" alt="Logo Hati untuk Tuhan" width="40" height="40" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" />
              </picture>
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
              <a href="/kesaksian" className="block text-gray-300 hover:text-purple-300 transition-colors duration-300">Kesaksian</a>
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
                aria-label="TikTok Hati untuk Tuhan"
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <i className="fab fa-tiktok"></i>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/hatiuntuktuhan/"
                target="_blank"
                aria-label="Instagram Hati untuk Tuhan"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a
                href="https://whatsapp.com/channel/0029Vb5nv4b89indhGAwaY0s"
                target="_blank"
                aria-label="WhatsApp Hati untuk Tuhan"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <i className="fab fa-whatsapp"></i>
              </motion.a>
              <motion.a
                href="https://open.spotify.com/playlist/3bZfjBuLVHw0aC7UPAsUyg?si=xX-fFWyOSxqnCF7Kyx2sIQ"
                target="_blank"
                aria-label="Spotify Playlist Hati untuk Tuhan"
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
              <a
                href="https://open.spotify.com/playlist/3bZfjBuLVHw0aC7UPAsUyg?si=xX-fFWyOSxqnCF7Kyx2sIQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 rounded-lg p-3 text-center flex flex-col items-center transition-colors duration-300 mb-3"
              >
                <i className="fab fa-spotify text-xl mb-1"></i>
                <span className="text-xs">Dengarkan di Spotify</span>
              </a>
              <div className="rounded-lg overflow-hidden">
                <iframe title="Spotify Playlist Rohani" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/3bZfjBuLVHw0aC7UPAsUyg?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
            © {new Date().getFullYear()} Hati untuk Tuhan. Segala kemuliaan bagi Tuhan Yesus Kristus.
          </p>
        </div>
      </div>
    </footer>
  );
}
