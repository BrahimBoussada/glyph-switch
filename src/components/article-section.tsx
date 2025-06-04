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
        <p>The world forgets, but time remembers.</p>
        <p>
          Once, the Sumerians etched their stories into clay under the
          Mesopotamian sun—the first to write, the first to dream in cities. Now
          their crumble beneath desert winds. The Egyptians raised monuments to
          eternity, pyramids meant to defy time itself. Yet the desert crept in,
          and the false gods they worshipped faded from human memory. The Greeks
          gave us philosophy and democracy. The Romans, law and empire. The
          Mayans charted stars with staggering precision. The Indus Valley
          carved order into the chaos of river and rain. Each of them built
          wonders, and each of them fell.
        </p>
        <p>And now, here we are.</p>
        <p>
          Modern humanity chases immortality through machines. Silicon has
          replaced stone. We believe our servers and satellites will endure
          where temples and scrolls failed. But this, too, is a kind of
          delusion.
        </p>
        <p>
          Civilizations fall. Not from a single blow, but from within—through
          decay, distraction, hubris. We drown in data and mistake it for
          wisdom. We accelerate, many not knowing where {"we’re"} going. In our
          techno-pursuit, we risk becoming ghosts ourselves, disconnected from
          nature, from history, from meaning.
        </p>
        <p>
          Everything we build will one day be dust. This is a reminder. To live
          deeply. To build wisely. To remember that every beginning has an end.
        </p>
        <p>One question endures: What awaits us beyond the end?</p>
      </motion.div>
    </div>
  );
}
