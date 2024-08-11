"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.dev
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration }}
    >
      <div className="h-full flex flex-col lg:flex-row  px-4 sm:px-12 lg:px-20 xl:px-48 gap-8">
        {/* Image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>

        {/* Text container */}
        <div className="h-1/2 flex flex-col gap-8 items-centr justify-center lg:h-full lg:w-1/2">
          {/* Title */}
          <h1 className="text-4xl font-bold md:text-6xl"> Men bele men hele</h1>
          {/* Desc */}
          <p className="md:text-xl">Hello from the other side!</p>
          {/* Button */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg bg-black ring-1 ring-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg bg-white ring-1 ring-black text-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.dev>
  );
}
