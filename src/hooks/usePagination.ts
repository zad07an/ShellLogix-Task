import { usePaginationStore } from "@/store/usePaginationStore";
import { useRouter, useSearchParams } from "next/navigation";

export const usePagination = () => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const router = useRouter();
  const { count } = usePaginationStore();

  const total = Math.ceil(Number(count) / 10);
  const isDisabledPrevious = currentPage <= 1;
  const isDisabledNext = !!total && currentPage >= total;

  const onPrevious = () => {
    if (Number(currentPage) > 1) {
      const previousPage = currentPage - 1;
      router.push(`?page=${previousPage}`);
    }
  };

  const onNext = () => {
    if (total && currentPage < total) {
      const nextPage = currentPage + 1;
      router.push(`?page=${nextPage}`);
    }
  };

  return { onPrevious, onNext, isDisabledNext, isDisabledPrevious };
};
