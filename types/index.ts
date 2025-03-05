import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export interface MoviesType {
  categoryType: "popular";
  page: string;
}

export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export type MoviesArrayType = MovieType[];

export interface MoviesReturnType {
  movies: MoviesArrayType;
  totalPages: number;
}

export interface PaginationElementType {
  totalPages: number;
}
