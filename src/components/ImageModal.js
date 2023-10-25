
import React from 'react';
import Modal from 'react-modal';

const ImageModal = ({ isOpen, closeModal, image }) => {
  const originalWidth = image.width;
  const originalHeight = image.height;

  // maintaining the aspect ratio
  const maxWidth = 800; // Adjust the maximum width as needed
  const maxHeight = 600; // Adjust the maximum height as needed

  let newWidth = originalWidth;
  let newHeight = originalHeight;

  if (newWidth > maxWidth) {
    newWidth = maxWidth;
    newHeight = (newWidth * originalHeight) / originalWidth;
  }

  if (newHeight > maxHeight) {
    newHeight = maxHeight;
    newWidth = (newHeight * originalWidth) / originalHeight;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className="image-modal"
      style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <div className="modal-content text-center" onClick={closeModal}>
        <img src={image.urls.full} alt={image.alt_description} width={newWidth} height={newHeight} />
        <div className="image-details mt-4">
          <h1 className="text-lg">{image.user.name}</h1>
          <p className="text-md">Likes: {image.likes}</p>
          <a
            href={`https://www.instagram.com/${image.user.instagram_username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm"
          >
            Instagram Profile
          </a>
        </div>
        <div className="image-download">
            <a
              href={image.links.download}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Image
            </a>
          </div>
      </div>
    </Modal>
  );
};

export default ImageModal;

