import React from 'react';
import PropTypes from 'prop-types';

const getRows = (certifications) => certifications.sort((a, b) => {
  let ret = 0;
  if (a.organization > b.organization) ret = -1;
  else if (a.organization < b.organization) ret = 1;
  else if (a.title > b.title) ret = 1;
  else if (a.title < b.title) ret = -1;
  return ret;
}).map((certification, idx) => (
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
    title: PropTypes.string,
    organization: PropTypes.string,
    year: PropTypes.string,
    link: PropTypes.string,
  })),
};

Certifications.defaultProps = {
  data: [],
};

export default Certifications;
