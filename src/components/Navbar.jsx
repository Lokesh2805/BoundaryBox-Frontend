import { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem("loggedInUser");
    setIsSignedIn(!!user); // true if user exists
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsSignedIn(false);
    setShowDropdown(false);
    window.location.href = "/"; // redirect to homepage
  };


  return (
    <nav className="bg-black bg-opacity-80 backdrop-blur-md fixed w-full z-20 shadow-md font-josefin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img className="h-20 w-auto" src={Logo} alt="Logo" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-white hover:text-blue-400 transition font-medium"
            >
              HOME
            </a>
            <a
              href="/about"
              className="text-white hover:text-green-600 transition font-medium"
            >
              ABOUT US
            </a>
            <a
              href="/fantasymatches"
              className="text-white hover:text-blue-400 transition font-medium"
            >
              FANTASY MATCHES
            </a>
          </div>

          {/* Right side: login/profile */}
          <div className="hidden md:flex items-center">
            {isSignedIn ? (
              <div className="relative">
                <button onClick={() => setShowDropdown(!showDropdown)}
                className="focus:outline-none">
                  <FaUser className="h-10 w-10 rounded-full border-2 border-blue-500 hover:scale-105 transition text-white p-1" />
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
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
              href="/fantasymatches"
              className="block text-white hover:text-blue-400 text-base font-medium"
            >
              FANTASY MATCHES
            </a>
            <a
              href="/ranking"
              className="block text-white hover:text-blue-400 text-base font-medium"
            >
              RANKING
            </a>

            {isSignedIn ? (
              <a href="/">
                <FaUser className="h-10 w-10 rounded-full border-2 border-blue-500 hover:scale-105 transition text-white p-1" />
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
