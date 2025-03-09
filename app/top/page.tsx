import PaginationSection from "@/components/pagination";
import dynamic from "next/dynamic";
import { useMovies } from "@/controller/getMovies";
import SkeletonList from "@/components/Listing/SkeletonList";
import type { CategoryPageProps as PageProps } from "@/types";

const ServerComponent = dynamic(() => import("@/components/Listing/list"), {
  loading: () => <SkeletonList />,
  ssr: true,
});

export default async function Popular({
  searchParams,
}: PageProps) {
  const { page } = (await searchParams) || { page: "1" };

  const currentPage = Array.isArray(page) ? page[0] : page || "1";

  const { totalPages, movies } = await useMovies({
    categoryType: "top",
    page: currentPage,
  });

  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <h1 className="text-2xl">Top rated</h1>
      <ServerComponent movies={movies} />
      <PaginationSection totalPages={totalPages} />
    </section>
  );
}
