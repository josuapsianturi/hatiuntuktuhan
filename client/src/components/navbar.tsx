import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Smooth scrolling for navigation links
        const handleSmoothScroll = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const elementId = target.getAttribute('href')?.substring(1);
                const element = document.getElementById(elementId || '');
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };
        document.addEventListener('click', handleSmoothScroll);
        return () => document.removeEventListener('click', handleSmoothScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between pr-2">
                    <div className="flex items-center space-x-3">
                        <a href="/" className="flex items-center space-x-3 group">
                            <picture>
                                <source srcSet="/logo.webp" type="image/webp" />
                                <img src="/logo.png" alt="Logo Hati untuk Tuhan" width="48" height="48" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow group-hover:scale-105 transition-transform" />
                            </picture>
                            <span className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Hati untuk Tuhan</span>
                        </a>
                    </div>
                    <div className="hidden md:flex items-center">
                        <a href="/" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 mr-10">Beranda</a>
                        <a href="/#scripture" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 mr-10">Ayat Harian</a>
                        <a href="/#prayer" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 mr-10">Doa</a>
                        <a href="/#about" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 mr-10">Tentang</a>
                        <a href="/kesaksian" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">Kesaksian</a>
                    </div>
                    <button className="md:hidden text-gray-600 hover:text-blue-500" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} aria-label="Buka menu">
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
                    <nav className="flex flex-col items-start px-6 py-4 space-y-4">
                        <a href="/" className="text-gray-600 hover:text-blue-500 w-full" onClick={() => setMobileMenuOpen(false)}>Beranda</a>
                        <a href="/#scripture" className="text-gray-600 hover:text-blue-500 w-full" onClick={() => setMobileMenuOpen(false)}>Ayat Harian</a>
                        <a href="/#prayer" className="text-gray-600 hover:text-blue-500 w-full" onClick={() => setMobileMenuOpen(false)}>Doa</a>
                        <a href="/#about" className="text-gray-600 hover:text-blue-500 w-full" onClick={() => setMobileMenuOpen(false)}>Tentang</a>
                        <a href="/kesaksian" className="text-gray-600 hover:text-purple-600 w-full" onClick={() => setMobileMenuOpen(false)}>Kesaksian</a>
                    </nav>
                </div>
            )}
        </header>
    );
} 