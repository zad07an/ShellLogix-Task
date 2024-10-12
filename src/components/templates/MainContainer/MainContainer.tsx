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
  if (isError) return <p>Failed to fetch species</p>;
  if ((isSuccess && !data) || !data) return <p>No data found</p>;

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
