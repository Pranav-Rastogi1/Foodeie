import React, { useState } from 'react';

const CityFoodDelivery = () => {
  const [showAll, setShowAll] = useState(false);

  const cities = [
    "Bangalore", "Hyderabad", "Mumbai", "Pune", "Delhi", "Kolkata",
    "Chennai", "Ahmedabad", "Chandigarh", "Jaipur", "Lucknow", "Kochi"
  ];

  // Logic: Only 6 cities (3 rows of 2) initially
  const visibleCities = showAll ? cities : cities.slice(0, 6);

  return (
    <div className="w-[80%] mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Cities with food delivery</h2>
      
      {/* Container: flex-wrap allows items to wrap to next row */}
      <div className="flex flex-wrap border-t border-l">
        {visibleCities.map((city) => (
          <div 
            key={city} 
            className="w-1/2 p-4 border-r border-b text-center font-bold text-gray-600 hover:bg-gray-50"
          >
            {city}
          </div>
        ))}

        
        <button 
          onClick={() => setShowAll(!showAll)}
          className="w-full p-4 border-r border-b font-bold text-orange-700 hover:bg-gray-50 flex items-center justify-center"
        >
          {showAll ? "Show Less" : "Show More"}
          <span className="ml-2">{showAll ? "▲" : "▼"}</span>
        </button>
      </div>
    </div>
  );
};

export default CityFoodDelivery;