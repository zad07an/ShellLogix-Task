import axios from "@/configs/axios";
import { SpecieDataProps } from "@/types/definitions";

export async function getSpecie(id: string) {
  try {
    return (await axios.get<SpecieDataProps>(`/api/species/${id}/`)).data;
  } catch (error) {
    console.error("Failed to fetch starships:", error);
  }
}
