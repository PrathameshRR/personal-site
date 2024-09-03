import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import EventLayout from '../components/Event/eventlayout';
import events from '../data/event';

const Event = () => (
  <Main
    title="Events"
    description="Neel Patel's events"
  >
    <article className="post" id="events">
      <header>
        <div className="title">
          <h2><Link to="/event">Events</Link></h2>
          <p>A collection of events I've participated in.</p>
        </div>
      </header>
      <div className="event-container">
        {events.map((event) => (
          <EventLayout key={event.title} data={event} />
        ))}
      </div>
    </article>
  </Main>
);

export default Event;
