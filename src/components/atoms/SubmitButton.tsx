import { Button, Spinner } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SubmitButtonProps {
  isPending: boolean;
  isError?: boolean;
  children: ReactNode;
}

export const SubmitButton = ({
  children,
  isPending,
  isError,
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      colorScheme={isError ? "red" : "teal"}
      disabled={isPending}
      gap={2}
    >
      {children} {isPending && <Spinner size="sm" />}
    </Button>
  );
};
