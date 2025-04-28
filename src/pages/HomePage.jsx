import React from "react";
import Carousel from "../components/Carousel";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import MatchSchedule from "../components/MathSchedule";
export default function HomePage() {
  return (
    <div
      className="space-y-14 min-h-screen w-full "
      style={{
        background: `radial-gradient(circle at top left, #C1E2E1 30%, #262626 70%)`,
      }}
    >
      <Carousel />
      <MatchSchedule />
      <Footer />
    </div>
  );
}
