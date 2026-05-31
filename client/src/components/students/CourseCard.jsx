import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      <img
        src={course.courseThumbnail}
        alt=""
        className="w-full h-48 object-cover"
      />

      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>

        {/* FINAL FIX 😎 */}
        <p className="text-gray-500 mt-1">
          By {course.educatorName || course.educator || "sudhanshu thakur"}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <p>{calculateRating(course).toFixed(1)}</p>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.floor(calculateRating(course))
                    ? assets.star
                    : assets.star_blank
                }
                alt=""
                className="w-3.5 h-3.5"
              />
            ))}
          </div>

          <p className="text-gray-500">({course.courseRatings.length})</p>
        </div>

        <p className="text-base font-semibold text-gray-800 mt-2">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
