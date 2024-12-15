"use client";

import { useEffect, useRef } from "react";

export function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGradient = (t: number) => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsl(${(t * 0.1) % 360}, 100%, 50%)`);
      gradient.addColorStop(0.5, `hsl(${(t * 0.2 + 120) % 360}, 100%, 50%)`);
      gradient.addColorStop(1, `hsl(${(t * 0.3 + 240) % 360}, 100%, 50%)`);
      return gradient;
    };

    const animate = (t: number) => {
      ctx.fillStyle = createGradient(t);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed bottom-0 left-0 w-full h-1/3 -z-10"
    />
  );
}

