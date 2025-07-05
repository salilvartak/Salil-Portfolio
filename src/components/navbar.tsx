import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Pull Tab */}
      <div
        className={`fixed top-1/2 -translate-y-1/2 left-0 z-50 transform cursor-pointer
                    bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 text-white p-3 rounded-r-lg shadow-lg
                    transition-opacity duration-300 ease-in-out
                    ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} // Disappears when open
        onClick={toggleNavbar}
      >
        {/* Arrow always points right as the tab is only clickable when the menu is closed */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>

      {/* Navbar with Glass Effect (Floating Area) */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 p-5 z-40
                    bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm backdrop-saturate-150   rounded-r-xl shadow-xl
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} // Slide in from left
      >
        <div className="flex justify-end mb-4">
          {/* Close button inside the floating nav */}
          <button
            onClick={toggleNavbar}
            className="text-white hover:text-gray-200 focus:outline-none text-2xl"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col space-y-9 justify-center items-start h-full">
          <li>
            <a
              href="#home"
              className="block text-white text-3xl font-semibold hover:text-blue-200 transition-colors"
              onClick={toggleNavbar}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-white text-3xl font-semibold hover:text-blue-200 transition-colors"
              onClick={toggleNavbar}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block text-white text-3xl font-semibold hover:text-blue-200 transition-colors"
              onClick={toggleNavbar}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-white text-3xl font-semibold hover:text-blue-200 transition-colors"
              onClick={toggleNavbar}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-white text-3xl font-semibold hover:text-blue-200 transition-colors"
              onClick={toggleNavbar}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;