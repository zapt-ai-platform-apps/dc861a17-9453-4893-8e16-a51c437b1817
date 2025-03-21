import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-morocco-primary text-white py-2 shadow-lg' 
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold font-display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Morocco Trip
        </motion.h1>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden cursor-pointer z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#trip-details" label="Trip Details" />
          <NavLink href="#accommodation" label="Accommodation" />
          <NavLink href="#activities" label="Activities" />
          <NavLink href="#restaurants" label="Kosher Restaurants" />
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-morocco-primary shadow-lg"
          >
            <nav className="container mx-auto py-4 px-4 flex flex-col space-y-3">
              <MobileNavLink 
                href="#trip-details" 
                label="Trip Details"
                onClick={() => setIsMenuOpen(false)}
              />
              <MobileNavLink 
                href="#accommodation" 
                label="Accommodation"
                onClick={() => setIsMenuOpen(false)}
              />
              <MobileNavLink 
                href="#activities" 
                label="Activities"
                onClick={() => setIsMenuOpen(false)}
              />
              <MobileNavLink 
                href="#restaurants" 
                label="Kosher Restaurants"
                onClick={() => setIsMenuOpen(false)}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({ href, label }) => (
  <a 
    href={href} 
    className="hover:text-morocco-light transition-colors duration-300 relative group"
  >
    {label}
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-morocco-light transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
  </a>
);

const MobileNavLink = ({ href, label, onClick }) => (
  <a 
    href={href} 
    className="text-white hover:text-morocco-light transition-colors duration-300 py-2 block"
    onClick={onClick}
  >
    {label}
  </a>
);

export default Header;