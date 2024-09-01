import React from 'react';
import About from '../components/About';
import EventLayout from '../components/Event/eventlayout';

const EventPage = ({ events }) => {
  return (
    <div className="event-page-layout">
      <div className="sidebar">
        <About />
      </div>
      <div className="main-content">
        <h1>Events</h1>
        {events.map((event) => (
          <EventLayout key={event.id} data={event} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
