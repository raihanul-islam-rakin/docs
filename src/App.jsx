import React, { useState, useEffect } from "react";

export default function App() {
  const [topics, setTopics] = useState([]);
  const [selected, setSelected] = useState(null);

  // Fetch topics from JSON
  useEffect(() => {
    fetch("/topics.json")
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#08090a] text-white flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">Documentation</h1>

      {/* Grid: 2 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className="bg-[#0F1011] p-4 rounded-lg shadow-md cursor-pointer hover:bg-[#161819] transition-all transform hover:scale-[1.03]"
            onClick={() => setSelected(topic)}
          >
            {/* Title */}
            <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>

            {/* Description Preview: max 5 lines */}
            <p className="text-gray-400 text-sm line-clamp-5 whitespace-pre-line">
              {topic.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#0F1116] p-6 rounded-2xl w-4/5 max-w-xl relative animate-fadeIn">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>
            <p className="text-gray-300 text-base whitespace-pre-line">
              {selected.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
