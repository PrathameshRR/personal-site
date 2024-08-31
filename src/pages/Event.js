import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Event = () => (
  <Main
    description={
      "I have attend several events, "
      + 'and gains so many insights'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">ABOUT THE EVENTS</Link></h2>
          <p>
            So many beautiful events,
            enjoy a lot.
          </p>
        </div>
      </header>
      <div className="content">
        <p>
          Welcome to my website. Please feel free to read more,
          or you can check out my events.
        </p>
        <div className="logo-container" style={{ textAlign: 'left', marginBottom: '20px' }}>
          <a href="https://www.credly.com/badges/a1a0c75d-b2bb-4f82-b97e-a67af59589b5/linked_in?t=shv1tc" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/cloudpractitionerlogo.png"
              alt="Cloud Practitioner Certification"
              style={{ width: '200px', height: 'auto' }}
            />
          </a>
        </div>
      </div>
    </article>
  </Main>
);

export default Event;
