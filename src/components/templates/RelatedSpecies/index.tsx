"use client";

import { ListItems } from "@/components/organisms/ListItems";
import { SpecieItem } from "@/components/organisms/SpecieItem";
import { combineData } from "@/lib/combineData";
import { useRelatedSpeciesStore } from "@/store/useRelatedSpeciesStore";
import { Card, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { sortBy } from "lodash";
import { useMemo } from "react";

interface RelatedSpeciesProps {
  currentPersonName: string;
  classification: string;
}

export const RelatedSpecies = ({
  currentPersonName,
  classification,
}: RelatedSpeciesProps) => {
  const { relatedSpecies } = useRelatedSpeciesStore();

  const filteredRelatedSpecies = useMemo(() => {
    const filteredData = relatedSpecies.filter(
      (item) =>
        item.name !== currentPersonName &&
        item.classification === classification
    );
    const combinedData = combineData(filteredData);

    return sortBy(combinedData, (item) => dayjs(item.created).toDate()).slice(
      0,
      4
    );
  }, [currentPersonName, classification, relatedSpecies]);

  if (!filteredRelatedSpecies || !filteredRelatedSpecies.length) {
    return (
      <Text fontSize={24} fontWeight="bold">
        No related species.
      </Text>
    );
  }

  return (
    <Card width="100%" shadow="none">
      <Stack spacing={6}>
        <Heading fontSize={24} fontWeight="bold">
          Related Species
        </Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(320px, 1fr))" gap={8}>
          <ListItems
            items={filteredRelatedSpecies}
            render={(item) => (
              <GridItem key={item.name}>
                <SpecieItem item={item} />
              </GridItem>
            )}
          />
        </Grid>
      </Stack>
    </Card>
  );
};
