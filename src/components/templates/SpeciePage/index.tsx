import { SpecieDataProps } from "@/types/definitions";
import styles from "./specie-page.module.scss";
import Image from "next/image";
import { Heading, Text } from "@chakra-ui/react";
import { SpecieForm } from "@/components/organisms/SpecieForm";

interface SingleSpeciePageProps {
  specie: SpecieDataProps;
}

export const SingleSpeciePage = ({ specie }: SingleSpeciePageProps) => {
  return (
    <section className={styles.specie_container}>
      <div className={styles.specie_card}>
        {specie.image && (
          <Image
            src={specie.image}
            alt={specie.name}
            width={512}
            height={512}
          />
        )}
        <div className={styles.specie_info_wrapper}>
          <Heading fontWeight="bold">{specie.name}</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            aspernatur reprehenderit, odit voluptatum voluptatem suscipit itaque
            voluptates exercitationem rem quis, sit dicta ducimus temporibus
            doloremque! Doloremque assumenda deleniti ipsa laudantium tenetur
            accusantium? Aliquam quae animi, ducimus corporis vitae aliquid
            tenetur quidem hic. Ab, impedit quis. In, velit! Tenetur, recusandae
            enim!
          </Text>
          <SpecieForm />
        </div>
      </div>
    </section>
  );
};
