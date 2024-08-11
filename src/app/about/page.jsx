"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Brain from "@/components/brain";

function About() {

  const containerRef=useRef();

  const {scrollYProgress}=useScroll({container:containerRef})
  return (
    <motion.dev
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl: 1/2 ">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIO title */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIO DESCRIPTION */}

            <p className="text-2xl">Bir proqramistden sorusublar ki, niye gozlerin yuxulu gorsenir?
              <br></br>
              O da deyib ki:
              -I'm tired of the society's unrealistic beauty standarts.
            </p>
            <span className="italic"> pafoslu statuslar</span>
            {/* BIO SIGN  svg*/}
            <div className=""></div>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILLS title */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* skill list */}
            <div className="flex gap-2 flex-wrap">
              <Image src="./html.svg" alt="" width={100} height={100} className="hover:bg-black p-2" />
              <Image src="./css.svg" alt="" width={100} height={100} className="hover:bg-black p-2" />
              <Image src="./scss.svg" alt="" width={100} height={100} className="hover:bg-black p-2" />
              <Image src="./js.svg" alt="" width={100} height={100} className="hover:bg-black p-2" />
              <Image src="./react.svg" alt="" width={100} height={100} className="hover:bg-black p-2" />
              <Image src="./next.svg" alt="" width={100} height={100} className="hover:bg-black p-2"/>
              <Image src="./tailwind.svg" alt="" width={100} height={100} className="hover:bg-black p-2"/>
              <Image src="./redux.svg" alt="" width={100} height={100}className="hover:bg-black p-2" />
              <Image src="./typescript.svg" alt="" width={100} height={100} className="hover:bg-black p-2"/>
              <Image src="./firebase.svg" alt="" width={100} height={100} className="hover:bg-black p-2"/>
              <Image src="./mysql.svg" alt="" width={100} height={100} className="hover:bg-black p-2"/>
            </div>
            {/* skill scrol svg */}
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
        <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </motion.dev>
  );
}

export default About;
