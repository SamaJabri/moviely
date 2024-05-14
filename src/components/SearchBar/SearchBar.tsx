// Libraries
import React from "react";

// Styling
import "./searchbar.scss";

interface searchBarProps {
  searchValue: string;
  setSearchValue: () => {};
}

const SearchBar: React.FC<searchBarProps> = ({
  searchValue,
  setSearchValue,
}) => {
  return (
    <input
      className="searchbar"
      type="search"
      name="search"
      placeholder="Movie name, release date..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchBar;
