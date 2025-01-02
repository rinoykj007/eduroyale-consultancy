import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../../config/contact";

const PostVisaAssistance = () => {
  return (
    <div className="bg-gradient-to-b from-[#0A1128] via-[#001F54] to-[#034078] min-h-screen text-white font-moderustic">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Post-Visa Assistance
          </h1>
          <p className="text-xl text-[#CAF0F8] max-w-3xl mx-auto">
            Comprehensive support services to help you settle into your new life
            abroad after visa approval.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Accommodation Support",
              description:
                "Help finding and securing suitable student accommodation",
              icon: "🏠",
            },
            {
              title: "Airport Pickup",
              description:
                "Arrangement of airport pickup and initial settlement",
              icon: "✈️",
            },
            {
              title: "Bank Account Setup",
              description: "Assistance in opening local bank accounts",
              icon: "🏦",
            },
            {
              title: "Local Registration",
              description:
                "Help with necessary local registrations and documentation",
              icon: "📝",
            },
            {
              title: "SIM Card & Utilities",
              description:
                "Support in getting local phone connection and utilities",
              icon: "📱",
            },
            {
              title: "Local Orientation",
              description:
                "Guidance about local transportation and essential locations",
              icon: "🗺️",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#CAF0F8]">
                {service.title}
              </h3>
              <p className="text-[#90E0EF]">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Pre-Departure Checklist */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Pre-Departure Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#CAF0F8]">
                Essential Documents
              </h3>
              <ul className="space-y-2">
                {[
                  "Valid Passport and Visa",
                  "University Acceptance Letter",
                  "Accommodation Details",
                  "Travel Insurance Documents",
                  "Medical Records and Certificates",
                  "Financial Documents",
                ].map((item, index) => (
                  <li key={index} className="text-[#90E0EF] flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#48CAE4] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#CAF0F8]">
                Personal Items
              </h3>
              <ul className="space-y-2">
                {[
                  "Weather-appropriate Clothing",
                  "Basic Medications",
                  "Electronic Adapters",
                  "Local Currency",
                  "Important Contact Numbers",
                  "Personal Care Items",
                ].map((item, index) => (
                  <li key={index} className="text-[#90E0EF] flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#48CAE4] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Settlement Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Settlement Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                day: "Day 1",
                title: "Arrival",
                tasks: ["Airport pickup", "Check-in to accommodation"],
              },
              {
                day: "Week 1",
                title: "Basic Setup",
                tasks: [
                  "Bank account",
                  "Phone connection",
                  "Local registration",
                ],
              },
              {
                day: "Week 2",
                title: "University",
                tasks: [
                  "Campus orientation",
                  "Course registration",
                  "Student ID",
                ],
              },
              {
                day: "Month 1",
                title: "Settlement",
                tasks: [
                  "Local area familiarity",
                  "Student community",
                  "Regular routine",
                ],
              },
            ].map((timeline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
              >
                <div className="text-2xl font-bold text-[#48CAE4] mb-2">
                  {timeline.day}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#CAF0F8]">
                  {timeline.title}
                </h3>
                <ul className="space-y-2">
                  {timeline.tasks.map((task, idx) => (
                    <li key={idx} className="text-[#90E0EF] flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#48CAE4] rounded-full mr-2"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
              Planning Your Journey?
            </h2>
            <p className="text-[#CAF0F8] mb-8 max-w-2xl mx-auto">
              Let us help you prepare for your new life abroad with our
              comprehensive post-visa support services.
            </p>
            <button className="bg-[#48CAE4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#90E0EF] transition-colors duration-300">
              Get Settlement Support
            </button>
          </div>
        </motion.div>
      </div>
      <WhatsAppButton 
        phoneNumber={WHATSAPP_NUMBER} 
        message="Hi, I need information about post-visa assistance services!"
      />
    </div>
  );
};

export default PostVisaAssistance;
