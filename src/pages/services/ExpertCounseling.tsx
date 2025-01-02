import React from 'react';
import { motion } from 'framer-motion';

const ExpertCounseling = () => {
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
            Expert Counseling Services
          </h1>
          <p className="text-xl text-[#CAF0F8] max-w-3xl mx-auto">
            Get personalized guidance from our experienced counselors to make informed decisions about your educational journey abroad.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Personalized Guidance",
              description: "One-on-one sessions tailored to your academic goals and career aspirations.",
              icon: "🎯"
            },
            {
              title: "Career Assessment",
              description: "Comprehensive evaluation of your skills, interests, and career objectives.",
              icon: "📊"
            },
            {
              title: "University Selection",
              description: "Expert advice on choosing the right universities based on your profile.",
              icon: "🎓"
            },
            {
              title: "Course Planning",
              description: "Strategic course selection aligned with your career goals.",
              icon: "📚"
            },
            {
              title: "Profile Evaluation",
              description: "Detailed assessment of your academic and professional background.",
              icon: "📋"
            },
            {
              title: "Future Planning",
              description: "Long-term career planning and growth opportunities.",
              icon: "🚀"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#CAF0F8]">{feature.title}</h3>
              <p className="text-[#90E0EF]">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Our Counseling Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Free consultation to understand your requirements and aspirations"
              },
              {
                step: "2",
                title: "Profile Analysis",
                description: "Detailed evaluation of your academic and professional background"
              },
              {
                step: "3",
                title: "Customized Plan",
                description: "Development of a personalized education and career roadmap"
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "Continuous guidance throughout your academic journey"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#48CAE4] mb-4">Step {process.step}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#CAF0F8]">{process.title}</h3>
                  <p className="text-[#90E0EF]">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="w-8 h-8 text-[#48CAE4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-[#CAF0F8] mb-8 max-w-2xl mx-auto">
              Book a free consultation with our expert counselors and take the first step towards your international education goals.
            </p>
            <button className="bg-[#48CAE4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#90E0EF] transition-colors duration-300">
              Book Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpertCounseling;
