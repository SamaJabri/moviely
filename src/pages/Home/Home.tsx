// Libraries
import { useEffect, useState } from "react";

// Store
import useMovieStore from "../../store/movies";

// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieCard from "../../components/MovieCard/MovieCard";

// Styling
import "./home.scss";
import Table from "../../components/Table/Table";

const Home = () => {
  const [viewMode, setViewMode] = useState("grid");

  const { movies, fetchMovies } = useMovieStore();

  useEffect(() => {
    fetchMovies("Star Wars");
  }, [fetchMovies]);

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

      <div className="movies_list">
        {viewMode === "grid" ? (
          <div className="movies_list-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <Table movies={movies} />
        )}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
