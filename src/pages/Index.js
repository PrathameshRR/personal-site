import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Neel patel's personal website. Studying at Sheridan College, " +
      'Developing knowledge and experience in Cloud computing'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to My Site</Link></h2>
        </div>
      </header>
      <div className="content">
        <div className="logo-container" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src="/images/cloudpractitionerlogo.png"
            alt="Cloud Practitioner Certification"
            style={{ width: '200px', height: 'auto' }}
          />
        </div>
        <p>
          Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
          or you can check out my {' '}
          <Link to="/resume">resume</Link>, {' '}
          view <Link to="/stats">site statistics</Link>, {' '}
          or <Link to="/contact">contact</Link> me.
        </p>
        <p>
          <a
            href="https://www.credly.com/badges/a1a0c75d-b2bb-4f82-b97e-a67af59589b5/linked_in?t=shv1tc"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my Cloud Practitioner Certification
          </a>
        </p>
        <p>Source available <a href="https://github.com/Neelpatel1604/personal-site">here</a>.</p>
      </div>
    </article>
  </Main>
);

export default Index;
