import React from 'react'


interface RatingProps {
  rating: number;
}

function Rating({ rating}: RatingProps) {
    const totalStars = 5;

    return (
      <div className="flex gap-[5px] items-center">
        {[...Array(totalStars)].map((_, index) => {
          const full = Math.floor(rating); // Full stars count
          const fraction = rating - full; // Fractional part
  
          let fillWidth = 0;
          if (index < full) fillWidth = 100; // Full star
          else if (index === full) fillWidth = fraction * 100; // Partial star
  
          return (
            <div key={index} className="relative w-6 sm:w-10 h-6 sm:h-10 bg-[#EAF6FA] rounded-[2px] sm:rounded-sm overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-[#4EA64F]"
                style={{ width: `${fillWidth}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-Display-Semibold-14 sm:text-Display-Semibold-24">
                ★
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  

export default Rating