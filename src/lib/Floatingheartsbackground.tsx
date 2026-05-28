"use client";

import { useEffect, useRef } from "react";

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
}

function generateHearts(count: number): Heart[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 28 + 12, // 12px – 40px
    duration: Math.random() * 14 + 10, // 10s – 24s
    delay: Math.random() * -20, // stagger start times
    opacity: Math.random() * 0.45 + 0.15, // 0.15 – 0.60
    wobble: Math.random() * 40 + 20, // px horizontal wobble range
    wobbleSpeed: Math.random() * 3 + 2, // 2s – 5s per wobble cycle
  }));
}

const HEARTS = generateHearts(28);

export default function FloatingHeartsBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #ffe4ec 0%, #ffc2d4 40%, #ffb3c6 100%)",
      }}
    >
      {/* Subtle radial glow in the center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255,255,255,0.45) 0%, transparent 80%)",
        }}
      />

      {/* Floating hearts */}
      {HEARTS.map((heart) => (
        <span
          key={heart.id}
          className="pointer-events-none absolute select-none"
          style={
            {
              left: `${heart.x}%`,
              bottom: "-60px",
              fontSize: `${heart.size}px`,
              opacity: heart.opacity,
              animation: `floatUp ${heart.duration}s linear ${heart.delay}s infinite, wobble ${heart.wobbleSpeed}s ease-in-out ${heart.delay}s infinite`,
              "--wobble-range": `${heart.wobble}px`,
            } as React.CSSProperties
          }
        >
          ❤️
        </span>
      ))}

      {/* Page content sits on top */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0)   scale(1);    opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-110vh) scale(0.85); opacity: 0; }
        }

        @keyframes wobble {
          0%   { margin-left: 0; }
          25%  { margin-left: var(--wobble-range); }
          75%  { margin-left: calc(-1 * var(--wobble-range)); }
          100% { margin-left: 0; }
        }
      `}</style>
    </div>
  );
}
