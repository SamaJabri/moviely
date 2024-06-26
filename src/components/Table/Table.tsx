// Types
import { useNavigate } from "react-router";
import { Movie } from "../../store/types";

// Styling
import "./table.scss";

interface TableProps {
  movies: Movie[];
}

const Table: React.FC<TableProps> = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <table className="movie-table">
      <thead className="movie-table_head">
        <tr>
          <th>Poster</th>
          <th>Title</th>
          <th>Release Year</th>
          <th>IMDb ID</th>
        </tr>
      </thead>
      <tbody className="movie-table_body">
        {movies?.map(({ Title, Year, imdbID, Poster }) => (
          <tr
            key={imdbID}
            onClick={() => navigate(`movie/${imdbID}`)}
            className="movie-table_cell-wrapper"
          >
            <td className="movie-table_cell">
              <img
                src={Poster === "N/A" ? "./images/cinema.png" : Poster}
                alt={`Poster of ${Title}`}
              />
            </td>
            <td className="movie-table_cell-title">{Title}</td>
            <td className="movie-table_cell">{Year}</td>
            <td className="movie-table_cell">
              <a
                href={`https://www.imdb.com/title/${imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {imdbID}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
