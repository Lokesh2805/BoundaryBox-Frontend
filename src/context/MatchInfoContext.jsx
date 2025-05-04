// context/MatchInfoContext.jsx
import React, { createContext, useContext, useState } from "react";

const MatchInfoContext = createContext();

export const useMatchInfo = () => useContext(MatchInfoContext);

export const MatchInfoProvider = ({ children }) => {
  const [matchInfo, setMatchInfo] = useState(null);

  return (
    <MatchInfoContext.Provider value={{ matchInfo, setMatchInfo }}>
      {children}
    </MatchInfoContext.Provider>
  );
};
