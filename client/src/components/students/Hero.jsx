import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (

    <div className="flex flex-col items-center justify-center w-full md:pt-28 pt-16 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl relative font-bold text-gray-800 max-w-3xl mx-auto leading-tight">

        Empower your future with the courses designed to

        <span className="text-blue-600">
          {" "}fit your choice.
        </span>

        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        />

      </h1>

      {/* Desktop Paragraph */}
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto text-lg">

        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.

      </p>

      {/* Mobile Paragraph */}
      <p className="md:hidden text-gray-500 max-w-sm mx-auto text-sm">

        We bring together world-class instructors to help you achieve your
        professional goals.

      </p>
      <SearchBar/>
    </div>

  );
};

export default Hero;