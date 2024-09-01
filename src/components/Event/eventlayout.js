import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const EventLayout = ({ data }) => {
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
            data.images.slice(0, 4).map((image) => (
              <button
                key={image}
                type="button"
                onClick={() => handleImageClick(image)}
                className="image-button"
              >
                <img src={image} alt={`Event ${data.title}`} style={{ width: '200px', height: '150px' }} />
              </button>
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
          <button type="button" className="close" onClick={closeModal}>
            X
          </button>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

EventLayout.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventLayout;
