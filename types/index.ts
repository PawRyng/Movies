import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export interface MoviesType {
  categoryType: "popular" | "top";
  page: string;
  sort?: string;
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

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface CategoryPageProps {
  searchParams?: Promise<{ [key: string]: string | undefined } | undefined>;
}
export interface MovePageProps {
  params: Promise<{
    id: string;
  }>;
}
