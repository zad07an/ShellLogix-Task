import { ReactNode } from "react";
import { ProviderChakra } from "./ProviderChakra";
import { ProviderReactQuery } from "./ProviderReactQuery";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ProviderReactQuery>
      <ProviderChakra>{children}</ProviderChakra>
    </ProviderReactQuery>
  );
};
