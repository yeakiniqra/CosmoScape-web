'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { EPICImage } from "@/types/nasa";

interface EpicContentProps {
  images: EPICImage[];
}

export function EpicContent({ images }: EpicContentProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {images.map((image, index) => (
        <motion.div
          key={image.identifier}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
        >
          {/* NASA EPIC Image */}
          <Image
            src={`https://epic.gsfc.nasa.gov/archive/natural/2024/12/12/png/${image.image}.png`}
            alt={image.caption}
            width={400}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />

          {/* Image Caption */}
          <div className="p-4 text-white">
            <h2 className="text-lg font-semibold mb-2">{image.caption}</h2>
            <p className="text-sm text-gray-400">
              <strong>Date:</strong> {new Date(image.date).toLocaleString()}
            </p>
            <p className="text-sm text-gray-400">
              <strong>Version:</strong> {image.version}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
