import { LoaderCircle } from "lucide-react";
import { ReactNode } from "react";
import styles from "./submit-button.module.scss";

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
    <button
      className={`${styles.button} ${isError ? styles.error : ""}`}
      type="submit"
      disabled={isPending}
    >
      {children}{" "}
      {isPending && <LoaderCircle size={16} className={styles.loading} />}
    </button>
  );
};
