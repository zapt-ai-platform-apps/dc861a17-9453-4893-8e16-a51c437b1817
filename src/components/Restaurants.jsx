import React from 'react';

const Restaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "La Kosher Restaurant",
      cuisine: "Moroccan-Jewish",
      description: "Authentic kosher Moroccan cuisine in a beautifully decorated setting. Offers a blend of traditional Moroccan flavors prepared according to kosher dietary laws.",
      address: "Rue de la Liberté, Gueliz, Marrakech",
      phone: "+212 524 XX XX XX",
      image: "PLACEHOLDER",
      imageRequest: "Kosher Moroccan restaurant with traditional decor and table settings",
    },
    {
      id: 2,
      name: "Dar Ima Kosher",
      cuisine: "Mediterranean-Jewish",
      description: "Family-run kosher restaurant specializing in Mediterranean Jewish cuisine with Moroccan influences. Known for their homemade breads and slow-cooked tagines.",
      address: "Near Mellah (Jewish Quarter), Marrakech",
      phone: "+212 524 XX XX XX",
      image: "PLACEHOLDER",
      imageRequest: "Jewish Moroccan restaurant interior with traditional setting and kosher food",
    },
    {
      id: 3,
      name: "Chabad House Marrakech",
      cuisine: "Israeli-Moroccan",
      description: "Run by the local Chabad community, this restaurant offers kosher meals in a welcoming atmosphere. Perfect for Shabbat dinners and Jewish holidays.",
      address: "Rue Ibn Toumert, Marrakech",
      phone: "+212 524 XX XX XX",
      image: "PLACEHOLDER",
      imageRequest: "Chabad house in Morocco with kosher dining setting",
    }
  ];

  return (
    <section id="restaurants" className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Kosher Restaurants</h2>
        <div className="space-y-6">
          {restaurants.map(restaurant => (
            <div key={restaurant.id} className="bg-amber-50 rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={restaurant.image} 
                    data-image-request={restaurant.imageRequest}
                    alt={restaurant.name} 
                    className="w-full h-64 md:h-full object-cover" 
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold text-amber-800 mb-1">{restaurant.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">Cuisine: {restaurant.cuisine}</p>
                  <p className="text-gray-700 mb-4">{restaurant.description}</p>
                  <div className="text-gray-600">
                    <p className="mb-2 flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>{restaurant.address}</span>
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span>{restaurant.phone}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurants;