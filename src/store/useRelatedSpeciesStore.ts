import { SpecieDataProps } from "@/types/definitions";
import { create } from "zustand";

interface RelatedSpeciesStore {
  relatedSpecies: SpecieDataProps[];
  setRelatedSpecies: (items: SpecieDataProps[]) => void;
}

export const useRelatedSpeciesStore = create<RelatedSpeciesStore>((set) => ({
  relatedSpecies: [],
  setRelatedSpecies: (relatedSpecies) => {
    return set(() => ({ relatedSpecies }));
  },
}));
