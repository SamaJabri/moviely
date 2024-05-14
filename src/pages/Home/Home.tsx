// Libraries
import { useEffect, useState } from "react";

// Stores
import useMovieStore from "../../store/movies";
import usePreferenceStore from "../../store/preferences";

// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieCard from "../../components/MovieCard/MovieCard";
import Table from "../../components/Table/Table";

// Styling
import "./home.scss";

const Home = () => {
  const { movies, series, episodes, totalResults, fetchMovies } =
    useMovieStore();
  const { viewMode, setViewMode, dataTypeShown, setDataTypeShown } =
    usePreferenceStore();

  const [dataShown, setDataShown] = useState(movies);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalResults / 10);

  const [searchValue, setSearchValue] = useState("Pokemon");

  const handleDataTypeShownChange = (type: string) => {
    setDataTypeShown(type);
    setDataShown(
      type === "movie" ? movies : type === "series" ? series : episodes
    );
  };

  useEffect(() => {
    fetchMovies(searchValue, dataTypeShown, currentPage);
    setDataShown(
      dataTypeShown === "movie"
        ? movies
        : dataTypeShown === "series"
        ? series
        : episodes
    );
  }, [searchValue, dataTypeShown, currentPage]);

  return (
    <div className="home">
      <div className="movies">
        <div className="options">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <div className="options_view">
            <div
              className={`options_table ${
                viewMode === "table" && "options_switch_active"
              }`}
              onClick={() => setViewMode("table")}
            >
              <img
                src="./icons/table.svg"
                alt="Table Icon"
                height={24}
                width={24}
                title="Table"
              />
            </div>
            <div
              className={`options_grid ${
                viewMode === "grid" && "options_switch_active"
              }`}
              onClick={() => setViewMode("grid")}
            >
              <img
                src="./icons/grid.svg"
                alt="Grid Icon"
                height={24}
                width={24}
                title="Grid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="movies-switcher">
        <p
          className={`${dataTypeShown === "movie" && "movies-switcher-active"}`}
          onClick={() => handleDataTypeShownChange("movie")}
        >
          Movies
        </p>
        <p
          className={`${
            dataTypeShown === "series" && "movies-switcher-active"
          }`}
          onClick={() => handleDataTypeShownChange("series")}
        >
          TV Series
        </p>
        <p
          className={`${
            dataTypeShown === "episodes" && "movies-switcher-active"
          }`}
          onClick={() => handleDataTypeShownChange("episodes")}
        >
          Episodes
        </p>
      </div>

      {/* First check is if movies exist, second check is for view mode */}
      <div className="movies-list">
        {movies || series || episodes ? (
          viewMode === "grid" ? (
            <div className="movies-list-grid">
              {dataShown?.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <Table movies={dataShown} />
          )
        ) : (
          <p className="movies-list-warning">
            No movies/TV-series to show at the moment, sorry for the
            inconvenience!
          </p>
        )}
      </div>

      {/* If there's no data don't show pagination options */}
      {dataShown && (
        <div className="pagination-controls">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            &#60;
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
          >
            &#62;
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
