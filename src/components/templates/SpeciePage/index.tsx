import {
  SpecieCard,
  SpecieCardImage,
  SpecieCardInfoWrapper,
} from "@/components/organisms/SpecieCard";
import { SpecieDataProps } from "@/types/definitions";
import { RelatedSpecies } from "../RelatedSpecies";
import styles from "./specie-page.module.scss";

interface SingleSpeciePageProps {
  specie: SpecieDataProps;
}

export const SingleSpeciePage = ({ specie }: SingleSpeciePageProps) => {
  return (
    <section className={styles.specie_container}>
      <SpecieCard>
        <SpecieCardImage image={specie.image} />
        <SpecieCardInfoWrapper
          name={specie.name}
          classification={specie.classification}
        />
      </SpecieCard>
      <RelatedSpecies
        currentPersonName={specie.name}
        classification={specie.classification}
      />
    </section>
  );
};
