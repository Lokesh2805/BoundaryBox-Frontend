import React from "react";
import { BiSolidCricketBall } from "react-icons/bi";
import { GiCricketBat } from "react-icons/gi";

function Scorecard({ scorecardData }) {
  const excludedKeys = ["matchUrl", "status", "updatedAt", "_id"];

  return (
    <div className="max-w-7xl mx-auto p-4">
      {scorecardData ? (
        <div className="space-y-10">
          {Object.entries(scorecardData)
            .filter(([key]) => !excludedKeys.includes(key))
            .map(([teamName, teamData], i) => (
              <div
                key={i}
                className="bg-white border-l-4  border-blue-600 shadow-md rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2 mb-4">
                  <GiCricketBat /> {teamName} - Batting
                </h2>

                {teamData?.Batting ? (
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
                          <div className="text-sm text-gray-600 text-right">
                            {stats?.R} ({stats?.B})<br />
                            <span className="italic text-xs">
                              {stats?.Status}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <p className="text-gray-400 italic mb-6">No batting data</p>
                )}

                <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2 mb-4">
                  <BiSolidCricketBall /> {teamName} - Bowling
                </h2>

                {teamData?.Bowling ? (
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
                          <div className="text-sm text-gray-600 text-right">
                            {stats?.B} overs<br />
                            {stats?.R} runs, {stats?.W} wickets
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <p className="text-gray-400 italic">No bowling data</p>
                )}
              </div>
            ))}
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
