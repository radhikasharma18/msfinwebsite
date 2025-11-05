"use client";
import React from "react";
import { motion } from "framer-motion";
// import { LampContainer } from "./path/to/lamp"; // Update the path as necessary

export default function Page() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center"
      >
        Welcome to Aceternity UI
      </motion.h1>
    </LampContainer>
  );
}
