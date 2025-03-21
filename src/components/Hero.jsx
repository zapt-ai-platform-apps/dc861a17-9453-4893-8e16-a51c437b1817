import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1548018560-c7196548e84d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxNYXJyYWtlY2glMjBNb3JvY2NvJTIwc2t5bGluZXxlbnwwfHx8fDE3NDI2MTE2MTN8MA&ixlib=rb-4.0.3&q=80&w=1080')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-morocco-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">
            Morocco Trip 2025
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl mb-6">
              Marrakech, Morocco | March 24-27, 2025
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a 
                href="#trip-details" 
                className="px-6 py-3 bg-morocco-primary hover:bg-morocco-dark text-white rounded-md transition-colors duration-300 font-medium"
              >
                Trip Details
              </a>
              <a 
                href="#accommodation" 
                className="px-6 py-3 bg-white hover:bg-morocco-light text-morocco-primary rounded-md transition-colors duration-300 font-medium"
              >
                View Accommodation
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;