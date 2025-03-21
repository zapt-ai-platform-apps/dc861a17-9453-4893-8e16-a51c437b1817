import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaStar, FaMapMarkedAlt, FaUsers } from 'react-icons/fa';

const Activities = () => {
  const activities = [
    {
      id: 1,
      name: "ATV Desert Adventure",
      description: "Experience the thrill of riding ATVs through the desert landscapes outside Marrakech. This guided tour takes you through varied terrain with stunning views of the Atlas Mountains.",
      duration: "Half-day (4 hours)",
      rating: 4.8,
      groupSize: "Small groups (max 10)",
      image: "https://images.unsplash.com/photo-1519003722824-194d4c65eade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxBVFYlMjBxdWFkJTIwYmlrZXMlMjBpbiUyME1vcm9jY2FuJTIwZGVzZXJ0JTIwd2l0aCUyMEF0bGFzJTIwbW91bnRhaW5zJTIwaW4lMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0MjYxMTkxM3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Marrakech City Tour",
      description: "Discover the rich history and culture of Marrakech with a guided tour of the city's most iconic sites, including the Medina, Bahia Palace, and the famous Jemaa el-Fnaa square.",
      duration: "Full day (6-7 hours)",
      rating: 4.9,
      groupSize: "Small groups (max 12)",
      image: "https://images.unsplash.com/photo-1597212720402-db3326234774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxNYXJyYWtlY2glMjBtZWRpbmElMjBtYXJrZXRwbGFjZSUyMHdpdGglMjB0cmFkaXRpb25hbCUyME1vcm9jY2FuJTIwYXJjaGl0ZWN0dXJlJTIwYW5kJTIwYnVzeSUyMHN0cmVldHN8ZW58MHx8fHwxNzQyNjExOTEzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Traditional Hammam & Spa",
      description: "Indulge in a traditional Moroccan hammam experience at the hotel's spa. This includes a steam bath, exfoliation with black soap, and a relaxing massage.",
      duration: "2 hours",
      rating: 4.7,
      groupSize: "Individual or couples",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxUcmFkaXRpb25hbCUyME1vcm9jY2FuJTIwaGFtbWFtJTIwc3BhJTIwaW50ZXJpb3IlMjB3aXRoJTIwb3JuYXRlJTIwdGlsZXdvcmslMjBhbmQlMjBhbWJpZW50JTIwbGlnaHRpbmd8ZW58MHx8fHwxNzQyNjExOTEzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 4,
      name: "Atlas Mountains Day Trip",
      description: "Venture into the stunning Atlas Mountains to experience Berber villages, scenic valleys, and breathtaking mountain views. Includes stops at local markets and a traditional lunch.",
      duration: "Full day (8-9 hours)",
      rating: 4.9,
      groupSize: "Small groups (max 8)",
      image: "https://images.unsplash.com/photo-1548019979-11ce20dcab21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxBdGxhcyUyME1vdW50YWlucyUyME1vcm9jY28lMjB3aXRoJTIwc21hbGwlMjBCZXJiZXIlMjB2aWxsYWdlJTIwaW4lMjB0aGUlMjB2YWxsZXl8ZW58MHx8fHwxNzQyNjExOTEzfDA&ixlib=rb-4.0.3&q=80&w=1080",
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

  return (
    <section id="activities" className="section-container bg-morocco-pattern bg-fixed bg-opacity-10">
      <div className="content-container">
        <h2 className="section-heading">Activities & Excursions</h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {activities.map(activity => (
            <motion.div 
              key={activity.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              variants={item}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute top-4 right-4 bg-morocco-primary text-white py-1 px-3 rounded-full flex items-center text-sm font-medium">
                  <FaStar className="mr-1 text-yellow-300" />
                  {activity.rating}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-morocco-primary mb-3 font-display">{activity.name}</h3>
                <p className="text-gray-700 mb-5">{activity.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center text-morocco-secondary">
                    <FaClock className="w-4 h-4 mr-2" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center text-morocco-secondary">
                    <FaUsers className="w-4 h-4 mr-2" />
                    <span>{activity.groupSize}</span>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="btn-primary w-full flex items-center justify-center cursor-pointer">
                  <FaMapMarkedAlt className="mr-2" />
                  Book This Experience
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 p-6 bg-white rounded-lg shadow-lg"
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-morocco-primary mb-4 font-display">Additional Activities Available</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-morocco-light bg-opacity-20 rounded-md">
              <h4 className="font-medium text-morocco-dark mb-2">Hot Air Balloon Rides</h4>
              <p className="text-sm">Experience breathtaking views of Marrakech and the Atlas Mountains from above.</p>
            </div>
            <div className="p-4 bg-morocco-light bg-opacity-20 rounded-md">
              <h4 className="font-medium text-morocco-dark mb-2">Cooking Classes</h4>
              <p className="text-sm">Learn to prepare authentic Moroccan dishes with local chefs.</p>
            </div>
            <div className="p-4 bg-morocco-light bg-opacity-20 rounded-md">
              <h4 className="font-medium text-morocco-dark mb-2">Camel Trekking</h4>
              <p className="text-sm">Ride camels through the Palmeraie area for a traditional Moroccan experience.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;