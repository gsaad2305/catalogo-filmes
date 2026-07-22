import movies from "../data/movies.json";
import { Filme } from "../types";

export function getMovies(): Filme[] {
  return movies;
}

export function getMovieById(id: number): Filme | undefined {
  return movies.find((movie) => movie.id === id);
}