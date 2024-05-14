// Libraries
import { useEffect, useState } from "react";

// Store
import useMovieStore from "../../store/movies";

// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieCard from "../../components/MovieCard/MovieCard";
import Table from "../../components/Table/Table";

// Styling
import "./home.scss";

const Home = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [isMovieShown, setisMovieShown] = useState(true);

  const { movies, fetchMovies } = useMovieStore();

  useEffect(() => {
    fetchMovies("");
  }, []);

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
          <SearchBar />

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
          className={`${isMovieShown && "movies-switcher-active"}`}
          onClick={() => setisMovieShown(true)}
        >
          Movies
        </p>
        <p
          className={`${!isMovieShown && "movies-switcher-active"}`}
          onClick={() => setisMovieShown(false)}
        >
          TV Series
        </p>
      </div>

      {/* First check is if movies exist, second check is for view mode */}
      <div className="movies-list">
        {movies ? (
          viewMode === "grid" ? (
            <div className="movies-list-grid">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <Table movies={movies} />
          )
        ) : (
          <p>
            No movies/TV-series to show at the moment, sorry for the
            inconvenience!
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
