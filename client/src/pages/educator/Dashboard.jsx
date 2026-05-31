import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import {
  assets,
  dummyDashboardData
} from "../../assets/assets";

const Dashboard = () => {

  const navigate = useNavigate();

 
  // TOTAL ENROLLMENTS
const { allCourses } =
  useContext(AppContext);

const totalCourses =
  allCourses.length;

const totalEnrollments =
  dummyDashboardData.enrolledStudentsData.length;
  
  // TOTAL EARNINGS

  const totalEarnings =
    allCourses.reduce(
      (total, course) =>
        total + Number(course.coursePrice || 0),
      0
    );

  // DASHBOARD CARDS

  const dashboardCards = [

    {
      title: "Total Courses",
      value: totalCourses,
      icon: assets.patients_icon,
      color: "bg-blue-100",
    },

    {
      title: "Total Enrollments",
      value: totalEnrollments,
      icon: assets.appointments_icon,
      color: "bg-green-100",
    },

    {
      title: "Total Earnings",
      value: `$${totalEarnings.toFixed(2)}`,
      icon: assets.earning_icon,
      color: "bg-yellow-100",
      path: "/educator/earnings",
    },

  ];

  return (

    <div className="p-6 md:p-10 space-y-8 w-full">

      {/* HEADING */}

      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back 👋 Here's your platform overview.
        </p>

      </div>

      {/* ANALYTICS CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {dashboardCards.map((item, index) => (

          <div
            key={index}

            onClick={() =>
              item.path && navigate(item.path)
            }

            className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-4xl font-bold text-gray-800 mt-2">

                  {item.value}

                </h2>

              </div>

              <div className={`${item.color} p-4 rounded-2xl`}>

                <img
                  src={item.icon}
                  alt=""
                  className="w-10 h-10"
                />

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* RECENT COURSES */}

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">

          <h2 className="text-xl font-semibold text-gray-800">

            Recent Courses

          </h2>

          <button
            onClick={() =>
              navigate("/course-list")
            }
            className="text-blue-600 hover:text-blue-700 font-medium"
          >

            View All

          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50 text-gray-600">

              <tr>

                <th className="text-left px-6 py-4 font-medium">
                  Course
                </th>

                <th className="text-left px-6 py-4 font-medium">
                  Educator
                </th>

                <th className="text-left px-6 py-4 font-medium">
                  Price
                </th>

                <th className="text-left px-6 py-4 font-medium">
                  Level
                </th>

              </tr>

            </thead>

            <tbody>

              {allCourses.slice(0, 5).map((course, index) => (

                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-gray-50 transition"
                >

                  {/* COURSE */}

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-4">

                      <img
                        src={course.courseThumbnail}
                        alt=""
                        className="w-20 h-14 object-cover rounded-lg"
                      />

                      <p className="font-medium text-gray-800">

                        {course.courseTitle}

                      </p>

                    </div>

                  </td>

                  {/* EDUCATOR */}

                  <td className="px-6 py-4 text-gray-600">

                    {
                      course.educatorName ||
                      course.educator?.name ||
                      course.educator
                    }

                  </td>

                  {/* PRICE */}

                  <td className="px-6 py-4 text-gray-700 font-medium">

                    ${course.coursePrice}

                  </td>

                  {/* LEVEL */}

                  <td className="px-6 py-4">

                    <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">

                      {course.level || "Beginner"}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

};

export default Dashboard;