import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ data }) => (
  <div className="skill-container">
    <p className="skill-name">{data.title}</p>
  </div>
);

SkillBar.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default SkillBar;
