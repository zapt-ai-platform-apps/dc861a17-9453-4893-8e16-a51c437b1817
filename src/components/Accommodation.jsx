import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaBed, 
  FaUtensils,
  FaSwimmingPool,
  FaSpa,
  FaDumbbell,
  FaGlassMartini,
  FaWifi,
  FaClock,
  FaTree,
  FaConciergeBell
} from 'react-icons/fa';
import MapComponent from './MapComponent';

const Accommodation = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  // Hotel location
  const hotelLocation = {
    lat: 31.6295,
    lng: -8.0092
  };

  // Hotel map data
  const hotelMapData = [
    {
      name: "Kenzi Rose Garden Hotel",
      lat: 31.6295,
      lng: -8.0092,
      address: "Avenue du Président Kennedy, Marrakech, Morocco",
      description: "5-star luxury hotel with garden and pool"
    }
  ];

  const amenities = [
    { icon: <FaSwimmingPool className="w-5 h-5 text-morocco-primary" />, name: "Swimming Pool" },
    { icon: <FaSpa className="w-5 h-5 text-morocco-primary" />, name: "Spa & Hammam" },
    { icon: <FaDumbbell className="w-5 h-5 text-morocco-primary" />, name: "Fitness Center" },
    { icon: <FaGlassMartini className="w-5 h-5 text-morocco-primary" />, name: "Restaurant & Bar" },
    { icon: <FaWifi className="w-5 h-5 text-morocco-primary" />, name: "Free Wi-Fi" },
    { icon: <FaClock className="w-5 h-5 text-morocco-primary" />, name: "24h Reception" },
    { icon: <FaTree className="w-5 h-5 text-morocco-primary" />, name: "Garden & Terrace" },
    { icon: <FaConciergeBell className="w-5 h-5 text-morocco-primary" />, name: "Concierge Service" },
  ];

  return (
    <section id="accommodation" className="section-container bg-white">
      <div className="content-container">
        <h2 className="section-heading">Accommodation</h2>
        
        <motion.div 
          className="bg-morocco-light bg-opacity-10 rounded-lg shadow-lg p-6 md:p-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl font-bold text-morocco-primary mb-6 text-center font-display"
            variants={item}
          >
            Kenzi Rose Garden Hotel
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={item}>
              <img 
                src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8S2VuemklMjBSb3NlJTIwR2FyZGVuJTIwSG90ZWwlMjBpbiUyME1hcnJha2VjaCUyME1vcm9jY28lMjBleHRlcmlvciUyMHZpZXclMjBsdXh1cnklMjBob3RlbHxlbnwwfHx8fDE3NDI1NjIxNTd8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Kenzi Rose Garden Hotel" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
              />
              
              <div className="space-y-4">
                <motion.div variants={item} className="flex items-start">
                  <FaMapMarkerAlt className="text-morocco-primary w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-morocco-primary mb-1">Location</h4>
                    <p>Avenue du Président Kennedy, Marrakech, Morocco</p>
                  </div>
                </motion.div>
                
                <motion.div variants={item} className="flex items-start">
                  <FaCalendarAlt className="text-morocco-primary w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-morocco-primary mb-1">Stay Duration</h4>
                    <p>3 nights, from Mon 24th Mar 2025</p>
                  </div>
                </motion.div>
                
                <motion.div variants={item} className="flex items-start">
                  <FaBed className="text-morocco-primary w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-morocco-primary mb-1">Room Type</h4>
                    <p>Superior Room with Twin Beds</p>
                  </div>
                </motion.div>
                
                <motion.div variants={item} className="flex items-start">
                  <FaUtensils className="text-morocco-primary w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-morocco-primary mb-1">Board Basis</h4>
                    <p>Bed & Breakfast</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div variants={item}>
              <img 
                src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8U3VwZXJpb3IlMjBSb29tJTIwd2l0aCUyMFR3aW4lMjBCZWRzJTIwYXQlMjBLZW56aSUyMFJvc2UlMjBHYXJkZW4lMjBIb3RlbCUyME1hcnJha2VjaCUyMGludGVyaW9yfGVufDB8fHx8MTc0MjU2MjE1N3ww&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Superior Room" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
              />
              
              <div className="space-y-6">
                <motion.div variants={item}>
                  <h4 className="text-lg font-semibold text-morocco-primary mb-4">Hotel Amenities</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-10 h-10 bg-morocco-light bg-opacity-40 rounded-full flex items-center justify-center mr-3">
                          {amenity.icon}
                        </div>
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div variants={item} className="mt-8">
            <h4 className="text-lg font-semibold text-morocco-primary mb-4">Hotel Location</h4>
            <MapComponent 
              locations={hotelMapData} 
              center={[hotelLocation.lat, hotelLocation.lng]} 
              zoom={15}
              height="350px"
            />
          </motion.div>
          
          <motion.div 
            variants={item}
            className="mt-6 grid md:grid-cols-3 gap-6"
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxLZW56aSUyMFJvc2UlMjBHYXJkZW4lMjBIb3RlbCUyMHBvb2wlMjBNYXJyYWtlY2h8ZW58MHx8fHwxNzQyNjExODU1fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Kenzi Rose Garden Pool" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                data-image-request="Kenzi Rose Garden Hotel pool in Marrakech"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxLZW56aSUyMFJvc2UlMjBHYXJkZW4lMjBIb3RlbCUyMGxvYmJ5JTIwTWFycmFrZWNofGVufDB8fHx8MTc0MjYxMTg1NXww&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Kenzi Rose Garden Lobby" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                data-image-request="Kenzi Rose Garden Hotel lobby in Marrakech"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHxLZW56aSUyMFJvc2UlMjBHYXJkZW4lMjBIb3RlbCUyMHNwYSUyME1hcnJha2VjaHxlbnwwfHx8fDE3NDI2MTE4NTV8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Kenzi Rose Garden Spa" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                data-image-request="Kenzi Rose Garden Hotel spa in Marrakech"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodation;