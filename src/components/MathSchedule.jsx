import React, { useRef, useState } from "react";
import { matchData } from "../../public/matchdata";
import { ChevronLeft, ChevronRight } from "lucide-react"; // You can install lucide-react or use any icon library

const extractTeamNames = (url) => {
  try {
    const parts = url.split("/");
    const slug = parts[parts.length - 2];
    const match = slug.match(/([a-z]+-vs-[a-z]+)/i);
    return match ? match[0].replace(/-/g, " ").toUpperCase() : "MATCH";
  } catch {
    return "MATCH";
  }
};

export default function MatchSchedule() {
  const dates = Object.keys(matchData);
  const [activeDate, setActiveDate] = useState(dates[0]);

  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const scrollAmount = 200;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Date Carousel with Slider Buttons */}
      <div className="relative mb-6">
        <button
          onClick={() => scrollCarousel("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={carouselRef}
          className="flex space-x-3 overflow-x-auto scrollbar-hide px-10"
        >
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => setActiveDate(date)}
              className={`min-w-max px-4 py-2 rounded-full border text-sm font-semibold transition ${
                activeDate === date
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
            >
              {date}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollCarousel("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Match Cards in Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {matchData[activeDate].time.map((time, index) => {
          const link = matchData[activeDate].link[index];
          const teams = extractTeamNames(link);

          return (
            <a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block bg-gradient-to-tr from-orange-100 to-blue-100 p-0 rounded-xl overflow-hidden shadow-lg border border-gray-200 transition duration-300 ease-in-out hover:border-blue-500 hover:shadow-[0_0_12px_3px_rgba(59,130,246,0.4)]"
            >
              <div className="p-4 bg-opacity-90">
                <div className="text-center text-lg font-extrabold text-gray-900 uppercase tracking-wide">
                  {teams}
                </div>
                <div className="text-center text-sm text-gray-600 mt-1">
                  {time}
                </div>
                <div className="mt-3 text-center">
                  <a
                    href={`/scoreboard/${teams
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs bg-white text-blue-700 font-medium px-3 py-1 rounded-full border border-blue-300 transition duration-300 ease-in-out hover:border-blue-500 hover:shadow-[0_0_8px_2px_rgba(59,130,246,0.5)]"
                  >
                    View Scorecard
                  </a>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
