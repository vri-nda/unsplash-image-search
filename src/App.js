import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import RandomImages from './components/RandomImages';




const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);


  useEffect(() => {
  
  }, []);

  const searchImages = async (query) => {
    setSearchQuery(query);
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query,
          per_page: 20,
        },
        headers: {
          Authorization: `Client-ID mxIVjm1S9JohgUXlEdfJgNggR5wR7_z7Jdd5ecEMC5Q`,
        },
      });
      setImages(response.data.results);
      setSearchPerformed(true); // Set searchPerformed to true
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
     
      
      <div className="bg-gradient-to-t from-emerald-500 to-emerald-900 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl text-center text-white font-semibold mb-4">Image Gallery</h1>
          <SearchBar onSearch={searchImages} />
        </div>
      </div>

      <div className="container mx-auto p-4">
      {searchQuery && (
          <div className="text-center text-maroon-600 font-bold text-lg mb-4">
            <h6>Results for {searchQuery}</h6> 
          </div>
        )}
        {!searchPerformed && <RandomImages />}
        <ImageGrid images={images} />
      </div>
    </div>
  );
};
export default App;




