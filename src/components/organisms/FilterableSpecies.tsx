import { filterPersons } from "@/lib/filterPersons";
import { SpecieDataProps } from "@/types/definitions";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { ListItems } from "./ListItems";
import { SpecieItem } from "./SpecieItem";
import { Pagination } from "../molecules/Pagination";
import { useSearchParams } from "next/navigation";

interface FilterableSpeciesProps {
  data: SpecieDataProps[];
}

export const FilterableSpecies = ({ data }: FilterableSpeciesProps) => {
  const searchParams = useSearchParams();
  const hairColor = searchParams.get("hair-color") || "";
  const skinColor = searchParams.get("skin-color") || "";

  const filteredData = useMemo(() => {
    return filterPersons({ data, skinColor, hairColor });
  }, [hairColor, skinColor]);

  return !!filteredData.length ? (
    <>
      <Grid
        width="100%"
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={8}
      >
        <ListItems
          items={filteredData}
          render={(item) => (
            <GridItem key={item.name}>
              <SpecieItem item={item} />
            </GridItem>
          )}
        />
      </Grid>
      <Pagination />
    </>
  ) : (
    <Text>No data</Text>
  );
};
