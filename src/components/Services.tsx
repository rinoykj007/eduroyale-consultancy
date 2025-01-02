import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaGraduationCap,
  FaPassport,
  FaPlane,
  FaLanguage,
  FaHandshake,
  FaHome,
} from "react-icons/fa";

const services = [
  {
    icon: FaGraduationCap,
    title: "Education Counseling",
    description: "Expert guidance for your academic journey abroad.",
  },
  {
    icon: FaPassport,
    title: "Visa Assistance",
    description: "Streamlined visa application process for hassle-free travel.",
  },
  {
    icon: FaPlane,
    title: "Travel Planning",
    description: "Comprehensive travel arrangements for your convenience.",
  },
  {
    icon: FaLanguage,
    title: "Language Support",
    description: "Language training to boost your confidence abroad.",
  },
  {
    icon: FaHandshake,
    title: "Career Guidance",
    description: "Professional advice for your international career prospects.",
  },
  {
    icon: FaHome,
    title: "Accommodation",
    description: "Assistance in finding suitable housing options abroad.",
  },
];

const AnimatedBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#f6f9fc", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#e9f2ff", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)" />
    <g>
      <motion.path
        d="M-100,20 C50,100 150,0 300,50 S450,100 600,50 S750,0 900,50 S1050,100 1200,50"
        fill="none"
        stroke="rgba(66, 153, 225, 0.6)" // Bright blue
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1, x: [-300, 0] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
      <motion.path
        d="M-100,80 C50,0 150,100 300,50 S450,0 600,50 S750,100 900,50 S1050,0 1200,50"
        fill="none"
        stroke="rgba(236, 201, 75, 0.5)" // Soft yellow
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1, x: [0, -300] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
      <motion.path
        d="M-100,50 Q50,100 200,50 T500,50 T800,50 T1100,50"
        fill="none"
        stroke="rgba(72, 187, 120, 0.4)" // Muted green
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1, y: [-50, 50] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </g>
  </svg>
);

const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-20% 0px -20% 0px",
  });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    >
      <motion.div
        className="text-4xl text-blue-500 mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <service.icon />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {service.title}
      </h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
