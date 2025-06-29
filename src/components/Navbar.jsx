import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 via-gray-900 to-gray-500 text-white shadow-md">
     {/*  Logo Section */}
      {/* <div className="absolute top-3 left-20 z-10">
        <Link
          to="/" className="text-2xl sm:text-xl hover:bg-black">
          HOME
        </Link>
      </div> */}

    
      {/* Hamburger Icon */}
      <div
        className="absolute top-4 right-4 z-20 flex items-center sm:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FiX className="text-white w-8 h-8 transition-transform duration-300" />
        ) : (
          <FiMenu className="text-white w-8 h-8 transition-transform duration-300" />
        )}
      </div>

      {/* Desktop Menu */}
      <nav className="flex justify-center items-center px-4 py-4">
        <ul className="hidden sm:flex space-x-8 uppercase text-l tracking-widest">
        <li>
            <Link
              to="/" className=" hover:text-blue-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/MyProfile" className="hover:text-blue-300">
              My Profile
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="hover:text-blue-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-blue-300">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 w-2/3 h-screen bg-black bg-opacity-90 flex flex-col items-center py-16 space-y-6 sm:hidden z-10">
          <Link
            to="/MyProfile"
            className="text-white text-lg hover:text-blue-400"
            onClick={toggleMenu}
          >
            My Profile
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
    </header>
  );
};

export default Navbar;
