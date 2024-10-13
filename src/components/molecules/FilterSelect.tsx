"use client";

import { Select } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

interface FilterSelectProps {
  data: { value: string; name: string }[];
  placeholder: string;
  paramsKey: string;
}

export const FilterSelect = ({
  paramsKey,
  data,
  placeholder,
}: FilterSelectProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const skinColor = searchParams.get(paramsKey) || placeholder;

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set(paramsKey, newValue);
    if (!newValue) {
      newSearchParams.delete(paramsKey);
    }
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <Select
      onChange={onChange}
      value={skinColor}
      focusBorderColor="#009c96"
      cursor="pointer"
      userSelect="none"
    >
      <option value={placeholder} disabled>
        {placeholder}
      </option>
      <option value="">none</option>
      {data.map((item) => (
        <option key={item.value} value={item.value.trim()}>
          {item.name}
        </option>
      ))}
    </Select>
  );
};
