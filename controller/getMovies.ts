import axiosInstance from "./axios";
import type { MoviesType, MoviesReturnType } from "@/types";
class Movies {
  private type: string;
  private page: string;
  constructor({ categoryType, page }: MoviesType) {
    this.type = categoryType;
    this.page = page;
  }

  private async getPopular(): Promise<MoviesReturnType> {
    try {
      const { data } = await axiosInstance.get(
        `/3/movie/popular?page=${this.page}`
      );

      let totalPages = data.total_pages;
      if (data.total_pages > 500) {
        totalPages = 500;
      }

      return { movies: data.results, totalPages };
    } catch (error) {
      console.error(error);
      return { movies: [], totalPages: 1 };
    }
  }

  private async getTopRated(): Promise<MoviesReturnType> {
    try {
      const { data } = await axiosInstance.get(
        `/3/movie/top_rated?page=${this.page}`
      );

      let totalPages = data.total_pages;
      if (data.total_pages > 500) {
        totalPages = 500;
      }

      return { movies: data.results, totalPages };
    } catch (error) {
      console.error(error);
      return { movies: [], totalPages: 1 };
    }
  }

  public async getMovies(): Promise<MoviesReturnType> {
    if (this.type === "popular") {
      return this.getPopular();
    } else if (this.type === "top") {
      return this.getTopRated();
    }

    return { movies: [], totalPages: 1 };
  }
}

export async function useMovies(query: MoviesType): Promise<MoviesReturnType> {
  const movies = new Movies(query);

  return movies.getMovies();
}
