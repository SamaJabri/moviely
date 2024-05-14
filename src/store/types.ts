interface Rating {
  Source: string;
  Value: string;
}

interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  totalSeasons: string;
}

interface MovieResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
  data?: Movie;
}

interface MovieStore {
  movies: Movie[];
  series: Movie[];
  episodes: Movie[];
  movieInfo: Movie;
  totalResults: number;
  fetchMovies: (
    year: string,
    search?: string,
    type?: string,
    page?: number
  ) => Promise<void>;
  fetchMovieData: (imdbID?: string, type?: string) => Promise<void>;
}

interface PreferenceStore {
  viewMode: string;
  dataTypeShown: string;
  setViewMode: (mode: string) => void;
  setDataTypeShown: (type: string) => void;
}

export type { Movie, MovieResponse, MovieStore, PreferenceStore };
