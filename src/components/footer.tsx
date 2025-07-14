'use client'

import Link from "next/link";
import { Instagram, Youtube, MessageCircle, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-yellow-400 mb-4">Hati Untuk Tuhan</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Membantu lebih banyak orang mengenal dan mengalami kasih Yesus dengan mendalam.
                            Bersama kita bertumbuh dalam iman dan kasih.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/hatiuntuktuhan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="https://www.youtube.com/@hatiuntuktuhan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                                <Youtube className="h-6 w-6" />
                            </a>
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
                            </a>
                            {/* <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                                <MessageCircle className="h-6 w-6" />
                            </a>
                            <a href="https://www.facebook.com/hatiuntuktuhan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                                <Facebook className="h-6 w-6" />
                            </a> */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Beranda</Link>
                            </li>
                            <li>
                                <Link href="/tentang" className="text-gray-300 hover:text-yellow-400 transition-colors">Tentang</Link>
                            </li>
                            <li>
                                <Link href="/kenal-yesus" className="text-gray-300 hover:text-yellow-400 transition-colors">Kenal Yesus</Link>
                            </li>
                            <li>
                                <Link href="/renungan" className="text-gray-300 hover:text-yellow-400 transition-colors">Renungan</Link>
                            </li>
                            <li>
                                <Link href="/konten" className="text-gray-300 hover:text-yellow-400 transition-colors">Konten</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Ministry */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Pelayanan</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#prayer-request" className="text-gray-300 hover:text-yellow-400 transition-colors">Permohonan Doa</a>
                            </li>
                            <li>
                                <a href="#community" className="text-gray-300 hover:text-yellow-400 transition-colors">Komunitas</a>
                            </li>
                            <li>
                                <a href="#daily-verse" className="text-gray-300 hover:text-yellow-400 transition-colors">Ayat Harian</a>
                            </li>
                            <li>
                                <Link href="/kontak" className="text-gray-300 hover:text-yellow-400 transition-colors">Kontak</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-300">
                        © {new Date().getFullYear()} Hati Untuk Tuhan. Dibuat dengan <span className="text-yellow-400">❤️</span> untuk kemuliaan Tuhan.
                    </p>
                </div>
            </div>
        </footer>
    );
}
