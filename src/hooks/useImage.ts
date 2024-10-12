import { getImage } from "@/lib/utils";
import { useIsomorphicLayoutEffect } from "framer-motion";
import { useState } from "react";

export const useImage = (imageSrc: string | undefined) => {
  const [image, setImage] = useState<string | null>(null);

  useIsomorphicLayoutEffect(() => {
    (async () => {
      const image = await getImage(imageSrc);
      if (!image) return null;
      setImage(image.src);
    })();
  }, [imageSrc]);

  return image;
};
