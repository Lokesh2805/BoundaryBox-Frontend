import React from "react";

export default function AboutPage() {
  return (
    <div className="space-y-14 pt-20  w-full bg-green-50 min-h-screen py-12 px-4 sm:px-10 text-gray-800 font-sans ">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-700">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Boundary Box – Where Cricket Meets Clarity
          </p>
        </div>

        <section className="bg-white rounded-2xl shadow-md p-8 mb-10 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Welcome to Boundary Box – Your Ultimate Cricket Companion.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At <strong>Boundary Box</strong>, we live and breathe cricket.
            Whether it's the thrill of a last-ball finish or the joy of picking
            the perfect fantasy team, we’re here to bring every heartbeat of the
            game closer to you. Our platform is designed to be your go-to
            destination for <strong>live scores</strong>,{" "}
            <strong>real-time match updates</strong>, and{" "}
            <strong>fantasy cricket insights</strong> – all in one place.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 mb-10">
          <div className="bg-white p-6 rounded-xl shadow border border-green-200">
            <h3 className="text-xl font-semibold mb-2 text-green-600">
              🏏 Live Match Coverage
            </h3>
            <p>
              Stay updated with real-time match info, scoreboards, player stats,
              and in-depth analysis – be it international or local matches.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-green-200">
            <h3 className="text-xl font-semibold mb-2 text-green-600">
              🌟 Fantasy Cricket Predictions
            </h3>
            <p>
              Dominate your leagues with <strong>AI-powered insights</strong>{" "}
              and curated fantasy team picks from cricket lovers and data
              analysts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-green-200">
            <h3 className="text-xl font-semibold mb-2 text-green-600">
              🧠 Smarter Matchday Decisions
            </h3>
            <p>
              Use <strong>data-driven predictions</strong> and player
              performance forecasts to stay ahead of your competition in fantasy
              cricket.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-green-200">
            <h3 className="text-xl font-semibold mb-2 text-green-600">
              👥 Cricket for Everyone
            </h3>
            <p>
              From casual fans to fantasy pros – we deliver an engaging,
              easy-to-use experience that makes cricket even more fun.
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-400 mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
            Our Mission
          </h3>
          <blockquote className="italic text-gray-600 border-l-4 border-yellow-400 pl-4">
            "To empower cricket fans and fantasy players with reliable,
            real-time, and intelligent insights that elevate their experience of
            the sport."
          </blockquote>
          <p className="mt-4">
            We’re driven by a shared love for cricket and a passion for stats.
            Boundary Box is more than a score site – it's a smarter way to enjoy
            the game.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-500">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">
            Built by Fans, for Fans
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We’re a dedicated team of cricket enthusiasts, analysts, and tech
            lovers who built this platform to celebrate the sport and help fans
            feel more connected than ever. Whether you're watching from the
            stands or refreshing the scores on your phone,{" "}
            <strong>Boundary Box</strong> has your back.
          </p>
        </section>

        <div className="text-center mt-12">
          <h4 className="text-xl font-semibold text-green-700">
            Join the Game. Live the Passion.
          </h4>
          <p className="mt-2 text-gray-600">
            Boundary Box – Where Cricket Meets Clarity.
          </p>
        </div>
      </div>
    </div>
  );
}
