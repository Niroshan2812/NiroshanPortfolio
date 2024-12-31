import React from "react";
import {Link} from "react-router-dom";

function NavBarImpl(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return(
        <div className="relative">
        <button
          className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-md rounded-md w-40">
            <Link
            to="/"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          </div>
        )}
      </div>
    )
}
export default NavBarImpl;