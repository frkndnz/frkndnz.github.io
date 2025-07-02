import React, { useState, useEffect } from 'react';

const sections = [
  { id: "hero", label: "Ana Sayfa" },
  { id: "about", label: "Hakkımda" },
  { id: "projects", label: "Projeler" },
  { id: "experience", label: "Deneyim" },
  { id: "contact", label: "İletişim" },
];

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobil menü durumu
  const [isScrolled, setIsScrolled] = useState(false); // Navbar'ın kaydırılma durumu

  // Sayfa kaydırıldığında Navbar stilini değiştirme efekti
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) { // Belirli bir piksel aşağı kaydırıldığında
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (id) => {
    setIsOpen(false); // Mobil menüyü kapat
    scrollToSection(id); // İlgili bölüme kaydır
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all rounded-b-sm duration-300 ${
        isScrolled
          ? 'bg-white opacity-95 shadow-lg py-2' // Kaydırıldığında daha belirgin
          : 'bg-white opacity-90 py-3' // Başlangıçta hafif şeffaf
      } backdrop-blur-sm `}
    >
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo veya İsim */}
        <div className="flex-shrink-0">
          <button
            onClick={() => handleNavLinkClick("hero")}
            className="text-xl sm:text-3xl font-extrabold text-indigo-700 hover:text-indigo-900 cursor-pointer transition-colors duration-300 tracking-tight"
          >
            Furkan Deniz
          </button>
        </div>

        {/* Masaüstü Menü - Orta ve büyük ekranlarda görünür */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavLinkClick(id)}
              className="relative text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300 px-2 py-1 group"
            >
              {label}
              {/* Alt çizgi efekti */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          ))}
        </div>

        {/* Mobil Menü Butonu (Hamburger) - Sadece mobil ekranlarda görünür */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2 transition-colors duration-300"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil Açılır Menü - Sadece mobil ekranlarda açıldığında görünür */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-95 shadow-md pb-4 pt-2">
          <div className="flex flex-col items-center space-y-4">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavLinkClick(id)}
                className="text-gray-800 hover:text-indigo-600 block px-4 py-2 text-sm  sm:text-lg font-medium transition-colors duration-300 w-full text-center"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;