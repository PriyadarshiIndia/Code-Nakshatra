import React from 'react'

function Themes() {
  return (
    <section id="themes" className="relative py-20 px-4 overflow-hidden">
  <div className="container mx-auto max-w-6xl relative z-10">
    <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
      Hackathon Themes
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        className="relative group rounded-2xl p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 
            backdrop-blur-lg border border-purple-500/20 
            transition-all duration-500 hover:scale-105"
      >
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-2xl border-purple-500/50"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-2xl border-purple-500/50"></div>
        <div className="relative z-10">
          <div
            className="flex justify-center mb-6 text-purple-400 
              transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-brain w-12 h-12"
            >
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
              <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
              <path d="M6 18a4 4 0 0 1-1.967-.516" />
              <path d="M19.967 17.484A4 4 0 0 1 18 18" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-center text-white">
            AI &amp; Machine Learning
          </h3>
          <p className="text-gray-300 text-center">
            Build innovative solutions using artificial intelligence and machine
            learning algorithms to solve real-world problems.
          </p>
        </div>
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/10 
            via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
      </div>
      <div
        className="relative group rounded-2xl p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 
            backdrop-blur-lg border border-blue-500/20 
            transition-all duration-500 hover:scale-105"
      >
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-2xl border-blue-500/50"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-2xl border-blue-500/50"></div>
        <div className="relative z-10">
          <div
            className="flex justify-center mb-6 text-blue-400 
              transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-globe w-12 h-12"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-center text-white">
            Web3 &amp; Blockchain
          </h3>
          <p className="text-gray-300 text-center">
            Create decentralized applications and blockchain solutions that
            revolutionize digital interactions.
          </p>
        </div>
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/10 
            via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
      </div>
      <div
        className="relative group rounded-2xl p-6 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 
            backdrop-blur-lg border border-cyan-500/20 
            transition-all duration-500 hover:scale-105"
      >
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-2xl border-cyan-500/50"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-2xl border-cyan-500/50"></div>
        <div className="relative z-10">
          <div
            className="flex justify-center mb-6 text-cyan-400 
              transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-cloud-cog w-12 h-12"
            >
              <circle cx={12} cy={17} r={3} />
              <path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" />
              <path d="m15.7 18.4-.9-.3" />
              <path d="m9.2 15.9-.9-.3" />
              <path d="m10.6 20.7.3-.9" />
              <path d="m13.1 14.2.3-.9" />
              <path d="m13.6 20.7-.4-1" />
              <path d="m10.8 14.3-.4-1" />
              <path d="m8.3 18.6 1-.4" />
              <path d="m14.7 15.8 1-.4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-center text-white">
            Open Innovation
          </h3>
          <p className="text-gray-300 text-center">
            Foster groundbreaking ideas and collaborative solutions to tackle
            real-world challenges across industries.{" "}
          </p>
        </div>
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cyan-500/10 
            via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
      </div>
      <div
        className="relative group rounded-2xl p-6 bg-gradient-to-br from-emerald-600/20 to-green-600/20 
            backdrop-blur-lg border border-emerald-500/20 
            transition-all duration-500 hover:scale-105"
      >
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-2xl border-emerald-500/50"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-2xl border-emerald-500/50"></div>
        <div className="relative z-10">
          <div
            className="flex justify-center mb-6 text-emerald-400 
              transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield w-12 h-12"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-center text-white">
            Cybersecurity
          </h3>
          <p className="text-gray-300 text-center">
            Create innovative solutions for digital security and privacy in our
            interconnected world.
          </p>
        </div>
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-500/10 
            via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Themes