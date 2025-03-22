import React from 'react';
import { Users, Trophy, Coffee, Brain, Wifi, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold mb-12 text-center">About The Event</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg">
              Code Nakshatra is a 24-hour hackathon that brings together innovative minds to create,
              collaborate, and code. Join us for an unforgettable experience of learning, building,
              and networking with fellow developers.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-purple-400" />
                <span>200+ Participants</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-purple-400" />
                <span>₹3,00,000+ Prize Pool</span>
              </div>
              <div className="flex items-center gap-3">
                <Coffee className="w-6 h-6 text-purple-400" />
                <span>Free Food & Swag</span>
              </div>
              <div className="flex items-center gap-3">
                <Brain className="w-6 h-6 text-purple-400" />
                <span>Expert Mentoring</span>
              </div>
            </div>
          </div>
          <div className="bg-purple-900/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Amenities</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Coffee className="w-5 h-5 text-purple-400" />
                <span>24/7 Food and Beverages</span>
              </li>
              <li className="flex items-center gap-3">
                <Wifi className="w-5 h-5 text-purple-400" />
                <span>High-Speed Internet</span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-400" />
                <span>Dedicated Mentors</span>
              </li>
              <li className="flex items-center gap-3">
                <Code className="w-5 h-5 text-purple-400" />
                <span>Workshop Sessions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;