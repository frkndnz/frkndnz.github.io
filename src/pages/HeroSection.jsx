// components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ scrollToSection }) => { // scrollToSection prop olarak alınır
    return (
        // Ana kapsayıcı: Ekran yüksekliğinin tamamını kaplar ve içeriği ortalar
        <section
            id="hero" // Bu ID, Navbar'dan kaydırma için kritik
            className="relative flex items-center justify-center h-screen  text-gray-900 overflow-hidden"
        >
            {/* Arka Plan Şekilleri (isteğe bağlı, estetik için) - Eğer Tailwind config'de animasyon yoksa bu kısmı çıkarabilirsiniz */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-300 rounded-full mix-blend-hard-light blur-lg opacity-60 animate-blob"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300 rounded-full mix-blend-hard-light filter blur-xl opacity-100 animate-blob animation-delay-2000 "></div>
            <div className="absolute bottom-30 left-1/4 w-32 h-32 bg-pink-300 rounded-full mix-blend-hard-light filter blur-xl opacity-100 animate-blob animation-delay-4000"></div>

            {/* İçerik Kapsayıcı: Metin, fotoğraf ve butonları içerir */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                {/* Profil Fotoğrafı/Avatar (opsiyonel) */}
                <div className="mb-8 ">
                    <img
                        src="Cv_photo.jpg" // Kendi fotoğrafınızın yolunu buraya ekleyin
                        alt="Profil Fotoğrafı"
                        className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-white shadow-lg shadow-amber-200 transform transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Ana Başlık */}
                <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
                    Merhaba, Ben <span className="text-teal-500"> Furkan Deniz</span>!
                </h1>

                {/* Alt Başlık/Slogan */}
                <p className="text-xl md:text-2xl text-white mb-10 font-light">
                    Geleceği şekillendiren web deneyimleri <strong className="font-semibold">inşa eden bir yazılım geliştiricisiyim.</strong>
                </p>

                {/* Harekete Geçirici Butonlar (Call to Action) */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <button
                        onClick={() => scrollToSection("projects")} // Projects bölümüne yönlendirir
                        className="px-10 py-4 bg-indigo-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    >
                        Projelerimi Keşfet
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")} // Contact bölümüne yönlendirir
                        className="px-10 py-4 border-2 border-indigo-600 text-white text-lg font-semibold rounded-full hover:bg-indigo-500 hover:text-white transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    >
                        Benimle İletişime Geç
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;