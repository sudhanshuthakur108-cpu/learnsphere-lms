import React, { useState } from "react";
import {
  FaPlayCircle,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Player = () => {

  const courseSections = [
    {
      section: "React Basics",
      lectures: [
        {
          title: "Introduction to React",
          duration: "12 mins",
          completed: true,
        },
        {
          title: "JSX & Components",
          duration: "18 mins",
          completed: true,
        },
      ],
    },

    {
      section: "Core React",
      lectures: [
        {
          title: "Props & State",
          duration: "20 mins",
          completed: false,
        },
        {
          title: "React Hooks",
          duration: "25 mins",
          completed: false,
        },
      ],
    },

    {
      section: "Project Setup",
      lectures: [
        {
          title: "Vite Installation",
          duration: "10 mins",
          completed: false,
        },
        {
          title: "Folder Structure",
          duration: "15 mins",
          completed: false,
        },
      ],
    },
  ];

  const [openSection, setOpenSection] = useState(0);

  const [currentLecture, setCurrentLecture] = useState(
    courseSections[0].lectures[0]
  );

  return (

    <div className="min-h-screen bg-gray-50 px-4 md:px-10 lg:px-20 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}

        <div className="lg:col-span-2">

          {/* Video Player */}

          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">

            <video
              controls
              className="w-full h-[250px] md:h-[500px] object-cover"
            >

              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />

            </video>

          </div>

          {/* Lecture Info */}

          <div className="bg-white rounded-3xl shadow-md p-6 mt-6 border border-gray-100">

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {currentLecture.title}
            </h1>

            <p className="text-gray-500 mt-4 leading-8 text-lg">

              Learn modern React development with practical projects,
              clean architecture, reusable components, hooks,
              routing and real-world frontend concepts.

            </p>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-600">

              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-medium">
                ⏱ {currentLecture.duration}
              </span>

              <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">
                React Masterclass
              </span>

              <span className="bg-green-50 text-green-600 px-4 py-2 rounded-full font-medium">
                Beginner Friendly
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="bg-white rounded-3xl shadow-xl p-6 h-fit border border-gray-100">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Course Content
          </h2>

          <div className="flex flex-col gap-4">

            {courseSections.map((section, sectionIndex) => (

              <div
                key={sectionIndex}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >

                {/* SECTION HEADER */}

                <div
                  onClick={() =>
                    setOpenSection(
                      openSection === sectionIndex ? null : sectionIndex
                    )
                  }
                  className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition"
                >

                  <div>

                    <h3 className="font-bold text-lg text-gray-800">
                      {section.section}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {section.lectures.length} Lectures
                    </p>

                  </div>

                  {openSection === sectionIndex ? (

                    <FaChevronUp className="text-gray-500" />

                  ) : (

                    <FaChevronDown className="text-gray-500" />

                  )}

                </div>

                {/* LECTURES */}

                {openSection === sectionIndex && (

                  <div className="border-t border-gray-200 bg-gray-50">

                    {section.lectures.map((lecture, lectureIndex) => (

                      <div
                        key={lectureIndex}
                        onClick={() => setCurrentLecture(lecture)}
                        className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-300 border-b border-gray-200

                        ${
                          currentLecture.title === lecture.title
                            ? "bg-blue-50"
                            : "hover:bg-white"
                        }
                        `}
                      >

                        <div className="flex items-center gap-3">

                          {lecture.completed ? (

                            <FaCheckCircle className="text-green-500 text-xl" />

                          ) : (

                            <FaPlayCircle className="text-blue-500 text-xl" />

                          )}

                          <div>

                            <h4 className="font-semibold text-gray-800">
                              {lecture.title}
                            </h4>

                            <p className="text-sm text-gray-500">
                              {lecture.duration}
                            </p>

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

};

export default Player;