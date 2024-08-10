"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink({ link }) {
  const patName = usePathname();
  return (
    <Link
      className={`roundend p-1 ${
        patName === link.url && "bg-black text-white"
      }`}
      href={link.url}
      key={link.title}
    >
      {link.title}
    </Link>
  );
}

export default NavLink;
