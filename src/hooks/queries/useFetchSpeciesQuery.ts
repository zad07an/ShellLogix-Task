import { getNameSlug } from "@/lib/utils";
import { getSpecies } from "@/services/api/get-sepcies";
import { usePaginationStore } from "@/store/usePaginationStore";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useFetchSpeciesQuery = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { setCount } = usePaginationStore();

  const options = useQuery({
    queryKey: ["species", page],
    queryFn: async () => {
      const fetchedData = await getSpecies(page);

      if (!fetchedData) return null;

      setCount(Number(fetchedData.count));

      const combinedData = fetchedData.results.map((specie) => {
        const name = getNameSlug(specie.name);

        return {
          ...specie,
          image: name, // Add the image to the species data
        };
      });

      return combinedData;
    },
  });

  return options;
};
