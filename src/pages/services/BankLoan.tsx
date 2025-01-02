import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../../config/contact";

const BankLoan = () => {
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
            Education Loan Assistance
          </h1>
          <p className="text-xl text-[#CAF0F8] max-w-3xl mx-auto">
            Get expert guidance on education loans and make your international
            education dreams a reality.
          </p>
        </motion.div>

        {/* Loan Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Competitive Interest Rates",
              description:
                "Access to loans with favorable interest rates from partner banks",
              icon: "📊",
            },
            {
              title: "Quick Processing",
              description:
                "Fast-track loan application processing with minimal documentation",
              icon: "⚡",
            },
            {
              title: "Flexible Repayment",
              description:
                "Customizable repayment options to suit your financial situation",
              icon: "💳",
            },
            {
              title: "100% Funding",
              description:
                "Options for complete coverage of tuition and living expenses",
              icon: "💰",
            },
            {
              title: "No Collateral Options",
              description:
                "Select loans available without collateral requirement",
              icon: "🔓",
            },
            {
              title: "Tax Benefits",
              description:
                "Information on tax deductions on education loan interest",
              icon: "📑",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#CAF0F8]">
                {feature.title}
              </h3>
              <p className="text-[#90E0EF]">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Loan Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Loan Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Document Collection",
                description: "Gather necessary documents for loan application",
              },
              {
                step: "2",
                title: "Bank Selection",
                description: "Choose the best bank based on your requirements",
              },
              {
                step: "3",
                title: "Application Filing",
                description: "Submit application with complete documentation",
              },
              {
                step: "4",
                title: "Loan Disbursement",
                description: "Quick processing and fund disbursement",
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

        {/* Required Documents */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Required Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#CAF0F8]">
                Academic Documents
              </h3>
              <ul className="space-y-2">
                {[
                  "Mark sheets of X, XII, and Graduation",
                  "Entrance test scores (if applicable)",
                  "Admission letter from university",
                  "Course details and duration",
                ].map((doc, index) => (
                  <li key={index} className="text-[#90E0EF] flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#48CAE4] rounded-full mr-2"></span>
                    {doc}
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
                Financial Documents
              </h3>
              <ul className="space-y-2">
                {[
                  "Income proof of co-applicant",
                  "Bank statements (6 months)",
                  "Income tax returns",
                  "Collateral documents (if applicable)",
                ].map((doc, index) => (
                  <li key={index} className="text-[#90E0EF] flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#48CAE4] rounded-full mr-2"></span>
                    {doc}
                  </li>
                ))}
              </ul>
            </motion.div>
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
              Ready to Apply for an Education Loan?
            </h2>
            <p className="text-[#CAF0F8] mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the loan application process and
              help you secure the best education loan.
            </p>
            <button className="bg-[#48CAE4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#90E0EF] transition-colors duration-300">
              Get Loan Assistance
            </button>
          </div>
        </motion.div>
      </div>
      <WhatsAppButton 
        phoneNumber={WHATSAPP_NUMBER} 
        message="Hi, I'm interested in education loan assistance!"
      />
    </div>
  );
};

export default BankLoan;
