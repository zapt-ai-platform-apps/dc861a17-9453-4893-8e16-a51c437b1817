import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-amber-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Morocco Trip</h1>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#trip-details" className="hover:text-amber-200 transition-colors">Trip Details</a>
          <a href="#accommodation" className="hover:text-amber-200 transition-colors">Accommodation</a>
          <a href="#activities" className="hover:text-amber-200 transition-colors">Activities</a>
          <a href="#restaurants" className="hover:text-amber-200 transition-colors">Kosher Restaurants</a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="container mx-auto mt-4 flex flex-col space-y-3 md:hidden">
          <a 
            href="#trip-details" 
            className="hover:text-amber-200 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Trip Details
          </a>
          <a 
            href="#accommodation" 
            className="hover:text-amber-200 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Accommodation
          </a>
          <a 
            href="#activities" 
            className="hover:text-amber-200 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Activities
          </a>
          <a 
            href="#restaurants" 
            className="hover:text-amber-200 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Kosher Restaurants
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;