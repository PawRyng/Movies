import PaginationSection from "@/components/pagination";
import dynamic from 'next/dynamic';
import { useMovies } from "@/controller/getMovies";
import SkeletonList from "@/components/Listing/SkeletonList";

const ServerComponent = dynamic(() => import('@/components/Listing/list'), {
  loading: () => <SkeletonList/>,
  ssr: true,
});

// Define the async function to handle server-side logic
export default async function Popular({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  // Use await on searchParams (to avoid sync access error)
  const { page } = await searchParams || { page: '1' };

  // Ensure that 'page' is always a string
  const currentPage = Array.isArray(page) ? page[0] : page || '1';

  const {totalPages, movies} = await useMovies({categoryType: 'popular', page: currentPage});


  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <h1 className="text-2xl">Popular</h1>
      <ServerComponent movies={movies} />
      <PaginationSection totalPages={totalPages}/>
    </section>
  );
}
