// Libraries
import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

// Types
import { MovieStore, MovieResponse } from "./types";

const useMovieStore = create<MovieStore>()(
  persist(
    (set) => ({
      movies: [],
      series: [],
      episodes: [],
      movieInfo: {},
      totalResults: 0,

      viewMode: "grid",

      setViewMode: (mode: string) => set({ viewMode: mode }),

      fetchMovies: async (
        search: string = "",
        type: string = "movie",
        page: number = 1
      ) => {
        const url = `http://www.omdbapi.com/?apikey=98bfdd67&s=${encodeURIComponent(
          search
        )}&t=${encodeURIComponent(search)}&page=${page}&type=${type}`;

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
            console.log(response);
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

      fetchMovieData: async (imdbID: string = "tt3108894") => {
        const url = `http://www.omdbapi.com/?apikey=98bfdd67&i=${encodeURIComponent(
          imdbID
        )}`;

        try {
          const response = await axios.get<MovieResponse>(url);
          if (response?.status === 200) {
            set({ movieInfo: response.data });
            console.log(response);
          } else {
            console.error(response.data.Error || "Failed to fetch movies.");
            set({ movieInfo: {} });
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
          set({ movieInfo: {} });
        }
      },
    }),
    {
      name: "moviely-data",
    }
  )
);
export default useMovieStore;
