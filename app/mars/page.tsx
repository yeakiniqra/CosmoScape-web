"use client";

import { useEffect, useState, useRef } from "react";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { PageContainer } from "@/components/layout/PageContainer";
import { MarsContent } from "@/components/rover/MarsContent";
import { getMarsPhotos } from "@/lib/api";
import type { MarsPhoto } from "@/types/nasa";
import { motion } from "framer-motion";

export default function MarsPage() {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [visiblePhotos, setVisiblePhotos] = useState<MarsPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const observerTarget = useRef<HTMLDivElement>(null);

  const photosPerPage = 30;

  useEffect(() => {
    async function fetchMarsPhotos() {
      try {
        setLoading(true);
        const data = await getMarsPhotos();
        setPhotos(data);
        setVisiblePhotos(data.slice(0, photosPerPage)); // Load the first 30
      } catch (error) {
        console.error("Error fetching Mars photos:", error);
        setError("Failed to fetch Mars photos. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchMarsPhotos();
  }, []);

  // Load more photos when the user scrolls to the target element
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && visiblePhotos.length < photos.length) {
          loadMorePhotos();
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [visiblePhotos, photos]);

  const loadMorePhotos = () => {
    const nextPage = currentPage + 1;
    const newPhotos = photos.slice(0, nextPage * photosPerPage);
    setVisiblePhotos(newPhotos);
    setCurrentPage(nextPage);
  };

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
    <PageContainer title="Mars Rover Photos">
      <MarsContent photos={visiblePhotos} />
      <div ref={observerTarget} className="h-10"></div> {/* Invisible target */}
    </PageContainer>
  );
}
