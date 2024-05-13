import "./searchbar.scss";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input
        type="search"
        name="search"
        placeholder="Movie name, release date..."
      />
    </div>
  );
};

export default SearchBar;
