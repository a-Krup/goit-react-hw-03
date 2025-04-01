import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      className={styles.searchInput}
      type="text"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;