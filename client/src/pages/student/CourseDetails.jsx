import React, { useContext } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { AppContext } from "../../context/AppContext";

const CourseDetails = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const {
    allCourses,
    enrollCourse,
  } = useContext(AppContext);

  // FIND COURSE

  const course = allCourses.find(
    (item) => item._id.toString() === id
  );

  // COURSE NOT FOUND

  if (!course) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold text-gray-700">

          Course Not Found 😢

        </h1>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-gray-50 px-6 md:px-12 lg:px-20 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}

        <div className="lg:col-span-2">

          <h1 className="text-5xl font-bold text-gray-800">

            {course.courseTitle}

          </h1>

          <p className="text-gray-600 mt-5 text-lg leading-8">

            {course.courseDescription}

          </p>

          {/* IMAGE */}

          <img
            src={course.courseThumbnail}
            alt=""
            className="w-full rounded-3xl mt-8 shadow-lg"
          />

          {/* COURSE CONTENT */}

          <div className="mt-10">

            <h2 className="text-3xl font-bold text-gray-800 mb-6">

              Course Content

            </h2>

            <div className="flex flex-col gap-4">

              {course.courseContent?.map(
                (chapter, index) => (

                  <div
                    key={index}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                  >

                    <h3 className="font-semibold text-lg">

                      {chapter.chapterTitle}

                    </h3>

                    <p className="text-gray-500 mt-1">

                      {
                        chapter.chapterContent?.length
                      } Lectures

                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div>

          <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">

            <img
              src={course.courseThumbnail}
              alt=""
              className="rounded-2xl"
            />

            <h2 className="text-4xl font-bold text-gray-800 mt-6">

              ${course.coursePrice}

            </h2>

            <button

              onClick={() => {

                enrollCourse(course);

                navigate("/my-enrollments");

              }}

              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-4 rounded-2xl mt-6 text-lg font-semibold"
            >

              Enroll Now

            </button>

            <div className="mt-6 flex flex-col gap-3 text-gray-600">

              <p>✅ Full Lifetime Access</p>

              <p>✅ Beginner Friendly</p>

              <p>✅ Certificate Included</p>

              <p>✅ 20+ Hours Content</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default CourseDetails;