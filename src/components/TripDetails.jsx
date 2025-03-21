import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaPlane, 
  FaBoxOpen, 
  FaInfoCircle,
  FaPassport,
  FaExchangeAlt,
  FaUserFriends,
  FaUtensils
} from 'react-icons/fa';

const TripDetails = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="trip-details" className="section-container bg-morocco-pattern bg-fixed bg-opacity-10">
      <div className="content-container">
        <h2 className="section-heading">Trip Details</h2>
        
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 md:p-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <motion.div variants={item} className="mb-8">
                <h3 className="text-xl font-semibold text-morocco-primary mb-4 flex items-center">
                  <FaCalendarAlt className="feature-icon" />
                  Travel Dates
                </h3>
                <div className="pl-8 space-y-2">
                  <p><span className="font-medium">Departure:</span> March 24, 2025</p>
                  <p><span className="font-medium">Return:</span> March 27, 2025</p>
                  <p><span className="font-medium">Duration:</span> 3 nights</p>
                </div>
              </motion.div>
              
              <motion.div variants={item}>
                <h3 className="text-xl font-semibold text-morocco-primary mb-4 flex items-center">
                  <FaPlane className="feature-icon" />
                  Flights
                </h3>
                <div className="pl-8 space-y-2">
                  <div className="bg-morocco-light bg-opacity-30 p-4 rounded-md mb-3">
                    <h4 className="font-medium mb-1">Outbound Flight</h4>
                    <p>EasyJet EZY8893</p>
                    <p>March 24, 2025</p>
                    <p>Departure: London Gatwick 07:45</p>
                    <p>Arrival: Marrakech 11:20</p>
                  </div>
                  
                  <div className="bg-morocco-light bg-opacity-30 p-4 rounded-md">
                    <h4 className="font-medium mb-1">Return Flight</h4>
                    <p>EasyJet EZY8894</p>
                    <p>March 27, 2025</p>
                    <p>Departure: Marrakech 11:40</p>
                    <p>Arrival: London Gatwick 15:15</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column */}
            <div>
              <motion.div variants={item} className="mb-8">
                <h3 className="text-xl font-semibold text-morocco-primary mb-4 flex items-center">
                  <FaBoxOpen className="feature-icon" />
                  Package Details
                </h3>
                <div className="pl-8 space-y-2">
                  <p><span className="font-medium">Package Type:</span> EasyJet Holiday Package</p>
                  <p><span className="font-medium">Transfer:</span> Private Taxi (included)</p>
                  <p><span className="font-medium">Guests:</span> 2 people (You and your wife)</p>
                </div>
              </motion.div>
              
              <motion.div variants={item}>
                <h3 className="text-xl font-semibold text-morocco-primary mb-4 flex items-center">
                  <FaInfoCircle className="feature-icon" />
                  Special Information
                </h3>
                <div className="pl-8 space-y-2">
                  <p className="flex items-center">
                    <FaUtensils className="text-morocco-secondary w-4 h-4 mr-2" />
                    <span className="font-medium">Dietary Requirements:</span> Kosher meals
                  </p>
                  <p className="flex items-center">
                    <FaExchangeAlt className="text-morocco-secondary w-4 h-4 mr-2" />
                    <span className="font-medium">Currency:</span> Moroccan Dirham (MAD)
                  </p>
                  <p className="flex items-center">
                    <FaUserFriends className="text-morocco-secondary w-4 h-4 mr-2" />
                    <span className="font-medium">Language:</span> Arabic, Berber, French
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            variants={item}
            className="mt-8 p-6 bg-morocco-light bg-opacity-20 rounded-lg border border-morocco-light"
          >
            <h4 className="font-semibold text-morocco-primary mb-4 flex items-center">
              <FaPassport className="feature-icon" />
              Important Documents
            </h4>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 pl-8">
              <li className="flex items-start">
                <span className="text-morocco-primary mr-2">•</span>
                Passport (valid for at least 6 months beyond your return date)
              </li>
              <li className="flex items-start">
                <span className="text-morocco-primary mr-2">•</span>
                Travel Insurance Documents
              </li>
              <li className="flex items-start">
                <span className="text-morocco-primary mr-2">•</span>
                Hotel Reservation Confirmation
              </li>
              <li className="flex items-start">
                <span className="text-morocco-primary mr-2">•</span>
                Flight Tickets
              </li>
              <li className="flex items-start">
                <span className="text-morocco-primary mr-2">•</span>
                Moroccan Currency or Credit Cards
              </li>
              <li className="flex items-start">
                <span className="text-morocco-primary mr-2">•</span>
                International Driver's License (if planning to drive)
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TripDetails;