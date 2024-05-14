// Libraries
import { useEffect, useState } from "react";
import { isEqual } from "lodash";

// Store
import useMovieStore from "../../store/movies";

// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieCard from "../../components/MovieCard/MovieCard";
import Table from "../../components/Table/Table";

// Styling
import "./home.scss";

const Home = () => {
  const { movies, series, episodes, fetchMovies } = useMovieStore();

  const [viewMode, setViewMode] = useState("grid");
  const [dataTypeShown, setDataTypeShown] = useState("movies");
  const [dataShown, setDataShown] = useState(movies);

  const [searchValue, setSearchValue] = useState("Pokemon");

  const handleDataTypeShownChange = (type: string) => {
    setDataTypeShown(type);
    setDataShown(
      type === "movies" ? movies : type === "series" ? series : episodes
    );
  };

  useEffect(() => {
    fetchMovies(searchValue, dataTypeShown);
  }, [searchValue, dataTypeShown]);

  return (
    <div className="home">
      <div className="intro">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster="./images/cinema.png"
          className="intro_video"
        >
          <source src="./videos/cinema.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="intro_description">
          <h1>Moviely</h1>
          <p>
            Your all time favorite destination for making your Friday movie
            nights better.
          </p>
        </div>
      </div>

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
          className={`${
            dataTypeShown === "movies" && "movies-switcher-active"
          }`}
          onClick={() => handleDataTypeShownChange("movies")}
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
    </div>
  );
};

export default Home;
