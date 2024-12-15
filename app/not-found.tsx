import React from "react";
import Image from "next/image";
import Button from "@/components/shared/Button";

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center h-screen text-white">
      <Image
        src="/earth-planet.webp"
        alt="Space Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-[-1]"
      />
      <div className="text-center p-6 rounded-lg backdrop-blur-md">
        <h1 className="text-7xl font-bold mb-4 text-white">
          404
        </h1>
        <h2 className="text-5xl font-bold mb-4 text-white">
          Lost in {` `}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Space?</span>
        </h2>
        <p className="text-lg mb-8">
          Oops! It seems you've ventured into the unknown. The page you're looking for is not here.
        </p>
        <Button label="Back to Home" href="/" />
      </div>
    </div>
  );
}