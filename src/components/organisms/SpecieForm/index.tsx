"use client";

import { SubmitButton } from "@/components/atoms/SubmitButton";
import { specieFormSchema, SpecieFormSchema } from "@/schemas/specie-form";
import { FormControl, Input, useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import styles from "./specie-form.module.scss";

export const SpecieForm = () => {
  const [isPending, startTransition] = useTransition();
  const toast = useToast();

  const form = useForm<SpecieFormSchema>({
    resolver: zodResolver(specieFormSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = form.handleSubmit((values: SpecieFormSchema) => {
    startTransition(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          toast({
            title: "Email sent",
            description: `We've saved your email address(${values.email}) for the order!`,
            status: "success",
            duration: 3000,
            colorScheme: "teal",
            position: "top",
          });
          resolve(form.reset());
        }, 1000);
      });
    });
  });

  return (
    <form className={styles.form} onSubmit={onSubmit} autoComplete="off">
      <FormControl isInvalid={!!form.formState.errors.email}>
        <Input
          {...form.register("email")}
          placeholder="Email"
          type="email"
          required={false}
          focusBorderColor={
            !!form.formState.errors.email ? "#ff0000" : "#009c96"
          }
          borderColor={form.formState.errors.email ? "red" : "GrayText"}
        />
      </FormControl>
      <SubmitButton
        isPending={isPending}
        isError={!!form.formState.errors.email}
      >
        Pre-order Now
      </SubmitButton>
    </form>
  );
};
