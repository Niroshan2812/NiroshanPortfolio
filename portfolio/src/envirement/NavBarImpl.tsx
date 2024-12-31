import React from "react";

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
            <a
              href="#home"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    )
}
export default NavBarImpl;