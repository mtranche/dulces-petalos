import React from 'react';
import searchIcon from '../assets/Search.png'; 

function Search({ query, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Busca en nuestra tienda"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        style={{ backgroundImage: `url(${searchIcon})` }}
        aria-label="Buscar en nuestra tienda"
        role="searchbox"
      />
    </div>
  );
}

export default Search;
