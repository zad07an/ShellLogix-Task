"use client";

import { ErrorTryAgain } from "@/components/organisms/ErrorTryAgain";
import { ReactNode } from "react";
import ErrorBoundary from "../ErrorBoundary";
import { ProviderChakra } from "./ProviderChakra";
import { ProviderReactQuery } from "./ProviderReactQuery";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ErrorBoundary fallback={<ErrorTryAgain />}>
      <ProviderReactQuery>
        <ProviderChakra>{children}</ProviderChakra>
      </ProviderReactQuery>
    </ErrorBoundary>
  );
};
