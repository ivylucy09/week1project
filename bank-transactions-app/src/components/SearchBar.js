import React from 'react';

function SearchBar({ searchTerm, updateSearchTerm }) {
  return (
    <input
    id='sec'
      type="text"
      value={searchTerm}
      placeholder="Search transactions..."
      onChange={(e) => updateSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
