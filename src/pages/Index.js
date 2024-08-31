import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Neel patel's personal website. Studing at Sheridan College, "
    + 'Devloping knowledge and experience in Cloud computing'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/Neelpatel1604/personal-site">here</a>.</p>
      <p>
        {/* Add the image with a link */}
        <a href="https://www.credly.com/badges/a1a0c75d-b2bb-4f82-b97e-a67af59589b5/linked_in?t=shv1tc" target="_blank" rel="noopener noreferrer">
          <img
            src="public/images/cloudpractitionerlogo.png" // Replace with the URL of the uploaded image
            alt="Certification"
            style={{ width: '150px', height: 'auto', marginTop: '20px' }} // Adjust styles as needed
          />
        </a>
      </p>
    </article>
  </Main>
);

export default Index;
