import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-16 lg:px-24 xl:px-32 pt-14 pb-6 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-10">
        {/* Logo + Description */}

        <div>
          <div className="flex items-center gap-3">
            <img src={assets.learnsphere_logo_only} alt="" className="w-12" />

            <h2 className="text-4xl font-bold">
              <span className="text-white">Learn</span>

              <span className="text-blue-500 ml-2">Sphere</span>
            </h2>
          </div>

          <p className="text-gray-400 mt-5 leading-7 text-sm">
            LearnSphere is your trusted learning platform where students can explore
            high-quality courses and improve their skills anytime, anywhere.
          </p>
        </div>

        {/* Company */}

        <div>
          <h2 className="text-lg font-semibold mb-5">Company</h2>

          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">Home</li>

            <li className="hover:text-white transition cursor-pointer">
              About Us
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Contact Us
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Newsletter */}

        <div>
          <h2 className="text-lg font-semibold mb-5">
            Subscribe to our newsletter
          </h2>

          <p className="text-gray-400 text-sm mb-4 leading-6">
            Get the latest updates, new courses and learning resources delivered
            directly to your inbox.
          </p>

          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border border-gray-700 outline-none px-4 py-3 rounded-l-lg w-full text-sm"
            />

            <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-r-lg text-sm font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="pt-6 text-center text-gray-500 text-sm">
        © 2026 LearnSphere. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
