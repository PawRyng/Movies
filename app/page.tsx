import { useMovies } from "@/controller/getMovies";
import { EmblaCarousel } from "@/components/MainPage/Carousel";
import Link from "next/link";
import '../styles/embla.css'

// Define the async function to handle server-side logic
export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  // Use await on searchParams (to avoid sync access error)
  const { page } = await searchParams || { page: '1' };

  // Ensure that 'page' is always a string
  const currentPage = Array.isArray(page) ? page[0] : page || '1';

  const getPopular = await useMovies({categoryType: 'popular', page: currentPage});


  return (
    <>
      <section className="py-8 md:py-10">
        <div className="title  mb-6 flex justify-between items-end ">
        <h3 className="text-xl">Popular Movies </h3>
        <Link className="text-sm" href={'/popular'}>More {'->'}</Link>
        </div>
        <EmblaCarousel movies={getPopular.movies}/>
      </section>
    </>
  );
}
