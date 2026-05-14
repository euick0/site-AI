"use client";
import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

const ITEMS: [string, string][] = [
  ["hero", "00 Início"],
  ["geografia", "01 Geo"],
  ["demografia", "02 Demo"],
  ["historia", "03 Hist."],
  ["politica", "04 Pol."],
  ["cultura", "05 Cult."],
  ["gastronomia", "06 Gastr."],
  ["economia", "07 Econ."],
  ["eu", "08 UE"],
];

export function Nav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.4;
      let best = "hero";
      for (const [id] of ITEMS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) best = id;
      }
      setActive(best);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <nav className="nav">
        <div className="brand">
          <span className="dot" />
          <span>LUXEMBURGO</span>
        </div>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
        <div className={`menu ${open ? "open" : ""}`}>
          {ITEMS.map(([id, label]) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => jump(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
