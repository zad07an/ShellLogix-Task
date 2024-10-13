import { SpecieDataProps } from "@/types/definitions";

interface FilterPersonsProps {
  data: SpecieDataProps[];
  skinColor: string;
  hairColor: string;
  name: string;
}

export function filterPersons({
  data,
  hairColor,
  skinColor,
  name,
}: FilterPersonsProps) {
  return data.filter((item) => {
    const matchesName = name
      ? item.name.toLowerCase().includes(name.toLowerCase())
      : true;

    const matchesSkinColor = skinColor
      ? item.skin_colors.toLowerCase().includes(skinColor.toLowerCase())
      : true;

    const matchesHairColor = hairColor
      ? item.hair_colors.toLowerCase().includes(hairColor.toLowerCase())
      : true;

    return matchesName && matchesSkinColor && matchesHairColor;
  });
}
