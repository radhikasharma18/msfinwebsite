"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface WavyBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  className = "",
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const waves = [
      { amplitude: 30, length: 0.015, speed: 0.015, color: "#3b82f6" },
      { amplitude: 40, length: 0.02, speed: 0.012, color: "#2563eb" },
      { amplitude: 25, length: 0.025, speed: 0.018, color: "#1e40af" },
    ];

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      waves.forEach((wave, i) => {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);

        for (let x = 0; x < width; x++) {
          const y =
            height / 2 +
            Math.sin(x * wave.length + time * wave.speed + i) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    render(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
