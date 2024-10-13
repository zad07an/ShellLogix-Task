import { SingleSpeciePage } from "@/components/templates/SpeciePage";
import { getCachedSpecie } from "@/lib/getCachedSpecie";
import { getIdFromSlug, getImage } from "@/lib/utils";
import { SpecieDataProps } from "@/types/definitions";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface SpeciePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: SpeciePageProps): Promise<Metadata | undefined> {
  try {
    const id = getIdFromSlug(slug);
    const data = await getCachedSpecie(id);

    if (!data) notFound();

    return {
      title: `${data.name}`,
      description: `${data.classification} ${data.designation}`,
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
  }
}

const SpeciePage = async ({ params: { slug } }: SpeciePageProps) => {
  const id = getIdFromSlug(slug);
  const data = await getCachedSpecie(id);

  if (!data) notFound();

  const image = getImage(data.name);

  const combinedData = {
    ...data,
    image: image || "",
  } satisfies SpecieDataProps;

  return <SingleSpeciePage specie={combinedData} />;
};

export default SpeciePage;
