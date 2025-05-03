// import React from 'react';
import React, { useRef, useState, useEffect } from "react";
import { fetchFantasyMatchSchedule } from '../services/getMatchSchedule';

// const matchData = {
//   match_lst: [
//     {
//       title: 'Sunrisers Hyderabad vs Mumbai Indians',
//       link: 'https://www.cricket.com/live-score/sunrisers-hyderabad-vs-mumbai-indians-match-41-indian-premier-league-2025-257255/criclytics',
//       toss_time: '21 hrs 27 mins to toss',
//     },
//     {
//       title: 'Multan Sultans vs Islamabad United',
//       link: 'https://www.cricket.com/live-score/multan-sultans-vs-islamabad-united-match-13-pakistan-super-league-2025-257656/criclytics',
//       toss_time: '22 hrs 27 mins to toss',
//     },
//   ],
// };

const MatchCard = ({ title, link, tossTime }) => (
  <div style={styles.card}>
    <h3 style={styles.title}>{title}</h3>
    <p style={styles.time}>{tossTime}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" style={styles.button}>
      View Ranking
    </a>
  </div>
);

const MatchList = () => {
  const [matchData, setMatchData] = useState({ match_lst: [] });
//   const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchFantasyMatchSchedule()
    .then((data) => {
        console.log("Fetched data:", data);
        setMatchData(data);
    //   const dates = Object.keys(data);
    //   setActiveDate(dates[0]);
    })
    .catch((err) => {
        console.error("Error fetching match data:", err);
    });
}, []);

  return (
    <div style={styles.container}>
      {matchData.match_lst.map((match, idx) => (
        <MatchCard
          key={idx}
          title={match.title}
          link={match.link}
          tossTime={match.toss_time}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    padding: '2rem',
    paddingTop: '6rem',
    background: 'linear-gradient(to bottom, #d4e2f0, #f8f8f8)',
    minHeight: '100vh',
  },
  card: {
    background: 'linear-gradient(135deg, #fdfcfb, #e2d1c3)',
    borderRadius: '12px',
    padding: '1.5rem',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  time: {
    marginBottom: '1rem',
    color: '#666',
  },
  button: {
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    border: '1px solid #007bff',
    borderRadius: '6px',
    color: '#007bff',
    fontWeight: 'bold',
    transition: '0.3s',
  },
};

export default MatchList;
