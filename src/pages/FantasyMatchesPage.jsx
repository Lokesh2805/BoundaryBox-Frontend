import React from 'react';
import Footer from "../components/Footer";
// import MatchSchedule from "../components/MathSchedule";
import FantasyMatchSchdeule from '../components/FantasyMatchSchedule';

const FantasyMatchesPage = () => {
  return (
    <div
      className="space-y-14 min-h-screen w-full "
      style={{
        background: `radial-gradient(circle at top left, #C1E2E1 30%, #262626 70%)`,
      }}
    >
      {/* <Carousel /> */}
      <FantasyMatchSchdeule />
      <Footer />
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

export default FantasyMatchesPage;
