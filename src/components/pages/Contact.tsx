import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles/contact.css";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
} from "react-icons/fa";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-animation">
      <div className="flex flex-col md:flex-row w-full max-w-6xl glass-effect rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out mb-8">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 p-8 bg-white bg-opacity-10">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <FaEnvelope className="mr-2" /> Contact Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative w-full">
                <FaUser className="absolute top-3 left-3 text-gray-400" />
                <input
                  {...register("firstName", { required: true })}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300 text-white placeholder-gray-300"
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="relative w-full">
                <FaUser className="absolute top-3 left-3 text-gray-400" />
                <input
                  {...register("lastName", { required: true })}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300 text-white placeholder-gray-300"
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300 text-white placeholder-gray-300"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-500">Please enter a valid email</span>
              )}
            </div>
            <div className="relative">
              <FaComment className="absolute top-3 left-3 text-gray-400" />
              <textarea
                {...register("message", { required: true })}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 resize-none h-32 transition-all duration-300 text-white placeholder-gray-300"
                placeholder="Your message..."
              />
              {errors.message && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-white bg-opacity-20 text-white py-2 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:bg-opacity-30 hover:scale-105 flex items-center justify-center"
            >
              <FaEnvelope className="mr-2" /> Send Message
            </button>
          </form>
        </div>

        {/* Get in Touch Section */}
        <div className="w-full md:w-1/2 bg-white bg-opacity-10 text-white p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <FaPhone className="mr-2" /> Get in Touch
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> KOLLAM
              </h3>
              <p className="mb-1">EDUROYALE Overseas Education Consultants</p>
              <p className="mb-1">
                Building No: MC VIII/1712/666A, Opp: University of Kerala
                Information Centre
              </p>
              <p className="mb-1">Near SN College, Kollam-691001</p>
              <p className="mb-1 flex items-center">
                <FaPhone className="mr-2" /> +91 474-2750005, +91 8086 606 605
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" /> contact@eduroyale.in
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> TRIVANDRUM
              </h3>
              <p className="mb-1">EDUROYALE Overseas Education Consultants</p>
              <p className="mb-1">
                Building No: XI/1477, Krishna Towers, Near Private Bus Stand
              </p>
              <p className="mb-1">Attingal, Trivandrum-695101</p>
              <p className="mb-1 flex items-center">
                <FaPhone className="mr-2" /> +91 470-2620009, +91 9746677711
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" /> contact@eduroyale.in
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FaClock className="mr-2" /> Business Hours
              </h3>
              <p>Monday - Friday: 9am to 5pm</p>
              <p>Saturday: 9am to 2pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full max-w-6xl glass-effect rounded-2xl shadow-2xl overflow-hidden">
        <h2 className="text-2xl font-bold text-white p-4 bg-white bg-opacity-10">
          Our Locations
        </h2>
        <div className="h-40">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.915973303807!2d76.60371131478518!3d8.886500093616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd3c7d3d6bbd%3A0xbdf0bf22d1e3d034!2sEDUROYALE%20Overseas%20Education%20Consultants!5e0!3m2!1sen!2sin!4v1682433562305!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
