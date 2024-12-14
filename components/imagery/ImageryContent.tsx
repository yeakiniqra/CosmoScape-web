'use client';

import { motion } from "framer-motion";
import { EarthImagery } from "@/types/nasa";
import Image from "next/image";

interface ImageryContentProps {
  imagery: EarthImagery;
}

export function ImageryContent({ imagery }: ImageryContentProps) {
  const firstKey = Object.keys(imagery)[0];
  const data = imagery[firstKey];

  // Sol weather data, structured as array for grid display
  const solWeather = [
    { sol: 259, date: 'Aug. 19', high: -17, low: -150 },
    { sol: 260, date: 'Aug. 20', high: -19, low: -151 },
    { sol: 261, date: 'Aug. 21', high: -16, low: -152 },
    { sol: 262, date: 'Aug. 22', high: -16, low: -150 },
    { sol: 263, date: 'Aug. 23', high: -17, low: -150 },
    { sol: 264, date: 'Aug. 24', high: -16, low: -150 },
    { sol: 265, date: 'Aug. 25', high: -15, low: -147 },
  ];

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
    className="container mx-auto px-4 py-8 text-white"
  >
    {/* Page Header */}
    <div className="flex items-center justify-center mb-8">
      <h1 className="text-4xl font-bold tracking-wide">
        Latest Weather at Elysium Planitia
      </h1>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 items-center">
      {/* Image Section */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="relative w-full rounded-xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/mars.png"
          alt="Mars InSight Lander"
          width={800}
          height={500}
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Weather Highlights */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-black/50 backdrop-blur-lg p-6 rounded-xl border border-white/10"
      >
        <h2 className="text-3xl font-semibold mb-4">Sol 265</h2>
        <p className="text-lg mb-6">
          InSight is taking daily weather measurements on the surface of Mars
          at Elysium Planitia, a flat, smooth plain near Mars' equator.
        </p>
        <div className="space-y-3">
          <DetailRow label="High Temperature" value="-15° F" />
          <DetailRow label="Low Temperature" value="-147° F" />
          <DetailRow label="Season" value="Early Summer" />
          <DetailRow
            label="Date"
            value={new Date(data.First_UTC).toLocaleDateString()}
          />
        </div>
      </motion.div>
    </div>

    {/* Sol Weather Grid */}
    <motion.div
      className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {solWeather.map((sol) => (
        <div
          key={sol.sol}
          className="bg-black/50 border border-white/10 p-4 rounded-lg text-center"
        >
          <h3 className="text-xl font-semibold">Sol {sol.sol}</h3>
          <p className="text-white/70 text-sm mb-2">{sol.date}</p>
          <div className="text-lg">
            <p>High: {sol.high}° F</p>
            <p>Low: {sol.low}° F</p>
          </div>
        </div>
      ))}
    </motion.div>
  </motion.div>
);
}

// Helper Component for Details
function DetailRow({ label, value }: { label: string; value: string }) {
return (
  <div className="flex justify-between items-center">
    <span className="text-white/70 font-medium">{label}:</span>
    <span className="text-white font-semibold">{value}</span>
  </div>
);
}