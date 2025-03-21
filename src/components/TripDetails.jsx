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
  FaUtensils,
  FaChair
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
                <div className="pl-8 space-y-6">
                  <div className="bg-morocco-light bg-opacity-30 p-4 rounded-md">
                    <div className="flex items-center mb-2">
                      <img src="https://www.easyjet.com/favicon.ico" alt="easyJet" className="h-5 w-5 mr-2" />
                      <h4 className="font-medium">easyJet</h4>
                    </div>
                    <p className="text-sm uppercase text-gray-600 mb-1">Flight Depart Outbound: EZY2265</p>
                    <p className="font-medium mb-1">Mon 24th Mar 2025</p>
                    <div className="flex items-center justify-between my-3">
                      <div>
                        <p className="font-bold">Manchester</p>
                        <p className="text-sm text-gray-600">(MAN) 07:30</p>
                      </div>
                      <div className="text-morocco-primary px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">Marrakech</p>
                        <p className="text-sm text-gray-600">(RAK) 11:20</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="font-medium mb-1">Your seats</p>
                      <p className="text-sm mb-1">Standard</p>
                      <div className="flex space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-morocco-primary text-white rounded-md">
                          <FaChair className="h-4 w-4 mr-1" />
                          <span>13A</span>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 bg-morocco-primary text-white rounded-md">
                          <FaChair className="h-4 w-4 mr-1" />
                          <span>13B</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-morocco-light bg-opacity-30 p-4 rounded-md">
                    <div className="flex items-center mb-2">
                      <img src="https://www.easyjet.com/favicon.ico" alt="easyJet" className="h-5 w-5 mr-2" />
                      <h4 className="font-medium">easyJet</h4>
                    </div>
                    <p className="text-sm uppercase text-gray-600 mb-1">Flight Depart Return: EZY2266</p>
                    <p className="font-medium mb-1">Thu 27th Mar 2025</p>
                    <div className="flex items-center justify-between my-3">
                      <div>
                        <p className="font-bold">Marrakech</p>
                        <p className="text-sm text-gray-600">(RAK) 11:40</p>
                      </div>
                      <div className="text-morocco-primary px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">Manchester</p>
                        <p className="text-sm text-gray-600">(MAN) 15:45</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="font-medium mb-1">Your seats</p>
                      <p className="text-sm mb-1">Rear Standard</p>
                      <div className="flex space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-morocco-primary text-white rounded-md">
                          <FaChair className="h-4 w-4 mr-1" />
                          <span>28A</span>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 bg-morocco-primary text-white rounded-md">
                          <FaChair className="h-4 w-4 mr-1" />
                          <span>28B</span>
                        </div>
                      </div>
                    </div>
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