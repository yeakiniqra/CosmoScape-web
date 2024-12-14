'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { MarsPhoto } from "@/types/nasa";

interface MarsContentProps {
  photos?: MarsPhoto[]; // Optional with a fallback
}

export function MarsContent({ photos = [] }: MarsContentProps) {
  if (!Array.isArray(photos)) {
    console.error("Invalid photos data:", photos);
    return <p>Unable to load Mars photos. Please try again later.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl"
          >
            <Image 
              src={photo.img_src} 
              alt={`Mars photo taken by ${photo.rover.name} on ${photo.earth_date}`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h3 className="text-lg font-bold">{photo.camera.full_name}</h3>
              <p className="text-sm">{`Rover: ${photo.rover.name}`}</p>
              <p className="text-sm">{`Date: ${new Date(photo.earth_date).toLocaleDateString()}`}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
