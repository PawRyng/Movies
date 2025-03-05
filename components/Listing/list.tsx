import type { MoviesArrayType } from "@/types";
import MovieItem from "./item";
export default async function ListSection({movies}:{movies:MoviesArrayType}) {
    return (
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((item) => <MovieItem key={item.id} movie={item}/>)}
      </ul>
    );
  }
  