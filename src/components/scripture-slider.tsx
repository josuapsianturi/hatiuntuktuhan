'use client'
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const verses = [
    {
        text: "Karena begitu besar kasih Allah akan dunia ini, sehingga Ia telah mengaruniakan Anak-Nya yang tunggal, supaya setiap orang yang percaya kepada-Nya tidak binasa, melainkan beroleh hidup yang kekal.",
        reference: "Yohanes 3:16",
        gradient: "from-yellow-50 to-sky-50",
        border: "border-yellow-200",
        iconColor: "text-yellow-400",
        refColor: "text-yellow-600"
    },
    {
        text: "Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.",
        reference: "Matius 11:28",
        gradient: "from-sky-50 to-yellow-50",
        border: "border-sky-200",
        iconColor: "text-sky-400",
        refColor: "text-sky-600"
    },
    {
        text: "Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu, demikianlah firman TUHAN, yaitu rancangan damai sejahtera dan bukan rancangan kecelakaan.",
        reference: "Yeremia 29:11",
        gradient: "from-yellow-50 to-beige-50",
        border: "border-beige-200",
        iconColor: "text-yellow-400",
        refColor: "text-yellow-600"
    }
];

export default function ScriptureSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % verses.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % verses.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + verses.length) % verses.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Firman yang Menguatkan</h2>
                    <p className="text-gray-600 text-lg">Biarkan firman Tuhan menyentuh hati Anda hari ini</p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {verses.map((verse, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className={`bg-gradient-to-br ${verse.gradient} rounded-2xl p-8 text-center border ${verse.border}`}>
                                        <Quote className={`${verse.iconColor} h-8 w-8 mx-auto mb-4`} />
                                        <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-relaxed">
                                            "{verse.text}"
                                        </p>
                                        <p className={`${verse.refColor} font-semibold`}>{verse.reference}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation arrows */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {verses.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-yellow-400" : "bg-gray-300 hover:bg-yellow-300"
                                    }`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
