"use client";

import { FilterableSpecies } from "@/components/organisms/FilterableSpecies";
import { SpeciesFilter } from "@/components/organisms/SpeciesFilter";
import { useFetchSpeciesQuery } from "@/hooks/queries/useFetchSpeciesQuery";
import { Spinner, Text } from "@chakra-ui/react";
import styles from "./main-container.module.scss";

export const MainContainer = () => {
  const { data, isLoading, isSuccess, isError } = useFetchSpeciesQuery();

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );
  }
  if (isError)
    return (
      <Text fontSize={24} colorScheme="red" fontWeight="bold">
        Failed to fetch data
      </Text>
    );
  if ((isSuccess && !data) || !data)
    return (
      <Text fontSize={24} fontWeight="bold">
        No data found
      </Text>
    );

  return (
    <section className={styles.main_container}>
      <SpeciesFilter />
      <FilterableSpecies data={data} />
    </section>
  );
};
