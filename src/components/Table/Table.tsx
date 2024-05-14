import "./table.scss";

const Table = ({ movies }) => {
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
        {movies.map(({ Title, Year, imdbID, Poster }) => (
          <>
            <tr>
              <td className="movie-table_cell">
                <img
                  src={Poster}
                  alt={`Poster of ${Title}`}
                  style={{ maxWidth: "100px" }}
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
          </>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
