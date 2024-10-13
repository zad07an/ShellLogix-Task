"use client";

import { Heading, Stack, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import Image from "next/image";
import { createContext, ReactNode, useContext } from "react";
import { SpecieForm } from "../SpecieForm";
import styles from "./specie-card.module.scss";

const SpecieCardContext = createContext<boolean | undefined>(undefined);

const useSpecieContext = (componentName: string) => {
  const context = useContext(SpecieCardContext);
  if (!context) {
    throw new Error(
      `${componentName} should be used within SpecieCardContext.`
    );
  }
  return context;
};

interface SpecieCardProps {
  children: ReactNode;
}

export const SpecieCard = ({ children }: SpecieCardProps) => {
  return (
    <SpecieCardContext.Provider value={true}>
      <div className={styles.specie_card}>{children}</div>
    </SpecieCardContext.Provider>
  );
};

interface SpecieCardImageProps {
  image: string | undefined;
}

export const SpecieCardImage = ({ image }: SpecieCardImageProps) => {
  useSpecieContext("SpecieCardImage");
  return (
    image && (
      <div className={styles.image}>
        <Image src={image} alt={image} fill />
      </div>
    )
  );
};

interface SpecieCardInfoWrapper {
  name: string;
  classification: string;
  createdAt: string;
}

export const SpecieCardInfoWrapper = ({
  name,
  classification,
  createdAt,
}: SpecieCardInfoWrapper) => {
  useSpecieContext("SpecieCardInfoWrapper");
  const date = dayjs(createdAt).format("DD.MM.YYYY");

  return (
    <div className={styles.specie_info_wrapper}>
      <Heading fontWeight="bold">{name}</Heading>
      <Stack spacing={2}>
        <Text
          fontSize={18}
          fontWeight="medium"
          color="teal"
          textTransform="capitalize"
        >
          Classification: {classification}
        </Text>
        <Text color="teal" fontSize={18} fontWeight="medium">
          Created: {date}
        </Text>
      </Stack>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aspernatur
        reprehenderit, odit voluptatum voluptatem suscipit itaque voluptates
        exercitationem rem quis, sit dicta ducimus temporibus doloremque!
        Doloremque assumenda deleniti ipsa laudantium tenetur accusantium?
        Aliquam quae animi, ducimus corporis vitae aliquid tenetur quidem hic.
        Ab, impedit quis. In, velit! Tenetur, recusandae enim!
      </Text>
      <SpecieForm />
    </div>
  );
};
