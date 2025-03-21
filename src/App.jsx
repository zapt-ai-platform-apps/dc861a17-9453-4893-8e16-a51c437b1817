import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import TripDetails from './components/TripDetails';
import Accommodation from './components/Accommodation';
import Activities from './components/Activities';
import Restaurants from './components/Restaurants';
import Footer from './components/Footer';
import Hero from './components/Hero';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-morocco-white text-morocco-black">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <TripDetails />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Accommodation />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Activities />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Restaurants />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default App;