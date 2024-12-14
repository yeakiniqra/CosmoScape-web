"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  title: string;
}

export function PageContainer({ children, title }: PageContainerProps) {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
          {title}
        </h1>
        {children}
      </motion.div>
    </div>
  );
}