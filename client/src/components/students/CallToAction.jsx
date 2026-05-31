import React from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {

  const navigate = useNavigate();

  return (

    <div className="px-6 md:px-16 lg:px-24 py-20">

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl">

        <div className="max-w-5xl mx-auto px-8 py-16 text-center text-white">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">

            Start Learning <br />

            <span className="text-yellow-300">
              From The Best Instructors
            </span>

          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">

            Upgrade your skills with premium courses in development,
            design, business and modern technologies.

          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

            <button
              onClick={() => navigate("/course-list")}
              className="bg-white text-blue-700 hover:bg-gray-100 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105"
            >

              Explore Courses

            </button>

            <button
              onClick={() => navigate("/my-enrollments")}
              className="border border-white/40 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold"
            >

              My Learning

            </button>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

            <div>

              <h2 className="text-4xl font-bold">
                10K+
              </h2>

              <p className="text-blue-100 mt-2">
                Active Students
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold">
                500+
              </h2>

              <p className="text-blue-100 mt-2">
                Premium Courses
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold">
                4.9★
              </h2>

              <p className="text-blue-100 mt-2">
                Student Rating
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default CallToAction;