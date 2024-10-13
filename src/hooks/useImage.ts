import { getImage } from "@/lib/utils";
import { useIsomorphicLayoutEffect } from "framer-motion";
import { StaticImageData } from "next/image";
import { useState } from "react";

export const useImage = (imageSrc: string | undefined) => {
  const [image, setImage] = useState<StaticImageData | null>(null);

  useIsomorphicLayoutEffect(() => {
    (async () => {
      const image = await getImage(imageSrc);
      if (!image) return null;
      setImage(image);
    })();
  }, [imageSrc]);

  return image;
};
