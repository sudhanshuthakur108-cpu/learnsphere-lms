import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (

    <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-500/10 pt-4 flex flex-col">

      <NavLink
        to="/educator"
        end
        className={({ isActive }) =>
          `flex items-center py-3 px-4 gap-3 
          ${
            isActive
              ? "bg-blue-50 border-r-[6px] border-blue-500 text-blue-500"
              : "hover:bg-gray-100/90 text-gray-700"
          }`
        }
      >

        <img src={assets.home_icon} alt="" className="w-5 h-5" />

        <p className="md:block hidden">
          Dashboard
        </p>

      </NavLink>

      <NavLink
        to="/educator/add-course"
        className={({ isActive }) =>
          `flex items-center py-3 px-4 gap-3
          ${
            isActive
              ? "bg-blue-50 border-r-[6px] border-blue-500 text-blue-500"
              : "hover:bg-gray-100/90 text-gray-700"
          }`
        }
      >

        <img src={assets.add_icon} alt="" className="w-5 h-5" />

        <p className="md:block hidden">
          Add Course
        </p>

      </NavLink>

      <NavLink
        to="/educator/my-courses"
        className={({ isActive }) =>
          `flex items-center py-3 px-4 gap-3
          ${
            isActive
              ? "bg-blue-50 border-r-[6px] border-blue-500 text-blue-500"
              : "hover:bg-gray-100/90 text-gray-700"
          }`
        }
      >

        <img src={assets.my_course_icon} alt="" className="w-5 h-5" />

        <p className="md:block hidden">
          My Courses
        </p>

      </NavLink>

      <NavLink
        to="/educator/students-enrolled"
        className={({ isActive }) =>
          `flex items-center py-3 px-4 gap-3
          ${
            isActive
              ? "bg-blue-50 border-r-[6px] border-blue-500 text-blue-500"
              : "hover:bg-gray-100/90 text-gray-700"
          }`
        }
      >

        <img src={assets.person_tick_icon} alt="" className="w-5 h-5" />

        <p className="md:block hidden">
          Students Enrolled
        </p>

      </NavLink>

    </div>

  );
};

export default Sidebar;