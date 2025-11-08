import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="text-white flex items-center justify-between px-8 py-4 shadow-md">
      <div className="flex items-center gap-3">
        <img src="/Logo.png" alt="Logo" className="h-8 w-8 object-contain" />
        <span className="text-2xl font-bold tracking-wide hover:text-teal-400 transition">TravelDestiny</span>
      </div>
      <nav className="flex items-center gap-6">
        <Link to="/" className="hover:text-teal-400 transition">
          Home
        </Link>
        <Link to="/explore" className="hover:text-teal-400 transition">
          Explore
        </Link>
        <Link to="/dashboard" className="hover:text-teal-400 transition">
          Dashboard
        </Link>
        <Link to="/account" className="hover:text-teal-400 transition">
          <FaUserCircle size={28} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
