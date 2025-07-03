import { motion } from "framer-motion";// Framer Motion kütüphanesinden motion bileşeni
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
const circumference = 283;
const HeroSection = ({ scrollToSection }) => { // scrollToSection prop olarak alınır
    return (
        // Ana kapsayıcı: Ekran yüksekliğinin tamamını kaplar ve içeriği ortalar
        <section
            id="hero" // Bu ID, Navbar'dan kaydırma için kritik
            className="relative flex items-center justify-center h-screen  text-gray-900 overflow-hidden"
        >
            {/* Arka Plan Şekilleri (isteğe bağlı, estetik için) - Eğer Tailwind config'de animasyon yoksa bu kısmı çıkarabilirsiniz */}
            <div className="absolute top-20 left-20 w-16 sm:w-32 h-16 sm:h-32 bg-blue-300 rounded-full mix-blend-hard-light blur-lg opacity-60 animate-blob"></div>
            <div className="absolute top-30 right-35 w-16 sm:w-32 h-16 sm:h-32 bg-purple-300 rounded-full mix-blend-hard-light filter blur-xl opacity-100 animate-blob animation-delay-2000 "></div>


            {/* İçerik Kapsayıcı: Metin, fotoğraf ve butonları içerir */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center  text-center max-w-4xl mx-auto px-6">
                {/* Profil Fotoğrafı/Avatar (opsiyonel) */}

                <div className="w-full order-2 md:order-1 mx-auto text-left ">

                    {/* Ana Başlık */}
                    <h1 className="text-2xl md:text-4xl font-bold  mb-4 text-white ">
                        Hello I'm
                    </h1>
                    <h1 className="text-2xl md:text-4xl font-bold  mb-4 text-teal-400 ">
                        <Typewriter
                            words={['Furkan Deniz']}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={90}
                            deleteSpeed={0}
                            delaySpeed={2000}
                        />
                    </h1>
                    {/* Alt Başlık/Slogan */}
                    <p className="text-sm md:text-lg text-white mb-10 font-light">
                        
                        A full-stack developer crafting impactful web solutions
                    </p>

                    {/* Harekete Geçirici Butonlar (Call to Action) */}
                    <div className="flex  items-center gap-6 mt-6">
                        <a
                            href="https://github.com/frkndnz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white  transition rounded-full border-2 border-teal-300 p-2 hover:bg-teal-300 hover:text-gray-900"
                        >
                            <Github size={28} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/furkandenizz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white  transition rounded-full border-2 border-teal-300 p-2 hover:bg-teal-300 hover:text-gray-900"
                        >
                            <Linkedin size={28} />
                        </a>
                        <a
                            href="mailto:deniz.furkann@outlook.com"
                            className="text-white  transition rounded-full border-2 border-teal-300 p-2 hover:bg-teal-300 hover:text-gray-900"
                        >
                            <Mail size={28} />
                        </a>
                        <a
                            href="tel:+905372547425"
                            className="text-white  transition rounded-full border-2 border-teal-300 p-2 hover:bg-teal-300 hover:text-gray-900"
                        >
                            <Phone size={28} />
                        </a>
                    </div>
                </div>

                <div className="relative order-1 md:order-2 w-48 h-48 sm:w-72 sm:h-72 xl:w-96 xl:h-96 mx-auto mb-8">
                    {/* Animasyonlu SVG çember */}
                    <motion.svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="#00ff99"
                            strokeWidth={1.4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "283 283", strokeDashoffset: 0 }}
                            animate={{
                                strokeDashoffset: [0, -566], // 2 tur dönüş için (2 * 283)
                                rotate: [0, 360],
                            }}
                            transition={{
                                strokeDashoffset: {
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 8,
                                },
                                rotate: {
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 8,
                                },
                            }}
                        />
                    </motion.svg>

                    {/* Ortadaki Profil Görseli */}
                    <img
                        src="Cv_photo.jpg"
                        alt="Profil Fotoğrafı"
                        className="w-32 h-32 sm:w-48 sm:h-48 xl:w-64 xl:h-64 rounded-full object-cover border-4 border-white shadow-lg shadow-amber-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-300"
                    />
                </div>


            </div>
        </section>
    );
};

export default HeroSection;