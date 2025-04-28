import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-transparent text-white p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Scores */}
      <div className="bg-gray-300 rounded-xl p-4 shadow-md col-span-1">
        <h2 className="text-lg font-semibold">Scores</h2>
        <p>BLB 83/5 (10.2 overs)</p>
        <p>MW Yet to Bat</p>
      </div>

      {/* Run Rate Graph */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-md col-span-1">
        <h2 className="text-lg font-semibold">Run Rate Chart</h2>
        <div className="h-40 bg-gray-700 rounded-md flex items-center justify-center">
          <p>Graph Placeholder</p>
        </div>
      </div>

      {/* Match Poster */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-md col-span-1 row-span-2 flex flex-col items-center justify-center">
        <img
          src="https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1729088018880_pakveng.jpg"
          alt="Match Poster"
          className="rounded-xl h-40 w-full object-cover mb-2"
        />
        <p className="text-center">Maharaja T20 2024</p>
      </div>

      {/* Weather Conditions */}
      <div className="bg-blue-600 rounded-xl p-4 shadow-md col-span-1">
        <h2 className="text-lg font-semibold">Weather Conditions</h2>
        <p>Temp: 24°C</p>
        <p>Sky: Cloudy</p>
        <p>Humidity: 84%</p>
        <p>Rain: 90%</p>
      </div>

      {/* Toss Result */}
      <div className="bg-yellow-600 rounded-xl p-4 shadow-md col-span-1">
        <p>Bengaluru Blasters won the toss and chose to bowl</p>
      </div>

      {/* Location */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-md col-span-1">
        <h2 className="text-lg font-semibold">Location</h2>
        <p>M. Chinnaswamy Stadium, Bengaluru</p>
      </div>

      {/* Umpire Info */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-md col-span-1">
        <h2 className="text-lg font-semibold">Umpire Info</h2>
        <p>On Field: Vikas Lund, DL Deepak</p>
        <p>Third: Belur Ravi</p>
        <p>Referee: Balachandra Akhil</p>
      </div>

      {/* Preferred Ball */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-md col-span-1">
        <h2 className="text-lg font-semibold">Preferred Ball</h2>
        <p>Pace: 68%</p>
        <p>Spin: 32%</p>
      </div>

      {/* Head to Head */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-md col-span-1">
        <h2 className="text-lg font-semibold">Head to Head</h2>
        <p>Bengaluru Blasters: 4</p>
        <p>Mysore Warriors: 3</p>
      </div>

      {/* Player Analysis */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-md col-span-2">
        <h2 className="text-lg font-semibold mb-2">Player Analysis</h2>
        <p>BLB: 144/10 (20.0)</p>
        <p>MW: 144/7 (20.0)</p>
        <p>BLB Won by 4 Wickets 🏏</p>
      </div>

      {/* Winning Prediction */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-md col-span-4">
        <h2 className="text-lg font-semibold">Winning Prediction</h2>
        <div className="w-full bg-gray-600 h-4 rounded-full overflow-hidden mt-2">
          <div className="bg-yellow-500 h-4" style={{ width: "69%" }}></div>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span>BLB - 31%</span>
          <span>MW - 69%</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
