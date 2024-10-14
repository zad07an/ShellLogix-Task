"use client";

import { Button, Text } from "@chakra-ui/react";

export const ErrorTryAgain = () => {
  const onRefresh = () => {
    if (typeof window === "undefined") return;
    window.location.reload();
  };
  return (
    <section className="full-height centered">
      <Text fontSize={32} fontWeight="bold">
        Unexpexted error occured
      </Text>
      <Button onClick={onRefresh} colorScheme="teal" width={200}>
        Try again
      </Button>
    </section>
  );
};
