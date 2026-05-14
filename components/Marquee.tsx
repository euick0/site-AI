"use client";
import { motion } from "motion/react";

const ITEMS = [
  "Lëtzebuerg",
  "Mir wëlle bleiwe wat mir sinn",
  "Grão-Ducado",
  "Schengen 1985",
  "Capital da Cultura",
  "Europa",
  "Mosela",
  "Ardenas",
  "Casemates",
];

export function Marquee() {
  const all = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="marquee">
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        {all.map((t, i) => (
          <span key={i}>
            <span className="star">✦</span> <em>{t}</em>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
