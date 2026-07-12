// frontend/src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academic', label: 'Academic' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/40 transition-all duration-300 py-3 px-6 sm:px-12 md:px-20 flex justify-between items-center">
      
      {/* 🔮 BRAND LOGO: DevKenz */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-base font-black tracking-wider flex items-center select-none z-50"
      >
        <span className="text-slate-900 dark:text-white transition-colors">Dev</span>
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Kenz
        </span>
        <motion.span 
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-1.5 h-1.5 bg-emerald-500 rounded-full ml-1"
        />
      </motion.div>
      
      {/* 🚀 DESKTOP NAVIGATION MENU */}
      <div className="hidden md:flex items-center gap-1.5 bg-slate-200/40 dark:bg-slate-900/40 p-1.5 rounded-full border border-slate-300/30 dark:border-slate-800/50 shadow-inner">
        {navItems.map((item) => {
          const isSelected = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-4 py-2 text-xs font-bold tracking-wide rounded-full transition-all duration-300 ${
                isSelected 
                  ? 'text-white dark:text-slate-950 font-extrabold' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeNavIndicatorPremium"
                  transition={{ type: 'spring', stiffness: 350, damping: 26 }}
                  className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-100 dark:to-slate-200 rounded-full z-[-1] shadow-md shadow-indigo-500/10 dark:shadow-slate-100/10"
                />
              )}
              {item.label}
            </a>
          );
        })}
      </div>

      {/* ⚙️ RIGHT UTILITIES CONTROLS */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 z-50"
      >
        {/* Dark Mode Trigger */}
        <button 
          type="button"
          onClick={() => setDarkMode(!darkMode)} 
          aria-label="Toggle dark mode"
          className="relative w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 cursor-pointer overflow-hidden flex items-center justify-center hover:border-indigo-500/50 dark:hover:border-purple-500/50 transition-all group shadow-xs"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <AnimatePresence mode="wait" initial={false}>
            {darkMode ? (
              <motion.div
                key="sun"
                initial={{ y: -20, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <Sun size={16} className="text-amber-500" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ y: -20, opacity: 0, rotate: 45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: -45 }}
                transition={{ duration: 0.2 }}
              >
                <Moon size={16} className="text-indigo-600" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Hamburger Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="flex md:hidden w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 items-center justify-center cursor-pointer hover:border-indigo-500/50 dark:hover:border-purple-500/50 transition-all shadow-xs"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      {/* 📱 MOBILE NAVIGATION SCREEN FULL OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center gap-6 z-40 px-6 border-b border-slate-200 dark:border-slate-900"
          >
            <div className="flex flex-col items-center gap-4 w-full max-w-xs">
              {navItems.map((item, idx) => {
                const isSelected = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`w-full text-center py-3 rounded-2xl font-bold tracking-wide transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/20'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/60'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Navbar;