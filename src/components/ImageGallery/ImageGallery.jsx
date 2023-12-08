import React from 'react';

const ImageGallery = props => {
  const { images, onImageClick } = props;
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <li
          key={image.id}
          className="ImageGalleryItem"
          onClick={() => onImageClick(image.largeImageURL)}
        >
          <img
            className="ImageGalleryItem-image"
            src={image.webformatURL}
            alt={image.tags}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
