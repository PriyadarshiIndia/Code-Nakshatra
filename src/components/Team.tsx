import React from 'react'

function Team() {
  return (
    <section id="team" className="relative py-20 px-4">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">
      Our Team
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-sky-950/50 to-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-2 border-sky-400/20 p-1">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"></div>
            <img
              src="https://code-nakshatra.xyz/images/Gunjan.png"
              alt="Gunjan Arya"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-sky-100">Gunjan Arya</h3>
          <p className="mb-4 text-sky-400">Faculty Coordinator</p>
          <div className="flex gap-4">
            <a
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-github h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/gunjan-arya-705215150/"
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-linkedin h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-sky-950/50 to-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-2 border-sky-400/20 p-1">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"></div>
            <img
              src="https://code-nakshatra.xyz/images/Ishika%20Mam.png"
              alt="Ishika Arora"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-sky-100">Ishika Arora</h3>
          <p className="mb-4 text-sky-400">Faculty coordinator</p>
          <div className="flex gap-4">
            <a
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-github h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ishika-arora-ishika/"
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-linkedin h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-sky-950/50 to-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-2 border-sky-400/20 p-1">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"></div>
            <img
              src="https://code-nakshatra.xyz/images/Harshit.png"
              alt="Harshit Gupta"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-sky-100">Harshit Gupta</h3>
          <p className="mb-4 text-sky-400">Lead Organizer</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/harshitg20"
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-github h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-gupta-361574285/"
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-linkedin h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-sky-950/50 to-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-2 border-sky-400/20 p-1">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"></div>
            <img
              src="https://code-nakshatra.xyz/images/Varun.png"
              alt="Varun Gupta"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-sky-100">Varun Gupta</h3>
          <p className="mb-4 text-sky-400">Lead Organizer</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Varun15Gupta"
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-github h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/varun-gupta-3b5779239/"
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-linkedin h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-sky-950/50 to-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-2 border-sky-400/20 p-1">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"></div>
            <img
              src="https://code-nakshatra.xyz/images/Dhruv1.png"
              alt="Dhruv Chaurasiya"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-sky-100">Dhruv Chaurasiya</h3>
          <p className="mb-4 text-sky-400">Lead Organizer</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/dhruv108dstar"
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-github h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-kumar-337012256/"
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-linkedin h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-sky-950/50 to-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-2 border-sky-400/20 p-1">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"></div>
            <img
              src="https://code-nakshatra.xyz/images/Divina.png"
              alt="Divina Khattar"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-sky-100">Divina Khattar</h3>
          <p className="mb-4 text-sky-400">Design Lead</p>
          <div className="flex gap-4">
            <a
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-github h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-linkedin h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-sky-950/50 to-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-2 border-sky-400/20 p-1">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"></div>
            <img
              src="https://code-nakshatra.xyz/images/Samiran.png"
              alt="Samiran Das"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-sky-100">Samiran Das</h3>
          <p className="mb-4 text-sky-400">Technical</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/hackerX-Sam"
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-github h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-linkedin h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-sky-950/50 to-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-2 border-sky-400/20 p-1">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"></div>
            <img
              src="https://code-nakshatra.xyz/images/Dev.png"
              alt="Dev Goel"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-sky-100">Dev Goel</h3>
          <p className="mb-4 text-sky-400">PR &amp; Sponsorship</p>
          <div className="flex gap-4">
            <a
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-github h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/dev-goel-758263314/"
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-linkedin h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-sky-950/50 to-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-2 border-sky-400/20 p-1">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"></div>
            <img
              src="https://code-nakshatra.xyz/images/Varshini.png"
              alt="K.Varshini"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-sky-100">K.Varshini</h3>
          <p className="mb-4 text-sky-400">PR &amp; Sponsorship</p>
          <div className="flex gap-4">
            <a
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-github h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              className="text-sky-400 hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
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
                className="lucide lucide-linkedin h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Team