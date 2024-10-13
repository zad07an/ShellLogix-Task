import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export const useDebounce = (value: string, delay: number = 1500) => {
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  useIsomorphicLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
};
