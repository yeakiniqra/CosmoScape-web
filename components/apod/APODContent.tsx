"use client";

import { motion } from "framer-motion";
import { Calendar, Info } from "lucide-react";
import Image from "next/image";
import { APODData } from "@/types/nasa";

interface APODContentProps {
  apod: APODData;
}

export function APODContent({ apod }: APODContentProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative group aspect-video"
      >
        <Image
          src={apod.url}
          alt={apod.title}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold">{apod.title}</h2>
        
        <div className="flex items-center gap-4 text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{apod.date}</span>
          </div>
          {apod.copyright && (
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              <span>© {apod.copyright}</span>
            </div>
          )}
        </div>

        <p className="text-lg leading-relaxed text-gray-300">
          {apod.explanation}
        </p>
      </motion.div>
    </div>
  );
}