"use client";

import { FilterableSpecies } from "@/components/organisms/FilterableSpecies";
import { SpeciesFilter } from "@/components/organisms/SpeciesFilter";
import { useFetchSpeciesQuery } from "@/hooks/queries/useFetchSpeciesQuery";
import { Spinner } from "@chakra-ui/react";
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
      <div className={styles.main_container}>
        <p className={styles.error}>Failed to fetch data</p>
      </div>
    );
  if ((isSuccess && !data) || !data)
    return (
      <div className={styles.main_container}>
        <p className={styles.no_data_found}>No data found</p>
      </div>
    );

  return (
    <section className={styles.main_container}>
      <SpeciesFilter />
      <FilterableSpecies data={data} />
    </section>
  );
};
