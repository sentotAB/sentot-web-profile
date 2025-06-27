import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-gray-900 to-gray-500 text-white relative">
      {/* Logo Section */}
      <div className="absolute top-4 left-4 z-10">
        <Link
          to="/"
          className="text-xl sm:text-sm bg-black px-2 py-1 rounded hover:bg-black"
        >
          HOME
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div
        className="absolute top-4 right-4 z-20 flex items-center sm:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FiX className="text-white w-8 h-8 transition-transform transform rotate-180 duration-300" />
        ) : (
          <FiMenu className="text-white w-8 h-8 transition-transform transform rotate-0 duration-300" />
        )}
      </div>

      <nav className="flex justify-center items-center px-4 sm:px-8  py-4">
        <ul className="hidden sm:flex space-x-8 md:space-x-4 md:ml-12 uppercase text-sm tracking-widest ">
          <Link to="/MyProfile">
            <li className="hover:text-blue-400 cursor-pointer">My Profile</li>
          </Link>
          <Link to="/projects">
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          </Link>
          <Link to="/Contact">
            <li className="hover:text-blue-400 cursor-pointer">Contacts</li>
          </Link>
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 right-0 w-2/3 h-screen bg-black bg-opacity-90 flex flex-col items-center py-16 space-y-6 sm:hidden z-10">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={toggleMenu}
            >
              &#10005; 
            </button>
            <Link
              to="/MyProfile"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              My Profil
            </Link>
            <Link
              to="/Projects"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/Contact"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
