import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Documentation UI</h1>

      {/* Sample card */}
      <div className="bg-zinc-800 p-6 rounded-xl shadow-lg max-w-md hover:bg-zinc-700 transition">
        <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
        <p className="text-zinc-300">
          This is a sample documentation card. Click to expand for more info.
        </p>
      </div>
    </div>
  );
}

export default App;
