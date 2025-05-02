// components/ScoreboardPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Matchinfo from "../components/Matchinfo";
import Scorecard from "../components/Scorecard";

export default function ScoreboardPage() {
  const { slug } = useParams(); // e.g. blb-vs-mw
  const [scorecardData, setScorecardData] = useState(null);
  const [activeTab, setActiveTab] = useState("info"); // 'info' | 'scorecard'
  const [matchInfo, setMatchInfo] = useState(null);

  // Fetch match info (always on mount)
  useEffect(() => {
    const fetchMatchInfo = async () => {
      try {
        const res = await fetch("/matchinfo.json");
        const data = await res.json();
        const matched = data.find((match) =>
          match.matchUrl.includes(slug.toLowerCase())
        );
        setMatchInfo(matched || null);
      } catch (err) {
        console.error("Error loading match info:", err);
      }
    };

    fetchMatchInfo();
  }, [slug]);

  // Fetch scorecard only when user clicks Scorecard tab
  useEffect(() => {
    if (activeTab === "scorecard" && !scorecardData) {
      const fetchScorecard = async () => {
        try {
          const res = await fetch("/matchScorecard.json");
          const data = await res.json();
          const matched = data.find((match) =>
            match.matchUrl.includes(slug.toLowerCase())
          );

          if (matched) {
            setScorecardData(matched);
          } else {
            console.warn(`No scorecard found for slug: ${slug}`);
          }
        } catch (err) {
          console.error("Error fetching scorecard:", err);
        }
      };

      fetchScorecard();
    }
  }, [activeTab, slug, scorecardData]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (!matchInfo)
    return <div className="text-center mt-10">Loading match data...</div>;

  const { teamName, schedule, matchName, result } = matchInfo;

  return (
    <div className="min-h-screen bg-[#0f1f2d] text-white">
      {/* Tabs */}
      <div className="sticky top-0 z-10 bg-[#0f1f2d] shadow-md pt-16">
        <div className="flex">
          <button
            className={`flex-1 py-4 text-center transition duration-300 ${
              activeTab === "info"
                ? "bg-blue-600 text-white font-bold border-b-4 border-blue-300"
                : "bg-[#0f1f2d] text-gray-300 hover:bg-[#1a2b3a]"
            }`}
            onClick={() => handleTabChange("info")}
          >
            Match Info
          </button>
          <button
            className={`flex-1 py-4 text-center transition duration-300 ${
              activeTab === "scorecard"
                ? "bg-blue-600 text-white font-bold border-b-4 border-blue-300"
                : "bg-[#0f1f2d] text-gray-300 hover:bg-[#1a2b3a]"
            }`}
            onClick={() => handleTabChange("scorecard")}
          >
            Scorecard
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white text-black mt-0 p-6 rounded-b-xl shadow-md">
        {activeTab === "info" && (
         <Matchinfo matchInfo={matchInfo}/>
        )}

        {activeTab === "scorecard" && (
          <Scorecard scorecardData={scorecardData} />
        )}
      </div>
    </div>
  );
}
