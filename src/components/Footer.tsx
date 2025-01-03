"use client";

import React, { useState } from "react";

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <footer className="bg-[#000000] text-[#FFFFFFDD] font-inter py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - About and Navigation */}
          <div className="flex flex-col gap-8">
            {/* About Section */}
            <div className="transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-6 relative inline-block">
                About EDUROYALE
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </h3>
              <div className="flex items-center">
                <p className="text-gray-400 text-base leading-relaxed max-w-3xl mr-4 hover:text-gray-300 transition-colors duration-300">
                  EDUROYLAE commits to cater the aspiration of its clients by
                  making the international education and migration a hassle free
                  event. The institutions which we support in USA, UK, Canada,
                  New Zealand, Ireland, Australia, Sweden, and Portugal excels
                  in its quality of education and are the primal destination of
                  every students...{" "}
                  <a
                    href="/about"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center group transition-all duration-300"
                  >
                    view more
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Navigation */}
              <div className="flex flex-col group">
                <h4 className="text-base font-semibold mb-4 uppercase relative inline-block text-white">
                  Navigation
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group"
                    >
                      <span className="text-blue-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        ›
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Home
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group"
                    >
                      <span className="text-blue-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        ›
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        About Us
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group"
                    >
                      <span className="text-blue-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        ›
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Courses
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group"
                    >
                      <span className="text-blue-400 mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        ›
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Contact Us
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Study Abroad */}
              <div className="flex flex-col">
                <h4 className="text-base font-semibold mb-4 uppercase text-white">
                  Study Abroad
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>Ireland
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>UK
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>Canada
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>Newzealand
                    </a>
                  </li>
                </ul>
              </div>

              {/* Service */}
              <div className="flex flex-col">
                <h4 className="text-base font-semibold mb-4 uppercase text-white">
                  Service
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>Expert
                      Counseling
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>Course
                      Selection
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>Country
                      Selection
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>Bank Loan
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tag */}
              <div className="flex flex-col">
                <h4 className="text-base font-semibold mb-4 uppercase text-white">
                  Tag
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>Academics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>Student
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>Go Abroad
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="text-blue-400 mr-2">›</span>Student
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Kollam Office */}
            <div className="transform hover:scale-[1.02] transition-transform duration-300 p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/70">
              <h4 className="text-base font-semibold mb-3 flex items-center text-white">
                <svg
                  className="w-5 h-5 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                KOLLAM
              </h4>
              <div className="text-xl font-bold mb-4 hover:text-blue-400 transition-colors duration-300">
                (+91) 8086 606 605
              </div>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-400">Tel: (+91) 474 2750005</li>
                <li className="text-gray-400">Fax: (+91) 474 2750005</li>
                <li className="text-gray-400 mt-4">
                  <div className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 mr-3 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-semibold text-gray-400">
                      Address:
                    </span>
                  </div>
                  <div className="ml-9 text-gray-400">
                    EDUROYALE Overseas Education Consultants,
                    <br />
                    Building No:MIC VIII/1712/666A,
                    <br />
                    Opp:University of Kerala Information Centre,
                    <br />
                    SN College Junction, Kollam, Kerala - 691001
                  </div>
                </li>
                <li className="flex items-center text-gray-400 mt-4">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email: contact@eduroyale.in</span>
                </li>
              </ul>
            </div>

            {/* Trivandrum Office */}
            <div className="transform hover:scale-[1.02] transition-transform duration-300 p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/70">
              <h4 className="text-base font-semibold mb-3 flex items-center text-white">
                <svg
                  className="w-5 h-5 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                TRIVANDRUM
              </h4>
              <div className="text-xl font-bold mb-4 hover:text-blue-400 transition-colors duration-300">
                (+91) 9746 677 711
              </div>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-400">Tel: (+91) 470 2620009</li>
                <li className="text-gray-400">Fax: (+91) 470 2620009</li>
                <li className="text-gray-400 mt-4">
                  <div className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 mr-3 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-semibold text-gray-400">
                      Address:
                    </span>
                  </div>
                  <div className="ml-9 text-gray-400">
                    EDUROYALE Overseas Education Consultants,
                    <br />
                    Building No: XI/1477, Krishna Towers,
                    <br />
                    Near Private Bus stand, Attingal,
                    <br />
                    Trivandrum, Kerala - 695101
                  </div>
                </li>
                <li className="flex items-center text-gray-400 mt-4">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email: contact@eduroyale.in</span>
                </li>
              </ul>
            </div>
            {/* Social Media Links */}
            <div className="flex justify-end space-x-4">
              <a
                href="#"
                className="group bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a
                href="#"
                className="group bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="group bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 text-center text-gray-400 backdrop-blur-sm">
          <p className="hover:text-blue-400 transition-colors duration-300">
            &copy; {new Date().getFullYear()} EDUROYALE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
