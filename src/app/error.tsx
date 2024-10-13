"use client";

import { Button } from "@chakra-ui/react";

interface ErrorProps {
  reset: () => void;
}

export default function error({ reset }: ErrorProps) {
  return (
    <section className="full-height centered">
      <p>Unexpexted error occured</p>
      <Button onClick={reset} colorScheme="teal" width={200}>
        Try again
      </Button>
    </section>
  );
}
