import React from 'react';
import PropTypes from 'prop-types';

const Certification = ({ data }) => (
  <section id="certifications">
    <div className="title">
      <h3>Certifications</h3>
    </div>
    <ul>
      {data.map((certification) => (
        <li key={certification.title}>
          <h4>
            <a href={certification.link} target="_blank" rel="noopener noreferrer">
              {certification.title}
            </a>
          </h4>
          <p>{certification.organization} - {certification.year}</p>
        </li>
      ))}
    </ul>
  </section>
);

Certification.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,  // Add link as a required prop
    }),
  ).isRequired,
};

export default Certification;
