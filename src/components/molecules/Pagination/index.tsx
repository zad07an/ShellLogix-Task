"use client";

import { Button } from "@chakra-ui/react";
import styles from "./pagination.module.scss";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const Pagination = () => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const router = useRouter();
  const isDisabledPrevious = currentPage <= 1;

  const onPrevious = () => {
    if (Number(currentPage) > 1) {
      const previousPage = currentPage - 1;
      router.push(`?page=${previousPage}`);
    }
  };

  const onNext = () => {
    const nextPage = currentPage + 1;
    router.push(`?page=${nextPage}`);
  };

  return (
    <div className={styles.pagination}>
      <Button
        colorScheme="teal"
        disabled={isDisabledPrevious}
        onClick={onPrevious}
      >
        Previous
      </Button>
      <Button colorScheme="teal" onClick={onNext}>
        Next
      </Button>
    </div>
  );
};
