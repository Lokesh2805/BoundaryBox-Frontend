import React from "react";
import "./CricketLoader.css";

export default function CricketLoader() {
  return (
    
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
      
  );
}
