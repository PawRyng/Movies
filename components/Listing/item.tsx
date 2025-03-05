import type { MovieType } from "@/types";
import Link from 'next/link'
import ImageElement from "../ImageElement";
 
export default async function MovieItem({movie, classNames}:{movie:MovieType, classNames?:string}) {
    return (
      <li className={classNames}>
        <Link href={`/movie/${movie.id}`}>
            <ImageElement path={movie.poster_path}/>
            <p className="text-right text-sm">{movie.title}</p>
            <p className="text-right text-xs text-gray-600">{String(movie.release_date)}</p>
        </Link>
      </li>
    );
  }
  