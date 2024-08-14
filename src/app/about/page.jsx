"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import Brain from "@/components/brain";

function About() {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView=useInView(skillRef, {once: true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

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

            <motion.p className="text-2xl" initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}>
              Bir proqramistden sorusublar ki, niye gozlerin yuxulu gorsenir?
              <br></br>O da deyib ki: -I'm tired of the society's unrealistic
              beauty standarts.
            </motion.p>
            <span className="italic"> pafoslu statuslar</span>
            {/* BIO SIGN  svg*/}
            <div className=""></div>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-4 justify-center" ref={skillRef}>
            {/* SKILLS title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* skill list */}
            <motion.div initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}} className="flex gap-3 flex-wrap">
              <Image
                src="./html.svg"
                alt=""
                width={100}
                height={100}
                className="hover:bg-black p-2"
              />
              <Image
                src="./css.svg"
                alt=""
                width={100}
                height={100}
                className="hover:bg-black p-2"
              />
              <Image
                src="./scss.svg"
                alt=""
                width={100}
                height={100}
                className="hover:bg-black p-2"
              />
              <Image
                src="./js.svg"
                alt=""
                width={100}
                height={100}
                className="hover:bg-black p-2"
              />
              <Image
                src="./react.svg"
                alt=""
                width={100}
                height={100}
                className="hover:bg-black p-2"
              />
              <Image
                src="./next.svg"
                alt=""
                width={100}
                height={100}
                className="hover:bg-black p-2"
              />
              <Image
                src="./tailwind.svg"
                alt=""
                width={100}
                height={100}
                className="hover:bg-black p-2"
              />
              <Image
                src="./redux.svg"
                alt=""
                width={100}
                height={100}
                className="hover:bg-black p-2"
              />
              <Image
                src="./typescript.svg"
                alt=""
                width={100}
                height={100}
                className="hover:bg-black p-2"
              />
              <Image
                src="./firebase.svg"
                alt=""
                width={100}
                height={100}
                className="hover:bg-black p-2"
              />
              <Image
                src="./mysql.svg"
                alt=""
                width={100}
                height={100}
                className="hover:bg-black p-2"
              />
            </motion.div>
            {/* skill scrol svg */}
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.dev>
  );
}

export default About;
