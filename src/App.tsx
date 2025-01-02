import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactForm from "./components/pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import Courses from "./pages/Courses";
import ExpertCounseling from "./pages/services/ExpertCounseling";
import CourseSelection from "./pages/services/CourseSelection";
import CountrySelection from "./pages/services/CountrySelection";
import BankLoan from "./pages/services/BankLoan";
import VisaGuidance from "./pages/services/VisaGuidance";
import PostVisaAssistance from "./pages/services/PostVisaAssistance";
import TravelAssistance from "./pages/services/TravelAssistance";
import FreeIeltsTraining from "./pages/services/FreeIeltsTraining";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// Placeholder components

const FAQ = () => <h1>FAQs</h1>;

const Services = () => (
  <div>
    <h1>Services</h1>
    <ul>
      <li>Counseling</li>
      <li>University Selection</li>
      <li>Application Assistance</li>
      <li>Visa Guidance</li>
    </ul>
  </div>
);

function App() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://uam.getmerlin.in/status")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setStatus(data.status))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setError(error.message);
      });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          {status && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Status:</strong>
              <span className="block sm:inline"> {status}</span>
            </div>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route
              path="/services/expert-counseling"
              element={<ExpertCounseling />}
            />
            <Route
              path="/services/course-selection"
              element={<CourseSelection />}
            />
            <Route
              path="/services/country-selection"
              element={<CountrySelection />}
            />
            <Route path="/services/bank-loan" element={<BankLoan />} />
            <Route path="/services/visa-guidance" element={<VisaGuidance />} />
            <Route
              path="/services/post-visa-assistance"
              element={<PostVisaAssistance />}
            />
            <Route
              path="/services/travel-assistance"
              element={<TravelAssistance />}
            />
            <Route
              path="/services/free-ielts-training"
              element={<FreeIeltsTraining />}
            />
            <Route path="/services/*" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import Carousel from "./components/Carousel";

// function App() {
//   return (
//     <div>
//       <Carousel />
//     </div>
//   );
// }

// export default App;
