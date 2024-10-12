"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import styles from "./active-link.module.scss";

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
}

export const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${styles.link} ${isActive && styles.active}`}>
      {children}
    </Link>
  );
};
