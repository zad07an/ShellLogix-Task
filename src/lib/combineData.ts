import { SpecieDataProps } from "@/types/definitions";
import { map } from "lodash";
import { getImage, getNameSlug } from "./utils";

export function combineData(data: SpecieDataProps[]) {
  return map(data, (item) => {
    const name = getNameSlug(item.name);
    const image = getImage(name);
    return {
      ...item,
      image, // Add the image to the species data
    };
  });
}
