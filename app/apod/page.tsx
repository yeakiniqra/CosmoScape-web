"use client";

import { useEffect, useState } from "react";
import { getAPOD } from "@/lib/api";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { APODContent } from "@/components/apod/APODContent";
import { PageContainer } from "@/components/layout/PageContainer";
import type { APODData } from "@/types/nasa";

export default function APODPage() {
  const [apod, setApod] = useState<APODData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPOD() {
      try {
        const data = await getAPOD();
        setApod(data);
      } catch (error) {
        console.error("Error fetching APOD:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAPOD();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <PageContainer title="Astronomy Picture of the Day">
      {apod && <APODContent apod={apod} />}
    </PageContainer>
  );
}