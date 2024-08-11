"use client";
import React from "react";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";



export default function Brain({ scrollYProgress }) {
  const  rotateForward =useTransform(scrollYProgress,[0,10], [0,360])

  return (
    <motion.div className="h-full w-full">
      <motion.img
        src="/girl.png"
        alt="Girl Image"
        width={900}
        height={400}
        
        animate={{ rotate: "100deg" }}
        transition={{ duration: 2 }}
        style={{rotate:rotateForward}}
      />
    </motion.div>
  );
}


