import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const About = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll hooks for different sections
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform values for different parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  useEffect(() => {
    const handleClick = () => {
      if (videoRef.current) {
        videoRef.current.classList.add("poster-active");
        const iframe = videoRef.current.querySelector("iframe");
        if (iframe) {
          const currentSrc = iframe.src;
          iframe.src = currentSrc + "?autoplay=1";
        }
      }
    };

    const poster = videoRef.current;
    poster?.addEventListener("click", handleClick);

    return () => {
      poster?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-b from-[#0A1128] via-[#001F54] to-[#034078] min-h-screen text-white font-moderustic relative overflow-hidden"
    >
      {/* WhatsApp Button */}
      <FloatingWhatsApp 
        phoneNumber="+919876543210"
        accountName="EDUROYALE Support"
        allowEsc
        allowClickAway
        notification
        notificationSound
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hello! 👋 How can we help you today?"
        placeholder="Type a message.."
        avatar="/logo.png"
      />
      
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#48CAE4]/20 to-transparent -top-48 -right-48 blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#90E0EF]/20 to-transparent -bottom-48 -left-48 blur-3xl"
        ></motion.div>
      </motion.div>

      {/* Parallax Grid Pattern */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
          className="w-full h-full"
        ></div>
      </motion.div>

      <main className="px-4 py-16 md:py-24 max-w-[70rem] mx-auto relative">
        {/* Hero Section with Parallax */}
        <motion.div
          style={{ y: textY }}
          className="heading flex flex-col md:flex-row justify-between gap-8 mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-suse font-semibold leading-tight tracking-wide"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF] animate-gradient"
            >
              Global Education
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block bg-clip-text text-transparent bg-gradient-to-r from-[#90E0EF] via-[#DDF0FF] to-[#FEFCFB] animate-gradient-reverse"
            >
              &amp; Consultancy
            </motion.span>
          </motion.h1>
          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="max-w-sm mt-6 md:mt-12 flex flex-col gap-4"
          >
            <p className="text-[#CAF0F8] leading-relaxed">
              EDUROYALE commits to making international education and migration
              a hassle-free journey. Our expertise spans across prestigious
              institutions in USA, UK, Canada, and beyond.
            </p>
            <p className="text-sm text-[#90E0EF] flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#48CAE4] animate-ping"></span>
              Since 2010
            </p>
          </motion.aside>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-4 h-96 relative border border-white/10 hover:border-[#48CAE4]/30 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#48CAE4]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <div className="card-inner relative w-full h-full">
              <div className="box relative w-full h-full rounded-2xl overflow-hidden">
                <div className="imgBox absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop"
                    alt="Success Stories"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="more absolute -top-1.5 right-0 bg-white/10 backdrop-blur-md p-2.5 pl-4 rounded-bl-2xl border border-white/20">
                  <ul className="flex items-center">
                    {[
                      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1529470839332-78ad660a6a82?q=80&w=1974&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1573497019940-6d2451b23c3e?q=80&w=1974&auto=format&fit=crop",
                    ].map((src, index) => (
                      <li
                        key={index}
                        className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/40 -ml-2.5 first:ml-0 relative hover:-translate-y-2.5 transition-transform duration-200 hover:border-[#48CAE4]/60"
                      >
                        <img
                          src={src}
                          alt={`Student ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {index === 3 && (
                          <span className="absolute inset-0 flex items-center justify-center text-xs text-white bg-[#48CAE4]/40 backdrop-blur-sm">
                            50+
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tag absolute -bottom-1.5 left-0 bg-white/10 backdrop-blur-md p-2.5 pr-4 rounded-tr-2xl border border-white/20">
                  <a
                    href="#"
                    className="text-sm text-white border-2 border-[#48CAE4]/30 rounded-full px-3 py-1 hover:bg-[#48CAE4] hover:text-white hover:border-[#48CAE4] transition-all duration-200"
                  >
                    #Success Stories
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-4 h-80 self-end border border-white/10 hover:border-[#48CAE4]/30 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#48CAE4]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <div className="card-inner relative w-full h-full">
              <div className="box relative w-full h-full rounded-2xl overflow-hidden">
                <div
                  ref={videoRef}
                  className="videoBox poster relative w-full h-full"
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/5D8TBicNIb8"
                    title="EDUROYALE Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="tag absolute -bottom-1.5 left-0 bg-white/10 backdrop-blur-md p-2.5 pr-4 rounded-tr-2xl border border-white/20">
                  <a
                    href="#"
                    className="text-sm text-white border-2 border-[#48CAE4]/30 rounded-full px-3 py-1 hover:bg-[#48CAE4] hover:text-white hover:border-[#48CAE4] transition-all duration-200"
                  >
                    #Campus Life
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Services Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-4 h-96 relative border border-white/10 hover:border-[#48CAE4]/30 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#48CAE4]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <p className="absolute -top-10 right-0 ">
              <a
                href="#services"
                className="text-sm text-[#90E0EF] hover:text-white hover:font-semibold transition-all"
              >
                More about services
              </a>
            </p>
            <div className="card-inner relative w-full h-full">
              <div className="box relative w-full h-full rounded-2xl overflow-hidden">
                <div className="imgBox absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop"
                    alt="Our Services"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="more absolute -top-1.5 right-0 bg-white/10 backdrop-blur-md p-2.5 rounded-bl-2xl border border-white/20">
                  <a
                    href="#"
                    className="w-10 h-10 border-2 border-[#48CAE4]/30 rounded-full flex items-center justify-center hover:bg-[#48CAE4] hover:text-white hover:border-[#48CAE4] transition-all duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
                <div className="tag absolute -bottom-1.5 left-0 bg-white/10 backdrop-blur-md p-2.5 pr-4 rounded-tr-2xl border border-white/20">
                  <a
                    href="#"
                    className="text-sm text-white border-2 border-[#48CAE4]/30 rounded-full px-3 py-1 hover:bg-[#48CAE4] hover:text-white hover:border-[#48CAE4] transition-all duration-200"
                  >
                    #Services
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Services Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]"
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[#CAF0F8] text-center max-w-2xl mx-auto mb-12"
          >
            Comprehensive education consulting services tailored to your
            academic journey
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "University Admissions",
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" />
                  </svg>
                ),
                description:
                  "Expert guidance for applications to top universities worldwide. We help you choose the right program and prepare winning applications.",
                features: [
                  "Program Selection",
                  "Application Strategy",
                  "SOP Writing",
                  "Document Review",
                ],
                color: "from-[#48CAE4]",
              },
              {
                title: "Visa Assistance",
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V6H20V18ZM6 10H8V12H6V10ZM6 14H14V16H6V14ZM16 14H18V16H16V14ZM10 10H18V12H10V10Z" />
                  </svg>
                ),
                description:
                  "Complete visa application support with high success rate. We handle documentation and prepare you for interviews.",
                features: [
                  "Document Preparation",
                  "Interview Coaching",
                  "Application Filing",
                  "Status Tracking",
                ],
                color: "from-[#90E0EF]",
              },
              {
                title: "Test Preparation",
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.5 4.5C15.8 4.5 14.4 5.9 14.4 7.6C14.4 9.3 15.8 10.7 17.5 10.7C19.2 10.7 20.6 9.3 20.6 7.6C20.6 5.9 19.2 4.5 17.5 4.5ZM17.5 9.5C16.5 9.5 15.6 8.6 15.6 7.6C15.6 6.6 16.5 5.7 17.5 5.7C18.5 5.7 19.4 6.6 19.4 7.6C19.4 8.6 18.5 9.5 17.5 9.5ZM11.5 4.5C9.8 4.5 8.4 5.9 8.4 7.6C8.4 9.3 9.8 10.7 11.5 10.7C13.2 10.7 14.6 9.3 14.6 7.6C14.6 5.9 13.2 4.5 11.5 4.5ZM11.5 9.5C10.5 9.5 9.6 8.6 9.6 7.6C9.6 6.6 10.5 5.7 11.5 5.7C12.5 5.7 13.4 6.6 13.4 7.6C13.4 8.6 12.5 9.5 11.5 9.5ZM5.5 4.5C3.8 4.5 2.4 5.9 2.4 7.6C2.4 9.3 3.8 10.7 5.5 10.7C7.2 10.7 8.6 9.3 8.6 7.6C8.6 5.9 7.2 4.5 5.5 4.5ZM5.5 9.5C4.5 9.5 3.6 8.6 3.6 7.6C3.6 6.6 4.5 5.7 5.5 5.7C6.5 5.7 7.4 6.6 7.4 7.6C7.4 8.6 6.5 9.5 5.5 9.5Z" />
                  </svg>
                ),
                description:
                  "Comprehensive preparation for IELTS, TOEFL, GRE, GMAT, and other standardized tests.",
                features: [
                  "Mock Tests",
                  "Study Materials",
                  "Expert Coaching",
                  "Score Analysis",
                ],
                color: "from-[#00B4D8]",
              },
              {
                title: "Scholarship Guidance",
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 7V9H2V20H1V22H23V20H22V9H23V7L12 2ZM20 20H4V9H20V20ZM13 10H11V12H9V14H11V16H13V14H15V12H13V10Z" />
                  </svg>
                ),
                description:
                  "Identify and apply for scholarships that match your profile. We help maximize your funding opportunities.",
                features: [
                  "Scholarship Search",
                  "Application Support",
                  "Essay Writing",
                  "Interview Prep",
                ],
                color: "from-[#0096C7]",
              },
              {
                title: "Career Counseling",
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" />
                  </svg>
                ),
                description:
                  "Professional guidance to align your education with career goals. Expert advice on course selection and career planning.",
                features: [
                  "Career Assessment",
                  "Course Planning",
                  "Industry Insights",
                  "Job Market Analysis",
                ],
                color: "from-[#0077B6]",
              },
              {
                title: "Post-Landing Support",
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" />
                  </svg>
                ),
                description:
                  "Comprehensive support after arrival including accommodation, banking, and local orientation.",
                features: [
                  "Accommodation",
                  "Local Setup",
                  "Banking Support",
                  "Community Connect",
                ],
                color: "from-[#023E8A]",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 group hover:bg-white/15 border border-white/10 hover:border-[#48CAE4]/30 transition-all duration-300"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color}/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-[#90E0EF] group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold mb-3 text-[#CAF0F8] group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#90E0EF]/80 mb-6 group-hover:text-[#CAF0F8] transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center text-sm text-[#CAF0F8]/70 group-hover:text-[#CAF0F8] transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#48CAE4] mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <a
                    href={`#${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center mt-6 text-[#48CAE4] hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 border border-white/10 hover:border-[#48CAE4]/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#48CAE4]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 text-[#90E0EF] transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-xl font-semibold mb-4 text-[#CAF0F8] group-hover:text-white transition-colors duration-300"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                  className="text-[#90E0EF]/80 group-hover:text-[#CAF0F8] transition-colors duration-300"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]"
          >
            Our Global Impact
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Countries" },
              { value: "50+", label: "University Partners" },
              { value: "98%", label: "Visa Success Rate" },
              { value: "24/7", label: "Student Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 text-center group hover:bg-white/15 border border-white/10 hover:border-[#48CAE4]/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#90E0EF] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[#CAF0F8]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]"
          >
            Student Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                university: "University of Toronto",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
                quote:
                  "EDUROYALE made my dream of studying in Canada a reality. Their guidance throughout the process was invaluable.",
              },
              {
                name: "Michael Chen",
                university: "University of Melbourne",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
                quote:
                  "The personalized attention and expert advice helped me secure a scholarship at my dream university.",
              },
              {
                name: "Priya Patel",
                university: "University of Manchester",
                image:
                  "https://images.unsplash.com/photo-1534528741775-6d2451b23c3e?q=80&w=1974&auto=format&fit=crop",
                quote:
                  "From IELTS preparation to visa assistance, EDUROYALE supported me at every step of my journey.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 group hover:bg-white/15 border border-white/10 hover:border-[#48CAE4]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#48CAE4]/30 group-hover:border-[#48CAE4] transition-all duration-300"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#CAF0F8]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-[#90E0EF]">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
                <p className="text-[#CAF0F8]/90 italic">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]"
          >
            Meet Our Expert Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. James Wilson",
                role: "Education Director",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop",
                expertise: "15+ years in International Education",
              },
              {
                name: "Emma Thompson",
                role: "Career Counselor",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1974&auto=format&fit=crop",
                expertise: "Career Development Expert",
              },
              {
                name: "David Kumar",
                role: "Visa Specialist",
                image:
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
                expertise: "Immigration Consultant",
              },
              {
                name: "Lisa Chen",
                role: "Student Mentor",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop",
                expertise: "Student Success Coach",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 text-center group hover:bg-white/15 border border-white/10 hover:border-[#48CAE4]/30 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[#48CAE4]/30 group-hover:border-[#48CAE4] transition-all duration-300"
                />
                <h3 className="text-lg font-semibold mb-1 text-[#CAF0F8]">
                  {member.name}
                </h3>
                <p className="text-[#90E0EF] font-medium mb-2">{member.role}</p>
                <p className="text-sm text-[#CAF0F8]/80">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#48CAE4]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]"
              >
                Start Your Global Education Journey
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-[#CAF0F8] max-w-2xl mx-auto mb-8"
              >
                Take the first step towards your international education dreams.
                Schedule a free consultation with our experts today.
              </motion.p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-block bg-gradient-to-r from-[#48CAE4] to-[#90E0EF] text-white font-semibold px-8 py-3 rounded-full transition-transform duration-300"
              >
                Book Free Consultation
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Moderustic&family=SUSE:wght@600&display=swap");

        /* WhatsApp Button Custom Styles */
        .floating-whatsapp {
          z-index: 999 !important;
        }
        
        .floating-whatsapp .floating-whatsapp-button {
          background-color: #25D366 !important;
          transform: scale(0.9);
          transition: transform 0.3s ease;
        }
        
        .floating-whatsapp .floating-whatsapp-button:hover {
          transform: scale(1);
          background-color: #22c55e !important;
        }
        
        .floating-whatsapp-popup {
          border-radius: 15px !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(10px) !important;
        }
        
        .floating-whatsapp-popup .floating-whatsapp-message {
          background: rgba(255, 255, 255, 0.05) !important;
          color: #CAF0F8 !important;
        }
        
        .floating-whatsapp-popup .floating-whatsapp-input {
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          background: rgba(255, 255, 255, 0.05) !important;
          color: #CAF0F8 !important;
        }

        .floating-whatsapp-popup .floating-whatsapp-send {
          background-color: #25D366 !important;
          color: white !important;
        }

        .floating-whatsapp-popup .floating-whatsapp-send:hover {
          background-color: #22c55e !important;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }

        .animate-gradient-reverse {
          background-size: 200% auto;
          animation: gradient 4s linear infinite reverse;
        }

        .poster {
          position: relative;
          display: inline-flex;
        }
        .poster:after {
          content: "";
          position: absolute;
          inset: 0;
          background: url("https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1974&auto=format&fit=crop");
          background-size: cover;
          transition: 1s ease;
          opacity: 0.8;
          cursor: pointer;
        }
        .poster-active:after {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

const features = [
  {
    title: "Expert Counseling",
    description:
      "Years of expertise in counseling and identifying customer needs to provide exactly what they wish for their academic journey.",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Course Selection",
    description:
      "Personalized guidance in selecting the perfect course that aligns with your career goals and aspirations.",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Country Selection",
    description:
      "Expert advice on choosing the right country based on your preferences, budget, and career objectives.",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Free IELTS/PTE Training",
    description:
      "Comprehensive training programs to help you excel in language proficiency tests required for overseas education.",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Bank Loan Assistance",
    description:
      "Support in securing financial assistance through bank loans to fund your international education.",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
      </svg>
    ),
  },
  {
    title: "Post-visa Assistance",
    description:
      "Continued support even after visa approval, helping you prepare for your journey abroad.",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default About;
