import { getNameSlug } from "@/lib/utils";
import { getSpecies } from "@/services/api/get-sepcies";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useFetchSpeciesQuery = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const options = useQuery({
    queryKey: ["species", page],
    queryFn: async () => {
      const fetchedData = await getSpecies(page);

      if (!fetchedData) return null;

      const combinedData = fetchedData.results.map((specie) => {
        const name = getNameSlug(specie.name);
        console.log(name);
        return {
          ...specie,
          image: `${name}.png`, // Add the image to the species data
        };
      });

      return combinedData;
    },
  });

  return options;
};
