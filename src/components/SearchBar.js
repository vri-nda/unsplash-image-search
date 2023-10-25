

import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    onSearch(query);
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          name="query"
          placeholder="Search for images..."
          className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        />
        <button type="submit" className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

