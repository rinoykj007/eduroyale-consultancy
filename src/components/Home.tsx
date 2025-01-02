import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Services from "./Services";
import CardSelection from "./CardSelection";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCarousel from "./TestimonialCarousel";
import ImageCarousel from "./ImageCarousel";

const Home = () => {
  // Make sure this testimonials array is defined
  const testimonials = [
    {
      text: "EduAbroadConsult made my dream of studying abroad a reality. Their guidance was invaluable throughout the entire process.",
      name: "John Doe",
      university: "University of XYZ",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      text: "I couldn't have navigated the complex application process without EduAbroadConsult. They were there every step of the way.",
      name: "Jane Smith",
      university: "ABC University",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      text: "Thanks to EduAbroadConsult, I'm now studying at my dream university. Their expertise and support were crucial to my success.",
      name: "Mike Johnson",
      university: "Global Institute",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      text: "The personalized attention I received from EduAbroadConsult was amazing. They truly care about each student's journey.",
      name: "Emily Brown",
      university: "International College",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            background: [
              "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
              "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
              "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
              "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="relative z-10 h-full">
          <Carousel />
        </div>
      </section>

      <section className="py-4 w-full">
        <Services />
      </section>

      <section className="w-full">
        <CardSelection />
      </section>

      {/* Testimonials Section */}
      <section className="bg-white-200 py-16 pb-0 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
      <section className="bg-white-200 w-full pb-2">
        <ImageCarousel />
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8">
            Contact us today and take the first step towards your international
            education.
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
