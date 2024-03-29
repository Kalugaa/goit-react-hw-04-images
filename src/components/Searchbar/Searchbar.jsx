import React, { useState } from 'react';

const Searchbar = props => {
  const [query, setQuery] = useState('');
  const { onInputChange } = props;

  const handleSubmit = e => {
    e.preventDefault();
    onInputChange(query);
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
