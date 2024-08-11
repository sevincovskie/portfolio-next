"use client";
import { AnimatePresence, delay } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

// new layout
export default function TransitionProvayder({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100"
      >
        <motion.dev
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.dev
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          animate={{ opacity: 0 }}
          initial={{opacity:1}}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}

        >
          {pathname.substring(1)}
        </motion.dev>
        <motion.dev
          className="h-screen w-screen fixed bg-red-400 rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>

        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}
