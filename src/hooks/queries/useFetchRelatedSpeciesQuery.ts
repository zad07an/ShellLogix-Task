import { getNameSlug } from "@/lib/utils";
import { getSpecies } from "@/services/api/get-sepcies";
import { useQuery } from "@tanstack/react-query";

interface FetchRelatedSpeciesQueryProps {
  currentPersonName: string;
  classification: string;
  limit?: number;
}

export const useFetchRelatedSpeciesQuery = ({
  classification,
  currentPersonName,
  limit = 5,
}: FetchRelatedSpeciesQueryProps) => {
  return useQuery({
    queryKey: ["species"],
    queryFn: async () => {
      const fetchedData = await getSpecies();

      if (!fetchedData) return null;

      const combinedData = fetchedData.results
        .filter(
          (item) =>
            item.name !== currentPersonName &&
            item.classification === classification
        )
        .map((specie) => {
          const name = getNameSlug(specie.name);

          return {
            ...specie,
            image: name, // Add the image to the species data
          };
        })
        .slice(0, limit);

      return combinedData;
    },
  });
};
