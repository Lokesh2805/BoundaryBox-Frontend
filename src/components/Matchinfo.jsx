import React from "react";
import {
  FaMapMarkerAlt,
  FaCloudSun,
  FaFlag,
  FaClock,
  FaUserCheck,
  FaTrophy,
  FaChartPie,
  FaBullseye,
} from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#FF8042"]; // Pace / Spin colors

const MatchInfo = ({ matchInfo }) => {
  if (!matchInfo || !matchInfo["Data Scraped"])
    return (
      <p className="text-center text-gray-600 mt-10">
        Match information is loading...
      </p>
    );

  const {
    matchName,
    teamName = {},
    schedule,
    toss,
    wetherCondition = {},
    Umpire = {},
    headToHead = {},
    prefBall = {},
    venueStats = {},
    teamComparison = {},
  } = matchInfo["Data Scraped"];

  const displayOrNA = (value) =>
    value ? value : <span className="text-gray-400 italic">Not Available</span>;

  const pieData = [
    { name: "Pace", value: parseFloat(prefBall.Pace || "0") },
    { name: "Spin", value: parseFloat(prefBall.Spin || "0") },
  ];

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-7xl mx-auto border-t-4 border-green-600 mt-6 space-y-10">
      <h2 className="text-3xl font-bold text-green-700 flex items-center gap-3">
        🏏 Match Info - {displayOrNA(matchName)}
      </h2>

      {/* Basic Match Info */}
      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        <p>
          <strong>Teams:</strong>{" "}
          {teamName.team1 && teamName.team2
            ? `${teamName.team1} vs ${teamName.team2}`
            : displayOrNA(null)}
        </p>
        <p className="flex items-center gap-2">
          <FaClock /> <strong>Schedule:</strong> {displayOrNA(schedule)}
        </p>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt /> <strong>Location:</strong> Not Available
        </p>
        <p className="flex items-center gap-2">
          <FaFlag /> <strong>Toss:</strong> {displayOrNA(toss)}
        </p>
        <p className="flex items-center gap-2">
          <FaCloudSun /> <strong>Weather:</strong>{" "}
          {wetherCondition.sky ||
          wetherCondition.temp ||
          wetherCondition.humidity ? (
            <>
              {displayOrNA(wetherCondition.sky)}, Temp:{" "}
              {displayOrNA(wetherCondition.temp)}, Humidity:{" "}
              {displayOrNA(wetherCondition.humidity)}, Rain:{" "}
              {displayOrNA(wetherCondition.rain)}
            </>
          ) : (
            displayOrNA(null)
          )}
        </p>
        <p className="flex items-center gap-2">
          <FaUserCheck /> <strong>Umpires:</strong>{" "}
          {Umpire["On-field"] || Umpire.Third || Umpire.Referee ? (
            <>
              On-field: {displayOrNA(Umpire["On-field"])} | Third:{" "}
              {displayOrNA(Umpire.Third)} | Referee:{" "}
              {displayOrNA(Umpire.Referee)}
            </>
          ) : (
            displayOrNA(null)
          )}
        </p>
      </div>

      {/* Head-to-Head */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <FaTrophy /> Head-to-Head Wins
        </h3>
        <p>
          {teamName.team1}: <strong>{headToHead.team1 || "0"}</strong> wins |{" "}
          {teamName.team2}: <strong>{headToHead.team2 || "0"}</strong> wins
        </p>
      </div>

      {/* Preferred Bowling Pie Chart */}
      <div className="bg-gray-50 p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FaChartPie /> Preferred Bowling Style
        </h3>
        {pieData.every((item) => isNaN(item.value) || item.value === 0) ? (
          <p className="text-gray-400 italic text-sm">
            No data available for preferred bowling style.
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Venue Stats */}
      <div className="bg-gray-50 p-6 rounded-lg border space-y-2">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <FaMapMarkerAlt /> Venue Stats
        </h3>
        <p>Total Matches: {venueStats.totalMatch || "N/A"}</p>
        <p>Win Bat First: {venueStats.winOrder?.batFirst || "N/A"}</p>
        <p>Win Bowl First: {venueStats.winOrder?.bowlFirst || "N/A"}</p>
        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          <div>
            <strong>Highest Scores:</strong>
            <p>Total: {venueStats.scoreDetails?.legendScore?.highest?.total}</p>
            <p>
              Chased: {venueStats.scoreDetails?.legendScore?.highest?.chased}
            </p>
          </div>
          <div>
            <strong>Lowest Scores:</strong>
            <p>Total: {venueStats.scoreDetails?.legendScore?.lowest?.total}</p>
            <p>
              Defended: {venueStats.scoreDetails?.legendScore?.lowest?.defended}
            </p>
          </div>
        </div>
      </div>

      {/* Team Comparison */}
      <div className="bg-gray-50 p-6 rounded-lg border space-y-3">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <FaBullseye /> Team Comparison
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {["team1", "team2"].map((teamKey) => (
            <div key={teamKey}>
              <p className="font-semibold text-blue-700">{teamName[teamKey]}</p>
              <p>Matches Played: {teamComparison.matchPlayed?.[teamKey]}</p>
              <p>Win %: {teamComparison.win?.[teamKey]}</p>
              <p>
                Avg Score: {teamComparison.scoreDetails?.avgScore?.[teamKey]}
              </p>
              <p>
                Highest Score:{" "}
                {teamComparison.scoreDetails?.highestScore?.[teamKey]}
              </p>
              <p>
                Lowest Score:{" "}
                {teamComparison.scoreDetails?.lowestScore?.[teamKey]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Avg Inning Scores */}
      <div className="bg-gray-50 p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-2">📊 Average Inning Scores</h3>
        <p>
          First Innings: {venueStats.scoreDetails?.avgScore?.firstInn || "N/A"}
        </p>
        <p>
          Second Innings:{" "}
          {venueStats.scoreDetails?.avgScore?.secondInn || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default MatchInfo;
