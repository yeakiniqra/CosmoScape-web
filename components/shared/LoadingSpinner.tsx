"use client";

import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"
      />
    </div>
  );
}