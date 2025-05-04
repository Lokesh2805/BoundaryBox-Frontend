import React from "react";
import { FaMapMarkerAlt, FaCloudSun, FaUserTie, FaFlag, FaClock, FaUserCheck } from "react-icons/fa";

const MatchInfo = ({ matchInfo }) => {


  if (!matchInfo || !matchInfo["Data Scraped"]) return <p className="text-center text-gray-600">Match information is loading...</p>;

  // Destructure the "Data Scraped" field from matchInfo
  const {
    matchName,
    teamName = {},
    schedule,
    toss,
    wetherCondition = {},
    Umpire = {},
    location = "Not Available", // Assuming location is not provided in the data, using a placeholder
  } = matchInfo["Data Scraped"];

  const displayOrNA = (value) => value || <span className="text-gray-400 italic">Not Available</span>;

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-6xl mx-auto border-t-4 border-green-600">
      <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
        🏏 Match Information
      </h2>

      <div className="space-y-4 text-gray-700 text-sm sm:text-base">
        <p>
          <strong>Teams:</strong>{" "}
          {teamName.team1 && teamName.team2
            ? `${teamName.team1} vs ${teamName.team2}`
            : displayOrNA(null)}
        </p>

        <p>
          <strong className="flex items-center gap-1">
            <FaClock /> Schedule:
          </strong>{" "}
          {displayOrNA(schedule)}
        </p>

        <p>
          <strong className="flex items-center gap-1">
            <FaMapMarkerAlt /> Location:
          </strong>{" "}
          {displayOrNA(location)}
        </p>

        <p>
          <strong className="flex items-center gap-1">
            <FaFlag /> Toss:
          </strong>{" "}
          {displayOrNA(toss)}
        </p>

        <p>
          <strong className="flex items-center gap-1">
            <FaCloudSun /> Weather:
          </strong>{" "}
          {wetherCondition.sky || wetherCondition.temp || wetherCondition.humidity || wetherCondition.rain ? (
            <>
              {displayOrNA(wetherCondition.sky)}, Temp: {displayOrNA(wetherCondition.temp)}, 
              Humidity: {displayOrNA(wetherCondition.humidity)}, 
              Rain: {displayOrNA(wetherCondition.rain)}
            </>
          ) : (
            displayOrNA(null)
          )}
        </p>

        <p>
          <strong className="flex items-center gap-1">
            <FaUserCheck /> Umpires:
          </strong>{" "}
          {Umpire["On-field"] || Umpire.Third || Umpire.Referee ? (
            <>
              On-field: {displayOrNA(Umpire["On-field"])}<br />
              Third: {displayOrNA(Umpire.Third)}<br />
              Referee: {displayOrNA(Umpire.Referee)}
            </>
          ) : (
            displayOrNA(null)
          )}
        </p>
      </div>
    </div>
  );
};

export default MatchInfo;
