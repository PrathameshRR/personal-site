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

  const closeModal = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setModalOpen(false);
    }
  };

  const navigateImage = (direction, e) => {
    e.stopPropagation();
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
                <div className="image-wrapper">
                  <img src={image.url || image} alt={`Event ${data.title}`} />
                </div>
              </a>
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </article>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button type="button" className="close" onClick={() => setModalOpen(false)}>
              X
            </button>
            <div className="image-navigation">
              <button type="button" className="nav-button prev" onClick={(e) => navigateImage(-1, e)}>
                &#10094;
              </button>
              <div className="modal-image-wrapper">
                <img
                  src={data.images[selectedImageIndex].url || data.images[selectedImageIndex]}
                  alt={`Selected ${selectedImageIndex + 1}`}
                />
              </div>
              <button type="button" className="nav-button next" onClick={(e) => navigateImage(1, e)}>
                &#10095;
              </button>
            </div>
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
      ]),
    ).isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventLayout;
