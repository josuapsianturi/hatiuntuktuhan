import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white text-gray-800">
            <h1 className="text-5xl font-bold text-yellow-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</h2>
            <p className="text-gray-600 mb-6">
                Maaf, halaman yang kamu cari belum tersedia atau sedang dalam proses pengembangan.
            </p>
            <Link
                href="/"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded transition"
            >
                Kembali ke Beranda
            </Link>
        </div>
    );
}
