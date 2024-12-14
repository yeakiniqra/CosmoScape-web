'use client';

import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { PageContainer } from "@/components/layout/PageContainer";
import { EpicContent } from "@/components/epic/EpicContent";
import { getEPIC } from "@/lib/api";
import { motion } from "framer-motion";
import type { EPICImage } from "@/types/nasa";


export default function EpicPage() {
  const [images, setImages] = useState<EPICImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEPIC() {
      try {
        setLoading(true);
        const data = await getEPIC();
        setImages(data);
      } catch (error) {
        console.error("Error fetching EPIC data:", error);
        setError("Failed to fetch EPIC data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchEPIC();
  }, []);

  return (
    <PageContainer title="Earth Polychromatic Imaging Camera (EPIC)">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p className="text-red-500 text-lg">{error}</p>
        ) : (
          <EpicContent images={images} />
        )}
      </motion.div>
    </PageContainer>
  );
}