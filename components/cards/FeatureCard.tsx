"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface FeatureCardProps {
  href: string;
  title: string;
  icon: ReactNode;
  delay: number;
}

export function FeatureCard({ href, title, icon, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Link href={href}>
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-gray-800/50 text-white">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <ArrowRight className="absolute bottom-4 right-4 w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </motion.div>
  );
}