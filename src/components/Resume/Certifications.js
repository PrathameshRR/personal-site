import React from 'react';
import PropTypes from 'prop-types';

const getRows = (certifications) => certifications
  .sort((a, b) => {
    if (a.organization > b.organization) return -1;
    if (a.organization < b.organization) return 1;
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  })
  .map((certification) => (
    <li key={certification.title}>
      <h4>
        <a href={certification.link} target="_blank" rel="noopener noreferrer">
          {certification.title}
        </a>
      </h4>
      <p>{certification.organization} - {certification.year}</p>
    </li>
  ));

const Certifications = ({ data }) => (
  <div className="certifications">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>Certifications</h3>
    </div>
    <ul className="certification-list">
      {getRows(data)}
    </ul>
  </div>
);

Certifications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default Certifications;
