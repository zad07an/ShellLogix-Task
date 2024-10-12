import { useImage } from "@/hooks/useImage";
import { convertNameToSlug } from "@/lib/utils";
import { SpecieDataProps } from "@/types/definitions";
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
      <p>{item.name}</p>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        asperiores qui ea. Blanditiis, iusto aliquid.
      </span>
    </Link>
  );
};
