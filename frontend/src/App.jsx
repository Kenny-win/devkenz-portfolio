// frontend/src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './features/hero/HeroSection';
import AboutSection from './features/about/AboutSection';
import AcademicSection from './features/academic/AcademicSection';
import PortfolioSection from './features/portfolio/PortfolioSection';
import ContactSection from './features/contact/ContactSection'; // <-- 1. Import ini
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 font-sans">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;