import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg fixed top-0 left-0 right-0 z-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold italic">
              Edu<span className="text-yellow-300">Royale</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block flex-grow">
            <div className="ml-10 flex items-center justify-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-[#90E0EF] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="text-white hover:text-[#90E0EF] transition-colors duration-300"
              >
                Courses
              </Link>
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="text-white hover:text-[#90E0EF] transition-colors duration-300 flex items-center"
                >
                  Services
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                      servicesDropdown ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute z-50 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 transform origin-top ${
                    servicesDropdown
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95"
                  }`}
                >
                  <Link
                    to="/services/expert-counseling"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setServicesDropdown(false)}
                  >
                    Expert Counseling
                  </Link>
                  <Link
                    to="/services/course-selection"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setServicesDropdown(false)}
                  >
                    Course Selection
                  </Link>
                  <Link
                    to="/services/country-selection"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setServicesDropdown(false)}
                  >
                    Country Selection
                  </Link>
                  <Link
                    to="/services/bank-loan"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setServicesDropdown(false)}
                  >
                    Bank Loan
                  </Link>
                  <Link
                    to="/services/visa-guidance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setServicesDropdown(false)}
                  >
                    Visa Guidance
                  </Link>
                  <Link
                    to="/services/post-visa-assistance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setServicesDropdown(false)}
                  >
                    Post-Visa Assistance
                  </Link>
                  <Link
                    to="/services/travel-assistance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setServicesDropdown(false)}
                  >
                    Travel Assistance
                  </Link>
                  <Link
                    to="/services/free-ielts-training"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setServicesDropdown(false)}
                  >
                    Free IELTS Training
                  </Link>
                </div>
              </div>
              <Link
                to="/blog"
                className="text-white hover:text-[#90E0EF] transition-colors duration-300"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-[#90E0EF] transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-500 focus:outline-none transition duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden w-full">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-white hover:bg-[#0077B6] rounded-md"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="block px-3 py-2 text-white hover:bg-[#0077B6] rounded-md"
            >
              Courses
            </Link>
            <button
              onClick={toggleServicesDropdown}
              className="w-full text-left px-3 py-2 text-white hover:bg-[#0077B6] rounded-md flex items-center justify-between"
            >
              Services
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  servicesDropdown ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {servicesDropdown && (
              <div className="pl-4">
                <Link
                  to="/services/expert-counseling"
                  className="block px-3 py-2 text-white hover:bg-[#0077B6] rounded-md"
                  onClick={() => setServicesDropdown(false)}
                >
                  Expert Counseling
                </Link>
                <Link
                  to="/services/course-selection"
                  className="block px-3 py-2 text-white hover:bg-[#0077B6] rounded-md"
                  onClick={() => setServicesDropdown(false)}
                >
                  Course Selection
                </Link>
                <Link
                  to="/services/country-selection"
                  className="block px-3 py-2 text-white hover:bg-[#0077B6] rounded-md"
                  onClick={() => setServicesDropdown(false)}
                >
                  Country Selection
                </Link>
                <Link
                  to="/services/bank-loan"
                  className="block px-3 py-2 text-white hover:bg-[#0077B6] rounded-md"
                  onClick={() => setServicesDropdown(false)}
                >
                  Bank Loan
                </Link>
                <Link
                  to="/services/post-visa-assistance"
                  className="block px-3 py-2 text-white hover:bg-[#0077B6] rounded-md"
                  onClick={() => setServicesDropdown(false)}
                >
                  Post-Visa Assistance
                </Link>
                <Link
                  to="/services/travel-assistance"
                  className="block px-3 py-2 text-white hover:bg-[#0077B6] rounded-md"
                  onClick={() => setServicesDropdown(false)}
                >
                  Travel Assistance
                </Link>
                <Link
                  to="/services/free-ielts-training"
                  className="block px-3 py-2 text-white hover:bg-[#0077B6] rounded-md"
                  onClick={() => setServicesDropdown(false)}
                >
                  Free IELTS Training
                </Link>
              </div>
            )}
            <Link
              to="/blog"
              className="block px-3 py-2 text-white hover:bg-[#0077B6] rounded-md"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-white hover:bg-[#0077B6] rounded-md"
            >
              Contact
            </Link>
            {/* Add social media icons to mobile menu */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
