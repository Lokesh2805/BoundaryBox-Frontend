import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>About Us</h1>
        
        <p style={styles.text}>
          Welcome to <strong>Boundary Box</strong> – your one-stop destination for everything cricket. From real-time match scores to deep fantasy insights, we aim to deliver the ultimate experience for every cricket fan and fantasy player.
        </p>

        <p style={styles.text}>
          At Boundary Box, we are more than just a scoreboard. We are a team of passionate cricket enthusiasts and data analysts who believe that the game is best enjoyed when backed by knowledge. With our seamless interface and real-time updates, you’ll never miss a moment—whether it’s a last-ball thriller or a record-breaking innings.
        </p>

        <p style={styles.text}>
          Fantasy cricket is changing the way fans engage with the game, and we’re right there leading the charge. With expertly curated fantasy tips, player form trackers, pitch and weather reports, and intelligent algorithms, we help you build winning fantasy teams backed by stats, not just hunches.
        </p>

        <p style={styles.text}>
          We cover a wide range of domestic and international matches including IPL, PSL, BBL, and ICC events. Our prediction models crunch hundreds of variables, from player consistency to head-to-head matchups, giving you insights others miss.
        </p>

        <p style={styles.text}>
          But that’s not all. With our community-driven approach, we offer forums, expert Q&As, and pre-match discussions to keep you involved and engaged. Whether you’re a casual viewer, a hardcore fantasy strategist, or just love the numbers behind the game, Boundary Box has something for you.
        </p>

        <p style={styles.text}>
          <strong>Our Mission:</strong> To empower every cricket fan with tools, insights, and community that make following the game more interactive, rewarding, and fun.
        </p>

        <p style={styles.text}>
          <strong>Our Vision:</strong> To be the most trusted cricket intelligence platform globally, redefining how fans experience the sport.
        </p>

        <p style={styles.text}>
          Born out of pure love for cricket and a commitment to quality content, Boundary Box is built for fans, by fans. So whether you're here to catch the latest scores or top your fantasy league, welcome to the squad.
        </p>

        <p style={styles.text}>
          Join us and take your cricket journey to the next level.
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: 'linear-gradient(to bottom, #1a1a1a, #111)',
    color: '#f0f0f0',
    minHeight: '100vh',
    padding: '4rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  card: {
    background: 'linear-gradient(to bottom right, #ffffff0f, #1a1a1a)',
    padding: '2.5rem',
    borderRadius: '20px',
    maxWidth: '1000px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  heading: {
    fontSize: '2.8rem',
    marginBottom: '1.8rem',
    textAlign: 'center',
    color: '#00bfff',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    lineHeight: '1.8',
    color: '#ddd',
  },
};

export default AboutPage;
