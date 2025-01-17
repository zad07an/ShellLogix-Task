import axios from "@/configs/axios";
import { SpecieDataProps } from "@/types/definitions";

export async function getSpecies(page?: number) {
  try {
    const query = page ? `?page=${page}` : "";

    const { count, results } = (
      await axios.get<{ results: SpecieDataProps[]; count: string }>(
        `/api/species/${query}`
      )
    ).data;
    return { count, results };
  } catch (error) {
    console.error("Failed to fetch starships:", error);
  }
}
