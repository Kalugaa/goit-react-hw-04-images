import React from 'react';

const Modal = props => {
  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  const { selectedImage, onCloseModal } = props;

  return (
    <div className="Overlay" onClick={handleCloseModal}>
      <div className="Modal">
        <img src={selectedImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;
