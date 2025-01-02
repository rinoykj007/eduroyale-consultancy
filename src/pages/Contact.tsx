import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import WhatsAppButton from "../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../config/contact";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      details: "+91 906 124 3772",
      link: "tel:+919061243772",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      details: "info@eduroyale.com",
      link: "mailto:info@eduroyale.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      details: "Calicut, Kerala, India",
      link: "https://maps.google.com/?q=Calicut,Kerala,India",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0A1128] via-[#001F54] to-[#034078] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Contact Us
          </h1>
          <p className="text-xl text-[#CAF0F8] max-w-3xl mx-auto">
            Get in touch with us for any queries about our services
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="text-[#90E0EF] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.details}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-[#90E0EF] focus:bg-white/20 focus:ring-0 text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-[#90E0EF] focus:bg-white/20 focus:ring-0 text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-[#90E0EF] focus:bg-white/20 focus:ring-0 text-white"
                placeholder="Your message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0077B6] hover:bg-[#0096C7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#90E0EF] transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <WhatsAppButton 
        phoneNumber={WHATSAPP_NUMBER} 
        message="Hi, I'd like to get in touch with you!"
      />
    </div>
  );
};

export default Contact;
