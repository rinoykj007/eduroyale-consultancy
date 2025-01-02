import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppButton from "../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../config/contact";

const GEMINI_API_KEY = "AIzaSyD9RdSZKyMdiUCyO5kyEyqUf7iciFPyJKA";
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const availableTopics = [
    "IELTS Preparation",
    "TOEFL Tips",
    "Study in UK",
    "Study in USA",
    "Study in Canada",
    "Study in Australia",
    "Study in New Zealand",
    "Student Visa Guide",
    "Scholarships",
    "Campus Life Abroad",
    "English Speaking Skills",
    "Academic Writing",
    "International Student Life",
    "Career Development",
    "Cultural Adaptation",
    "Cost of Living Abroad",
    "Part-time Work Guide",
    "Admission Process",
    "Education Loans",
    "Student Housing",
    "Indian Students Abroad",
    "Language Learning Tips",
  ];

  const getRandomImage = () => {
    const imageId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/seed/${imageId}/1600/900`;
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = e.target as HTMLImageElement;
    const newImageId = Math.floor(Math.random() * 1000);
    img.src = `https://picsum.photos/seed/${newImageId}/1600/900`;
  };

  const generateMultipleNews = async (count: number = 3) => {
    if (selectedTopics.length === 0) {
      setError("Please select at least one topic");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const topicsForGeneration = [...selectedTopics]
        .sort(() => 0.5 - Math.random())
        .slice(0, count);

      const newsPromises = topicsForGeneration.map(async (topic) => {
        const aspects = [
          "latest updates and changes",
          "success stories and experiences",
          "tips and strategies",
          "common challenges and solutions",
          "expert advice and insights",
          "preparation guidelines",
          "requirements and procedures",
          "financial planning aspects",
          "career opportunities",
          "cultural experiences",
        ];

        const timeframes = [
          "in 2024",
          "for upcoming intake",
          "this academic year",
          "recent developments",
          "latest trends",
          "current opportunities",
        ];

        const randomAspect =
          aspects[Math.floor(Math.random() * aspects.length)];
        const randomTimeframe =
          timeframes[Math.floor(Math.random() * timeframes.length)];

        const prompt = `Write a unique and engaging article about ${randomAspect} for ${topic} ${randomTimeframe}.
          Requirements:
          - Focus on practical information and real experiences
          - Include specific examples and actionable advice
          - Mention relevant institutions, programs, or resources
          - Explain the benefits and challenges
          - Consider the perspective of Indian students
          - Keep it informative and engaging, around 2-3 paragraphs`;

        const result = await fetchNewsContent(prompt);
        if (!result) {
          throw new Error(`Failed to generate content for ${topic}`);
        }

        return {
          id: Date.now().toString() + Math.random(),
          type: "article",
          title: `${topic}: ${
            randomAspect.charAt(0).toUpperCase() + randomAspect.slice(1)
          }`,
          excerpt: result.content,
          date: new Date().toLocaleDateString(),
          category: topic,
          image: getRandomImage(),
          author: "EduRoyale Counselor",
        };
      });

      const newPosts = await Promise.all(newsPromises);
      if (newPosts.length === 0) {
        throw new Error("No articles were generated");
      }

      setBlogPosts((prev) => [...newPosts, ...prev]);
      setIsFirstLoad(false);
      return newPosts;
    } catch (err) {
      console.error("Error generating articles:", err);
      setError(
        err instanceof Error ? err.message : "Failed to generate news articles"
      );
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategorySelect = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const fetchNewsContent = async (prompt: string) => {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API key not found");
      }

      const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
            topP: 0.8,
            topK: 40,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          error: { message: `HTTP error! status: ${response.status}` },
        }));
        throw new Error(
          errorData.error?.message ||
            `Failed to fetch (Status: ${response.status})`
        );
      }

      const data = await response.json();
      const content = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!content) {
        throw new Error("No content generated");
      }

      return { content };
    } catch (err) {
      console.error("Error fetching news:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch news content"
      );
      return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleString("default", { month: "short" }),
      day: date.getDate(),
      year: date.getFullYear(),
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1128] via-[#001F54] to-[#034078]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="py-12">
            <AnimatePresence>
              {blogPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.map((post) => (
                    <motion.article
                      key={post.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedPost(post)}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="aspect-[4/3]">
                        <div className="absolute z-10 left-4 top-4 bg-white/90 rounded-lg p-2 text-center shadow-lg">
                          <span className="text-sm font-light text-gray-600">
                            {formatDate(post.date).month}
                          </span>
                          <span className="block text-xl font-semibold text-gray-900">
                            {formatDate(post.date).day}
                          </span>
                          <span className="text-sm font-light text-[#ff5722]">
                            {formatDate(post.date).year}
                          </span>
                        </div>
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          onError={handleImageError}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white mb-3">
                            {post.category}
                          </span>
                          <h3 className="text-xl md:text-2xl font-['Oswald'] text-white mb-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-white/80">
                            By {post.author}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  {isFirstLoad ? (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-['Oswald'] text-white mb-4">
                          Welcome to Our Education Blog
                        </h2>
                        <p className="text-white/80">
                          Select your favorite topics and generate personalized
                          articles.
                        </p>
                      </div>

                      <div className="max-w-3xl mx-auto">
                        <h3 className="text-lg font-['Oswald'] text-white mb-4">
                          Choose Topics ({selectedTopics.length} selected)
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {availableTopics.map((topic) => (
                            <button
                              key={topic}
                              onClick={() => handleCategorySelect(topic)}
                              className={`px-4 py-2 rounded-full text-sm transition-all ${
                                selectedTopics.includes(topic)
                                  ? "bg-white/20 text-white"
                                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80"
                              }`}
                            >
                              {topic}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-4">
                        <button
                          onClick={() => generateMultipleNews(3)}
                          disabled={isLoading || selectedTopics.length === 0}
                          className={`px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all ${
                            isLoading || selectedTopics.length === 0
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          {isLoading
                            ? "Generating Articles..."
                            : selectedTopics.length === 0
                            ? "Select Topics to Continue"
                            : "Generate Articles"}
                        </button>
                        {error && (
                          <p className="text-red-400 text-sm">{error}</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className="text-white/80">
                      No articles found. Try selecting some topics to generate
                      articles.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {blogPosts.length > 0 && (
              <div className="mb-8 mt-12">
                <h3 className="text-lg font-['Oswald'] text-white mb-4">
                  Select Topics for More Articles ({selectedTopics.length}{" "}
                  selected)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {availableTopics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => handleCategorySelect(topic)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        selectedTopics.includes(topic)
                          ? "bg-white/20 text-white"
                          : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80"
                      }`}
                    >
                      {topic}
                      {isLoading && selectedTopics.includes(topic) && (
                        <span className="ml-2 inline-block animate-spin">
                          ⟳
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => generateMultipleNews(3)}
                    disabled={isLoading || selectedTopics.length === 0}
                    className={`group relative px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all ${
                      isLoading || selectedTopics.length === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Generating Articles...</span>
                        </>
                      ) : (
                        <span>
                          {selectedTopics.length === 0
                            ? "Select Topics to Generate More"
                            : "Generate More Articles"}
                        </span>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {selectedPost && (
              <div className="fixed inset-0 flex items-center justify-center z-[9999] overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                  onClick={() => setSelectedPost(null)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="relative w-[90%] max-w-3xl bg-white rounded-xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto mx-auto z-[10000]"
                >
                  <button
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                    onClick={() => setSelectedPost(null)}
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full aspect-video object-cover rounded-lg mb-6"
                  />
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        {selectedPost.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {selectedPost.date}
                      </span>
                    </div>
                    <h2 className="text-3xl font-['Oswald'] text-gray-900">
                      {selectedPost.title}
                    </h2>
                    <div className="text-sm text-gray-500">
                      By {selectedPost.author}
                    </div>
                    <p className="font-['Roboto'] text-gray-700 leading-relaxed">
                      {selectedPost.excerpt}
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          <WhatsAppButton
            phoneNumber={WHATSAPP_NUMBER}
            message="Hi, I have a question about your blog content!"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
