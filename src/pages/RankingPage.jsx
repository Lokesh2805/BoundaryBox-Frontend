import React, { useEffect, useState } from "react";

const RANK_LABELS = {
  1: { label: "🔥 Must-Have", color: "bg-green-100 text-green-800" },
  2: { label: "⭐ Top Pick", color: "bg-yellow-100 text-yellow-800" },
  3: { label: "👍 Solid Option", color: "bg-orange-100 text-orange-800" },
  4: { label: "💡 Consider", color: "bg-blue-100 text-blue-800" },
  5: { label: "🚫 Risky Pick", color: "bg-red-100 text-red-800" },
};

const groupPlayersByRank = (players, ranks) => {
  const grouped = {};
  players.forEach((player, idx) => {
    const rank = ranks[idx];
    if (!grouped[rank]) grouped[rank] = [];
    grouped[rank].push(player);
  });
  return grouped;
};

function TeamRankingCard({ teamName, playerList, rankList, teamColor }) {
  const grouped = groupPlayersByRank(playerList, rankList);

  return (
    <div className={`bg-white p-5 rounded-xl shadow-xl border-t-4 ${teamColor}`}>
      <h2 className="text-2xl font-extrabold mb-4 text-gray-800 text-center border-b pb-2">
        {teamName}
      </h2>
      <div className="space-y-4">
        {Object.entries(grouped)
          .sort((a, b) => a[0] - b[0])
          .map(([rank, players], idx) => (
            <div key={idx}>
              <div
                className={`text-sm px-3 py-1 inline-block rounded-full mb-2 font-semibold ${RANK_LABELS[rank].color}`}
              >
                Rank {rank} - {RANK_LABELS[rank].label}
              </div>
              <ul className="space-y-1">
                {players.map((player, i) => (
                  <li
                    key={i}
                    className="bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded border text-gray-700 shadow-sm"
                  >
                    {player}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}

function RankingDisplay() {
  const [rankingData, setRankingData] = useState(null);

  useEffect(() => {
    fetch("/rankingdata.json")
      .then((res) => res.json())
      .then((data) => setRankingData(data[0])) // single match assumption
      .catch((err) => console.error("Failed to load ranking data", err));
  }, []);

  if (!rankingData) {
    return <div className="text-center mt-10 text-gray-500">Loading rankings...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
        🏏 Fantasy Player Rankings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TeamRankingCard
          teamName={rankingData.team1}
          playerList={rankingData.ranking_team1.player_lst}
          rankList={rankingData.ranking_team1.rank_lst}
          teamColor="border-blue-600"
        />
        <TeamRankingCard
          teamName={rankingData.team2}
          playerList={rankingData.ranking_team2.player_lst}
          rankList={rankingData.ranking_team2.rank_lst}
          teamColor="border-orange-600"
        />
      </div>

     
    </div>
  );
}

export default RankingDisplay;
