import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../../config/contact";

const CountrySelection = () => {
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
            Country Selection Guidance
          </h1>
          <p className="text-xl text-[#CAF0F8] max-w-3xl mx-auto">
            Choose the perfect destination for your international education with
            our expert country selection guidance.
          </p>
        </motion.div>

        {/* Popular Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              country: "United States",
              flag: "🇺🇸",
              features: [
                "World-class universities",
                "Diverse culture",
                "Research opportunities",
                "OPT programs",
              ],
              universities: ["Harvard", "MIT", "Stanford"],
            },
            {
              country: "United Kingdom",
              flag: "🇬🇧",
              features: [
                "Rich academic heritage",
                "Quality education",
                "Work opportunities",
                "Cultural exposure",
              ],
              universities: ["Oxford", "Cambridge", "Imperial"],
            },
            {
              country: "Canada",
              flag: "🇨🇦",
              features: [
                "Immigration friendly",
                "Quality of life",
                "Post-study work",
                "Affordable education",
              ],
              universities: ["Toronto", "UBC", "McGill"],
            },
            {
              country: "Australia",
              flag: "🇦🇺",
              features: [
                "High living standards",
                "Work while studying",
                "PR opportunities",
                "Global recognition",
              ],
              universities: ["Melbourne", "Sydney", "ANU"],
            },
            {
              country: "New Zealand",
              flag: "🇳🇿",
              features: [
                "Safe environment",
                "Work rights",
                "Quality education",
                "Natural beauty",
              ],
              universities: ["Auckland", "Otago", "Victoria"],
            },
            {
              country: "Germany",
              flag: "🇩🇪",
              features: [
                "Low/No tuition",
                "Innovation hub",
                "Work opportunities",
                "Rich culture",
              ],
              universities: ["TUM", "LMU Munich", "RWTH Aachen"],
            },
          ].map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{country.flag}</div>
              <h3 className="text-xl font-semibold mb-4 text-[#CAF0F8]">
                {country.country}
              </h3>
              <ul className="space-y-2 mb-4">
                {country.features.map((feature, idx) => (
                  <li key={idx} className="text-[#90E0EF] flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#48CAE4] rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-[#CAF0F8] font-semibold mb-2">
                  Top Universities:
                </p>
                <p className="text-[#90E0EF]">
                  {country.universities.join(", ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Country Comparison Factors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Education Cost",
                description:
                  "Compare tuition fees and living expenses across countries",
                icon: "💰",
              },
              {
                title: "Living Standards",
                description: "Evaluate quality of life and safety standards",
                icon: "🏠",
              },
              {
                title: "Work Rights",
                description:
                  "Understand work opportunities during and after study",
                icon: "💼",
              },
              {
                title: "Visa Process",
                description:
                  "Learn about visa requirements and processing times",
                icon: "✈️",
              },
            ].map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{factor.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#CAF0F8]">
                  {factor.title}
                </h3>
                <p className="text-[#90E0EF]">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Study Requirements Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Study Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Academic Requirements",
                items: [
                  "High School/Bachelor's Degree",
                  "Academic Transcripts",
                  "Standardized Test Scores",
                  "English Proficiency Tests",
                ],
              },
              {
                title: "Financial Requirements",
                items: [
                  "Tuition Fee Coverage",
                  "Living Expenses Proof",
                  "Bank Statements",
                  "Scholarship Options",
                ],
              },
              {
                title: "Documentation",
                items: [
                  "Valid Passport",
                  "Statement of Purpose",
                  "Letters of Recommendation",
                  "CV/Resume",
                ],
              },
              {
                title: "Additional Requirements",
                items: [
                  "Health Insurance",
                  "Medical Examinations",
                  "Portfolio (if applicable)",
                  "Work Experience (if required)",
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
                  {section.items.map((item, idx) => (
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

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Selection Process Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Understand your preferences and requirements",
              },
              {
                step: "2",
                title: "Country Analysis",
                description: "Compare suitable countries based on your profile",
              },
              {
                step: "3",
                title: "University Selection",
                description: "Shortlist universities and programs",
              },
              {
                step: "4",
                title: "Final Decision",
                description: "Choose the best country and university",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#48CAE4] mb-4">
                    Step {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#CAF0F8]">
                    {process.title}
                  </h3>
                  <p className="text-[#90E0EF]">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg
                      className="w-8 h-8 text-[#48CAE4]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
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
              Ready to Choose Your Study Destination?
            </h2>
            <p className="text-[#CAF0F8] mb-8 max-w-2xl mx-auto">
              Get personalized country recommendations based on your preferences
              and requirements.
            </p>
            <button className="bg-[#48CAE4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#90E0EF] transition-colors duration-300">
              Compare Countries
            </button>
          </div>
        </motion.div>
      </div>
      <WhatsAppButton 
        phoneNumber={WHATSAPP_NUMBER} 
        message="Hi, I need help with country selection for my studies!"
      />
    </div>
  );
};

export default CountrySelection;
