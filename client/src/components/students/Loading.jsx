import React from "react";

const Loading = () => {

  return (

    <div className="min-h-screen flex items-center justify-center bg-white">

      <div className="flex flex-col items-center gap-5">

        {/* Spinner */}

        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Text */}

        <h2 className="text-2xl font-semibold text-gray-700">
          Loading...
        </h2>

        <p className="text-gray-500">
          Please wait while we prepare your content
        </p>

      </div>

    </div>

  );

};

export default Loading;