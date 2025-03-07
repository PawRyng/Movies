"use client";
import { Select, SelectItem } from "@heroui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function SelectElement() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("sort", e.target.value);
    router.push(`${window.location.pathname}?${queryParams.toString()}`);
  };

  return (
    <Select
      className="max-w-xs"
      label="Sort By"
      placeholder="Choose sort"
      onChange={handleSortChange}
      selectedKeys={[searchParams.get("sort") || ""]}
    >
      {siteConfig.sortParams.map((sortParam) => (
        <SelectItem key={sortParam.key}>{sortParam.label}</SelectItem>
      ))}
    </Select>
  );
}
