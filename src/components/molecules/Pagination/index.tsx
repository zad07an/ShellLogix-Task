"use client";

import { usePagination } from "@/hooks/usePagination";
import { Button } from "@chakra-ui/react";
import styles from "./pagination.module.scss";

export const Pagination = () => {
  const { isDisabledNext, isDisabledPrevious, onNext, onPrevious } =
    usePagination();

  return (
    <div className={styles.pagination}>
      <Button
        colorScheme="teal"
        disabled={isDisabledPrevious}
        onClick={onPrevious}
      >
        Previous
      </Button>
      <Button colorScheme="teal" disabled={isDisabledNext} onClick={onNext}>
        Next
      </Button>
    </div>
  );
};
