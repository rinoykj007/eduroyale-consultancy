import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../../config/contact";

const FreeIeltsTraining = () => {
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
            Free IELTS Training
          </h1>
          <p className="text-xl text-[#CAF0F8] max-w-3xl mx-auto">
            Comprehensive IELTS preparation program to help you achieve your
            target score.
          </p>
        </motion.div>

        {/* IELTS Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Listening",
              description:
                "Master listening strategies for different question types",
              icon: "🎧",
            },
            {
              title: "Reading",
              description: "Develop speed reading and comprehension skills",
              icon: "📚",
            },
            {
              title: "Writing",
              description: "Learn to write effective essays and reports",
              icon: "✍️",
            },
            {
              title: "Speaking",
              description: "Build confidence in English conversation",
              icon: "🗣️",
            },
          ].map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{module.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#CAF0F8]">
                {module.title}
              </h3>
              <p className="text-[#90E0EF]">{module.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Training Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Expert Trainers",
              description:
                "Learn from experienced IELTS trainers with proven track record",
              icon: "👨‍🏫",
            },
            {
              title: "Practice Tests",
              description:
                "Regular mock tests with detailed feedback and analysis",
              icon: "📝",
            },
            {
              title: "Study Materials",
              description:
                "Comprehensive study materials and practice resources",
              icon: "📖",
            },
            {
              title: "Small Batches",
              description: "Personal attention in small group sessions",
              icon: "👥",
            },
            {
              title: "Flexible Schedule",
              description: "Choose from multiple batch timings",
              icon: "🕒",
            },
            {
              title: "Progress Tracking",
              description: "Regular assessment and progress monitoring",
              icon: "📊",
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

        {/* Study Plan */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Training Schedule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                week: "Week 1-2",
                focus: "Fundamentals",
                activities: [
                  "Basic strategies",
                  "Grammar review",
                  "Vocabulary building",
                ],
              },
              {
                week: "Week 3-4",
                focus: "Skills Development",
                activities: [
                  "Reading techniques",
                  "Listening practice",
                  "Writing structure",
                ],
              },
              {
                week: "Week 5-6",
                focus: "Advanced Practice",
                activities: [
                  "Mock tests",
                  "Speaking practice",
                  "Time management",
                ],
              },
              {
                week: "Week 7-8",
                focus: "Test Preparation",
                activities: [
                  "Full length tests",
                  "Error analysis",
                  "Final preparation",
                ],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#CAF0F8]">
                  {phase.week}
                </h3>
                <div className="text-[#48CAE4] font-medium mb-4">
                  {phase.focus}
                </div>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="text-[#90E0EF] flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#48CAE4] rounded-full mr-2"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                score: "8.5",
                quote:
                  "The structured approach and regular practice tests helped me achieve my target score.",
              },
              {
                name: "Michael Chen",
                score: "8.0",
                quote:
                  "Expert guidance and personalized feedback made a huge difference in my preparation.",
              },
              {
                name: "Priya Patel",
                score: "7.5",
                quote:
                  "The speaking practice sessions boosted my confidence significantly.",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
              >
                <div className="text-2xl font-bold text-[#48CAE4] mb-2">
                  Band {story.score}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#CAF0F8]">
                  {story.name}
                </h3>
                <p className="text-[#90E0EF] italic">"{story.quote}"</p>
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
              Start Your IELTS Preparation Today
            </h2>
            <p className="text-[#CAF0F8] mb-8 max-w-2xl mx-auto">
              Join our free IELTS training program and take the first step
              towards achieving your target score.
            </p>
            <button className="bg-[#48CAE4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#90E0EF] transition-colors duration-300">
              Enroll Now
            </button>
          </div>
        </motion.div>
      </div>
      <WhatsAppButton 
        phoneNumber={WHATSAPP_NUMBER} 
        message="Hi, I'm interested in free IELTS training!"
      />
    </div>
  );
};

export default FreeIeltsTraining;
