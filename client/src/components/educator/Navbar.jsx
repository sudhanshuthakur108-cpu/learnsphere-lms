import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/react";
import { assets } from "../../assets/assets";

const Navbar = () => {

  const { user } = useUser();

  return (

    <div className="h-20 border-b bg-white flex items-center justify-between px-6 md:px-10">

      {/* LEFT */}
<Link
  to="/"
  className="flex items-center cursor-pointer -ml-25"
>

  <img
    src={assets.learnsphere_logo}
    alt="LearnSphere"
    className="h-24 w-auto object-contain"
  />

</Link>

      

      {/* CENTER */}

      <div className="hidden md:flex items-center gap-10 text-lg font-medium text-gray-700">

        <Link to="/educator">
          Dashboard
        </Link>

        <Link to="/educator/add-course">
          Add Course
        </Link>

        <Link to="/educator/my-courses">
          My Courses
        </Link>

        <Link to="/educator/students-enrolled">
          Students
        </Link>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">

        <div className="text-right hidden md:block">

          <h2 className="font-semibold text-lg">
            {user?.fullName}
          </h2>

          <p className="text-gray-500 text-sm">
            {user?.primaryEmailAddress?.emailAddress}
          </p>

        </div>

        <img
          src={user?.imageUrl}
          alt=""
          className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
        />

      </div>

    </div>

  );

};

export default Navbar;