// Styling
import "./searchbar.scss";

const SearchBar = () => {
  return (
    <input
      className="searchbar"
      type="search"
      name="search"
      placeholder="Movie name, release date..."
    />
  );
};

export default SearchBar;
