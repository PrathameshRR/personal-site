import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Customerinfo = ({ data }) => {
  const formattedStartDate = dayjs(data.startDate).format('MMMM D, YYYY');
  const formattedEndDate = data.endDate === 'Present' ? 'Present' : dayjs(data.endDate).format('MMMM D, YYYY');
  
  return (
    <div className="cell-container">
      <article className="mini-post">
        <header>
          <h3><a href={data.link}>{data.title}</a></h3>
          <time className="published">
            {formattedStartDate} - {formattedEndDate}
          </time>
        </header>
        <a href={data.link} className="image">
          <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
        </a>
        <div className="description">
          <p>{data.desc}</p>
        </div>
      </article>
    </div>
  );
};

Customerinfo.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Customerinfo;
