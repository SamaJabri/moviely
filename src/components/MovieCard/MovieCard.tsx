// Types
import { Movie } from "../../store/types";

// Styling
import "./movie-card.scss";

interface CardProps {
  movie: Movie;
}

const MovieCard: React.FC<CardProps> = ({ movie }) => {
  const { Title, Year, imdbID, Poster } = movie;

  return (
    <div className="card">
      <div className="card_image-container">
        <img src={Poster} alt={Title} className="card_image" />
      </div>

      <div className="card_description">
        <h2>{Title}</h2>
        <p>
          IMDb ID: <span>{imdbID}</span>
        </p>
        <p className="card_description-release">Release: {Year}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {};

export default MovieCard;
