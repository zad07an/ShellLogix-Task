import { Stack } from "@chakra-ui/react";
import { FilterSelect } from "../molecules/FilterSelect";
import { FilterResetButton } from "../molecules/FilterResetButton";

export const SpeciesFilter = () => {
  return (
    <div>
      <Stack direction="row" spacing={4}>
        <FilterSelect
          data={[
            { value: "brown", name: "Brown" },
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
        <FilterResetButton />
      </Stack>
    </div>
  );
};
