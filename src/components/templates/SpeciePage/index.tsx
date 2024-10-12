import { SpecieDataProps } from "@/types/definitions";
import styles from "./specie-page.module.scss";
import Image from "next/image";

interface SingleSpeciePageProps {
  specie: SpecieDataProps;
}

export const SingleSpeciePage = ({ specie }: SingleSpeciePageProps) => {
  return (
    <section className={styles.specie_container}>
      <h3>{specie.name}</h3>
      {specie.image && (
        <Image src={specie.image} alt={specie.name} width={460} height={460} />
      )}
    </section>
  );
};
