import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          speed: 4000,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          speed: 3500,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          speed: 3000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          speed: 2500,
        },
      },
    ],
  };

  const imageHashes = [
    "3ce3f1fb0985436dbb2faf2017159a79",
    "c8314a80bbb3375ff27588e3ecce9432",
    "f5ed8545ffcb6d3668bad612381e87bc",
    "1fdcf2db8383570315c91dcdf804d9ed",
    "f9477c9952b2f29845b18873c844ee3f",
    "d9e70bc008cb5ae4b2f6132249a27e01",
    "9c5d825225116e38c5f22dc07f5b59da",
    "9e6f8ab38b6fda5fd6af1dd4c5da9f66",
    "83275f7fe549a68c1201fc3e9c32c46d",
    "8e92eeeab3f14c13b766bf548721e52c",
    "0358163b629b39bf02bdf2cd11d8a058",
    "67f88982903e56445ad967d7f55e76d9",
    "42807388ede8dc8c729b9431f737dfba",
    "420baa53266b884945112fb63c8ba048",
    "acc8ae86571ff0b7bfca4146a54e28a0",
    "a22dd0f76b223df57a72a16b963aa760",
    "6af0aa61208564fdc28722dc9ecab764",
    "4cbadae035de5f4b09251023318b4b2f",
    "9f1745efb1c9b6e00a828e70351d6696",
    "0ee66f30fde9882cfff2869da41a6070",
    "056d64bc3a2837ccb68b8f8e4ca37b2f",
    "9c4d17f624780f8d450c89a0ecde2720",
    "997e30ee94295dac3fb2158e77cc1e9b",
    "f6268fabc089e88fe896d00a0e348f79",
    "9fb283a49d84813f247be9a7d1408d7b",
    "0ab42d5bbd1f0a9826f5f3f2749f87a1",
    "0373d1333a7cc0608ce230e7a66ad8c2",
    "0953e474c8b0ae41b5d50f7365eb2bbe",
    "dfa79cce7d547d12c7f02d68f278241b",
    "3f5bc1a00da93a27ff1019cedcad169a",
    "618857b8b1afa1ccca5fcf6f9dbf6795",
    "4e34f4fd4db7695d1292dc5d4b82d71c",
    "82aee53f27b1ffdbb1c39af28c9269aa",
    "208b6a1b01f8f2f5df1a68caa960869e",
    "dd5f231e50d883192b24dbef463d074b",
    "e6f0323e792f19711225ec20040e3672",
    "ae58d9c5b58d1faf9c137dbb67d2d4d1",
    "b1b8dadad5bf52038739aa667b0491be",
    "b3d9af3ce643289c3a3093f20286f713",
    "011c755fd5618fbfe8a4326cd07dcd41",
    "873778d309e3d0f36ff6d3fee423b178",
    "99dd4fb9b75968b4b76abd96692a9e25",
    "6400d74f7205e940b5630221e7265622",
    "bff335fedf893875fad4f3e0055c7d7b",
    "a3016d7809819b9f3bba003a31679c2d",
  ];

  const images = imageHashes.map((hash, index) => ({
    id: index + 1,
    src: `https://www.eduroyale.com/images/university_logo/thumb${hash}.jpg`,
    href: `course-list.php?list-courses=${index + 1}`,
  }));

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const fadeUp = "100px";
  const fallDown = "-200px";
  const duration = "5s";

  return (
    <div className="w-full px-2 py-4">
      <style jsx>{`
        .custom-slider {
          overflow: hidden;
        }
        .text-container {
          width: 100%;
          color: linear-gradient(45deg, #ff9a9e, #fad0c4, #a1c4fd, #c2e9fb);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
          font-family: "Poppins", sans-serif;
          letter-spacing: 2px;
          font-size: 24px;
          font-weight: 600;
          -webkit-font-smoothing: antialiased;
          text-align: center;
          margin-bottom: 30px;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          background-clip: text;
        }

        @keyframes gradientBG {
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

        .text-container::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #000;
          z-index: -1;
        }

        @keyframes textColorChange {
          0%,
          100% {
            color: #ffffff;
          }
          25% {
            color: #ffff00;
          }
          50% {
            color: #00ffff;
          }
          75% {
            color: #ff00ff;
          }
        }

        .text-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }

        @keyframes gradientBG {
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
        span {
          display: inline-block;
        }
        .reg-text {
          transform: translateY(${fadeUp});
          opacity: 0;
          transition: transform calc(${duration} / 1.5) ease-out,
            opacity ${duration} ease;
        }
        .reg-text.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        .letter {
          transition: transform ${duration} cubic-bezier(0.43, 0.1, 0.57, 0.9),
            filter ${duration} ease, opacity ${duration} ease;
          opacity: 0;
          filter: blur(5px);
        }
        .letter:nth-of-type(2) {
          transform: translateY(calc(${fallDown} + 40px));
          transition-duration: calc(${duration} / 2);
        }
        .letter:nth-of-type(3) {
          filter: blur(0);
          transform: translateY(calc(${fallDown} + 30px));
          transition-duration: calc(${duration} / 1.3);
        }
        .letter:nth-of-type(4) {
          transform: translateY(${fallDown});
          transition-duration: calc(${duration} / 1.5);
        }
        .letter:nth-of-type(5) {
          transform: translateY(calc(${fallDown} + 50px));
          transition-duration: calc(${duration} / 2);
        }
        .letter:nth-of-type(6) {
          filter: blur(0);
          transform: translateY(calc(${fallDown} + 20px));
          transition-duration: calc(${duration} / 2.3);
        }
        .letter.loaded {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
      `}</style>
      <div className="text-container">
        <span className={`letter ${loaded ? "loaded" : ""}`}>W</span>
        <span className={`letter ${loaded ? "loaded" : ""}`}>e</span>
        <span className={`letter ${loaded ? "loaded" : ""}`}>'</span>
        <span className={`letter ${loaded ? "loaded" : ""}`}>r</span>
        <span className={`letter ${loaded ? "loaded" : ""}`}>e</span>
        <span className={`letter ${loaded ? "loaded" : ""}`}> </span>
        <span className={`reg-text ${loaded ? "loaded" : ""}`}>
          {""}not the only ones excited about EDUROYALE...
        </span>
        <br />
        <span className={`reg-text ${loaded ? "loaded" : ""}`}>
          <span className={`letter ${loaded ? "loaded" : ""}`}>1</span>
          <span className={`letter ${loaded ? "loaded" : ""}`}>2</span>
          <span className={`letter ${loaded ? "loaded" : ""}`}>5</span>{" "}
          Universities in{" "}
          <span className={`letter ${loaded ? "loaded" : ""}`}>8</span>{" "}
          countries use EDUROYALE.
        </span>
        <br />
        <span className={`reg-text ${loaded ? "loaded" : ""}`}>
          Meet our Universities.
        </span>
      </div>
      <Slider {...settings} className="custom-slider">
        {images.map((image) => (
          <div key={image.id} className="px-2">
            <a
              href={image.href}
              className="block h- sm:h-40 md:h-30 lg:h-48 xl:h-40 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt=""
                className="max-w-[90%] max-h-[80%] object-contain m-4"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
