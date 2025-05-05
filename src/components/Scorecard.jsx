import React from "react";
import { BiSolidCricketBall } from "react-icons/bi";
import { GiCricketBat } from "react-icons/gi";

function Scorecard({ scorecard }) {
  console.log(scorecard["Data Scraped"].result);

  const excludedKeys = ["matchUrl", "status", "updatedAt", "result", "_id"];

  const scrapedData = scorecard["Data Scraped"];

  return (
    <div className="max-w-7xl mx-auto p-4">
      {scrapedData ? (
        <div className="space-y-10">
          {/* Loop through each team's data */}
          {Object.entries(scrapedData)
            .filter(([key]) => !excludedKeys.includes(key))
            .map(([teamName, teamData], i) => {
              const hasBatting = teamData?.Batting && Object.keys(teamData.Batting).length > 0;
              const hasBowling = teamData?.Bowling && Object.keys(teamData.Bowling).length > 0;

              // Skip rendering the whole team block if there's no batting or bowling data
              if (!hasBatting && !hasBowling) return null;

              return (
                <div
                  key={i}
                  className="bg-white border-l-4 border-blue-600 shadow-md rounded-xl p-6"
                >
                  {/* Batting Section */}
                  {hasBatting && (
                    <>
                      <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2 mb-4">
                        <GiCricketBat /> {teamName} - Batting
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {Object.entries(teamData.Batting).map(
                          ([batsmanName, stats], idx) => (
                            <div
                              key={idx}
                              className="bg-gray-50 p-3 rounded shadow-sm flex justify-between items-center"
                            >
                              <div className="font-semibold text-gray-800">
                                {batsmanName}
                              </div>
                              <div className="text-sm text-blue-600 text-right">
                                {stats?.R} runs in ({stats?.B} balls)
                                <br />
                                <span className="italic text-xs">
                                  {stats?.Status}
                                </span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </>
                  )}

                  {/* Bowling Section */}
                  {hasBowling && (
                    <>
                      <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2 mb-4">
                        <BiSolidCricketBall /> {teamName} - Bowling
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(teamData.Bowling).map(
                          ([bowlerName, stats], idx) => (
                            <div
                              key={idx}
                              className="bg-gray-50 p-3 rounded shadow-sm flex justify-between items-center"
                            >
                              <div className="font-semibold text-gray-800">
                                {bowlerName}
                              </div>
                              <div className="text-sm text-green-600 text-right">
                                {stats?.B} overs
                                <br />
                                {stats?.R} runs, {stats?.W} wickets
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}

          {/* Match Result */}
          {scorecard["Data Scraped"].result && (
            <div className="text-center mt-10">
              <p className="text-xl font-semibold text-purple-700">
                🏆 {scorecard["Data Scraped"].result}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10 text-lg">
          Loading scorecard...
        </div>
      )}
    </div>
  );
}

export default Scorecard;
