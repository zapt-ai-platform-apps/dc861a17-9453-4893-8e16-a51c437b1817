import React from 'react';
import Header from './components/Header';
import TripDetails from './components/TripDetails';
import Accommodation from './components/Accommodation';
import Activities from './components/Activities';
import Restaurants from './components/Restaurants';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50 text-gray-800">
      <Header />
      <main className="flex-grow">
        <div className="bg-amber-700 py-16 px-4 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Morocco Trip 2025</h1>
          <p className="text-xl">Marrakech, Morocco | March 24-27, 2025</p>
        </div>
        <TripDetails />
        <Accommodation />
        <Activities />
        <Restaurants />
      </main>
      <Footer />
    </div>
  );
};

export default App;