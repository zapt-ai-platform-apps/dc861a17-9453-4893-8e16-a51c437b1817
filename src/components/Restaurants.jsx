import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaUtensils, FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import MapComponent from './MapComponent';

const Restaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "La Kosher Restaurant",
      cuisine: "Moroccan-Jewish",
      description: "Authentic kosher Moroccan cuisine in a beautifully decorated setting. Offers a blend of traditional Moroccan flavors prepared according to kosher dietary laws.",
      address: "Rue de la Liberté, Gueliz, Marrakech",
      phone: "+212 524 XX XX XX",
      rating: 4.7,
      specialties: ["Tagine", "Couscous", "Pastilla"],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxLb3NoZXIlMjBNb3JvY2NhbiUyMHJlc3RhdXJhbnQlMjB3aXRoJTIwdHJhZGl0aW9uYWwlMjBkZWNvciUyMGFuZCUyMHRhYmxlJTIwc2V0dGluZ3N8ZW58MHx8fHwxNzQyNjExOTkzfDA&ixlib=rb-4.0.3&q=80&w=1080",
      lat: 31.6310,
      lng: -8.0120,
    },
    {
      id: 2,
      name: "Dar Ima Kosher",
      cuisine: "Mediterranean-Jewish",
      description: "Family-run kosher restaurant specializing in Mediterranean Jewish cuisine with Moroccan influences. Known for their homemade breads and slow-cooked tagines.",
      address: "Near Mellah (Jewish Quarter), Marrakech",
      phone: "+212 524 XX XX XX",
      rating: 4.6,
      specialties: ["Fish Tagine", "Challah", "Moroccan Salads"],
      image: "https://images.unsplash.com/photo-1576675784201-0e142b423952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw0fHxKZXdpc2glMjBNb3JvY2NhbiUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvciUyMHdpdGglMjB0cmFkaXRpb25hbCUyMHNldHRpbmclMjBhbmQlMjBrb3NoZXIlMjBmb29kfGVufDB8fHx8MTc0MjYxMTk5M3ww&ixlib=rb-4.0.3&q=80&w=1080",
      lat: 31.6280,
      lng: -7.9920,
    },
    {
      id: 3,
      name: "Chabad House Marrakech",
      cuisine: "Israeli-Moroccan",
      description: "Run by the local Chabad community, this restaurant offers kosher meals in a welcoming atmosphere. Perfect for Shabbat dinners and Jewish holidays.",
      address: "Rue Ibn Toumert, Marrakech",
      phone: "+212 524 XX XX XX",
      rating: 4.8,
      specialties: ["Cholent", "Israeli Salads", "Shabbat Dinner"],
      image: "https://images.unsplash.com/photo-1504479573489-7c0039e22b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw0fHxDaGFiYWQlMjBob3VzZSUyMGluJTIwTW9yb2NjbyUyMHdpdGglMjBrb3NoZXIlMjBkaW5pbmclMjBzZXR0aW5nfGVufDB8fHx8MTc0MjYxMTk5M3ww&ixlib=rb-4.0.3&q=80&w=1080",
      lat: 31.6350,
      lng: -8.0050,
    }
  ];

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

  // Restaurant locations for the map
  const restaurantLocations = restaurants.map(restaurant => ({
    name: restaurant.name,
    lat: restaurant.lat,
    lng: restaurant.lng,
    address: restaurant.address,
    description: restaurant.cuisine
  }));

  return (
    <section id="restaurants" className="section-container bg-white">
      <div className="content-container">
        <h2 className="section-heading">Kosher Restaurants</h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div variants={item} className="mb-8">
            <MapComponent 
              locations={restaurantLocations} 
              center={[31.6295, -8.0092]} 
              zoom={13}
              height="400px"
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {restaurants.map(restaurant => (
            <motion.div 
              key={restaurant.id} 
              className="bg-morocco-light bg-opacity-10 rounded-lg shadow-lg overflow-hidden"
              variants={item}
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="w-full h-64 md:h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  <div className="absolute top-4 right-4 bg-morocco-primary text-white py-1 px-3 rounded-full flex items-center text-sm font-medium">
                    <FaStar className="mr-1 text-yellow-300" />
                    {restaurant.rating}
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-morocco-primary font-display">{restaurant.name}</h3>
                    <span className="px-4 py-1 bg-morocco-secondary bg-opacity-20 text-morocco-secondary rounded-full text-sm font-medium">
                      {restaurant.cuisine}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{restaurant.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-morocco-dark mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-morocco-light bg-opacity-30 text-morocco-dark px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-gray-600 space-y-2">
                    <p className="flex items-start">
                      <FaMapMarkerAlt className="text-morocco-secondary w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{restaurant.address}</span>
                    </p>
                    <p className="flex items-center">
                      <FaPhone className="text-morocco-secondary w-5 h-5 mr-2 flex-shrink-0" />
                      <span>{restaurant.phone}</span>
                    </p>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="btn-primary flex items-center cursor-pointer">
                      <FaUtensils className="mr-2" />
                      View Menu
                    </button>
                    <button className="btn-secondary flex items-center cursor-pointer">
                      <FaExternalLinkAlt className="mr-2" />
                      Visit Website
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 p-6 bg-morocco-light bg-opacity-10 rounded-lg border border-morocco-light"
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-morocco-primary mb-4 font-display">Kosher Food Tips</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-morocco-primary mr-2">•</span>
              Pre-arrange Shabbat meals with Chabad Marrakech if staying over Shabbat
            </li>
            <li className="flex items-start">
              <span className="text-morocco-primary mr-2">•</span>
              Many hotels can accommodate kosher meal requests with advance notice
            </li>
            <li className="flex items-start">
              <span className="text-morocco-primary mr-2">•</span>
              Consider bringing some kosher snacks for day trips outside the city
            </li>
            <li className="flex items-start">
              <span className="text-morocco-primary mr-2">•</span>
              Fresh fruits, vegetables and sealed kosher products are available in local markets
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Restaurants;