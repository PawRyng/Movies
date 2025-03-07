import axiosInstance from "./axios";
import type { MoviesType, MoviesReturnType } from "@/types";
class Movies {
  private type: string;
  private page: string;
  private sort: string;
  constructor({ categoryType, page, sort }: MoviesType) {
    this.type = categoryType;
    this.page = page;
    if (sort) {
      this.sort = sort;
    } else {
      this.sort = "";
    }
  }

  private async getPopular(): Promise<MoviesReturnType> {
    try {
      console.log(`/3/movie/popular?page=${this.page}&sort_by=${this.sort}`);
      const { data } = await axiosInstance.get(
        `/3/movie/popular?page=${this.page}&sort_by=${this.sort}`,
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
        `/3/movie/top_rated?page=${this.page}&sort_by=${this.sort}`,
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

  private async sorted(): Promise<MoviesReturnType> {
    try {
      const { data } = await axiosInstance.get(
        `/3/discover/movie?page=${this.page}&sort_by=${this.sort}`,
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
    if (this.sort) {
      return this.sorted();
    } else if (this.type === "popular") {
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
