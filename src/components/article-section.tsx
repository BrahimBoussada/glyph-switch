"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useFont } from "@/context/font-context";
import { cn } from "@/lib/utils";
import urbanSolitude from "../../public/urbanSolitude.jpeg";
import { useEffect, useState } from "react";

export default function ArticleSection() {
  const { font } = useFont(); // Access current font from context
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 700);

    // Cleanup on unmount
    return () => clearTimeout(timer);
  }, []);

  if (!ready) {
    // You can return null or a loader/spinner if you want here
    return null;
  }
  return (
    <div className="px-4 max-w-3xl mx-auto flex flex-col gap-8 mt-16 mb-36">
      {/* Animated heading */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        className={cn(`text-5xl md:text-7xl text-center`)}
      >
        {"Humanity’s"} Fleeting Pursuit
      </motion.h1>

      {/* Animated responsive image container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.1 },
        }}
        className="relative w-full mx-auto aspect-[1.91/1]"
      >
        <Image
          src={urbanSolitude}
          fill
          alt="Cityscape Silhouette at Sunset"
          className="object-cover object-bottom"
          priority
          quality={100}
          placeholder="blur"
        />
      </motion.div>

      {/* Animated article text container with conditional font tracking */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.2 },
        }}
        className={cn(
          `max-w-3xl mx-auto text-justify flex flex-col gap-2 ${
            font === "mono" ? "tracking-tight" : ""
          }`
        )}
      >
        {/* Article paragraphs */}
        <p>
          Everything comes and goes. Empires rise and fall. Cities are built,
          then crumble. The Sumerians pressed their stories into clay, the
          Egyptians reached the heavens with towering pyramids, the Greeks
          defied certainty and pushed the limits of thought, the Romans forged
          laws to hold empires together, and the Mayans traced the patterns of
          the stars. Each contributed in their own way, seeking meaning through
          what they could create.
        </p>
        <p>
          Time moves quietly and without haste. Monuments erode, empires
          transform, and civilizations pass. What lingers is not the structures
          or records themselves, but the intentions behind them, and the care
          with which knowledge, tools, and power were used.
        </p>
        <p>
          True significance grows through curiosity, collaboration, and positive
          impact on others. What we create, how we act, and the ways we support
          others leave echoes that endure beyond any single lifetime or empire.
        </p>
        <p>
          Everything is fleeting. What remains is the thoughtfulness behind our
          actions, and the quiet trace of goodness that survives through time.
        </p>
      </motion.div>
    </div>
  );
}
