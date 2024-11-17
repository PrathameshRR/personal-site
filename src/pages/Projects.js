import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/projects';
import '../static/css/components/_projects.scss';

const Categories = {
  ALL: 'All',
  CLOUD: 'Cloud & DevOps',
  FULLSTACK: 'Full-Stack',
  ML: 'Machine Learning',
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(Categories.ALL);

  const filteredProjects = data.filter((project) => activeCategory === Categories.ALL
    || project.categories.includes(activeCategory));

  return (
    <Main
      title="Projects"
      description="Learn about Neel's projects."
    >
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
            <p>A selection of projects that I&apos;m not too ashamed of</p>
          </div>
        </header>
        <div className="project-categories">
          {Object.values(Categories).map((category) => (
            <button
              type="button"
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {filteredProjects.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </article>
    </Main>
  );
};

export default Projects;
