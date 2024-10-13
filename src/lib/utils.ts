import { IMAGES } from "@/constants/images";

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

export function getImage(src: string | undefined) {
  if (!src) return undefined;
  const personName = getNameSlug(src);
  return IMAGES.find((item) => item.name === personName)?.image;
}
