import { motion } from "framer-motion";

export default function SocialEmbeds() {
  // Dummy followers count, bisa diupdate otomatis jika diinginkan
  const tiktokFollowers = '12.3K';
  const instagramFollowers = '8.7K';

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Konten Terbaru Kami</h2>
          <p className="text-gray-600 text-lg">Saksikan video-video inspiratif kami di platform sosial media</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* TikTok Embed */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8"
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <i className="fab fa-tiktok text-2xl mr-3"></i>
              <h3 className="text-xl font-semibold">Video TikTok Terpopuler</h3>
            </div>
            {/* TikTok Embed */}
            <div className="aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center mb-4 max-w-xs mx-auto overflow-hidden">
              <iframe
                src="https://www.tiktok.com/embed/@hatiuntuktuhan"
                width="240"
                height="420"
                allow="autoplay; encrypted-media"
                title="TikTok Hati untuk Tuhan"
                className="rounded-xl border-none"
              ></iframe>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-2">Follow akun TikTok kami untuk video inspiratif terbaru!</p>
              <a href="https://www.tiktok.com/@hatiuntuktuhan" target="_blank" className="inline-flex items-center text-blue-500 hover:text-purple-600 font-semibold mb-2">
                Follow TikTok <i className="fas fa-external-link-alt ml-2 text-sm"></i>
              </a>
            </div>
          </motion.div>

          {/* Instagram Embed */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8"
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <i className="fab fa-instagram text-2xl mr-3 text-pink-500"></i>
              <h3 className="text-xl font-semibold">Post Instagram Terbaik</h3>
            </div>
            {/* Instagram Embed */}
            <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
              <iframe
                src="https://www.instagram.com/hatiuntuktuhan/embed"
                width="320"
                height="400"
                allow="autoplay; encrypted-media"
                title="Instagram Hati untuk Tuhan"
                className="rounded-xl border-none"
              ></iframe>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-2">Follow Instagram kami untuk renungan harian dan inspirasi rohani!</p>
              <a href="https://www.instagram.com/hatiuntuktuhan/" target="_blank" className="inline-flex items-center text-blue-500 hover:text-purple-600 font-semibold mb-2">
                Follow Instagram <i className="fas fa-external-link-alt ml-2 text-sm"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
