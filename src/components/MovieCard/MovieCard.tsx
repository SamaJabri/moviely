// Types
import { useNavigate } from "react-router";
import { Movie } from "../../store/types";

// Styling
import "./movie-card.scss";

interface CardProps {
  movie: Movie;
}

const MovieCard: React.FC<CardProps> = ({ movie }) => {
  const { Title, Year, imdbID, Poster } = movie;

  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`movie/${imdbID}`)}>
      <div className="card_image-container">
        <img
          src={Poster === "N/A" ? "./images/cinema.png" : Poster}
          alt={Title}
          className="card_image"
        />
      </div>

      <div className="card_description">
        <h2>{Title}</h2>
        <a
          href={`https://www.imdb.com/title/${imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="card_description-imdb"
        >
          IMDb ID: {imdbID}
        </a>

        <p className="card_description-release">Release Year: {Year}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {};

export default MovieCard;
