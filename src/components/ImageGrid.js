import React from 'react';
import ImageCard from './ImageCard'; 

const ImageGrid = ({ images }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;
