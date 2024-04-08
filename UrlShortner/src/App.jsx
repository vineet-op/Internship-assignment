import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState({});

  const handleShorten = () => {
    const shortUrl = nanoid(7); // Generating a short ID of length 7
    setShortenedUrls((prev) => ({
      ...prev,
      [shortUrl]: originalUrl,
    }));
    setOriginalUrl("");
  };

  const handleChange = (e) => {
    setOriginalUrl(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">URL Shortener</h1>
      <div className="w-96">
        <input
          type="text"
          placeholder="Enter URL"
          value={originalUrl}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
        />
        <button
          onClick={handleShorten}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Shorten
        </button>
      </div>
      <div className="mt-8 w-96">
        <h2 className="text-lg font-bold mb-4">Shortened URLs:</h2>
        {Object.entries(shortenedUrls).map(([shortUrl, originalUrl]) => (
          <p key={shortUrl} className="mb-2">
            <a
              href={originalUrl}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortUrl}
            </a>{" "}
            - {originalUrl}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
