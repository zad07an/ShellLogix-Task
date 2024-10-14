"use client";

import {
  SpecieCard,
  SpecieCardImage,
  SpecieCardInfoWrapper,
} from "@/components/organisms/SpecieCard";
import { useFetchSingleSpecieQuery } from "@/hooks/queries/useFetchSingleSpecieQuery";
import { Spinner, Text } from "@chakra-ui/react";
import { RelatedSpecies } from "../RelatedSpecies";
import styles from "./specie-page.module.scss";

interface SingleSpeciePageProps {
  id: string;
}

export const SingleSpeciePage = ({ id }: SingleSpeciePageProps) => {
  const { data: specie, status } = useFetchSingleSpecieQuery(id);

  if (status === "pending") {
    return (
      <div className="full-height centered">
        <Spinner />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="full-height centered">
        <Text fontSize={18} color="red" fontWeight="bold">
          Failed to fetch specie
        </Text>
      </div>
    );
  }

  if (!specie || (status === "success" && !specie)) {
    return (
      <div className="full-height centered">
        <Text fontSize={18} color="red" fontWeight="bold">
          Specie not found
        </Text>
      </div>
    );
  }

  return (
    <section className={styles.specie_container}>
      <SpecieCard>
        <SpecieCardImage image={specie.image} />
        <SpecieCardInfoWrapper
          name={specie.name}
          classification={specie.classification}
          createdAt={specie.created}
        />
      </SpecieCard>
      <RelatedSpecies
        currentPersonName={specie.name}
        classification={specie.classification}
      />
    </section>
  );
};
