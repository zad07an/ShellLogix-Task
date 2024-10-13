import { filterPersons } from "@/lib/filterPersons";
import { SpecieDataProps } from "@/types/definitions";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Pagination } from "../molecules/Pagination";
import { ListItems } from "./ListItems";
import { SpecieItem } from "./SpecieItem";

interface FilterableSpeciesProps {
  data: SpecieDataProps[];
}

export const FilterableSpecies = ({ data }: FilterableSpeciesProps) => {
  const searchParams = useSearchParams();
  const hairColor = searchParams.get("hair-color") || "";
  const skinColor = searchParams.get("skin-color") || "";
  const name = searchParams.get("name") || "";

  const filteredData = useMemo(() => {
    return filterPersons({ data, skinColor, hairColor, name });
  }, [hairColor, skinColor, name, data]);

  return !!filteredData.length ? (
    <>
      <Grid
        width="100%"
        height="100%"
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
      {data.length === filteredData.length && <Pagination />}
    </>
  ) : (
    <Text fontSize={24} fontWeight="bold">
      No data found
    </Text>
  );
};
