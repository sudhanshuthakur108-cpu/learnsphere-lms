import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Earnings = () => {

  const { allCourses } = useContext(AppContext);

  // COLORS

  const COLORS = [
    "#2563eb",
    "#16a34a",
    "#f59e0b",
    "#dc2626",
    "#9333ea",
    "#0891b2",
  ];

  // TOTAL EARNINGS

  const totalEarnings = allCourses.reduce(
    (total, course) =>
      total + Number(course.coursePrice || 0),
    0
  );

  // TOTAL STUDENTS

  const totalStudents = allCourses.reduce(
    (total, course) =>
      total +
      (course.enrolledStudents?.length || 0),
    0
  );

  // PIE CHART DATA

  const pieData = allCourses.map((course) => ({
    name: course.courseTitle,
    value: Number(course.coursePrice),
  }));

  // BAR CHART DATA

  const barData = allCourses.map((course) => ({
    name: course.courseTitle.slice(0, 12),
    earnings: Number(course.coursePrice),
  }));

  return (

    <div className="p-6 md:p-10 space-y-8 w-full">

      {/* HEADER */}

      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          Earnings Analytics
        </h1>

        <p className="text-gray-500 mt-2">
          Revenue insights and course performance 🚀
        </p>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* TOTAL EARNINGS */}

        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">

          <p className="text-gray-500">
            Total Earnings
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            ${totalEarnings.toFixed(2)}
          </h2>

        </div>

        {/* TOTAL COURSES */}

        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">

          <p className="text-gray-500">
            Total Courses
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            {allCourses.length}
          </h2>

        </div>

        {/* TOTAL STUDENTS */}

        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">

          <p className="text-gray-500">
            Total Students
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            {totalStudents}
          </h2>

        </div>

      </div>

      {/* CHARTS */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* PIE CHART */}

        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Revenue Distribution
          </h2>

          <div className="h-[350px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={120}
                  label
                >

                  {pieData.map((entry, index) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[index % COLORS.length]
                      }
                    />

                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* BAR CHART */}

        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Course Earnings
          </h2>

          <div className="h-[350px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={barData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="earnings"
                  fill="#2563eb"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      {/* COURSE TABLE */}

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

        <div className="px-6 py-5 border-b border-gray-200">

          <h2 className="text-xl font-semibold text-gray-800">
            Course-wise Earnings
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left px-6 py-4">
                  Course
                </th>

                <th className="text-left px-6 py-4">
                  Educator
                </th>

                <th className="text-left px-6 py-4">
                  Price
                </th>

                <th className="text-left px-6 py-4">
                  Students
                </th>

                <th className="text-left px-6 py-4">
                  Earnings
                </th>

              </tr>

            </thead>

            <tbody>

              {allCourses.map((course, index) => {

                const students =
                  course.enrolledStudents?.length || 0;

                const earnings =
                  students *
                  Number(course.coursePrice || 0);

                return (

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

                    <td className="px-6 py-4">
                      ${course.coursePrice}
                    </td>

                    {/* STUDENTS */}

                    <td className="px-6 py-4">
                      {students}
                    </td>

                    {/* EARNINGS */}

                    <td className="px-6 py-4 font-semibold text-green-600">
                      ${earnings.toFixed(2)}
                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

};

export default Earnings;