"use client";
import { useState } from "react";

const DISHES = [
  { nm: "Judd mat Gaardebounen", ds: "Prato nacional", body: "Pescoço de porco fumado, servido com favas frescas. O sabor mais luxemburguês que existe.", img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&h=800&fit=crop&q=80" },
  { nm: "Bouneschlupp", ds: "Sopa de feijão-verde", body: "Sopa rústica de feijão-verde, batata e enchidos. Reconforto do inverno mosela.", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=800&fit=crop&q=80" },
  { nm: "Gromperekichelcher", ds: "Bolinhos de batata", body: "Discos crocantes de batata ralada, salsa e cebola — vendidos em todas as feiras populares.", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&h=800&fit=crop&q=80" },
  { nm: "Kachkéis", ds: "Queijo cozido", body: "Queijo creme picante, espalhado em pão de centeio com mostarda. Iguaria moselana por excelência.", img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&h=800&fit=crop&q=80" },
  { nm: "Crémant", ds: "Espumante do Mosela", body: "Produzido pelo método tradicional nas encostas do Mosela luxemburguês — entre Schengen e Wasserbillig.", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=800&fit=crop&q=80" },
];

function GastroImg({ src, alt, seed }: { src: string; alt: string; seed: string }) {
  const [s, setS] = useState(src);
  return (
    <img
      className="lux-img"
      src={s}
      alt={alt}
      loading="lazy"
      onError={() => setS(`https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=800&fit=crop&q=80`)}
    />
  );
}

export function Gastronomia() {
  return (
    <section className="section red" id="gastronomia">
      <div className="inner">
        <div className="chapter-tag reveal"><span className="line" /> 06 — Gastronomia</div>
        <h2 className="display reveal d1">Cozinha de fronteira,<br /><em className="italic">substância</em> de campo.</h2>
        <p className="lede reveal d2" style={{ marginTop: 30, color: "var(--cream)" }}>
          Entre a robustez alemã e a finesse francesa, a mesa luxemburguesa é honesta: carne de porco, batata, repolho, vinhos brancos do Mosela e queijo a ferver.
        </p>

        <div className="gastro-strip">
          {DISHES.map((d, i) => (
            <div key={i} className="gastro-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="img">
                <div className="lux-img-wrap">
                  <GastroImg src={d.img} alt={d.nm} seed={`lux-gas-${i}`} />
                </div>
              </div>
              <div className="meta">
                <div className="nm">{d.nm}</div>
                <div className="ds">{d.ds}</div>
                <div className="body">{d.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80 }} className="grid-3">
          <div className="reveal d1">
            <div className="mono-label">Vinha</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 64, lineHeight: 1, marginTop: 6 }}>1 295 ha</div>
            <p style={{ marginTop: 10, fontSize: 13, opacity: 0.85 }}>Plantadas ao longo dos 42 km da margem luxemburguesa do Mosela.</p>
          </div>
          <div className="reveal d2">
            <div className="mono-label">Castas dominantes</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 48, lineHeight: 1.05, marginTop: 6 }}>Riesling · Pinot · Auxerrois</div>
          </div>
          <div className="reveal d3">
            <div className="mono-label">Restaurantes ★ Michelin</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 64, lineHeight: 1, marginTop: 6 }}>11</div>
            <p style={{ marginTop: 10, fontSize: 13, opacity: 0.85 }}>Mais estrelas Michelin <em>per capita</em> do que qualquer outro país europeu.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
