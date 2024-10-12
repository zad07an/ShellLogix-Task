import { getSpecie } from "@/services/api/get-specie";
import { cache } from "react";

export const getCachedSpecie = cache(async (id: string) => {
  try {
    return await getSpecie(id);
  } catch (error) {
    console.error("Failed to fetch specie", error);
  }
});
