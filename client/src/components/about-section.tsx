import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Tentang Pelayanan Kami</h2>
          <p className="text-gray-600 text-lg">Mengenal lebih dekat misi dan visi Hati untuk Tuhan</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                Kami rindu setiap orang mengalami kasih Yesus dan menemukan harapan yang sejati melalui-Nya. 
                <strong className="text-blue-500"> Hati untuk Tuhan</strong> adalah gerakan digital untuk menjangkau jiwa 
                lewat video pendek yang sederhana namun bermakna.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Melalui platform TikTok dan Instagram, kami membagikan pesan Injil dengan cara yang relevan 
                dan mudah dipahami oleh generasi digital. Setiap konten dirancang dengan doa dan kasih 
                untuk menyentuh hati dan membawa transformasi rohani.
              </p>
            </div>
            
            {/* Mission Points */}
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-heart text-white text-xs"></i>
                </div>
                <p className="text-gray-600">Membagikan kabar baik (Injil) dengan penuh kasih dan kejelasan</p>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-users text-white text-xs"></i>
                </div>
                <p className="text-gray-600">Membangun komunitas rohani yang saling mendukung</p>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-seedling text-white text-xs"></i>
                </div>
                <p className="text-gray-600">Mendukung pertumbuhan iman melalui konten yang menginspirasi</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Visual Element */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <i className="fas fa-globe text-6xl text-blue-500 mb-4"></i>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Jangkauan Global</h3>
                    <p className="text-gray-600 text-sm px-4">Menyebarkan kasih Kristus ke seluruh dunia</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <i className="fas fa-cross text-white text-xl"></i>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <i className="fas fa-dove text-white"></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
