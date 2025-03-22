import React from 'react';

const Timeline = () => {
  const timelineEvents = [
    { time: '9:00 AM', day: 'Day 1', event: 'Registration & Check-in' },
    { time: '11:00 AM', day: 'Day 1', event: 'Opening Ceremony' },
    { time: '12:00 PM', day: 'Day 1', event: 'Hackathon Begins' },
    { time: '2:00 PM', day: 'Day 1', event: 'Lunch' },
    { time: '4:00 PM', day: 'Day 1', event: 'Mentoring Round 1' },
    { time: '6:30 PM', day: 'Day 1', event: 'Evening snacks' },
    { time: '9:00 PM', day: 'Day 1', event: 'Dinner' },
    { time: '3:00 AM', day: 'Day 2', event: 'Mid Night Snacks' },
    { time: '7:00 AM', day: 'Day 2', event: 'Mentoring Session/Judging for Top 10' },
    { time: '9:00 AM', day: 'Day 2', event: 'Breakfast' },
    { time: '10:30 AM', day: 'Day 2', event: 'Final Round Starts' },
    { time: '1:00 PM', day: 'Day 2', event: 'Result declaration' },
  ];

  return (
    <section id="timeline" className="relative py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">
          Event Timeline
        </h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-item group">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex gap-6 md:w-48">
                    <span className="text-sky-400 font-mono">{event.time}</span>
                    <span className="text-sky-600">{event.day}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-sky-100 group-hover:text-sky-300 transition-colors">
                      {event.event}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;