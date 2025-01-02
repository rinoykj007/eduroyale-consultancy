import React from 'react';
import { motion } from 'framer-motion';

const CourseSelection = () => {
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
            Course Selection Guidance
          </h1>
          <p className="text-xl text-[#CAF0F8] max-w-3xl mx-auto">
            Find the perfect course that aligns with your career goals and academic interests with our expert guidance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Course Analysis",
              description: "In-depth analysis of various courses and their career prospects.",
              icon: "📊"
            },
            {
              title: "Industry Insights",
              description: "Latest trends and demands in different industries globally.",
              icon: "🌐"
            },
            {
              title: "Curriculum Review",
              description: "Detailed review of course curriculum and specializations.",
              icon: "📚"
            },
            {
              title: "Career Mapping",
              description: "Mapping courses to potential career paths and opportunities.",
              icon: "🗺️"
            },
            {
              title: "ROI Assessment",
              description: "Evaluation of course value and return on investment.",
              icon: "💰"
            },
            {
              title: "Future Prospects",
              description: "Analysis of future growth opportunities in chosen field.",
              icon: "📈"
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

        {/* Popular Courses Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Popular Course Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Engineering & Technology",
                courses: ["Computer Science", "Data Science", "AI & Machine Learning", "Cybersecurity"]
              },
              {
                title: "Business & Management",
                courses: ["MBA", "Finance", "Marketing", "International Business"]
              },
              {
                title: "Health Sciences",
                courses: ["Medicine", "Nursing", "Public Health", "Biotechnology"]
              },
              {
                title: "Arts & Design",
                courses: ["Digital Design", "Animation", "Fashion Design", "Interior Design"]
              },
              {
                title: "Social Sciences",
                courses: ["Psychology", "International Relations", "Media Studies", "Education"]
              },
              {
                title: "Natural Sciences",
                courses: ["Environmental Science", "Physics", "Chemistry", "Biology"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#CAF0F8]">{category.title}</h3>
                <ul className="space-y-2">
                  {category.courses.map((course, idx) => (
                    <li key={idx} className="text-[#90E0EF] flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#48CAE4] rounded-full mr-2"></span>
                      {course}
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
              Need Help Choosing the Right Course?
            </h2>
            <p className="text-[#CAF0F8] mb-8 max-w-2xl mx-auto">
              Get personalized course recommendations based on your interests, skills, and career goals.
            </p>
            <button className="bg-[#48CAE4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#90E0EF] transition-colors duration-300">
              Get Course Recommendations
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseSelection;
