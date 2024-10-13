import { z } from "zod";

export const specieFormSchema = z.object({
  email: z.string().email("Please enter valid email eddress"),
});

export type SpecieFormSchema = z.infer<typeof specieFormSchema>;
