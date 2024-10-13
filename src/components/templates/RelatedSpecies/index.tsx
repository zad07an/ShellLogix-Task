"use client";

import { ListItems } from "@/components/organisms/ListItems";
import { SpecieItem } from "@/components/organisms/SpecieItem";
import { useFetchRelatedSpeciesQuery } from "@/hooks/queries/useFetchRelatedSpeciesQuery";
import {
  Card,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

interface RelatedSpeciesProps {
  currentPersonName: string;
  classification: string;
}

export const RelatedSpecies = ({
  currentPersonName,
  classification,
}: RelatedSpeciesProps) => {
  const { data, status } = useFetchRelatedSpeciesQuery({
    classification,
    currentPersonName,
    limit: 5,
  });

  if (status === "pending") return <Spinner />;

  if (status === "error") {
    return (
      <Text fontSize={24} fontWeight="bold" colorScheme="red">
        Failed to fetch related species.
      </Text>
    );
  }

  if ((status === "success" && !data) || !data) {
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
            items={data}
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
