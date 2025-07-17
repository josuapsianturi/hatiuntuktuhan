import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Link } from "wouter";

interface PrayerRequest {
  id: number;
  name: string | null;
  email: string | null;
  message: string;
  createdAt: string;
}

export default function Admin() {
  const { data: prayerRequests, isLoading, error, refetch } = useQuery({
    queryKey: ['/api/prayer-requests'],
    staleTime: 0, // Always fetch fresh data
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-purple-50 p-4">
        <div className="container mx-auto max-w-6xl pt-20">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat permohonan doa...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-purple-50 p-4">
        <div className="container mx-auto max-w-6xl pt-20">
          <div className="text-center">
            <i className="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Gagal memuat data</h2>
            <p className="text-gray-600 mb-4">Terjadi kesalahan saat memuat permohonan doa</p>
            <Button onClick={() => refetch()} className="bg-blue-500 hover:bg-blue-600">
              Coba Lagi
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-gray-200/50 p-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <i className="fas fa-praying-hands text-white"></i>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Admin - Permohonan Doa</h1>
                <p className="text-sm text-gray-600">Hati untuk Tuhan</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <i className="fas fa-home"></i>
                <span>Kembali ke Website</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl p-4 pt-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Daftar Permohonan Doa</h2>
              <p className="text-gray-600">
                Total: {prayerRequests?.length || 0} permohonan doa
              </p>
            </div>
            <Button 
              onClick={() => refetch()} 
              variant="outline"
              className="flex items-center space-x-2"
            >
              <i className="fas fa-sync-alt"></i>
              <span>Refresh</span>
            </Button>
          </div>
        </div>

        {!prayerRequests || prayerRequests.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <i className="fas fa-inbox text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Belum ada permohonan doa</h3>
            <p className="text-gray-500">Permohonan doa akan muncul di sini setelah ada yang mengirim</p>
          </motion.div>
        ) : (
          <div className="grid gap-6">
            {prayerRequests.map((request: PrayerRequest, index: number) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-white"></i>
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {request.name || "Anonymous"}
                          </CardTitle>
                          {request.email && (
                            <CardDescription className="flex items-center space-x-1">
                              <i className="fas fa-envelope text-xs"></i>
                              <span>{request.email}</span>
                            </CardDescription>
                          )}
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <i className="fas fa-clock text-xs"></i>
                          <span>
                            {format(new Date(request.createdAt), "dd/MM/yyyy HH:mm")}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          ID: #{request.id}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2 flex items-center space-x-2">
                        <i className="fas fa-praying-hands text-blue-500"></i>
                        <span>Permohonan Doa:</span>
                      </h4>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {request.message}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <i className="fas fa-calendar-alt"></i>
                          <span>{format(new Date(request.createdAt), "EEEE, dd MMMM yyyy")}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="text-green-600 border-green-200 hover:bg-green-50"
                        >
                          <i className="fas fa-check mr-1"></i>
                          Telah Didoakan
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}