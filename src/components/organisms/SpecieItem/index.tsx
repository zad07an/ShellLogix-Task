import { useImage } from "@/hooks/useImage";
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
  const image = useImage(item.image);

  if (!slug) return null;

  return (
    <Link href={slug} className={styles.starship_card}>
      {!!image && <Image src={image} alt="image" width={256} height={256} />}
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
