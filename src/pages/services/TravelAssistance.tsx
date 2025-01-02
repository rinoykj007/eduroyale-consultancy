import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../../config/contact";

const TravelAssistance = () => {
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
            Travel Assistance
          </h1>
          <p className="text-xl text-[#CAF0F8] max-w-3xl mx-auto">
            Comprehensive travel support services for a smooth journey to your
            study destination.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Flight Booking",
              description:
                "Best deals on student flights with flexible options",
              icon: "✈️",
            },
            {
              title: "Travel Insurance",
              description: "Comprehensive travel and health insurance coverage",
              icon: "🛡️",
            },
            {
              title: "Airport Assistance",
              description: "Support at departure and arrival airports",
              icon: "🛃",
            },
            {
              title: "Baggage Planning",
              description: "Guidance on packing and baggage requirements",
              icon: "🧳",
            },
            {
              title: "Transit Support",
              description: "Assistance during layovers and connections",
              icon: "🚉",
            },
            {
              title: "Emergency Support",
              description: "24/7 emergency assistance during travel",
              icon: "🆘",
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

        {/* Travel Checklist */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Travel Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Before Departure",
                items: [
                  "Confirm flight tickets",
                  "Check visa validity",
                  "Arrange travel insurance",
                  "Pack essential documents",
                  "Currency exchange",
                ],
              },
              {
                title: "During Travel",
                items: [
                  "Keep documents handy",
                  "Track flight status",
                  "Stay connected",
                  "Follow baggage rules",
                  "Keep emergency contacts",
                ],
              },
              {
                title: "Upon Arrival",
                items: [
                  "Complete immigration",
                  "Collect baggage",
                  "Meet assistance team",
                  "Local transportation",
                  "Check-in accommodation",
                ],
              },
            ].map((checklist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#CAF0F8]">
                  {checklist.title}
                </h3>
                <ul className="space-y-2">
                  {checklist.items.map((item, idx) => (
                    <li key={idx} className="text-[#90E0EF] flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#48CAE4] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Travel Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Essential Travel Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Documentation",
                tips: [
                  "Keep multiple copies of documents",
                  "Store digital copies in cloud",
                  "Carry university acceptance letter",
                  "Have emergency contacts list",
                ],
              },
              {
                title: "Packing",
                tips: [
                  "Check baggage weight limits",
                  "Pack weather-appropriate clothing",
                  "Carry essential medications",
                  "Include power adapters",
                ],
              },
              {
                title: "During Flight",
                tips: [
                  "Stay hydrated",
                  "Move regularly",
                  "Keep valuables safe",
                  "Set watch to destination time",
                ],
              },
              {
                title: "Arrival",
                tips: [
                  "Keep arrival form ready",
                  "Know local transport options",
                  "Have local currency",
                  "Save emergency numbers",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#CAF0F8]">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, idx) => (
                    <li key={idx} className="text-[#90E0EF] flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#48CAE4] rounded-full mr-2"></span>
                      {tip}
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
              Ready to Plan Your Journey?
            </h2>
            <p className="text-[#CAF0F8] mb-8 max-w-2xl mx-auto">
              Let us help you plan your travel and ensure a smooth journey to
              your study destination.
            </p>
            <button className="bg-[#48CAE4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#90E0EF] transition-colors duration-300">
              Get Travel Support
            </button>
          </div>
        </motion.div>
      </div>
      <WhatsAppButton 
        phoneNumber={WHATSAPP_NUMBER} 
        message="Hi, I need information about travel assistance services!"
      />
    </div>
  );
};

export default TravelAssistance;
