"use client";

import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { PageContainer } from "@/components/layout/PageContainer";
import { ImageryContent } from "@/components/imagery/ImageryContent";
import { getEarthImagery } from "@/lib/api";
import type { EarthImagery } from "@/types/nasa";
import { motion } from "framer-motion";

export default function ImageryPage() {
  const [imagery, setImagery] = useState<EarthImagery | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEarthImagery() {
      try {
        setLoading(true);
        const data = await getEarthImagery();
        setImagery(data);
      } catch (error) {
        console.error("Error fetching Earth Imagery:", error);
        setError("Failed to fetch Earth imagery. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchEarthImagery();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center min-h-screen"
      >
        <div className="text-center bg-red-500/20 p-8 rounded-xl">
          <h2 className="text-2xl text-white mb-4">Oops!</h2>
          <p className="text-white/80">{error}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Try Again
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <PageContainer title="InSight: Mars Weather">
      {imagery && <ImageryContent imagery={imagery} />}
    </PageContainer>
  );
}