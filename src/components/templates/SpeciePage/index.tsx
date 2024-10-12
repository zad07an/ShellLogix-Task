import { SpecieDataProps } from "@/types/definitions";
import styles from "./specie-page.module.scss";

interface SingleSpeciePageProps {
  specie: SpecieDataProps;
}

export const SingleSpeciePage = ({ specie }: SingleSpeciePageProps) => {
  return (
    <section className={styles.specie_container}>
      <h3>{specie.name}</h3>
    </section>
  );
};
