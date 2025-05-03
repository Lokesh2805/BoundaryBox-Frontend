import { useState } from "react";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Change to false to test unauth view

  return (
    <nav className="bg-black bg-opacity-80 backdrop-blur-md fixed w-full z-50 shadow-md font-josefin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img className="h-20 w-auto" src={Logo} alt="Logo" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/about"
              className="text-white hover:text-blue-400 transition font-medium"
            >
              ABOUT US
            </a>
            <a
              href="/fantasyMatches"
              className="text-white hover:text-blue-400 transition font-medium"
            >
              FANTASY MATCHES
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition font-medium"
            >
              RANKING
            </a>
          </div>

          {/* Right side: login/profile */}
          <div className="hidden md:flex items-center">
            {isSignedIn ? (
              <div className="relative">
                <a href="/profile">
                  <img
                    src="https://i.pravatar.cc/150?img=56"
                    alt="Avatar"
                    className="h-10 w-10 rounded-full border-2 border-blue-500 hover:scale-105 transition"
                  />
                </a>
              </div>
            ) : (
              <a
                href="/login"
                className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition font-medium"
              >
                Login / Signup
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md transition-all">
          <div className="px-4 py-4 space-y-2">
            <a
              href="/about"
              className="block text-white hover:text-blue-400 text-base font-medium"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="block text-white hover:text-blue-400 text-base font-medium"
            >
              FANTASY MATCHES
            </a>
            <a
              href="#"
              className="block text-white hover:text-blue-400 text-base font-medium"
            >
              RANKING
            </a>

            {/* Conditional rendering for mobile */}
            {isSignedIn ? (
              <a
                href="/profile"
                className="block text-white font-medium  items-center space-x-2"
              >
                <img
                  src="https://i.pravatar.cc/150?img=56"
                  alt="Avatar"
                  className="h-8 w-8 rounded-full border border-white"
                />
                <span>Profile</span>
              </a>
            ) : (
              <a
                href="/login"
                className="block w-full text-center bg-white text-black py-2 rounded-md font-medium hover:bg-gray-300"
              >
                Login / Signup
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
