import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Code Nakshatra</div>
          <div className="hidden md:flex space-x-8">
            <a className="cursor-pointer hover:text-purple-400 transition-colors">About</a>
            <a className="cursor-pointer hover:text-purple-400 transition-colors">Timeline</a>
            <a className="cursor-pointer hover:text-purple-400 transition-colors">Themes</a>
            <a className="cursor-pointer hover:text-purple-400 transition-colors">Team</a>
            <a className="cursor-pointer hover:text-purple-400 transition-colors">Sponsors</a>
            <a className="cursor-pointer hover:text-purple-400 transition-colors">FAQs</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;