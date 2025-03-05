import axiosInstance from "./axios";
import type { Movie } from "@/types";

export async function useMovie(id: string): Promise<Movie | undefined> {
  try {
    const { data } = await axiosInstance.get<Movie>(`/3/movie/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
