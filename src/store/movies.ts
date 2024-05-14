// Libraries
import { create } from "zustand";
import axios from "axios";

// Types
import { MovieStore, MovieResponse } from "./types";

const useMovieStore = create<MovieStore>(
  (set, get) => ({
    movies: [],

    fetchMovies: async (search: string, page: number = 1) => {
      const url = `http://www.omdbapi.com/?i=tt3896198&apikey=98bfdd67&s=${encodeURIComponent(
        search
      )}&page=${page}&r=json`;

      try {
        const response = await axios.get<MovieResponse>(url);
        if (response.data.Response === "True") {
          set({ movies: response.data.Search });
          console.log(response);
        } else {
          console.error(response.data.Error || "Failed to fetch movies.");
          set({ movies: [] });
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        set({ movies: [] });
      }
    },
  }),
  {
    name: "movies",
  }
);
export default useMovieStore;
