import React from 'react';
import PropTypes from 'prop-types';

const Serviceinfo = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        <p>{data.subtitle}</p>
      </header>
      <div className="additional-info">
        <ul>
          {data.additionalInfo.map((info) => (
            <li key={`${data.title}-${info}`}>{info}</li>
          ))}
        </ul>
      </div>
    </article>
  </div>
);

Serviceinfo.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    subtitle: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    additionalInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Serviceinfo;
