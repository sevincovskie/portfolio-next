"use client"
import React from 'react'
import { motion } from 'framer-motion'

function Portfolio() {
  return (
  <motion.dev
  className="h-full"
  initial={{ y: "-200vh" }}
  animate={{ y: "0" }}
  transition={{ duration: 1 }}
>Portfolio</motion.dev>
  )
}

export default Portfolio
