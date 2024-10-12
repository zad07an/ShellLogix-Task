import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProviderChakraProps {
  children: ReactNode;
}

export const ProviderChakra = ({ children }: ProviderChakraProps) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
