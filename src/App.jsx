import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ScorecardPage from "./pages/ScoreboardPage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RankingDisplay from "./pages/RankingPage";
import FantasyMachesDisplay from "./pages/FantasyMachesDisplay";
import PrivateRoute from "./components/Auth/PrivateRoute";
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <> <Toaster
    position="bottom-right"
    toastOptions={{
      success: {
        style: {
          background: '#4ade80',
          color: 'black',
          fontWeight: 'bold',
        },
      },
      error: {
        style: {
          background: '#f87171',
          color: 'black',
          fontWeight: 'bold',
        },
      },
    }}
  />
  
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/scoreboard/:slug" element={<PrivateRoute><ScorecardPage /></PrivateRoute>} />
        <Route path="/fantasymatches" element={<PrivateRoute><FantasyMachesDisplay /></PrivateRoute>} />
        <Route path="/ranking/:slug" element={<PrivateRoute><RankingDisplay /></PrivateRoute>} />
      </Routes>
    </Router>
  
  </>
   
  );
}

export default App;
