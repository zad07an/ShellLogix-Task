import { getCurrentYear } from "@/lib/utils";
import styles from "./footer.module.scss";

export const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear}. All rights reserved.</p>
    </footer>
  );
};
