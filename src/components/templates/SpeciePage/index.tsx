import { SpecieDataProps } from "@/types/definitions";
import styles from "./specie-page.module.scss";
import Image from "next/image";
import { Heading, Text } from "@chakra-ui/react";
import { SpecieForm } from "@/components/organisms/SpecieForm";
import {
  SpecieCard,
  SpecieCardImage,
  SpecieCardInfoWrapper,
} from "@/components/organisms/SpecieCard";
import { RelatedSpecies } from "../RelatedSpecies";

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
