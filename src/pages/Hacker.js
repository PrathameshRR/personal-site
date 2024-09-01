import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import TechTable from '../components/Hacker/TechTable';
import techData from '../data/hacker';

const Hacker = () => (
  <Main
    title="Hacker"
    description="Technologies to learn for becoming a senior DevOps engineer"
  >
    <article className="post" id="hacker">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/hacker">Hacker</Link></h2>
          <p>Technologies I plan to learn in the next three years to become a senior DevOps engineer</p>
        </div>
      </header>
      <TechTable data={techData} />
    </article>
  </Main>
);

export default Hacker;