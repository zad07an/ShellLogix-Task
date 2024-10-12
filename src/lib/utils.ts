import { StaticImageData } from "next/image";

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getIdFromSlug(slug: string) {
  const id = slug.split("-");
  return id[id.length - 1];
}

export function getIdFromUrl(url: string) {
  const urlId = url.match(/(\d+)\/$/);
  return urlId?.[1];
}

export function getNameSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]+/g, "");
}

export function convertNameToSlug(input: string, url: string) {
  const urlId = getIdFromUrl(url);
  const nameSlug = getNameSlug(input);

  return `${nameSlug}-${urlId}`;
}

export async function getImage(
  src: string | undefined
): Promise<StaticImageData | null> {
  try {
    if (!src) return null;
    const image = await import(`@/assets/images/${src}`);
    return image.default as StaticImageData;
  } catch (error) {
    console.error("Image not found:", error);
    return null;
  }
}
