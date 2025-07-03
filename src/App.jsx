import './App.css'
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Contact } from './pages/Contact';
import HeroSection from './pages/HeroSection';
import Navbar from './components/Navbar';
import { Education } from './pages/Education';
import BackToTopButton from './components/BackToTopButton';




function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>

      <div className="bg-gradient-to-br from-gray-950 to-gray-800 min-h-screen text-gray-900">
        {/* Navbar */}
        
        <Navbar scrollToSection={scrollToSection} />
        {/* Content */}
        <main className="">
          <HeroSection scrollToSection={scrollToSection} />
          <About />
          <Projects />
          <Experience />
          <Education/>
          <Contact />
        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500">
          © 2025 Furkan Deniz - Tüm hakları saklıdır.
        </footer>
      </div>
      <BackToTopButton />
    </>
  )
}

export default App
