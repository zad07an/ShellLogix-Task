import { getImage } from "@/lib/utils";
import { getSpecie } from "@/services/api/get-specie";
import { SpecieDataProps } from "@/types/definitions";
import { useQuery } from "@tanstack/react-query";

export const useFetchSingleSpecieQuery = (id: string) => {
  return useQuery({
    queryKey: ["specie", id],
    queryFn: async () => {
      const specie = await getSpecie(id);
      if (!specie) return undefined;

      const image = getImage(specie.name);

      return {
        ...specie,
        image: image || "",
      } satisfies SpecieDataProps;
    },
  });
};
