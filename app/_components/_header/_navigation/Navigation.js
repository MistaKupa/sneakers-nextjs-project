"use client";

import Link from "next/link";
import LogoBlack from "./LogoBlack";
import navLinks from "@/data/navLinks";

import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center gap-16 text-dark-400 h-full">
      <LogoBlack />

      <ul className="flex items-center justify-between gap-10 h-full">
        {navLinks.map((item, i) => (
          <li className="h-full flex items-center" key={i}>
            <Link
              href={item.href}
              className={`h-full flex items-center border-b-4 transition-all duration-300 ${
                pathname === item.href
                  ? "border-newPrimary text-dark-500"
                  : "hover:text-dark-500  border-transparent hover:newPrimary"
              }
            `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
