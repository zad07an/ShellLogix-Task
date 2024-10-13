import { SpecieDataProps } from "@/types/definitions";

interface FilterPersonsProps {
  data: SpecieDataProps[];
  skinColor: string;
  hairColor: string;
}

export function filterPersons({
  data,
  hairColor,
  skinColor,
}: FilterPersonsProps) {
  if (skinColor && !hairColor) {
    return data.filter((item) => item.skin_colors.includes(skinColor));
  }
  if (hairColor && !skinColor) {
    return data.filter((item) => item.hair_colors.includes(hairColor));
  }
  if (hairColor && skinColor) {
    return data.filter(
      (item) =>
        item.hair_colors.includes(hairColor) &&
        item.skin_colors.includes(skinColor)
    );
  }
  return data;
}
