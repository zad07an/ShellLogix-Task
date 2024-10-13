import { getCurrentYear } from "@/lib/utils";
import styles from "./footer.module.scss";

export const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear}. Created by Aram Zadoyan. All rights reserved.</p>
    </footer>
  );
};
