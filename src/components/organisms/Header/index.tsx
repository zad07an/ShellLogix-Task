import logo from "@/assets/logo.png";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { HEADER_LINKS } from "@/constants/header-links";
import Image from "next/image";
import Link from "next/link";
import { ListItems } from "../ListItems";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Image src={logo.src} alt="logo" width={72} height={36} />
        </Link>
        <div className={styles.menu_items}>
          <ul className={styles.links}>
            <ListItems
              items={HEADER_LINKS}
              render={(item) => (
                <li key={item.href} className={styles.link_item}>
                  <ActiveLink href={item.href}>{item.name}</ActiveLink>
                </li>
              )}
            />
          </ul>
        </div>
      </nav>
    </header>
  );
};
