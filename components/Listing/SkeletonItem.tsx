import {Skeleton} from "@heroui/skeleton";

export default function SkeletonItem() {
    return (
      <li className="flex flex-col items-end">
            <Skeleton className="rounded-lg w-full">
              <div className="h-72 rounded-lg bg-default-300" />
            </Skeleton>
            <Skeleton className="rounded-lg mt-2 w-3/4 mb-1">
              <div className="h-4 rounded-lg bg-default-300" />
            </Skeleton>
            <Skeleton className="rounded-lg w-1/2">
              <div className="h-3 rounded-lg bg-default-300" />
            </Skeleton>
      </li>
    );
  }
  