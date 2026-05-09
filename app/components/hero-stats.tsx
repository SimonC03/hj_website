"use client";

import { useEffect, useState } from "react";

const stats = [
  { label: "Medarbetare", value: 26 },
  { label: "År i branschen", value: 13 },
  { label: "Nöjda kunder", value: 250 },
  { label: "Specialistområden", value: 13 },
  { label: "Språk", value: 8 },
];

const animationDuration = 1800;

export function HeroStats() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      const animationFrame = requestAnimationFrame(() => setProgress(1));

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }

    let animationFrame = 0;
    let startTime = 0;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const nextProgress = Math.min(elapsed / animationDuration, 1);

      setProgress(nextProgress);

      if (nextProgress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <dl className="hero-stats" aria-label="Statistiköverblick">
      {stats.map((stat) => {
        const displayedValue = Math.round(stat.value * progress);

        return (
          <div className="hero-stat" key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>
              <span aria-hidden="true">{displayedValue}</span>
              <span className="sr-only">{stat.value}</span>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
