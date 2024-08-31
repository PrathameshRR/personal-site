import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Neel patel's personal website. Studying at Sheridan College, "
      + 'Developing knowledge and experience in Cloud computing'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">ABOUT THIS SITE</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript
          </p>
        </div>
      </header>
      <div className="content">
        <p>
          Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
          or you can check out my {' '}
          <Link to="/resume">resume</Link>, {' '}
          <Link to="/projects">projects</Link>, {' '}
          view <Link to="/stats">site statistics</Link>, {' '}
          or <Link to="/contact">contact</Link> me.
        </p>
        <div className="logo-container" style={{ textAlign: 'left', marginBottom: '20px' }}>
          <Link>
          <img
            href="https://www.credly.com/badges/a1a0c75d-b2bb-4f82-b97e-a67af59589b5/linked_in?t=shv1tc"
            src="/images/cloudpractitionerlogo.png"
            alt="Cloud Practitioner Certification"
            style={{ width: '200px', height: 'auto' }}
          />
          </Link>
        </div>
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
