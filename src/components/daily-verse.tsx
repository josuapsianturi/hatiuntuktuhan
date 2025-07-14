"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const verses = [
    {
        text: "Janganlah hendaknya kamu kuatir tentang apa pun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur.",
        reference: "Filipi 4:6"
    },
    {
        text: "Karena Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu, demikianlah firman TUHAN, yaitu rancangan damai sejahtera dan bukan rancangan kecelakaan.",
        reference: "Yeremia 29:11"
    },
    {
        text: "Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.",
        reference: "Matius 11:28"
    },
    {
        text: "Percayalah kepada TUHAN dengan segenap hatimu, dan janganlah bersandar kepada pengertianmu sendiri.",
        reference: "Amsal 3:5"
    },
    {
        text: "Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.",
        reference: "Filipi 4:13"
    }
];

export default function DailyVerse() {
    const [currentVerse, setCurrentVerse] = useState(verses[0]);
    const [isLoading, setIsLoading] = useState(false);

    const generateNewVerse = () => {
        setIsLoading(true);

        // Simulate loading for better UX
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * verses.length);
            setCurrentVerse(verses[randomIndex]);
            setIsLoading(false);
        }, 500);
    };

    return (
        <section className="py-16 bg-white" id="daily-verse">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ayat Harian</h2>
                    <p className="text-gray-600 text-lg">Dapatkan firman Tuhan untuk menguatkan hari Anda</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-sky-50 rounded-2xl p-8 text-center border border-yellow-200">
                    <div className="mb-6">
                        <div className="w-20 h-20 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                            </svg>
                        </div>
                    </div>

                    <div className={`mb-8 transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
                        <p className="text-xl md:text-2xl font-medium text-gray-800 mb-4 leading-relaxed">
                            &ldquo;{currentVerse.text}&rdquo;
                        </p>
                        <p className="text-xl md:text-2xl font-medium text-gray-800 mb-4 leading-relaxed">
                            &ldquo;{currentVerse.text}&rdquo;
                        </p>
                    </div>

                    <Button
                        onClick={generateNewVerse}
                        disabled={isLoading}
                        className="bg-yellow-400 text-white hover:bg-yellow-500 shadow-lg"
                    >
                        <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                        {isLoading ? 'Mengambil Ayat...' : 'Ayat Baru'}
                    </Button>
                </div>
            </div>
        </section>
    );
}
