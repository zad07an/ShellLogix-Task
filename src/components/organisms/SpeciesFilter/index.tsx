import { Card, Flex, Stack } from "@chakra-ui/react";
import { FilterSelect } from "../../molecules/FilterSelect";
import { FilterResetButton } from "../../molecules/FilterResetButton";
import { SearchBar } from "../../molecules/SearchBar";
import styles from "./species-filter.module.scss";

export const SpeciesFilter = () => {
  return (
    <Card shadow="none" width="100%">
      <Flex
        justifyContent="space-between"
        gap={6}
        className={styles.search_and_selects}
      >
        <SearchBar />
        <Stack
          direction="row"
          spacing={4}
          width="100%"
          maxWidth="640px"
          className={styles.selects_and_button}
        >
          <Stack direction="row" spacing={4} width="100%" className={styles.selects}>
            <FilterSelect
              data={[
                { value: "brown", name: "Brown" },
                { value: "caucasian", name: "Caucasian" },
                { value: "asian", name: "Asian" },
                { value: "hispanic", name: "Hispanic" },
                { value: "green", name: "Green" },
                { value: "blue", name: "Blue" },
                { value: "grey", name: "Grey" },
                { value: "purple", name: "Purple" },
                { value: "red", name: "Red" },
                { value: "orange", name: "Orange" },
                { value: "yellow", name: "Yellow" },
              ]}
              placeholder="Select a skin color"
              paramsKey="skin-color"
            />
            <FilterSelect
              data={[
                { value: "none", name: "No hair color" },
                { value: "red", name: "Red" },
                { value: "blue", name: "Blue" },
                { value: "blond", name: "Blond" },
                { value: "black", name: "Black" },
                { value: "white", name: "White" },
              ]}
              placeholder="Select a hair color"
              paramsKey="hair-color"
            />
          </Stack>
          <FilterResetButton />
        </Stack>
      </Flex>
    </Card>
  );
};
