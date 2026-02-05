"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, className = "", href }) => {
  const path = usePathname();
  const styles = clsx(className, {
    active: path === href,
  });

  return (
    <>
      <Link href={href} className={styles}>
        {children}
      </Link>
    </>
  );
};

export default NavLink;
