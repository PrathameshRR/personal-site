import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const eventlayout = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  // Format the single event date
  const formattedDate = dayjs(data.date).format('MMMM D, YYYY');

  return (
    <div className="cell-container">
      <article className="mini-post">
        <header>
          <h3>{data.title}</h3>
          <time className="published">{formattedDate}</time>
        </header>
        <div className="images-container">
          {data.images.length > 0 ? (
            data.images.slice(0, 4).map((image, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(image);
                }}
                className="image"
              >
                <img src={image} alt={`Event ${index + 1}`} />
              </a>
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
        <div className="description">
          <p>{data.desc}</p>
        </div>
      </article>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>X</span>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

eventlayout.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default eventlayout;
