"use client";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Logo */}

      <div className="md:hidden">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1 ">Sevinc</span>
          <div className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </div>
        </Link>
      </div>

      {/* Responsive */}
      <div className="md:hidden">
        {/* Menu */}
        <button
          className="w-10 h-8 flex  flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev)=> !prev)}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>

        {/* Menu List */}

        {open && (
          <div className=" absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
