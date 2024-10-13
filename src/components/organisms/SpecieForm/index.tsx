import { Button, Input } from "@chakra-ui/react";
import styles from "./specie-form.module.scss";

export const SpecieForm = () => {
  return (
    <form className={styles.form}>
      <Input
        placeholder="Email"
        type="email"
        focusBorderColor="#009c96"
        borderColor="GrayText"
      />
      <Button colorScheme="teal">Pre-order Now</Button>
    </form>
  );
};
