import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#4e726c] text-white px-6 py-10 rounded-t-3xl font-spartan">
      {/* Newsletter section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold mb-3">
          Stay Updated on Our Impact
        </h2>
        <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="w-full px-4 py-2 rounded-xl text-black outline-none"
          />
          <button className="border border-white px-5 py-2 rounded-xl hover:bg-white hover:text-[#4e726c] transition">
            Join
          </button>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-6" />

      {/* Info and links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-center md:text-left">
       
        {/* Contact Info */}
        <div className="space-y-1">
          <p>Email: partnership@boundarybox.org</p>
          <p>Phone: 9911XXXXXX</p>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col items-center md:items-end justify-between gap-2">
          <p>© 2025, BOUNDARYBOX</p>
          <div className="flex space-x-4 text-xl">
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaXTwitter className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
