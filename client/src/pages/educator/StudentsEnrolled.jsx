import React from "react";

const StudentsEnrolled = () => {

  const students = [
    {
      name: "Sudhanshu Thakur",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      course: "Introduction to JavaScript",
      date: "24 May 2026",
    },
    {
      name: "Sumit Verma",
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
      course: "Advanced Python Programming",
      date: "26 May 2026",
    },
    {
      name: "Akash Sharma",
      image:
        "https://randomuser.me/api/portraits/men/15.jpg",
      course: "Web Development Bootcamp",
      date: "27 May 2026",
    },
    {
      name: "Kritika Singh",
      image:
        "https://randomuser.me/api/portraits/women/21.jpg",
      course: "UI UX Design Masterclass",
      date: "28 May 2026",
    },
    {
      name: "Ayush Raj",
      image:
        "https://randomuser.me/api/portraits/men/67.jpg",
      course: "React Complete Course",
      date: "29 May 2026",
    },
  ];

  return (

    <div className="p-4">

      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Students Enrolled
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">

        <table className="w-full">

          <thead className="bg-gray-50 text-gray-700">

            <tr>

              <th className="text-left px-6 py-4 font-semibold">
                Student Name
              </th>

              <th className="text-left px-6 py-4 font-semibold">
                Course Title
              </th>

              <th className="text-left px-6 py-4 font-semibold">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map((item, index) => (

              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />

                    <p className="font-medium text-gray-800">
                      {item.name}
                    </p>

                  </div>

                </td>

                <td className="px-6 py-4 text-gray-700">
                  {item.course}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {item.date}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default StudentsEnrolled;