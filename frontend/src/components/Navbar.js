import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-800 shadow-md px-6 py-4 rounded">

      <div className="flex items-center space-x-6">
        <div className="relative group">
          <button className="font-medium hover:underline flex items-center">
            Top Influencer
            <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
            </svg>
          </button>
          {/* Dropdown (Optional) */}
          {/* <div className="absolute hidden group-hover:block mt-1 bg-white text-black rounded shadow-lg w-40 z-10">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
          </div> */}
        </div>

        <a href="#" className="hover:underline">Subscriptions</a>
        <a href="#" className="hover:underline">Our team</a>
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="hover:underline">Contact Us</a>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative group">
          <button className="hover:underline flex items-center">
            EN
            <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
            </svg>
          </button>
        </div>

        <button className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:scale-105 transition-transform">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
