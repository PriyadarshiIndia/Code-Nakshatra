import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import Themes from './components/Themes';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Remain from './components/Remain';
function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Prizes />
        <Timeline />
        <Themes/>
        <Team/>
        <Sponsors/>
        <Remain/>
      </div>
    </div>
  );
}

export default App;