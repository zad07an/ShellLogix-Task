"use client";

import { convertNameToSlug } from "@/lib/utils";
import { SpecieDataProps } from "@/types/definitions";
import { Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./starship-item.module.scss";

interface SpecieItemProps {
  item: SpecieDataProps;
}

export const SpecieItem = ({ item }: SpecieItemProps) => {
  const slug = convertNameToSlug(item.name, item.url);
  if (!slug) return null;

  return (
    <Link href={`/s/${slug}`} className={styles.starship_card}>
      {!!item.image ? (
        <Image src={item.image} alt="image" width={256} height={256} />
      ) : (
        <div style={{ width: 256, minWidth: 256, height: 256 }}></div>
      )}
      <Stack direction="column" spacing={2}>
        <Text fontSize={24} fontWeight="bold">
          {item.name}
        </Text>
        <Text fontSize={16} fontWeight="normal" colorScheme="gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          asperiores qui ea. Blanditiis, iusto aliquid.
        </Text>
      </Stack>
    </Link>
  );
};
