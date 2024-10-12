"use client";

import { Pagination } from "@/components/molecules/Pagination";
import { ListItems } from "@/components/organisms/ListItems";
import { SpecieItem } from "@/components/organisms/SpecieItem";
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
      <div className={styles.starships_list}>
        <ListItems
          items={data}
          render={(item) => <SpecieItem key={item.name} item={item} />}
        />
      </div>
      <Pagination />
    </section>
  );
};
