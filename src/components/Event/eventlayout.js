import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const EventLayout = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image, e) => {
    e.preventDefault();
    setSelectedImage(image.url || image);
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
              <a
                key={image.url || image}
                href={image.link || '#'}
                target={image.link ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={(e) => handleImageClick(image, e)}
                className="image-link"
              >
                <img src={image.url || image} alt={`Event ${data.title}`} style={{ width: '200px', height: '150px' }} />
              </a>
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </article>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <button type="button" className="close" onClick={closeModal}>
            X
          </button>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      )}
    </div>
  );
};

EventLayout.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          link: PropTypes.string,
        }),
      ])
    ).isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventLayout;
