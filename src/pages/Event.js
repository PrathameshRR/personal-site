import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import eventlayout from '../components/Event/eventlayout'; // Import the EventLayout component
import data from '../data/event'; // Import the data file

const Event = () => {
  return (
    <div className="event-page">
      {data.map((event, index) => (
        <eventlayout key={index} data={event} />
      ))}
    </div>
  );
};

export default Event;
