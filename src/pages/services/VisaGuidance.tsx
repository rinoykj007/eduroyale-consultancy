import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../../config/contact";

const VisaGuidance = () => {
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
            Visa Application Guidance
          </h1>
          <p className="text-xl text-[#CAF0F8] max-w-3xl mx-auto">
            Expert assistance for successful student visa applications with our
            high success rate approach.
          </p>
        </motion.div>

        {/* Success Rate Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Visa Success Rate", value: "98%" },
            { label: "Countries Covered", value: "15+" },
            { label: "Happy Students", value: "1000+" },
            { label: "Years Experience", value: "10+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-[#48CAE4] mb-2">
                {stat.value}
              </div>
              <div className="text-[#CAF0F8]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Document Review",
              description:
                "Thorough review and verification of all required documents",
              icon: "📋",
            },
            {
              title: "Application Filing",
              description: "Complete assistance in visa application submission",
              icon: "✍️",
            },
            {
              title: "Interview Preparation",
              description: "Mock interviews and preparation guidance",
              icon: "🎯",
            },
            {
              title: "Financial Documentation",
              description: "Help with financial requirements and documentation",
              icon: "💰",
            },
            {
              title: "Timeline Management",
              description: "Efficient handling of visa processing timelines",
              icon: "⏱️",
            },
            {
              title: "Appeal Support",
              description: "Assistance in case of visa rejections or appeals",
              icon: "⚖️",
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

        {/* Visa Process Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Visa Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Documentation",
                description: "Collect and verify all required documents",
              },
              {
                step: "2",
                title: "Application",
                description:
                  "Submit visa application with proper documentation",
              },
              {
                step: "3",
                title: "Interview",
                description: "Prepare and attend visa interview",
              },
              {
                step: "4",
                title: "Approval",
                description: "Receive visa and pre-departure briefing",
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

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Common Visa Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What documents are required for a student visa?",
                answer:
                  "Requirements typically include acceptance letter, financial proof, passport, photographs, and academic documents.",
              },
              {
                question: "How long does visa processing take?",
                answer:
                  "Processing times vary by country, usually ranging from 2-8 weeks.",
              },
              {
                question: "What about financial requirements?",
                answer:
                  "Most countries require proof of sufficient funds to cover tuition and living expenses.",
              },
              {
                question: "How to prepare for visa interview?",
                answer:
                  "We provide comprehensive interview preparation including mock interviews and common questions.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#CAF0F8]">
                  {faq.question}
                </h3>
                <p className="text-[#90E0EF]">{faq.answer}</p>
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
              Ready to Start Your Visa Application?
            </h2>
            <p className="text-[#CAF0F8] mb-8 max-w-2xl mx-auto">
              Get expert guidance for your student visa application and increase
              your chances of approval.
            </p>
            <button className="bg-[#48CAE4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#90E0EF] transition-colors duration-300">
              Start Visa Process
            </button>
          </div>
        </motion.div>
      </div>
      <WhatsAppButton 
        phoneNumber={WHATSAPP_NUMBER} 
        message="Hi, I need assistance with visa application!"
      />
    </div>
  );
};

export default VisaGuidance;
