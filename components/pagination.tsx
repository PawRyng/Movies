"use client"
import {Pagination} from "@heroui/pagination";
import { useRouter } from 'next/navigation'
import type { PaginationElementType } from "@/types";
import { useSearchParams } from 'next/navigation'

export default function PaginationSection({totalPages}:PaginationElementType) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1

    const redirectHandler = (page:number) =>{
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set('page', String(page));

      router.push(`${window.location.pathname}?${queryParams.toString()}`)
    }

  return <Pagination className="mt-8 self-center" initialPage={currentPage} total={totalPages} onChange={(page) => redirectHandler(page)}/>;
}