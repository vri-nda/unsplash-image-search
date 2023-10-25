

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageModal from './ImageModal';

const RandomImages = () => {
  const [randomImages, setRandomImages] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [isImageClicked, setImageClicked] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  useEffect(() => {
    // Fetch random images from Unsplash List Photos API
    axios
      .get('https://api.unsplash.com/photos/random', {
        params: {
          count: 20, 
        },
        headers: {
            Authorization: `Client-ID mxIVjm1S9JohgUXlEdfJgNggR5wR7_z7Jdd5ecEMC5Q`,
        },
      })
      .then((response) => {
        setRandomImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleImageClick = (image) => {
    setClickedImage(image);
    setImageClicked(true);
  };

  const closeModal = () => {
    setClickedImage(null);
    setImageClicked(false);
  };


return (
    <div className={`random-images-container grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-10 mx-auto gap-4 ${searchPerformed ? 'hidden' : ''}`}>
      {randomImages.map((image) => (
        <div key={image.id} className="bg-gradient-to-b from-teal-400 to-yellow-200 rounded-lg shadow-md p-4" onClick={() => handleImageClick(image)}>
          <img src={image.urls.small} alt={image.alt_description} className="w-full rounded-lg p-0 m-0 max-h-[200px]" />
          <div className="mt-4">
            <div className="text-gray-800 font-bold">
              <a href={`https://www.instagram.com/${image.user.instagram_username}`} target="_blank" rel="noopener noreferrer">
                {image.user.name}
              </a>
            </div>
            <div className="flex items-center">
              <img src="https://img.icons8.com/?size=128&id=4T5VAk5CB92r&format=png" alt="Heart" className="w-6 h-6 mr-2 text-red-500" />
              <span className="text-gray-600">
                {image.likes} Likes
              </span>
            </div>
            <div className="text-gray-600 mt-2 text-sm">
              Uploaded on {new Date(image.created_at).toDateString()}
            </div>
          </div>
        </div>
      ))}
      {isImageClicked && clickedImage && <ImageModal image={clickedImage} closeModal={closeModal} />}
    </div>
  );
};

export default RandomImages;


