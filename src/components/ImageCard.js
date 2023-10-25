

import React, { useState } from 'react';
import ImageModal from './ImageModal';

const ImageCard = ({ image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-teal-400 to-yellow-200 rounded-lg shadow-md p-4">
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className="w-full h-auto rounded-lg cursor-pointer"
        onClick={openModal}
      />
      {/* Rest of the code IS displaying user details, likes, and other info */}
      <div className="mt-4">
        <div className="text-gray-800 font-bold">
          <a
            href={`https://www.instagram.com/${image.user.instagram_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {image.user.name}
          </a>
          
        </div>
        <div className="flex items-center mt-2">
          <img
            src="https://img.icons8.com/?size=128&id=4T5VAk5CB92r&format=png" 
            alt="Heart"
            className="w-6 h-6 mr-2"
          />
          <span className="text-gray-600">
            {image.likes} Likes
          </span>
        </div>
      </div>
      <ImageModal isOpen={modalIsOpen} closeModal={closeModal} image={image} />
    </div>
  );
};

export default ImageCard;





