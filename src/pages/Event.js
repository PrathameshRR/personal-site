import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import EventComponent from '../components/Events/Event'; // Rename the imported Event to EventComponent
import data from '../data/event';

const Event = () => (
  <Main
    title="Event"
    description="See events"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/event">Events</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((event) => (
        <EventComponent // Use the renamed component here
          data={event}
          key={event.title}
        />
      ))}
    </article>
  </Main>
);

export default Event;
