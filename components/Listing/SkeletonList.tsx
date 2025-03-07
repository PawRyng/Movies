import SkeletonItem from "./SkeletonItem";
import { Skeleton } from "@heroui/skeleton";

export default async function SkeletonList() {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <h1 className="text-2xl">
        <Skeleton className="rounded-lg w-[250px]">
          <div className="h-9 rounded-lg bg-default-300" />
        </Skeleton>
      </h1>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {[...Array(20)].map((_, idx) => (
          <SkeletonItem key={idx} />
        ))}
      </ul>
    </section>
  );
}
