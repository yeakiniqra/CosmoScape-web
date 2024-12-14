import React from "react";
import { motion } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const FuzzyOverlayExample = () => {
  return (
    <div className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{ transform: "translateX(10%) translateY(10%)" }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: 'url("/black-noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[8%] mix-blend-soft-light"
    />
  );
};

const ExampleContent = () => {
  return (
    <div
      style={{
        background: `radial-gradient(125% 125% at 50% 0%, #020617 50%, ${COLORS_TOP[0]})`,
      }}
      className="relative grid h-screen place-content-center space-y-6 bg-gray-950 p-8 text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-6xl font-black"
      >
         Space is the Place 🚀
      </motion.h1>
      <p className="text-center text-gray-300 text-lg">
         Where the stars align and the cosmos is within reach.
      </p>
      <div className="flex items-center justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full border border-[#13FFAA] px-6 py-3 text-lg font-semibold text-white shadow-[0px_4px_24px_#13FFAA]"
        >
            Learn more 
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-[#13FFAA] px-6 py-3 text-lg font-semibold text-gray-900 shadow-[0px_4px_24px_#13FFAA]"
        >
          Try it free
        </motion.button>
      </div>
    </div>
  );
};

export default FuzzyOverlayExample;
