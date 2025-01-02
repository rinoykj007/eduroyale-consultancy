import React, { useState } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../config/contact";
import {
  GB,
  US,
  CA,
  AU,
  NZ,
  IE,
} from "country-flag-icons/react/3x2";

const Courses = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");

  const countries = [
    { id: "all", name: "All Countries" },
    { id: "uk", name: "United Kingdom", Flag: GB },
    { id: "usa", name: "United States", Flag: US },
    { id: "canada", name: "Canada", Flag: CA },
    { id: "australia", name: "Australia", Flag: AU },
    { id: "newzealand", name: "New Zealand", Flag: NZ },
    { id: "ireland", name: "Ireland", Flag: IE },
  ];

  const universities = [
    // UK Universities with temporary CDN-hosted logos
    {
      id: 1,
      name: "Birmingham City University",
      country: "uk",
      ranking: "Top 100 UK Universities",
      location: "Birmingham, England",
      image:
        "https://lh3.googleusercontent.com/places/AJQcZqLCzMYoiQIwm82Ua4lrjlUe78SCwBkjxSBG7WuW-MlgbFPW-vWy3P0MUHa6nz_jJq1B6yZs71Vty0bRMwBuec9RAd7Du7_xPg=s1600-w480",
      programs: [
        "Business",
        "Computing and Technology",
        "Engineering",
        "Arts and Design",
        "Health Sciences",
      ],
      features: [
        "Modern city-center campus",
        "Industry partnerships",
        "Practice-based learning",
        "Strong employability focus",
      ],
      tuitionRange: "£14,500 - £16,500",
      intakeMonths: ["September", "January"],
    },
    {
      id: 2,
      name: "Nottingham Trent University",
      country: "uk",
      ranking: "Top 50 UK Universities",
      location: "Nottingham, England",
      image:
        "https://www.ntu.ac.uk/__data/assets/image/0038/866873/240918_5126-1.jpg",
      programs: [
        "Business and Management",
        "Art and Design",
        "Engineering",
        "Computing and Technology",
        "Social Sciences",
      ],
      features: [
        "Award-winning teaching",
        "Modern facilities",
        "Strong industry connections",
        "Excellent student satisfaction",
      ],
      tuitionRange: "£15,000 - £17,000",
      intakeMonths: ["September", "January"],
    },
    {
      id: 3,
      name: "University of Greenwich",
      country: "uk",
      ranking: "Top Modern University",
      location: "London, England",
      image:
        "https://www.gre.ac.uk/__data/assets/image/0023/270428/varieties/v800.jpg",
      programs: [
        "Business",
        "Engineering",
        "Computing",
        "Architecture",
        "Health Sciences",
      ],
      features: [
        "Historic London campus",
        "Research excellence",
        "Industry partnerships",
        "International focus",
      ],
      tuitionRange: "£14,500 - £16,500",
      intakeMonths: ["September", "January", "May"],
    },
    {
      id: 4,
      name: "University of Sunderland",
      country: "uk",
      ranking: "Top Modern University",
      location: "Sunderland, England",
      image:
        "https://th.bing.com/th/id/R.1975b6dabc752f4dfbddf2129a9e56cf?rik=avEB42ZtaSebjw&riu=http%3a%2f%2f3.bp.blogspot.com%2f_JugX5DFw1so%2fTE-LGpMf4rI%2fAAAAAAAAACs%2fsyVPWdsBPYc%2fs1600%2fUniversity%2bOf%2bSunderland.jpg&ehk=gECcSVWUiubJsI8LdJJ%2fV6XdnX2o9FzZEpl3WCXyFFg%3d&risl=&pid=ImgRaw&r=0",
      programs: [
        "Business and Management",
        "Engineering",
        "Computing",
        "Health Sciences",
        "Education",
      ],
      features: [
        "Two modern campuses",
        "Strong industry links",
        "Excellent student support",
        "Research-led teaching",
      ],
      tuitionRange: "£13,500 - £15,500",
      intakeMonths: ["September", "January"],
    },
    {
      id: 5,
      name: "London South Bank University",
      country: "uk",
      ranking: "Top London Modern University",
      location: "London, England",
      image:
        "https://bpprodstorage.blob.core.windows.net/bpprodcontainer/1965288/images/4690f0cd-baf3-476b-9687-90eaae021018LSBU-Crest_simple-Colour-text_Horizon_Colour.png",
      programs: [
        "Business",
        "Engineering",
        "Health and Social Care",
        "Built Environment",
        "Applied Sciences",
      ],
      features: [
        "Central London location",
        "Professional accreditations",
        "Industry partnerships",
        "Career-focused education",
      ],
      tuitionRange: "£14,500 - £16,800",
      intakeMonths: ["September", "January"],
    },
    {
      id: 6,
      name: "University of West London",
      country: "uk",
      ranking: "Top Modern University",
      location: "London, England",
      image:
        "https://i.guim.co.uk/img/media/9893ec569636ee030586f604e459138372da1f79/0_192_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b6186cd239af4698a9eb3721937d7a72",
      programs: [
        "Business",
        "Computing",
        "Engineering",
        "Healthcare",
        "Hospitality",
      ],
      features: [
        "West London location",
        "Modern facilities",
        "Industry connections",
        "Career support",
      ],
      tuitionRange: "£13,500 - £15,500",
      intakeMonths: ["September", "January", "May"],
    },
    // More UK Universities
    {
      id: 17,
      name: "University of Salford",
      country: "uk",
      ranking: "Top Modern University",
      location: "Manchester, England",
      image:
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article21564378.ece/ALTERNATES/s810/0_University-of-Salford.png",
      programs: [
        "Engineering",
        "Business",
        "Health Sciences",
        "Media",
        "Built Environment",
      ],
      features: [
        "Industry partnerships",
        "MediaCityUK campus",
        "Modern facilities",
        "Professional focus",
      ],
      tuitionRange: "£14,500 - £16,500",
      intakeMonths: ["September", "January"],
    },
    {
      id: 18,
      name: "Sheffield Hallam University",
      country: "uk",
      ranking: "Top Modern University",
      location: "Sheffield, England",
      image:
        "https://c8.alamy.com/comp/E7YNB5/sheffield-hallam-university-campus-building-in-sheffield-south-yorkshire-E7YNB5.jpg",
      programs: [
        "Business",
        "Engineering",
        "Health",
        "Art & Design",
        "Computing",
      ],
      features: [
        "Industry connections",
        "Modern campus",
        "Research excellence",
        "Career support",
      ],
      tuitionRange: "£13,500 - £15,500",
      intakeMonths: ["September", "January"],
    },
    {
      id: 19,
      name: "Plymouth University",
      country: "uk",
      ranking: "Top 50 Modern University",
      location: "Plymouth, England",
      image: "https://smapse.com/storage/2017/10/plymouth-university-12.jpg",
      programs: [
        "Marine Sciences",
        "Engineering",
        "Business",
        "Health",
        "Arts",
      ],
      features: [
        "Coastal location",
        "Research excellence",
        "Modern facilities",
        "Industry links",
      ],
      tuitionRange: "£13,000 - £15,000",
      intakeMonths: ["September", "January"],
    },
    // Additional UK Universities
    {
      id: 27,
      name: "University of Edinburgh",
      country: "uk",
      ranking: "Top Russell Group University",
      location: "Edinburgh, Scotland",
      image:
        "https://www.discoverwalks.com/blog/wp-content/uploads/2020/03/old-college-university-of-edinburgh-wikipedia.jpg",
      programs: [
        "Medicine",
        "Engineering",
        "Business",
        "Arts & Humanities",
        "Sciences",
      ],
      features: [
        "World-renowned research",
        "Historic campus",
        "Global reputation",
        "Modern facilities",
      ],
      tuitionRange: "£22,000 - £32,000",
      intakeMonths: ["September"],
    },
    {
      id: 28,
      name: "Middlesex University",
      country: "uk",
      ranking: "Top Modern University",
      location: "London, England",
      image:
        "https://scontent-doh1-1.xx.fbcdn.net/v/t39.30808-6/320047292_1129983391023076_9201793394579130779_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=947md2pzUr0Q7kNvgEpvgu_&_nc_zt=23&_nc_ht=scontent-doh1-1.xx&_nc_gid=Ap9b5RLTCYxch_pZNJC-lsy&oh=00_AYCd8HhhS7OZ-ibSvC9qRmOoJL461iC_qxtcuNUtqebSQw&oe=677982C2",
      programs: ["Business", "Art & Design", "Health", "Computing", "Law"],
      features: [
        "London location",
        "Modern campus",
        "Industry links",
        "Global focus",
      ],
      tuitionRange: "£14,000 - £16,000",
      intakeMonths: ["September", "January"],
    },
    // USA Universities
    {
      id: 7,
      name: "Harvard University",
      country: "usa",
      ranking: "#1 World Ranking",
      location: "Cambridge, Massachusetts",
      image:
        "https://logos-world.net/wp-content/uploads/2020/12/Harvard-Emblem.png",
      programs: ["Business", "Law", "Medicine", "Arts & Sciences"],
      features: [
        "Ivy League institution",
        "World-class faculty",
        "Extensive research opportunities",
        "Strong alumni network",
      ],
      tuitionRange: "$49,000 - $55,000",
      intakeMonths: ["August"],
    },
    {
      id: 8,
      name: "Stanford University",
      country: "usa",
      ranking: "#4 World Ranking",
      location: "Stanford, California",
      image:
        "https://www.stanford.edu/wp-content/uploads/2023/10/Hero-3-2-1536x1022.jpg",
      programs: ["Computer Science", "Engineering", "Business", "Medicine"],
      features: [
        "Silicon Valley location",
        "Innovation hub",
        "Research excellence",
        "Entrepreneurial spirit",
      ],
      tuitionRange: "$52,000 - $57,000",
      intakeMonths: ["September"],
    },
    // Canadian Universities
    {
      id: 9,
      name: "George Brown College",
      country: "canada",
      ranking: "Top Ontario College",
      location: "Toronto, Ontario",
      image: "https://smapse.com/storage/2019/03/george-brown-college-28.jpg",
      programs: [
        "Business",
        "Technology",
        "Health Sciences",
        "Hospitality",
        "Construction Management",
      ],
      features: [
        "Downtown Toronto location",
        "Industry partnerships",
        "Co-op opportunities",
        "Career-focused programs",
      ],
      tuitionRange: "CAD 16,000 - 19,000",
      intakeMonths: ["September", "January", "May"],
    },
    {
      id: 10,
      name: "Seneca College",
      country: "canada",
      ranking: "Leading Canadian College",
      location: "Toronto, Ontario",
      image:
        "https://polytechnicscanada.ca/wp-content/uploads/2021/02/Seneca-4.png",
      programs: [
        "Business",
        "Information Technology",
        "Engineering",
        "Aviation",
        "Creative Arts",
      ],
      features: [
        "Multiple campuses",
        "Industry connections",
        "Applied learning",
        "Career services",
      ],
      tuitionRange: "CAD 15,000 - 18,500",
      intakeMonths: ["September", "January", "May"],
    },
    {
      id: 11,
      name: "Humber College",
      country: "canada",
      ranking: "Top GTA College",
      location: "Toronto, Ontario",
      image:
        "https://www.meridean.org/img/university/1659771458FKxF2qhWUAMELf4.jpg",
      programs: [
        "Business",
        "Media Studies",
        "Engineering",
        "Health Sciences",
        "Hospitality",
      ],
      features: [
        "Practical learning",
        "Industry partnerships",
        "Modern facilities",
        "Student support",
      ],
      tuitionRange: "CAD 16,500 - 19,500",
      intakeMonths: ["September", "January"],
    },
    // More Canadian Universities
    {
      id: 22,
      name: "Fanshawe College",
      country: "canada",
      ranking: "Top Ontario College",
      location: "London, Ontario",
      image:
        "https://2.bp.blogspot.com/-0dotmH6vhUo/VyxfwViDUqI/AAAAAAAAACw/Q2VYGYj5tHAmidDANQjTGIJyz2pX4m1HwCLcB/w1200-h630-p-k-no-nu/fanshawe-college-.jpg",
      programs: [
        "Business",
        "Technology",
        "Health Sciences",
        "Media",
        "Aviation",
      ],
      features: [
        "Industry partnerships",
        "Modern facilities",
        "Co-op programs",
        "Career support",
      ],
      tuitionRange: "CAD 15,000 - 18,000",
      intakeMonths: ["September", "January", "May"],
    },
    {
      id: 23,
      name: "Conestoga College",
      country: "canada",
      ranking: "Leading Ontario College",
      location: "Kitchener, Ontario",
      image:
        "https://www.easyuni.com/media/institution/photo/2019/10/16/conestoga-college-waterloo-campus.jpg",
      programs: ["Engineering", "Business", "Health", "IT", "Trades"],
      features: [
        "Industry connections",
        "Modern facilities",
        "Co-op opportunities",
        "Career services",
      ],
      tuitionRange: "CAD 14,500 - 17,500",
      intakeMonths: ["September", "January", "May"],
    },
    // Irish Universities
    {
      id: 13,
      name: "Dublin City University (DCU)",
      country: "ireland",
      ranking: "Top Young University",
      location: "Dublin, Ireland",
      image:
        "https://www.theworld100.com/wp-content/uploads/2015/01/university-college-dublin.jpg",
      programs: [
        "Business Studies",
        "Computing",
        "Engineering",
        "Communications",
        "Education",
      ],
      features: [
        "Industry focused",
        "Innovation hub",
        "Strong placement programs",
        "Modern facilities",
      ],
      tuitionRange: "€13,500 - €23,000",
      intakeMonths: ["September", "January"],
    },
    // More Irish Universities
    {
      id: 20,
      name: "University College Cork",
      country: "ireland",
      ranking: "Top Irish University",
      location: "Cork, Ireland",
      image:
        "https://2.bp.blogspot.com/-tSGrSdta6fQ/Tn0zr_Y7i6I/AAAAAAAAAuM/4sAB7BWW250/s1600/UniColCork+1.jpg",
      programs: ["Business", "Engineering", "Medicine", "Arts", "Law"],
      features: [
        "Historic campus",
        "Research excellence",
        "Student support",
        "Modern facilities",
      ],
      tuitionRange: "€14,000 - €23,000",
      intakeMonths: ["September"],
    },
    {
      id: 21,
      name: "University of Limerick",
      country: "ireland",
      ranking: "Top Modern University",
      location: "Limerick, Ireland",
      image:
        "https://www.irlandaegitimrehberi.com/wp-content/uploads/2022/03/LIMERICK.jpg",
      programs: [
        "Business",
        "Engineering",
        "Health Sciences",
        "Education",
        "Science",
      ],
      features: [
        "Modern campus",
        "Industry links",
        "Co-op program",
        "Sports facilities",
      ],
      tuitionRange: "€13,500 - €22,000",
      intakeMonths: ["September", "January"],
    },
    // New Zealand Universities
    {
      id: 14,
      name: "Auckland University of Technology",
      country: "newzealand",
      ranking: "Top NZ University",
      location: "Auckland, New Zealand",
      image:
        "https://suneducationgroup.com/wp-content/uploads/2016/02/Institusi-AUT-paling-internasional-NZ-Kampus-0.jpg",
      programs: [
        "Business",
        "Engineering",
        "Health Sciences",
        "Creative Technologies",
        "Hospitality",
      ],
      features: [
        "Industry focused",
        "Research excellence",
        "Modern facilities",
        "City campus",
      ],
      tuitionRange: "NZD 28,000 - 38,000",
      intakeMonths: ["February", "July"],
    },
    {
      id: 15,
      name: "Unitec Institute of Technology",
      country: "newzealand",
      ranking: "Leading NZ Institute",
      location: "Auckland, New Zealand",
      image:
        "https://amarebe.com/wp-content/uploads/2021/01/unitec-institute-of-technology.png",
      programs: [
        "Construction",
        "Engineering",
        "Computing",
        "Healthcare",
        "Business",
      ],
      features: [
        "Practical learning",
        "Industry connections",
        "Modern campus",
        "Student support",
      ],
      tuitionRange: "NZD 22,000 - 32,000",
      intakeMonths: ["February", "July"],
    },
    {
      id: 16,
      name: "Manukau Institute of Technology",
      country: "newzealand",
      ranking: "Top Technical Institute",
      location: "Auckland, New Zealand",
      image:
        "https://greatnationnz.com/wp-content/uploads/2018/11/Manukau-Institute-of-Technology-New-Zealand-optimized-f.jpg",
      programs: [
        "Engineering",
        "Digital Technologies",
        "Business",
        "Health Studies",
        "Maritime Studies",
      ],
      features: [
        "Industry focused",
        "Practical training",
        "Modern facilities",
        "Career support",
      ],
      tuitionRange: "NZD 20,000 - 30,000",
      intakeMonths: ["February", "July"],
    },
    // More New Zealand Universities
    {
      id: 24,
      name: "Wellington Institute of Technology",
      country: "newzealand",
      ranking: "Leading Technical Institute",
      location: "Wellington, New Zealand",
      image:
        "https://www.chooseright.org/wp-content/uploads/2014/04/Wellington-Institute-of-Technology-500x367.jpg",
      programs: [
        "Engineering",
        "IT",
        "Business",
        "Creative Technologies",
        "Health",
      ],
      features: [
        "Industry focused",
        "Practical training",
        "Modern facilities",
        "Student support",
      ],
      tuitionRange: "NZD 21,000 - 31,000",
      intakeMonths: ["February", "July"],
    },
    {
      id: 25,
      name: "Ara Institute of Canterbury",
      country: "newzealand",
      ranking: "Top Technical Institute",
      location: "Christchurch, New Zealand",
      image:
        "https://media.studylink.com/provider/ara-institute-of-canterbury/profile.jpg",
      programs: [
        "Engineering",
        "Business",
        "Hospitality",
        "Creative Industries",
        "Health",
      ],
      features: [
        "Industry connections",
        "Modern facilities",
        "Practical learning",
        "Student support",
      ],
      tuitionRange: "NZD 20,000 - 30,000",
      intakeMonths: ["February", "July"],
    },
    {
      id: 26,
      name: "Whitireia",
      country: "newzealand",
      ranking: "Leading Institute",
      location: "Wellington, New Zealand",
      image:
        "https://www.jeduka.com/storage/school_image/2/whitireia-new-zealand.jpg",
      programs: ["Health", "IT", "Business", "Creative Arts", "Hospitality"],
      features: [
        "Industry focused",
        "Practical training",
        "Modern facilities",
        "Career support",
      ],
      tuitionRange: "NZD 19,000 - 29,000",
      intakeMonths: ["February", "July"],
    },
  ];

  const filteredUniversities =
    selectedCountry === "all"
      ? universities
      : universities.filter((uni) => uni.country === selectedCountry);

  return (
    <div className="bg-gradient-to-b from-[#0A1128] via-[#001F54] to-[#034078] min-h-screen text-white font-moderustic">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#48CAE4]/20 to-transparent -top-48 -right-48 blur-3xl animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#90E0EF]/20 to-transparent -bottom-48 -left-48 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <main className="relative px-4 py-16 md:py-24 max-w-7xl mx-auto">
        {/* Header with Search and Filter */}
        <div className="text-center mb-16 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
              Partner Universities
            </h1>
            <p className="text-[#CAF0F8] max-w-2xl mx-auto">
              Explore our network of prestigious universities across the globe.
              We partner with top-ranked institutions to provide you with the
              best educational opportunities.
            </p>
          </motion.div>
        </div>

        {/* Country Filter with Animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country) => (
              <motion.button
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCountry === country.id
                    ? "bg-gradient-to-r from-[#48CAE4] to-[#90E0EF] text-white shadow-lg"
                    : "bg-white/10 text-[#CAF0F8] hover:bg-white/20"
                }`}
              >
                {country.Flag && (
                  <span className="w-6 h-4">
                    <country.Flag className="w-full h-full object-cover rounded-sm" />
                  </span>
                )}
                {country.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Universities Grid with Improved Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.map((university, idx) => (
            <motion.div
              key={university.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden group hover:bg-white/15 border border-white/10 hover:border-[#48CAE4]/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* University Image with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-transparent"></div>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-4 right-4 bg-[#48CAE4]/90 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg backdrop-blur-sm"
                >
                  {university.ranking}
                </motion.span>
              </div>

              {/* University Content with Improved Layout */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#CAF0F8] mb-2 group-hover:text-white transition-colors">
                    {university.name}
                  </h3>
                  <p className="text-sm text-[#90E0EF] flex items-center gap-2">
                    {(() => {
                      const countryData = countries.find((c) => c.id === university.country);
                      if (countryData?.Flag) {
                        const FlagComponent = countryData.Flag;
                        return (
                          <span className="w-6 h-4">
                            <FlagComponent className="w-full h-full object-cover rounded-sm" />
                          </span>
                        );
                      }
                      return null;
                    })()}
                    {university.location}
                  </p>
                </div>

                {/* Programs with Hover Effects */}
                <div>
                  <h4 className="text-sm font-semibold text-[#90E0EF] mb-3">
                    Popular Programs
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {university.programs.map((program, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs bg-white/10 text-[#CAF0F8] px-3 py-1.5 rounded-full hover:bg-[#48CAE4]/20 transition-colors cursor-pointer"
                      >
                        {program}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Features with Icons */}
                <div>
                  <h4 className="text-sm font-semibold text-[#90E0EF] mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {university.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center text-sm text-[#CAF0F8]/80 hover:text-[#CAF0F8] transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#48CAE4] mr-2"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Additional Info with Better Visual Hierarchy */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <h4 className="text-xs font-semibold text-[#90E0EF] mb-1">
                      Tuition Range
                    </h4>
                    <p className="text-sm text-[#CAF0F8] font-medium">
                      {university.tuitionRange}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#90E0EF] mb-1">
                      Intake Months
                    </h4>
                    <p className="text-sm text-[#CAF0F8]">
                      {university.intakeMonths.join(", ")}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-[#48CAE4] to-[#90E0EF] text-white font-medium py-2.5 rounded-lg hover:opacity-90 transition-all shadow-lg"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#48CAE4]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FEFCFB] via-[#DDF0FF] to-[#90E0EF]">
                Start Your International Education Journey
              </h2>
              <p className="text-[#CAF0F8] max-w-2xl mx-auto">
                Get expert guidance on university selection, application
                process, and visa requirements. Schedule a free consultation
                with our education advisors.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#48CAE4] to-[#90E0EF] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
        <WhatsAppButton 
          phoneNumber={WHATSAPP_NUMBER} 
          message="Hi, I'm interested in learning more about your courses!"
        />
      </main>
    </div>
  );
};

export default Courses;
