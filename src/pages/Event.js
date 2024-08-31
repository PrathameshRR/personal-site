import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Event/eventlayout';
import data from '../data/event';

const Event = () => (
  <Main
    title="Events"
    description="Learn about Neel's Events."
  >
    <article className="post" id="events">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/event">event</Link></h2>
          <p>A selection of event that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((event) => (
        <Cell
          data={event}
          key={event.title}
        />
      ))}
    </article>
  </Main>
);

export default Event;
