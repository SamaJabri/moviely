// Libraries
import { useParams } from "react-router";

// Store
import useMovieStore from "../../store/movies";

// Types
import { Movie } from "../../store/types";

// Styling
import "./movie.scss";
import { useEffect } from "react";

const MoviePage = () => {
  const { movieInfo, fetchMovieData } = useMovieStore();
  const { id } = useParams();

  //const movieData: Movie = series.filter(({ imdbID }) => imdbID !== id)[0];
  console.log(movieInfo);

  useEffect(() => {
    fetchMovieData(id);
  }, []);

  return (
    movieInfo && (
      <div className="movie">
        <div className="movie_image">
          <img
            src={
              movieInfo?.Poster === "N/A"
                ? "./images/cinema.png"
                : movieInfo?.Poster
            }
            alt={`Poster of ${movieInfo?.Title}`}
          />
        </div>

        <div className="movie_info">
          <h1>{movieInfo?.Title}</h1>
          <p className="movie_info-type">
            {movieInfo.Type} - {movieInfo.Country && movieInfo.Country}
          </p>
          {movieInfo.Genre && (
            <div className="movie_genres">
              {movieInfo.Genre.split(", ").map((genre, index) => (
                <p key={index} className="movie_genres-genre">
                  {genre}
                </p>
              ))}
            </div>
          )}
          {movieInfo.Plot && (
            <p className="movie_info-plot">{movieInfo.Plot}</p>
          )}
          <p className="movie_info-detail">
            <img
              src="/icons/director.svg"
              alt="Director Icon"
              height={30}
              width={30}
            />
            A film by:
            <span>
              {movieInfo.Director !== "N/A"
                ? movieInfo.Director
                : "Not mentioned"}
            </span>
          </p>
          <p className="movie_info-detail">
            <img
              src="/icons/writer.svg"
              alt="Writer Icon"
              height={30}
              width={30}
            />
            Written by:
            <span>
              {movieInfo.Writer !== "N/A" ? movieInfo.Writer : "Not mentioned"}
            </span>
          </p>
          {movieInfo.Actors && (
            <p className="movie_info-detail">
              <img
                src="/icons/actor.svg"
                alt="Actor Icon"
                height={30}
                width={30}
              />
              Actors: <span>{movieInfo.Actors}</span>
            </p>
          )}
          <p className="movie_info-detail">
            <img
              src="/icons/calendar.svg"
              alt="Calendar Icon"
              height={30}
              width={30}
            />
            Released: <span>{movieInfo.Released || "Not specified"}</span>
          </p>
          <p className="movie_info-detail">
            <img
              src="/icons/language.svg"
              alt="Language Icon"
              height={30}
              width={30}
            />
            Language:
            <span>
              {movieInfo.Language !== "N/A"
                ? movieInfo.Language
                : "Not mentioned"}
            </span>
          </p>
          <p className="movie_info-detail">
            <img
              src="/icons/movie.svg"
              alt="Movie Icon"
              height={30}
              width={30}
            />
            Duration:
            <span>{movieInfo.Runtime !== "N/A" ? movieInfo.Runtime : "-"}</span>
          </p>

          {movieInfo.Type === "series" && movieInfo.totalSeasons && (
            <p className="movie_info-detail">
              <img
                src="/icons/seasons.svg"
                alt="Seasons Icon"
                height={30}
                width={30}
              />
              Seasons:
              <span>
                {movieInfo.totalSeasons !== "N/A"
                  ? movieInfo.totalSeasons
                  : "Not mentioned"}
              </span>
            </p>
          )}

          <h2>Ratings</h2>
          <div className="movie_info-imdb">
            <div className="movie_info-imdb-logo">
              <img src="/images/imdb-logo.svg" alt="IMDb Logo" />
            </div>

            <a
              href={`https://www.imdb.com/title/${movieInfo.imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              IMDb ID: {movieInfo.imdbID || "-"}
            </a>
            <p className="movie_info-detail">
              IMDb Rating: {movieInfo.imdbRating || "-"}
            </p>
            <p className="movie_info-detail">
              IMDb Votes: {movieInfo.imdbVotes || "-"}
            </p>
          </div>
          {movieInfo.Ratings && movieInfo.Ratings?.length > 0 && (
            <div className="movie_info-ratings">
              {movieInfo.Ratings.map(({ Source, Value }, index) => (
                <div key={index}>
                  <p className="movie_info-detail">
                    {Source}: <span>{Value}</span>
                  </p>
                </div>
              ))}
            </div>
          )}
          <p className="movie_info-detail">
            <span className="movie_info-detail-score">
              {movieInfo.Metascore || "Not mentioned"}
            </span>{" "}
            Metascore
          </p>

          <h2>Other Info</h2>
          <p className="movie_info-detail">
            <img
              src="/icons/award.svg"
              alt="Awards Icon"
              height={30}
              width={30}
            />
            Awards:
            <span>
              {movieInfo.Awards !== "N/A" ? movieInfo.Awards : "None"}
            </span>
          </p>
          <p className="movie_info-detail">
            <img
              src="/icons/box-office.svg"
              alt="Box Office Icon"
              height={30}
              width={30}
            />
            Box Office:
            <span>
              {movieInfo.BoxOffice && movieInfo.BoxOffice !== "N/A"
                ? movieInfo.BoxOffice
                : "-"}
            </span>
          </p>
          <p className="movie_info-detail">
            {movieInfo.Rated && (
              <span className="movie_info-detail-rating">
                {movieInfo.Rated}
              </span>
            )}
          </p>

          {movieInfo.Website && movieInfo.Website !== "N/A" && (
            <a
              className="movie_info-detail"
              href={movieInfo.Website}
              target="_blank"
            >
              <img
                src={`/icons/website.svg`}
                alt="Website Icon"
                height={30}
                width={30}
              />
              Visit Website
            </a>
          )}
        </div>
      </div>
    )
  );
};

export default MoviePage;
