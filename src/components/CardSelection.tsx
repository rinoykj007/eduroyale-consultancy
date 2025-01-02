"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { Star, StarHalf } from "lucide-react";
import "./style/CardSelection.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";

export default function CardSelection() {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // @ts-ignore
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#040a22] relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-xy rounded-[3rem]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-[100%] mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-[100%] mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-[100%] mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div id="tsparticles" className="absolute inset-0 opacity-40" />

      {/* Main content */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 place-items-center gap-16 min-h-screen p-5 lg:p-16">
        <div className="content max-w-2xl text-center lg:text-left space-y-8">
          <div className="space-y-6">
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 font-['Comfortaa'] leading-tight">
              <span className="inline-flex flex-wrap items-center gap-2">
                EDUROYALE is{" "}
                <div className="word-cycle-container inline-block">
                  <span className="word-cycle inline-block w-[150px] sm:w-[180px] md:w-[220px] lg:w-[280px] h-[24px] sm:h-[26px] md:h-[28px] lg:h-[60px]">
                    {(() => {
                      const [wordIndex, setWordIndex] = useState(0);
                      const words = ["incredibly", "especially", "extremely"];

                      useEffect(() => {
                        const interval = setInterval(() => {
                          setWordIndex((prev) => (prev + 1) % words.length);
                        }, 2000);

                        return () => clearInterval(interval);
                      }, []);

                      return (
                        <span
                          className="cycle-word flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap font-bold"
                          style={{
                            background:
                              "linear-gradient(45deg, #60A5FA, #EC4899, #8B5CF6, #34D399)",
                            backgroundSize: "200% 200%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            opacity: 1,
                            transition: "all 0.5s ease-in-out",
                            animation: "gradient 8s ease infinite",
                          }}
                        >
                          {words[wordIndex]}
                        </span>
                      );
                    })()}
                  </span>
                </div>
                simple, welcome to EDUROYALE!
              </span>
            </h1>

            <p className="text-lg lg:text-xl font-light text-gray-300 leading-relaxed">
              Your dream of an exciting education and career abroad is not any
              more a dream. Join our hands, welcome and experience hassle free
              visa process and enjoy the joy of flying in less time.
              <span className="block mt-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                EDUROYALE's expertise in Visa Processes is more than an
                assurance, it's a guarantee!!!
              </span>
            </p>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <button className="group relative px-8 py-4 font-semibold text-white">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-500 rounded-[1rem] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-blue-600 border-2 border-white rounded-[1rem] group-hover:bg-purple-500"></span>
                <span className="relative">Explore Tours</span>
              </button>
              <button className="group relative overflow-hidden rounded-[1rem] bg-transparent border-2 border-white/30 backdrop-blur-sm">
                <span className="relative inline-flex items-center gap-2 px-8 py-4 text-white transition-all duration-300 group-hover:text-white">
                  Learn More
                  <svg
                    className="w-5 h-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-20 rounded-[1rem]"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Swiper container with enhanced styling */}
        <div className="w-full max-w-[400px] lg:max-w-[500px] relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] blur-2xl opacity-30 animate-pulse"></div>
          <Swiper
            ref={swiperRef}
            effect="cube"
            grabCursor={true}
            loop={true}
            speed={1000}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCube, Autoplay]}
            className="w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] lg:w-[400px] lg:h-[490px] rounded-[2rem]"
          >
            {[
              {
                img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/49db1b5f-09f6-4433-be57-51687585600c",
                title: "Ireland",
                description:
                  "Discover the fascinating beauty of this historic city by strolling through the rich cultural tapestry that makes Florence a timeless destination.",
                cost: "Connect as ",
                reviews: 138,
                stars: 4.5,
              },
              {
                img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2d165721-fe2e-4cf0-a63e-20bc5bc3f847",
                title: "Australia",
                description:
                  "Explore the city's majestic castles and fascinating history by joining our guided tour for an unforgettable journey through Scotland's capital.",
                cost: "Connect as ",
                reviews: 307,
                stars: 5,
              },
              {
                img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d311d1de-7382-4c03-b083-5f7e88458158",
                title: "USA",
                description:
                  "Experience the energy and excitement of New York City from Times Square's dazzling lights to the serene beauty of Central Park.",
                cost: "Connect as",
                reviews: 1152,
                stars: 4.5,
              },
              {
                img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/be223a30-52d1-4a0b-8d57-2e52f02e2245",
                title: "Canada",
                description:
                  "Embark on a magical journey through Tokyo by discovering the beauty of the city as cherry blossom trees paint the streets in hues of pink.",
                cost: "Connect as ",
                reviews: 619,
                stars: 4,
              },
              {
                img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/be223a30-52d1-4a0b-8d57-2e52f02e2245",
                title: "Uk",
                description:
                  "Embark on a magical journey through Tokyo by discovering the beauty of the city as cherry blossom trees paint the streets in hues of pink.",
                cost: "Connect as ",
                reviews: 619,
                stars: 4,
              },
            ].map((slide, index) => (
              <SwiperSlide
                key={index}
                className="relative rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden group"
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full rounded-[2rem] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 rounded-[2rem]"></div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full py-2 px-6 text-white text-sm font-semibold">
                  {slide.cost}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white rounded-b-[2rem]">
                  <h2 className="text-2xl font-bold mb-3 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    {slide.title}
                  </h2>
                  <p className="text-sm text-gray-200 mb-4 line-clamp-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    {slide.description}
                  </p>
                  <div className="flex items-center gap-4 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    <div className="flex gap-1">
                      {Array.from({ length: Math.floor(slide.stars) }).map(
                        (_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400" />
                        )
                      )}
                      {slide.stars % 1 !== 0 && (
                        <StarHalf className="w-5 h-5 text-yellow-400" />
                      )}
                    </div>
                    <span className="text-sm text-gray-300">
                      {slide.reviews} reviews
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Social media link with enhanced styling */}
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-10 transform hover:scale-110 transition-transform duration-300"
      >
        <div className="relative group">
          <img
            src="https://assets.codepen.io/9868786/youtube.webp"
            alt="YouTube"
            className="relative w-16 lg:w-20 rounded-[1rem]"
          />
        </div>
      </a>
    </div>
  );
}
