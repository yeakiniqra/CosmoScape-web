"use client";

import { motion } from "framer-motion";
import { Rocket, Star, Eclipse, Camera } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { BackgroundVideo } from "@/components/layout/BackgroundVideo";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden pt-20">
      <BackgroundVideo />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
            Explore Space with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Cosmoscape
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore the wonders of space through NASA's incredible imagery and API
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mt-12">
          <FeatureCard
            href="/apod"
            title="Astronomy Picture"
            icon={<Star className="w-6 h-6" />}
            delay={0.2}
          />
          <FeatureCard
            href="/imagery"
            title="Mars Weather"
            icon={<Eclipse className="w-6 h-6" />}
            delay={0.4}
          />
          <FeatureCard
            href="/mars"
            title="Mars Rover"
            icon={<Rocket className="w-6 h-6" />}
            delay={0.6}
          />
          <FeatureCard
            href="/epic"
            title="EPIC Views"
            icon={<Camera className="w-6 h-6" />}
            delay={0.8}
          />
        </div>
      </div>

    </main>
  );
}