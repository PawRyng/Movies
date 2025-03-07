import ImageElement from "@/components/ImageElement";
import { notFound } from "next/navigation";
import { StarIcon } from "@/components/icons";
import BackButton from "@/components/Movie/BackButton";
import { useMovie } from "@/controller/getMovie";
import type {MovePageProps as PageProps} from "@/types"

export default async function Movie({ params }: PageProps) {
  const { id } = await params;
  const movie = await useMovie(id);

  if (!movie) {
    notFound();
  }

  return (
    <section className="movie flex gap-4 flex-wrap sm:gap-1/12">
      <div className="w-full">
        <BackButton />
      </div>
      <div className="w-1/2 order-2 sm:order-1 sm:w-3/12">
        <ImageElement path={movie.poster_path} imageWidth={500} />
      </div>
      <div className="contents sm:block sm:w-8/12 sm:order-2">
        <h1 className="w-full text-3xl order-1">{movie.title}</h1>

        <div className="avarage w-4/12 flex flex-col gap-2 pt-4 order-3 sm:max-w-max">
          <p className="flex gap-4 items-center sm:max-w-max">
            <StarIcon fill="#e8b903" width={50} height={50} />
            <span className="text-4xl">{movie.vote_average.toFixed(2)}</span>
          </p>
          <p className="text-center">{movie.vote_count} votes</p>

          {movie.adult && (
            <p className="mt-6 flex items-center justify-center border-4 border-red-600 rounded-full aspect-square w-14 self-center">
              +18
            </p>
          )}
        </div>
        <div className="description w-full order-4 mt-6">{movie.overview}</div>
      </div>
    </section>
  );
}
