import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Serviceinfo from '../components/Services/Serviceinfo';
import data from '../data/services'
import '../static/css/components/_services.scss';

const Categories = {
  ALL: 'All',
  CLOUD: 'Cloud & DevOps',
  FULLSTACK: 'Web-Developement',
  TW: 'Technical Writing',
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(Categories.ALL);

  const filteredProjects = data.filter((project) => activeCategory === Categories.ALL
    || project.categories.includes(activeCategory));

  return (
    <Main
      title="Services"
      description="Learn about Neel's Services."
    >
      <article className="post" id="services">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/services">Services</Link></h2>
          </div>
        </header>
        <div className="service-categories">
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
          <Serviceinfo
            data={project}
            key={project.title}
          />
        ))}
      </article>
    </Main>
  );
};

export default Projects;
