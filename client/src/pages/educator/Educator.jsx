import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/educator/Navbar";
import Sidebar from "../../components/educator/Sidebar";
import Footer from "../../components/educator/Footer";

const Educator = () => {

  return (

    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* NAVBAR */}

      <Navbar />

      {/* MAIN SECTION */}

      <div className="flex flex-1">

        {/* SIDEBAR */}

        <Sidebar />

        {/* PAGE CONTENT */}

        <div className="flex-1 p-4 md:p-8">

          <Outlet />

        </div>

      </div>

      {/* FOOTER */}

      <Footer />

    </div>

  );

};

export default Educator;