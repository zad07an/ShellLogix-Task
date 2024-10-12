import Link from "next/link";
import { ListItems } from "../ListItems";
import { HEADER_LINKS } from "@/constants/header-links";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Logo
        </Link>
        <ul className={styles.links}>
          <ListItems
            items={HEADER_LINKS}
            render={(item) => (
              <li key={item.href} className={styles.link_item}>
                <Link href={item.href} className="link">
                  {item.name}
                </Link>
              </li>
            )}
          />
        </ul>
      </nav>
    </header>
  );
};
