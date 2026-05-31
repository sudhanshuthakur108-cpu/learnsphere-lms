import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {

  const { allCourses, setAllCourses } = useContext(AppContext);

  const navigate = useNavigate();

  // REMOVE COURSE

  const handleDelete = (id) => {

    const filteredCourses = allCourses.filter(
      (course) => course._id !== id
    );

    setAllCourses(filteredCourses);

  };

  return (

    <div className="p-6 md:p-10 w-full">

      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        My Courses
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

          <thead className="bg-gray-100 text-gray-700">

            <tr>

              <th className="text-left px-6 py-4 font-semibold">
                Course
              </th>

              <th className="text-left px-6 py-4 font-semibold">
                Price
              </th>

              <th className="text-left px-6 py-4 font-semibold">
                Students
              </th>

              <th className="text-left px-6 py-4 font-semibold">
                Status
              </th>

              <th className="text-left px-6 py-4 font-semibold">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {allCourses.map((course, index) => (

              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >

                {/* COURSE */}

                <td className="px-6 py-4">

                  <div className="flex items-center gap-4">

                    <img
                      src={course.courseThumbnail}
                      alt=""
                      className="w-24 h-16 object-cover rounded-lg"
                    />

                    <div>

                      <p className="font-semibold text-gray-800">
                        {course.courseTitle}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">

                        {
                          course.educatorName ||
                          course.educator?.name ||
                          course.educator
                        }

                      </p>

                    </div>

                  </div>

                </td>

                {/* PRICE */}

                <td className="px-6 py-4 text-gray-700 font-medium">
                  ${course.coursePrice}
                </td>

                {/* STUDENTS */}

                <td className="px-6 py-4 text-gray-700">
                  {course.enrolledStudents?.length || 0}
                </td>

                {/* STATUS */}

                <td className="px-6 py-4">

                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">

                    Published

                  </span>

                </td>

                {/* ACTION BUTTONS */}

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    {/* EDIT BUTTON */}

                    <button
                      onClick={() =>
                        navigate(`/educator/edit-course/${course._id}`)
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl transition-all duration-300"
                    >

                      Edit

                    </button>

                    {/* REMOVE BUTTON */}

                    <button
                      onClick={() => handleDelete(course._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition-all duration-300"
                    >

                      Remove

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default MyCourses;