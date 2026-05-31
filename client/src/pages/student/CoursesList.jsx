import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/students/Loading";

const CoursesList = () => {

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [selectedLevels, setSelectedLevels] = useState([]);

  const [priceFilter, setPriceFilter] = useState("");

  const navigate = useNavigate();

  const { allCourses } = useContext(AppContext);

  const { input } = useParams();

  const [loading, setLoading] = useState(true);

  // CATEGORY FILTER

  const handleCategoryChange = (category) => {

    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );

  };

  // LEVEL FILTER

  const handleLevelChange = (level) => {

    setSelectedLevels((prev) =>
      prev.includes(level)
        ? prev.filter((item) => item !== level)
        : [...prev, level]
    );

  };

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);

  }, []);

  // FILTER LOGIC

  const filteredCourses = allCourses.filter((course) => {

    // CATEGORY

    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(course.category)
    ) {
      return false;
    }

    // LEVEL

    if (
      selectedLevels.length > 0 &&
      !selectedLevels.includes(course.level)
    ) {
      return false;
    }

    // PRICE

    const finalPrice =
      course.coursePrice -
      (course.discount * course.coursePrice) / 100;

    if (priceFilter === "Free" && finalPrice > 0) {
      return false;
    }

    if (priceFilter === "Paid" && finalPrice <= 0) {
      return false;
    }

    return true;

  });

  if (loading) return <Loading />;

  return (

    <div className="min-h-screen bg-gray-50 px-6 md:px-12 lg:px-20 py-10">

      {/* TOP SECTION */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-gray-800">
          Results for "{input || "All Courses"}"
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          {filteredCourses.length} courses found
        </p>

      </div>

      {/* MAIN LAYOUT */}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* FILTER SIDEBAR */}

        <div className="bg-white rounded-3xl shadow-md p-6 h-fit border border-gray-100">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Filters
          </h2>

          {/* CATEGORY */}

          <div className="mb-8">

            <h3 className="font-semibold text-gray-700 mb-3">
              Categories
            </h3>

            <div className="flex flex-col gap-3 text-gray-600">

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  onChange={() => handleCategoryChange("Development")}
                />

                Development

              </label>

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  onChange={() => handleCategoryChange("Design")}
                />

                Design

              </label>

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  onChange={() => handleCategoryChange("Business")}
                />

                Business

              </label>

            </div>

          </div>

          {/* LEVEL */}

          <div className="mb-8">

            <h3 className="font-semibold text-gray-700 mb-3">
              Course Level
            </h3>

            <div className="flex flex-col gap-3 text-gray-600">

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  onChange={() => handleLevelChange("Beginner")}
                />

                Beginner

              </label>

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  onChange={() => handleLevelChange("Intermediate")}
                />

                Intermediate

              </label>

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  onChange={() => handleLevelChange("Advanced")}
                />

                Advanced

              </label>

            </div>

          </div>

          {/* PRICE */}

          <div>

            <h3 className="font-semibold text-gray-700 mb-3">
              Price
            </h3>

            <div className="flex flex-col gap-3 text-gray-600">

              <label className="flex items-center gap-2">

                <input
                  type="radio"
                  name="price"
                  onChange={() => setPriceFilter("Free")}
                />

                Free

              </label>

              <label className="flex items-center gap-2">

                <input
                  type="radio"
                  name="price"
                  onChange={() => setPriceFilter("Paid")}
                />

                Paid

              </label>

            </div>

          </div>

        </div>

        {/* COURSE CARDS */}

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredCourses.map((course, index) => (

            <div
              key={index}
              onClick={() => navigate(`/course/${course._id}`)}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-pointer group"
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={course.courseThumbnail || course.image}
                  alt=""
                  className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              {/* CONTENT */}

              <div className="p-5">

                <h2 className="text-2xl font-bold text-gray-800 line-clamp-2">
                  {course.courseTitle || course.title}
                </h2>

                <p className="text-gray-500 mt-2">

                  By{" "}

                  {
                    course.educatorName ||
                    course.educator?.name ||
                    course.educator ||
                    "Unknown Instructor"
                  }

                </p>

                {/* RATING */}

                <div className="flex items-center gap-2 mt-4">

                  <span className="text-yellow-500 text-lg">
                    ⭐
                  </span>

                  <span className="font-semibold text-gray-700">
                    4.5
                  </span>

                  <span className="text-gray-400">
                    (1.2k students)
                  </span>

                </div>

                {/* LEVEL */}

                <div className="mt-4">

                  <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                    {course.level || "Beginner"}
                  </span>

                </div>

                {/* PRICE */}

                <div className="flex items-center justify-between mt-6">

                  <h3 className="text-2xl font-bold text-gray-800">

                    $
                    {course.coursePrice || course.price}

                  </h3>

                  <button
                    onClick={(e) => {

                      e.stopPropagation();

                      navigate(`/course/${course._id}`);

                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition-all duration-300"
                  >
                    View
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default CoursesList;