import React from "react";

const Rating = ({ rating = 4.5, totalRatings = 1200 }) => {

  return (

    <div className="flex items-center gap-3">

      {/* STARS */}

      <div className="flex items-center gap-1 text-yellow-400 text-lg">

        {Array(5)
          .fill("")
          .map((_, index) => (

            <span key={index}>

              {rating >= index + 1 ? "★" : "☆"}

            </span>

          ))}

      </div>

      {/* RATING NUMBER */}

      <p className="font-semibold text-gray-700">
        {rating}
      </p>

      {/* TOTAL REVIEWS */}

      <p className="text-gray-500 text-sm">
        ({totalRatings.toLocaleString()} ratings)
      </p>

    </div>

  );

};

export default Rating;