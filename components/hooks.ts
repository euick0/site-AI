"use client";
import { useEffect, useRef, useState } from "react";

export function useReveal() {
  useEffect(() => {
    const SELECTOR = ".reveal:not(.in), .demo-bars:not(.in), .eco-bars:not(.in)";
    const sweep = () => {
      const winH = window.innerHeight;
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < winH + 80 && r.bottom > -80) el.classList.add("in");
      });
    };
    requestAnimationFrame(sweep);
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        sweep();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const safety = setTimeout(sweep, 1500);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(safety);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

export function useCountUp(
  target: number,
  opts: { duration?: number; decimals?: number; suffix?: string; start?: number } = {}
): [React.RefObject<HTMLDivElement | null>, string] {
  const { duration = 1800, decimals = 0, suffix = "", start: startProp = 0 } = opts;
  const [val, setVal] = useState(startProp);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    let begin = 0;
    let started = false;
    const node = ref.current;
    if (!node) return;

    const start = () => {
      if (started) return;
      started = true;
      const tick = (t: number) => {
        if (!begin) begin = t;
        const p = Math.min(1, (t - begin) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(startProp + (target - startProp) * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const check = () => {
      const r = node.getBoundingClientRect();
      if (r.top < window.innerHeight - 60 && r.bottom > 0) {
        start();
        window.removeEventListener("scroll", check);
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    const safety = setTimeout(start, 2200);
    return () => {
      window.removeEventListener("scroll", check);
      clearTimeout(safety);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, duration, startProp]);

  const out =
    decimals === 0
      ? Math.round(val).toLocaleString("pt-PT")
      : val.toFixed(decimals).replace(".", ",") + suffix;
  return [ref, out];
}
