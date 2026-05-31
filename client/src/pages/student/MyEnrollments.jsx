import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const MyEnrollments = () => {

  const navigate = useNavigate();

  const { enrolledCourses } =
    useContext(AppContext);

  return (

    <div className="px-6 md:px-16 lg:px-24 py-10 min-h-screen">

      <h1 className="text-4xl font-bold text-gray-800 mb-10">

        My Enrollments

      </h1>

      {

        enrolledCourses.length === 0 ? (

          <div className="bg-white border border-gray-200 rounded-3xl p-12 text-center shadow-sm">

            <h2 className="text-3xl font-semibold text-gray-700">

              No Courses Enrolled 😢

            </h2>

            <p className="text-gray-500 mt-3 text-lg">

              Start enrolling in courses to see them here.

            </p>

          </div>

        ) : (

          <div className="flex flex-col gap-8">

            {enrolledCourses.map((course, index) => (

              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
              >

                {/* COURSE IMAGE */}

                <img
                  src={course.courseThumbnail}
                  alt=""
                  className="md:w-80 h-56 object-cover"
                />

                {/* CONTENT */}

                <div className="flex flex-col justify-between p-6 w-full">

                  <div>

                    <h2 className="text-3xl font-semibold text-gray-800">

                      {course.courseTitle}

                    </h2>

                    <p className="text-gray-500 mt-3 text-lg">

                      By {

                        course.educatorName ||
                        course.educator?.name ||
                        course.educator

                      }

                    </p>

                  </div>

                  {/* PROGRESS */}

                  <div className="mt-6">

                    <div className="flex justify-between text-sm text-gray-600 mb-2">

                      <span className="font-medium">

                        Progress

                      </span>

                      <span className="font-semibold text-blue-600">

                        {course.progress || 0}%

                      </span>

                    </div>

                    <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">

                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-700 h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${course.progress || 0}%`,
                        }}
                      ></div>

                    </div>

                  </div>

                  {/* BUTTON */}

                  <button
                    onClick={() =>
                      navigate(`/player/${course._id}`)
                    }
                    className="mt-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-7 py-3 rounded-xl font-medium shadow-md hover:scale-105 w-fit"
                  >

                    Continue Learning

                  </button>

                </div>

              </div>

            ))}

          </div>

        )

      }

    </div>

  );

};

export default MyEnrollments;