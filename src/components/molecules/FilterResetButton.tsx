"use client";

import { Button } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const FilterResetButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onReset = () => {
    if (typeof window === "undefined") return;
    const urlSearchParams = new URLSearchParams(searchParams.toString());

    urlSearchParams.forEach((_, key) => {
      urlSearchParams.delete(key);
    });

    router.push(window.location.pathname);
  };

  return (
    <Button onClick={onReset} width={200} colorScheme="red">
      Reset
    </Button>
  );
};
