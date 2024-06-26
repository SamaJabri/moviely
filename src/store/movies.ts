// Libraries
import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

// Types
import { MovieStore, MovieResponse, Movie } from "./types";

const INITIAL_MOVIE_INFO = {
  Title: "",
  Year: "",
  Rated: "",
  Released: "",
  Runtime: "",
  Genre: "",
  Director: "",
  Writer: "",
  Actors: "",
  Plot: "",
  Language: "",
  Country: "",
  Awards: "",
  Poster: "",
  Ratings: [],
  Metascore: "",
  imdbRating: "",
  imdbVotes: "",
  imdbID: "",
  Type: "",
  DVD: "",
  BoxOffice: "",
  Production: "",
  Website: "",
  Response: "",
  totalSeasons: "",
};

const useMovieStore = create<MovieStore>()(
  persist(
    (set) => ({
      movies: [],
      series: [],
      episodes: [],
      movieInfo: INITIAL_MOVIE_INFO,
      totalResults: 0,

      // Fetch all movies/series/episodes according to user choice
      /* NOTE: Having an IMDb ID or movie title is essential in the API
          therefore searching by only year is not possible.
      */
      fetchMovies: async (
        year: string,
        search: string = "",
        type: string = "movie",
        page: number = 1
      ) => {
        let url = `https://www.omdbapi.com/?apikey=98bfdd67&s=${encodeURIComponent(
          search
        )}&t=${encodeURIComponent(search)}&page=${page}&type=${type}`;

        url += year && `&y=${year}`;

        try {
          const response = await axios.get<MovieResponse>(url);
          if (response.data.Response && response?.status === 200) {
            set(
              type === "movie"
                ? { movies: response.data.Search }
                : type === "series"
                ? { series: response.data.Search }
                : { episodes: response.data.Search }
            );
            set({ totalResults: parseInt(response.data.totalResults, 10) });
          } else {
            console.error(response.data.Error || "Failed to fetch movies.");
            set(
              type === "movie"
                ? { movies: [] }
                : type === "series"
                ? { series: [] }
                : { episodes: [] }
            );
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
          set(
            type === "movie"
              ? { movies: [] }
              : type === "series"
              ? { series: [] }
              : { episodes: [] }
          );
        }
      },

      // Fetch certain movie data according to imdbID, used in movie page
      fetchMovieData: async (imdbID: string = "tt3108894") => {
        const url = `https://www.omdbapi.com/?apikey=98bfdd67&i=${encodeURIComponent(
          imdbID
        )}`;

        try {
          const response = await axios.get<Movie>(url);
          if (response?.status === 200) {
            set({ movieInfo: response.data });
          } else {
            console.error(response.data || "Failed to fetch movies.");
            set({ movieInfo: INITIAL_MOVIE_INFO });
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
          set({ movieInfo: INITIAL_MOVIE_INFO });
        }
      },
    }),
    {
      name: "moviely-data",
    }
  )
);
export default useMovieStore;
