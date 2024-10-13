import { combineData } from "@/lib/combineData";
import { getSpecies } from "@/services/api/get-sepcies";
import { usePaginationStore } from "@/store/usePaginationStore";
import { useRelatedSpeciesStore } from "@/store/useRelatedSpeciesStore";
import { useQuery } from "@tanstack/react-query";
import dayJs from "dayjs";
import { sortBy } from "lodash";
import { useSearchParams } from "next/navigation";

export const useFetchSpeciesQuery = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { setCount } = usePaginationStore();
  const { setRelatedSpecies } = useRelatedSpeciesStore();

  const options = useQuery({
    queryKey: ["species", page],
    queryFn: async () => {
      const fetchedData = await getSpecies(page);

      if (!fetchedData) return null;

      setCount(Number(fetchedData.count));

      const combinedData = combineData(fetchedData.results);

      const sortedData = sortBy(combinedData, (item) =>
        dayJs(item.created).toDate()
      );

      setRelatedSpecies(combinedData);

      return sortedData;
    },
    retry: 3,
  });

  return options;
};
