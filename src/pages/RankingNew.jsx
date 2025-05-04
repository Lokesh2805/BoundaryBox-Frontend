import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trophy, Clock9 } from "lucide-react";
import CricketLoader from "../components/Loader/CricketLoader";

export default function RankingPage() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingMatches = async () => {
      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/criclytics/upcomingMatches",
          {
            url: "https://www.cricket.com/criclytics",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Fetched data:", res.data);
        const matchList = res.data?.DataScraped?.match_lst || [];
        setMatches(matchList);
      } catch (error) {
        console.error("Error fetching rankings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingMatches();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f0ff] to-[#ffffff] p-6 pt-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-700 flex justify-center items-center gap-2">
          <Trophy className="w-8 h-8 text-yellow-500" />
          Fantasy Match Center
        </h1>
        <p className="text-gray-600 mt-2 text-md">
          Track upcoming fantasy-friendly matches and plan your winning lineup!
        </p>
      </div>

      {loading ? (
        <CricketLoader/>
      ) : matches.length === 0 ? (
        <div className="text-center text-gray-600">No upcoming matches available.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-10">
          {matches.map((match, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg border-t-4 border-blue-600 transition transform hover:-translate-y-1 hover:shadow-xl p-6"
            >
              <h2 className="text-xl font-bold text-blue-800 mb-2">{match.title}</h2>
              <div className="flex items-center text-gray-600 text-sm mb-4">
                <Clock9 className="w-4 h-4 mr-2 text-blue-500" />
                <span>Toss Time: {match.toss_time}</span>
              </div>
              <a
                href={match.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-sm font-medium"
              >
                View Match Insights
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
