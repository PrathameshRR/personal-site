import React from 'react';
import PropTypes from 'prop-types';

const TechTable = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>Technology</th>
        <th>Category</th>
        <th>Priority</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.technology}>
          <td>{item.technology}</td>
          <td>{item.category}</td>
          <td>{item.priority}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TechTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    technology: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  })).isRequired,
};

export default TechTable;