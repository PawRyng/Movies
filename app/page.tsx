import { useMovies } from "@/controller/getMovies";
import { EmblaCarousel } from "@/components/MainPage/Carousel";
import { getRandomItems } from "@/controller/randomElement";
import Link from "next/link";
import "../styles/embla.css";

export default async function Home() {
  const getPopular = await useMovies({ categoryType: "popular", page: "1" });
  const getTopRated = await useMovies({ categoryType: "top", page: "1" });

  const randomPopularMovies = getRandomItems(getPopular.movies, 10);
  const randomTopMovies = getRandomItems(getTopRated.movies, 10);

  return (
    <>
      <section className="py-8 md:py-10">
        <div className="title  mb-6 flex justify-between items-end ">
          <h3 className="text-xl">Popular Movies </h3>
          <Link className="text-sm" href={"/popular"}>
            More {"->"}
          </Link>
        </div>
        <EmblaCarousel movies={randomPopularMovies} />
      </section>
      <section className="py-8 md:py-10">
        <div className="title  mb-6 flex justify-between items-end ">
          <h3 className="text-xl">TOP Rated</h3>
          <Link className="text-sm" href={"/top"}>
            More {"->"}
          </Link>
        </div>
        <EmblaCarousel movies={randomTopMovies} />
      </section>
    </>
  );
}
