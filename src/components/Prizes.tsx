import React from 'react';

const Prizes = () => {
  return (
    <section className="mb-24 container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center text-white mb-12 relative z-10">Prizes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Place */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl opacity-40 group-hover:opacity-70 transition-all duration-300 blur-[2px] group-hover:blur-[1px]"></div>
          <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 transform group-hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-gray-700 group-hover:border-opacity-50">
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-2">1st Place</h3>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">₹12,000</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center group-hover:text-white transition-colors duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mr-2">•</span>
                  Code Crafters 2-year VIP Membership
                </li>
                <li className="flex items-center group-hover:text-white transition-colors duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mr-2">•</span>
                  Interview Buddy 100% off vouchers for Gen AI Interview
                </li>
                <li className="flex items-center group-hover:text-white transition-colors duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mr-2">•</span>
                  Offsec Proving Grounds Subscription for One Year
                </li>
                <li className="flex items-center group-hover:text-white transition-colors duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mr-2">•</span>
                  Wayspire Free self-paced programs
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Place */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl opacity-40 group-hover:opacity-70 transition-all duration-300 blur-[2px] group-hover:blur-[1px]"></div>
          <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 transform group-hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-gray-700 group-hover:border-opacity-50">
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🥈</div>
              <h3 className="text-2xl font-bold text-white mb-2">2nd Place</h3>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 mb-6">₹8,000</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center group-hover:text-white transition-colors duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 mr-2">•</span>
                  Code Crafters 1-year VIP Membership
                </li>
                <li className="flex items-center group-hover:text-white transition-colors duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 mr-2">•</span>
                  Interview Buddy 100% off vouchers for Gen AI Interview
                </li>
                <li className="flex items-center group-hover:text-white transition-colors duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 mr-2">•</span>
                  Offsec Proving Grounds Subscription for One Year
                </li>
                <li className="flex items-center group-hover:text-white transition-colors duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 mr-2">•</span>
                  Wayspire Free self-paced programs
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third Place */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl opacity-40 group-hover:opacity-70 transition-all duration-300 blur-[2px] group-hover:blur-[1px]"></div>
          <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 transform group-hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-gray-700 group-hover:border-opacity-50">
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🥉</div>
              <h3 className="text-2xl font-bold text-white mb-2">3rd Place</h3>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-6">₹5,000</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center group-hover:text-white transition-colors duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mr-2">•</span>
                  Code Crafters 6-months VIP Membership
                </li>
                <li className="flex items-center group-hover:text-white transition-colors duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mr-2">•</span>
                  Interview Buddy 100% off vouchers for Gen AI Interview
                </li>
                <li className="flex items-center group-hover:text-white transition-colors duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mr-2">•</span>
                  Wayspire Free self-paced programs
                </li>
                <li className="flex items-center group-hover:text-white transition-colors duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mr-2">•</span>
                  Goodies and exciting rewards for all the Participants...
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;