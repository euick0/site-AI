"use client";
import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia("(hover: none), (pointer: coarse)").matches) return;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", move);

    const isInteractive = (el: Element | null) => {
      while (el && el !== document.body) {
        if (
          (el as HTMLElement).matches?.(
            'a, button, .timeline-row, .cultura-tile, .gastro-card, .politica-card, .eu-card, .pill-btn, [role="button"], input, textarea, select, label, .marquee-track > span'
          )
        )
          return true;
        el = el.parentElement;
      }
      return false;
    };
    const over = (e: MouseEvent) => {
      if (!ringRef.current) return;
      ringRef.current.classList.toggle("hover", isInteractive(e.target as Element));
    };
    const down = () => ringRef.current?.classList.add("tap");
    const up = () => ringRef.current?.classList.remove("tap");
    const leave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };
    const enter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };
    document.addEventListener("mouseover", over);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  return (
    <>
      <div className="cur-ring" ref={ringRef} />
      <div className="cur-dot" ref={dotRef} />
    </>
  );
}
