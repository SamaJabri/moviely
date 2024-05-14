// Libraries
import React from "react";

// Styling
import "./searchbar.scss";

interface searchBarProps {
  searchValue: string;
  year: string;
  setSearchValue: () => void;
  setYear: () => void;
}

const SearchBar: React.FC<searchBarProps> = ({
  searchValue,
  year,
  setSearchValue,
  setYear,
}) => {
  return (
    <div className="searchbar">
      <input
        type="search"
        name="search"
        placeholder="Movie name"
        className="searchbar_name"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <input
        type="text"
        name="year"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
