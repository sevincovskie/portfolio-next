"use client"

import React from 'react'
import { motion } from 'framer-motion'

function Contact () {
  return (
    <motion.dev
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration:1 }}
    >Contact</motion.dev>
  )
}

export default Contact 
