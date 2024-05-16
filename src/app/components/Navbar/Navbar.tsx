"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const navLinks = [
    {
      title: "Home",
      href: "/Home",
    },
    {
      title: "Product",
      href: "/product",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];
  const pathname = usePathname();
  return (
    <div>
      {" "}
      <nav>
        {navLinks.map((nav, index) => {
          const isActive = pathname.startsWith(nav.href);
          return (
            <Link
              key={index}
              href={nav.href}
              className={isActive ? "font-bold " : ""}
              style={{ color: isActive ? "red" : "black" }}
            >
              {nav.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
