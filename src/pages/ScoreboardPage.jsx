import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Matchinfo from "../components/Matchinfo";
import Scorecard from "../components/Scorecard";
import { useMatchInfo } from "../context/MatchInfoContext";
import { fetchLiveMatchInfo, fetchLiveMatchScorecard } from "../services/apis"; // ⬅️ Make sure this is imported
import CricketLoader from "../components/Loader/CricketLoader";

export default function ScoreboardPage() {
  const { slug } = useParams(); // e.g. blb-vs-mw
  const [activeTab, setActiveTab] = useState("info");
  const [scorecardData, setScorecardData] = useState(null);
  const [scorecardError, setScorecardError] = useState(null);

 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const matchUrl = queryParams.get("link");
  const { matchInfo, setMatchInfo } = useMatchInfo();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
useEffect(() => {
  const getMatchInfo = async () => {
    if (!matchInfo && matchUrl) {
      const info = await fetchLiveMatchInfo(matchUrl, "match info");
      setMatchInfo(info); // from context
    }
  };

  getMatchInfo();
}, [matchUrl]);

  useEffect(() => {
    const getScorecard = async () => {
      console.log(matchInfo["Data Scraped"].matchUrl)
      if (matchInfo["Data Scraped"].matchUrl) {
        const result = await fetchLiveMatchScorecard(matchInfo["Data Scraped"].matchUrl);
        if (result.success) {
          setScorecardData(result.data);
          setScorecardError(null);
        } else {
          setScorecardData(null);
          setScorecardError(result.message || "Something went wrong");
        }
      }
    };

    if (activeTab === "scorecard" && !scorecardData && !scorecardError) {
      getScorecard();
    }
  }, [activeTab, matchInfo]);

  if (!matchInfo)
    return <div className="flex flex-col items-center justify-center mt-20">
  <CricketLoader/>
  <span className="text-lg text-blue-700 font-semibold">
        Loading Match Information...
      </span></div>;
console.log(scorecardData, scorecardError);
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
        {activeTab === "info" && <Matchinfo matchInfo={matchInfo} />}

        {activeTab === "scorecard" && (
          <>
            {scorecardError ? (
              <div className="text-center text-red-600 font-semibold">
                {scorecardError}
              </div>
            ) : scorecardData ? (
              <Scorecard scorecard={scorecardData} />
            ) : (
              <div className="flex flex-col items-center justify-center"><CricketLoader/>
                     <span className="text-lg text-blue-700 font-semibold">
                     Loading Scorecard...
                   </span>
                     </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
