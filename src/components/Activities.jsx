import React from 'react';

const Activities = () => {
  const activities = [
    {
      id: 1,
      name: "ATV Desert Adventure",
      description: "Experience the thrill of riding ATVs through the desert landscapes outside Marrakech. This guided tour takes you through varied terrain with stunning views of the Atlas Mountains.",
      duration: "Half-day (4 hours)",
      image: "PLACEHOLDER",
      imageRequest: "ATV quad bikes in Moroccan desert with Atlas mountains in background",
    },
    {
      id: 2,
      name: "Marrakech City Tour",
      description: "Discover the rich history and culture of Marrakech with a guided tour of the city's most iconic sites, including the Medina, Bahia Palace, and the famous Jemaa el-Fnaa square.",
      duration: "Full day (6-7 hours)",
      image: "PLACEHOLDER",
      imageRequest: "Marrakech medina marketplace with traditional Moroccan architecture and busy streets",
    },
    {
      id: 3,
      name: "Traditional Hammam & Spa",
      description: "Indulge in a traditional Moroccan hammam experience at the hotel's spa. This includes a steam bath, exfoliation with black soap, and a relaxing massage.",
      duration: "2 hours",
      image: "PLACEHOLDER",
      imageRequest: "Traditional Moroccan hammam spa interior with ornate tilework and ambient lighting",
    },
    {
      id: 4,
      name: "Atlas Mountains Day Trip",
      description: "Venture into the stunning Atlas Mountains to experience Berber villages, scenic valleys, and breathtaking mountain views. Includes stops at local markets and a traditional lunch.",
      duration: "Full day (8-9 hours)",
      image: "PLACEHOLDER",
      imageRequest: "Atlas Mountains Morocco with small Berber village in the valley",
    }
  ];

  return (
    <section id="activities" className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Activities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map(activity => (
            <div key={activity.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
              <img 
                src={activity.image} 
                data-image-request={activity.imageRequest}
                alt={activity.name} 
                className="w-full h-56 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-2">{activity.name}</h3>
                <p className="text-gray-700 mb-4">{activity.description}</p>
                <div className="flex items-center text-amber-700 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {activity.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;