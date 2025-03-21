import React from 'react';

const TripDetails = () => {
  return (
    <section id="trip-details" className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Trip Details</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Travel Dates</h3>
              <p className="mb-2"><span className="font-medium">Departure:</span> March 24, 2025</p>
              <p className="mb-2"><span className="font-medium">Return:</span> March 27, 2025</p>
              <p className="mb-4"><span className="font-medium">Duration:</span> 3 nights</p>
              
              <h3 className="text-xl font-semibold text-amber-800 mt-6 mb-4">Flights</h3>
              <p className="mb-2"><span className="font-medium">Airline:</span> EasyJet</p>
              <p className="mb-2"><span className="font-medium">Arrival Time:</span> March 24, 2025 at 11:20 AM</p>
              <p className="mb-4"><span className="font-medium">Departure Time:</span> March 27, 2025 at 11:40 AM</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Package Details</h3>
              <p className="mb-2"><span className="font-medium">Package Type:</span> EasyJet Holiday Package</p>
              <p className="mb-2"><span className="font-medium">Transfer:</span> Private Taxi (included)</p>
              <p className="mb-4"><span className="font-medium">Guests:</span> 2 people (You and your wife)</p>
              
              <h3 className="text-xl font-semibold text-amber-800 mt-6 mb-4">Special Information</h3>
              <p className="mb-2"><span className="font-medium">Dietary Requirements:</span> Kosher meals</p>
              <p className="mb-2"><span className="font-medium">Currency:</span> Moroccan Dirham (MAD)</p>
              <p className="mb-2"><span className="font-medium">Language:</span> Arabic, Berber, French</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Important Documents</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Passport (valid for at least 6 months beyond your return date)</li>
              <li>Travel Insurance Documents</li>
              <li>Hotel Reservation Confirmation</li>
              <li>Flight Tickets</li>
              <li>Moroccan Currency or Credit Cards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripDetails;