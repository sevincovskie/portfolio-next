"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

function Portfolio() {
  const ref = useRef();
  return (
    <motion.dev
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className="w-screen h-[calc(100vh)] flex items-center justify-center">My Works</div>
      </div>
    </motion.dev>
  );
}

export default Portfolio;
