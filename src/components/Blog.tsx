import React, { useState } from "react";

interface BlogProps {
  topics?: string[];
  articles?: Array<{
    id: number;
    title: string;
    image: string;
    category: string;
    date: string;
    author: string;
  }>;
}

const Blog: React.FC<BlogProps> = ({
  topics = [
    "Study Abroad",
    "IELTS",
    "Student Visa",
    "Scholarships",
    "University Guide",
  ],
  articles = [],
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white font-inter">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Latest Updates
        </h1>
      </div>

      {/* Topics Box */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Choose Your Topic
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-6 py-3 text-lg rounded-full border-2 border-blue-500 transition-all duration-300
                ${
                  selectedTopic === topic
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 hover:bg-blue-50"
                }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <div className="text-center mb-16">
        <button
          disabled={!selectedTopic || isLoading}
          className={`w-full max-w-lg py-5 px-8 text-2xl rounded-full transition-all duration-300
            ${
              !selectedTopic || isLoading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Generating...
            </span>
          ) : (
            "Generate Articles"
          )}
        </button>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="relative aspect-[4/3]">
              {/* Date Box */}
              <div className="absolute top-4 left-4 z-10 bg-white/90 rounded-xl p-3 min-w-[80px] text-center shadow-md">
                <span className="text-sm font-light uppercase block">Jan</span>
                <span className="text-xl font-semibold block">01</span>
              </div>

              {/* Image */}
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium uppercase tracking-wider mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold mb-2 drop-shadow-lg">
                  {article.title}
                </h3>
                <p className="text-sm text-white/80 flex items-center gap-2">
                  <span>✍</span> {article.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
