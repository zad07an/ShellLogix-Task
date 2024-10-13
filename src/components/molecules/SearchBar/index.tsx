"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { Card, Input } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./search-bar.module.scss";

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>(name);
  const debouncedValue = useDebounce(inputValue, 500);

  useIsomorphicLayoutEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (debouncedValue) {
      newSearchParams.set("name", debouncedValue);
    } else {
      newSearchParams.delete("name");
    }

    router.push(`?${newSearchParams.toString()}`);

    return () => {
      newSearchParams.delete("name");
    };
  }, [debouncedValue, router]);

  return (
    <Card className={styles.search_bar}>
      <Input
        placeholder="Type to search..."
        focusBorderColor="#009c96"
        borderColor="GrayText"
        paddingLeft="32px"
        width="100%"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Search
        size={16}
        style={{
          position: "absolute",
          top: "50%",
          left: 8,
          transform: "translateY(-50%)",
          zIndex: 10,
          color: "#5d5d5d",
        }}
      />
    </Card>
  );
};
