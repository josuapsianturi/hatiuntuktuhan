import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface PrayerFormData {
  name: string;
  message: string;
}

export default function PrayerForm() {
  const [formData, setFormData] = useState<PrayerFormData>({
    name: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitPrayerMutation = useMutation({
    mutationFn: async (data: PrayerFormData) => {
      const response = await apiRequest('POST', '/api/prayer-requests', data);
      return response.json();
    },
    onSuccess: () => {
      setFormData({ name: '', message: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      toast({
        title: "Terima kasih!",
        description: "Kami akan mendoakanmu dengan sepenuh hati. 🙏",
      });
    },
    onError: (error) => {
      console.error('Prayer submission error:', error);
      toast({
        title: "Terjadi kesalahan",
        description: "Silakan coba lagi dalam beberapa saat.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast({
        title: "Nama diperlukan",
        description: "Silakan masukkan nama Anda.",
        variant: "destructive",
      });
      return;
    }
    if (!formData.message.trim()) {
      toast({
        title: "Pesan doa diperlukan",
        description: "Silakan masukkan pesan doa Anda.",
        variant: "destructive",
      });
      return;
    }
    submitPrayerMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="prayer" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Permohonan Doa</h2>
          <p className="text-gray-600 text-lg">Bagikan kebutuhan doa Anda dengan kami. Tim kami akan mendoakan Anda dengan sepenuh hati.</p>
        </div>
        <motion.form 
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nama <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Masukkan nama Anda"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            {/* Prayer Message */}
            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Permohonan Doa <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                required
                placeholder="Bagikan kebutuhan doa atau hal yang ingin di doakan..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>
            {/* Privacy Notice */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600">
                <i className="fas fa-shield-alt text-blue-500 mr-2"></i>
                Doa Anda akan dijaga kerahasiaannya dan hanya dibagikan dengan tim doa kami.
              </p>
            </div>
            {/* Submit Button */}
            <Button
              type="submit"
              disabled={submitPrayerMutation.isPending}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <i className="fas fa-praying-hands"></i>
              <span>
                {submitPrayerMutation.isPending ? 'Mengirim...' : 'Kirim Permohonan Doa'}
              </span>
            </Button>
          </div>
        </motion.form>
        {/* Success Message */}
        {showSuccess && (
          <motion.div 
            className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <i className="fas fa-check-circle text-green-500 text-3xl mb-3"></i>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Terima kasih!</h3>
            <p className="text-green-700">Kami akan mendoakanmu dengan sepenuh hati. 🙏</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
