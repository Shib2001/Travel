import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 py-6 px-8 mt-auto w-full border-t border-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm">
          © 2025 TravelDestiny. All rights reserved.
        </span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-teal-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-teal-400 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
