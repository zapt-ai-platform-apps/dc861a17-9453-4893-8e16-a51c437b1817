import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-morocco-dark text-white py-10 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Morocco Trip</h3>
            <p className="mb-4 text-gray-300">
              Your detailed guide to a wonderful vacation in Marrakech, Morocco in March 2025.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#trip-details" className="text-gray-300 hover:text-white transition-colors">Trip Details</a>
              </li>
              <li>
                <a href="#accommodation" className="text-gray-300 hover:text-white transition-colors">Accommodation</a>
              </li>
              <li>
                <a href="#activities" className="text-gray-300 hover:text-white transition-colors">Activities</a>
              </li>
              <li>
                <a href="#restaurants" className="text-gray-300 hover:text-white transition-colors">Kosher Restaurants</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Contact Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <FaEnvelope className="mr-3 h-5 w-5 text-morocco-secondary" />
                <span>info@moroccotrip.com</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 h-5 w-5 text-morocco-secondary" />
                <span>+44 20 XXXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Morocco Trip | All rights reserved</p>
          </div>
          <div>
            <a 
              href="https://www.zapt.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-morocco-light transition-colors"
            >
              Made on ZAPT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;