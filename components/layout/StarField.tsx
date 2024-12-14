"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function StarField() {
  const [stars, setStars] = useState<{
    x: number;
    y: number;
    initialScale: number;
    duration: number;
  }[]>([]);

  useEffect(() => {
    // Generate star properties only on the client side
    const newStars = [...Array(100)].map((_, i) => {
      // Use Math.random() to ensure consistent generation
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        initialScale: Math.random(),
        duration: Math.random() * 3 + 2,
      };
    });

    setStars(newStars);
  }, []);

  // Render nothing until stars are generated
  if (stars.length === 0) return null;

  return (
    <div className="absolute inset-0">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: `${star.x}%`,
            y: `${star.y}%`,
            scale: star.initialScale,
          }}
          animate={{
            scale: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}