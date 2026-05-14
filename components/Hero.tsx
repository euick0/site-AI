"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Hero() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const lx = new Date(d.toLocaleString("en-US", { timeZone: "Europe/Luxembourg" }));
      const hh = String(lx.getHours()).padStart(2, "0");
      const mm = String(lx.getMinutes()).padStart(2, "0");
      const ss = String(lx.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-stripes" aria-hidden>
        <div /><div /><div />
      </div>
      <div className="hero-inner">
        <div className="hero-top">
          <span>49°37′N · 6°08′E</span>
          <span>Luxemburgo, Europa Central</span>
          <span>{time || "—"} CEST</span>
        </div>

        <div className="hero-center">
          <div className="reveal in" style={{ marginBottom: 24 }}>
            <span className="mono-label" style={{ opacity: 0.7 }}>— Um pequeno grão de Europa</span>
          </div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          >
            Lëtzebuerg,<br />
            <em>o coração</em><br />
            do continente.
          </motion.h1>
          <p className="hero-sub reveal d3 in">
            Um Grão-Ducado de 2 586 km² entre a França, a Bélgica e a Alemanha — fundador da União Europeia, capital financeira e laboratório de três línguas oficiais.
          </p>
        </div>

        <div className="hero-bottom">
          <div className="stat reveal in d2"><span className="v">2 586</span><span className="k">km² · superfície</span></div>
          <div className="stat reveal in d3"><span className="v">672 050</span><span className="k">habitantes</span></div>
          <div className="stat reveal in d4"><span className="v">963</span><span className="k">fundação</span></div>
          <div className="stat reveal in d5"><span className="v">1957</span><span className="k">co-fundador da CEE</span></div>
        </div>
      </div>
    </section>
  );
}
