import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";


import {
  useUser,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/react";

import { AppContext } from "../../context/AppContext";

const Navbar = () => {

  const { navigate, isEducator } = useContext(AppContext);

  const location = useLocation();

  const { user } = useUser();

  const isCourseListPage =
    location.pathname.includes("/course-list");

  return (

    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPage
          ? "bg-white"
          : "bg-cyan-100/70"
      }`}
    >

      {/* Logo */}
     <img
  onClick={() => navigate("/")}
  src={assets.learnsphere_logo}
  alt="LearnSphere Logo"
  className="h-24 lg:h-28 w-auto object-contain cursor-pointer -ml-50"
/>
  

      {/* Desktop Screen */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">

        <div className="flex items-center gap-5">

          {user && (
            <>
              <button
                onClick={() => {
                  navigate("/educator");
                }}
              >
                {isEducator
                  ? "Educator Dashboard"
                  : "Become Educator"}
              </button>

              <Link to="/my-enrollments">
                My Enrollments
              </Link>
            </>
          )}

        </div>

        {user ? (

          <UserButton />

        ) : (

          <div className="flex items-center gap-3">

            <SignInButton>
              <button className="text-gray-600">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
                Create Account
              </button>
            </SignUpButton>

          </div>

        )}

      </div>

      {/* Mobile Screen */}
      <div className="md:hidden flex items-center gap-3 text-gray-500">

        {user ? (

          <>
            <button
              onClick={() => {
                navigate("/educator");
              }}
              className="text-sm"
            >
              {isEducator ? "Dashboard" : "Educator"}
            </button>

            <Link
              to="/my-enrollments"
              className="text-sm"
            >
              Enrollments
            </Link>

            <UserButton />

          </>

        ) : (

          <>
            <SignInButton>
              <button className="text-sm">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton>
              <img
                src={assets.user_icon}
                alt=""
                className="w-8"
              />
            </SignUpButton>
          </>

        )}

      </div>

    </div>

  );
};

export default Navbar;