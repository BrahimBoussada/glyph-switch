"use client";

import { FontType, useFont } from "@/context/font-context";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

// Font options with label and Tailwind font class
const fonts: { name: FontType; label: string; className: string }[] = [
  { name: "sans", label: "Default", className: "font-sans" },
  { name: "serif", label: "Serif", className: "font-serif" },
  { name: "mono", label: "Mono", className: "font-mono" },
];

export default function FontToggle() {
  const { font, setFont } = useFont();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="fixed left-1/2 -translate-x-1/2 bottom-7 px-2 py-2 backdrop-blur-sm border w-fit mx-auto rounded-lg"
    >
      <div className="flex gap-4 justify-center">
        {fonts.map((f) => (
          <div
            key={f.label}
            className={cn(
              `flex flex-col items-center bg-background gap-2 p-1 rounded-xl border min-w-[70px] cursor-pointer hover:bg-muted active:scale-95 transition-all duration-150`
            )}
            onClick={() => setFont(f.name)}
          >
            {/* Font sample preview */}
            <div
              className={cn(
                `text-xl opacity-50 ${f.className} ${
                  font === f.name ? "font-semibold opacity-100" : ""
                }`
              )}
            >
              Ag
            </div>
            {/* Font label */}
            <div className="text-xs font-sans">{f.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
