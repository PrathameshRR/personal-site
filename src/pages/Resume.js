import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Certifications from '../components/Resume/Certifications';
import References from '../components/Resume/References';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import certifications from '../data/resume/certifications';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Certifications',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Neel Patel's resume. DevOps, Python, DSA, SQL, C"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Certifications data={certifications} />
      <References />

    </article>
  </Main>
);

export default Resume;
