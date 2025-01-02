"use client";

import React, { useState, useEffect, useCallback } from "react";
import WhatsApp from "../assets/WhatsApp";

const data = [
  {
    place: "United Kingdom",
    title: "DISCOVER",
    title2: "OXFORD",
    description:
      "Experience centuries of academic excellence in Oxford, where historic colleges meet cutting-edge innovation. Home to world-renowned research facilities and a vibrant international community that shapes global leaders.",
    image: "https://assets.codepen.io/3685267/timed-cards-1.jpg",
    id: 1,
  },
  {
    place: "United States",
    title: "EXPLORE",
    title2: "BOSTON",
    description:
      "Boston, America's premier education hub, offers unparalleled opportunities at prestigious institutions. Experience a rich blend of historical heritage and innovative research in a city that breathes academic excellence.",
    image: "https://assets.codepen.io/3685267/timed-cards-2.jpg",
    id: 2,
  },
  {
    place: "Australia",
    title: "STUDY IN",
    title2: "SYDNEY",
    description:
      "Sydney combines world-class education with an unmatched quality of life. Our partner universities offer cutting-edge programs, while the city provides a perfect backdrop for personal and professional growth.",
    image: "https://assets.codepen.io/3685267/timed-cards-3.jpg",
    id: 3,
  },
  {
    place: "Canada",
    title: "EXPERIENCE",
    title2: "VANCOUVER",
    description:
      "Vancouver offers a unique blend of academic excellence and natural beauty. Study at top-ranked universities while enjoying a safe, multicultural environment that consistently ranks among the world's best cities.",
    image: "https://assets.codepen.io/3685267/timed-cards-4.jpg",
    id: 4,
  },
  {
    place: "Germany",
    title: "LEARN IN",
    title2: "MUNICH",
    description:
      "Munich exemplifies German engineering excellence and innovation. Benefit from tuition-free education at prestigious technical universities while experiencing a rich cultural heritage in the heart of Europe.",
    image: "https://assets.codepen.io/3685267/timed-cards-5.jpg",
    id: 5,
  },
  {
    place: "New Zealand",
    title: "STUDY IN",
    title2: "WELLINGTON",
    description:
      "Wellington offers world-recognized qualifications in a stunning natural setting. Experience innovative teaching methods and practical learning approaches while enjoying New Zealand's renowned quality of life.",
    image: "https://assets.codepen.io/3685267/timed-cards-6.jpg",
    id: 6,
  },
];

export default function Carousel() {
  const [items, setItems] = useState(data);
  const [isPaused, setIsPaused] = useState(false);

  const rotateItems = useCallback((direction: "next" | "prev") => {
    setItems((prevItems) => {
      if (direction === "next") {
        const [first, ...rest] = prevItems;
        return [...rest, first];
      } else {
        const last = prevItems[prevItems.length - 1];
        return [last, ...prevItems.slice(0, -1)];
      }
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => rotateItems("next"), 4000);
    return () => clearInterval(interval);
  }, [rotateItems, isPaused]);

  return (
    <main
      className="relative w-full min-h-screen h-[100dvh] overflow-hidden bg-[#1a1a1a]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Images */}
      {items.slice(0, 2).map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
            index === 0
              ? "opacity-100 z-20 scale-100"
              : "opacity-0 z-10 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-out"
            style={{
              backgroundImage: `url(${item.image})`,
              transform: index === 0 ? "scale(1)" : "scale(1.05)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 transition-opacity duration-[1500ms]"
            style={{
              opacity: index === 0 ? 1 : 0,
            }}
          />

          {/* Content */}
          <div
            className="absolute top-[10%] sm:top-[15%] md:top-[20%] left-4 md:left-16 z-20 text-white transition-all duration-[1500ms] px-4 sm:px-0"
            style={{
              transform: `translateY(${index === 0 ? "0" : "30px"})`,
              opacity: index === 0 ? 1 : 0,
              filter: `blur(${index === 0 ? "0" : "10px"})`,
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="mb-4">
              <div className="text-2xl md:text-4xl uppercase tracking-wider font-bold">
                {item.place}
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold uppercase leading-none">
                {item.title}
              </div>
              <div className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold uppercase leading-none">
                {item.title2}
              </div>
            </div>
            <div className="mt-4 sm:mt-8 w-full md:w-[600px] text-sm sm:text-base md:text-lg leading-relaxed max-w-[90vw] text-white/90">
              {item.description}
            </div>
            <div className="mt-8 md:mt-10 flex items-center gap-6">
              <button className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/30 grid place-items-center hover:bg-white/20 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <WhatsApp
                phoneNumber="+1234567890"
                message="Hello, I'd like to learn more about this location!"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Thumbnails */}
      <div className="absolute right-0 sm:right-[-2rem] md:right-2 bottom-10 sm:bottom-20 z-30 overflow-hidden">
        <div
          className="relative flex items-center justify-end gap-2 sm:gap-4 pr-2 sm:pr-4"
          style={{ width: "calc(200px * 3 - 3rem)" }}
        >
          {items.slice(1).map((item, index) => (
            <div
              key={item.id}
              className={`
                relative cursor-pointer overflow-hidden rounded-[20px]
                shadow-[0_20px_30px_rgba(255,255,255,0.3)_inset]
                transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:scale-[1.08] hover:-translate-y-2
                group shrink-0
                w-[90px] h-[160px]
                sm:w-[160px] sm:h-[270px]
                md:w-[200px] md:h-[300px]
                ${
                  index >= 3
                    ? "translate-x-[100%] opacity-0"
                    : "translate-x-0 opacity-100"
                }
                -mr-2 sm:-mr-4 md:-mr-8
              `}
              style={{
                transform: `translateX(${index * 20}%)`,
                transition:
                  "transform 1200ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1200ms ease-out",
              }}
              onClick={() => rotateItems("next")}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         group-hover:scale-[1.15]"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div
                className="absolute inset-0 bg-black/40 transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         group-hover:bg-black/20"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white transition-transform duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         group-hover:translate-y-1"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
                }}
              >
                <div
                  className="text-xs sm:text-sm font-medium mb-0.5 sm:mb-1 opacity-90 transition-all duration-[1200ms]
                            group-hover:opacity-100"
                >
                  {item.place}
                </div>
                <div
                  className="text-sm sm:text-base md:text-lg font-bold leading-tight transition-all duration-[1200ms]
                            group-hover:opacity-100 line-clamp-2"
                >
                  {item.title} {item.title2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="nav absolute bottom-4 sm:bottom-8 right-8 sm:right-16 z-50 select-none">
        <button
          className="btn bg-white/50 text-black/70 border-2 border-black/60 
                   mx-1 px-3 py-2 rounded-full cursor-pointer
                   hover:bg-white/30"
          onClick={() => rotateItems("prev")}
        >
          ←
        </button>
        <button
          className="btn bg-white/50 text-black/70 border-2 border-black/60 
                   mx-1 px-3 py-2 rounded-full cursor-pointer
                   hover:bg-white/30"
          onClick={() => rotateItems("next")}
        >
          →
        </button>
      </div>
    </main>
  );
}
