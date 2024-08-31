import React from 'react';
import EventLayout from '../components/Event/eventlayout';
import events from '../data/event';

const Event = () => (
  <div className="event-page">
    {events.map((event) => (
      <EventLayout key={event.title} data={event} />
    ))}
  </div>
);

export default Event;
