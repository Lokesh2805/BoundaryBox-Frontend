import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ScorecardPage from './pages/ScoreboardPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RankingDisplay from './pages/RankingPage';
import RankingPage from './pages/RankingNew';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/scoreboard/:slug" element={<ScorecardPage />} />
        <Route path='/ranking' element={<RankingPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
