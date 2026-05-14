"use client";
import { useReveal } from "@/components/hooks";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Geografia } from "@/components/sections/Geografia";
import { Demografia } from "@/components/sections/Demografia";
import { Historia } from "@/components/sections/Historia";
import { Politica } from "@/components/sections/Politica";
import { Cultura } from "@/components/sections/Cultura";
import { Gastronomia } from "@/components/sections/Gastronomia";
import { Economia } from "@/components/sections/Economia";
import { UE } from "@/components/sections/UE";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  useReveal();
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <Geografia />
      <Demografia />
      <Historia />
      <Politica />
      <Cultura />
      <Gastronomia />
      <Economia />
      <UE />
      <Footer />
    </>
  );
}
