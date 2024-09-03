import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const EventLayout = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index, e) => {
    e.preventDefault();
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const navigateImage = (direction) => {
    let newIndex = selectedImageIndex + direction;
    if (newIndex < 0) newIndex = data.images.length - 1;
    if (newIndex >= data.images.length) newIndex = 0;
    setSelectedImageIndex(newIndex);
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
            data.images.slice(0, 4).map((image, index) => (
              <a
                key={image.url || image}
                href={image.link || '#'}
                target={image.link ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={(e) => handleImageClick(index, e)}
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
          <button type="button" className="nav-button prev" onClick={() => navigateImage(-1)}>
            &#10094;
          </button>
          <div className="modal-content">
            <img
              src={data.images[selectedImageIndex].url || data.images[selectedImageIndex]}
              alt={`Selected ${selectedImageIndex + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <button type="button" className="nav-button next" onClick={() => navigateImage(1)}>
            &#10095;
          </button>
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
      ]),
    ).isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventLayout;
