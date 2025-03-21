import React from 'react';

const Accommodation = () => {
  return (
    <section id="accommodation" className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Accommodation</h2>
        <div className="bg-amber-50 rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">Kenzi Rose Garden Hotel</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8S2VuemklMjBSb3NlJTIwR2FyZGVuJTIwSG90ZWwlMjBpbiUyME1hcnJha2VjaCUyME1vcm9jY28lMjBleHRlcmlvciUyMHZpZXclMjBsdXh1cnklMjBob3RlbHxlbnwwfHx8fDE3NDI1NjIxNTd8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                data-image-request="Kenzi Rose Garden Hotel in Marrakech Morocco exterior view luxury hotel" 
                alt="Kenzi Rose Garden Hotel" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4" 
              />
              
              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="text-lg font-semibold text-amber-800 mb-2">Location</h4>
                  <p>Avenue du Président Kennedy, Marrakech, Morocco</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-amber-800 mb-2">Stay Duration</h4>
                  <p>3 nights, from Mon 24th Mar 2025</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-amber-800 mb-2">Room Type</h4>
                  <p>Superior Room with Twin Beds</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-amber-800 mb-2">Board Basis</h4>
                  <p>Bed & Breakfast</p>
                </div>
              </div>
            </div>
            
            <div>
              <img src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8U3VwZXJpb3IlMjBSb29tJTIwd2l0aCUyMFR3aW4lMjBCZWRzJTIwYXQlMjBLZW56aSUyMFJvc2UlMjBHYXJkZW4lMjBIb3RlbCUyME1hcnJha2VjaCUyMGludGVyaW9yfGVufDB8fHx8MTc0MjU2MjE1N3ww&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                data-image-request="Superior Room with Twin Beds at Kenzi Rose Garden Hotel Marrakech interior" 
                alt="Superior Room" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4" 
              />
              
              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="text-lg font-semibold text-amber-800 mb-4">Hotel Amenities</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Swimming Pool
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Spa & Hammam
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Fitness Center
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Restaurant & Bar
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Free Wi-Fi
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      24h Reception
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Garden & Terrace
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Concierge Service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;