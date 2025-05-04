import React from "react";
import "./CricketLoader.css";

export default function CricketLoader() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="cricket-loader">
        <div className="stumps">
          <div className="bail bail-left" />
          <div className="bail bail-right" />
          <div className="stump" />
          <div className="stump" />
          <div className="stump" />
        </div>
        <div className="ball" />
      </div>
      <span className="text-lg text-blue-700 font-semibold mt-4">
        Fetching fantasy matches...
      </span>
    </div>
  );
}
