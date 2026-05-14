"use client";
import { useState } from "react";

type Tile = { span: number; cls: string; n: string; t: string; b: string; img?: string };

const TILES: Tile[] = [
  { span: 6, cls: "red-tile", n: "05.01", t: "Lëtzebuergesch", b: "A língua nacional — uma franca do quotidiano que mistura raízes germânicas com empréstimos do francês. Reconhecida oficialmente em 1984.", img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1200&h=600&fit=crop&q=80" },
  { span: 3, cls: "dark-tile", n: "05.02", t: "Schueberfouer", b: "A maior feira popular do país, instituída em 1340 pelo rei João, o Cego. Quinze dias de luzes, gôndolas e fritura no Glacis.", img: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=600&h=600&fit=crop&q=80" },
  { span: 3, cls: "sky-tile", n: "05.03", t: "Echternach", b: "A procissão dançante de Echternach — Património Imaterial da UNESCO desde 2010. Uma terça-feira de Pentecostes em ritmo de polca.", img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=600&fit=crop&q=80" },
  { span: 4, cls: "", n: "05.04", t: "Mudam", b: "O Museu de Arte Moderna do Grão-Duque Jean — projeto de I. M. Pei sobre os antigos baluartes do Forte Thüngen.", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop&q=80" },
  { span: 4, cls: "dark-tile", n: "05.05", t: "Casemates", b: "Vinte e três quilómetros de túneis na rocha, escavados sob a fortaleza desde o século XVII. UNESCO, 1994.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&q=80" },
  { span: 4, cls: "", n: "05.06", t: "Filharmónica", b: "A Philharmonie Luxembourg, projetada por Christian de Portzamparc, é uma das salas com melhor acústica da Europa.", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop&q=80" },
  { span: 8, cls: "", n: "05.07", t: "Quartier Grund", b: "A cidade-baixa, com as suas ruelas de pedra ao longo do rio Alzette, é o coração boémio da capital.", img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&h=600&fit=crop&q=80" },
  { span: 4, cls: "red-tile", n: "05.08", t: "Património UNESCO", b: "A cidade de Luxemburgo, com as suas fortificações e bairros antigos, é Património Mundial desde 1994.", img: "https://images.unsplash.com/photo-1565098772267-60af42b81ef2?w=800&h=600&fit=crop&q=80" },
];

function TileImg({ src, alt, seed }: { src: string; alt: string; seed: string }) {
  const [s, setS] = useState(src);
  return (
    <img
      className="lux-img"
      src={s}
      alt={alt}
      loading="lazy"
      onError={() => setS(`https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop&q=80`)}
    />
  );
}

export function Cultura() {
  return (
    <section className="section cream" id="cultura">
      <div className="inner">
        <div className="chapter-tag reveal"><span className="line" /> 05 — Cultura</div>
        <h2 className="display reveal d1">Três línguas,<br /><em className="italic">uma identidade</em> só.</h2>
        <p className="lede reveal d2" style={{ marginTop: 30 }}>
          O lema nacional resume-o melhor que qualquer ensaio: <em>“Mir wëlle bleiwe wat mir sinn” — Queremos continuar a ser o que somos.</em>
        </p>

        <div className="cultura-grid">
          {TILES.map((t, i) => (
            <div key={i} className={`cultura-tile reveal span-${t.span} ${t.cls}`} style={{ transitionDelay: `${i * 60}ms` }}>
              {t.img && (
                <div className="lux-img-wrap">
                  <TileImg src={t.img} alt={t.t} seed={`lux-cul-${i}`} />
                </div>
              )}
              <div style={{ position: "relative", zIndex: 2, color: t.img ? "var(--cream)" : undefined }}>
                <div className="t-num">{t.n}</div>
                <div className="t-title">{t.t}</div>
              </div>
              <div className="t-body" style={{ color: t.img ? "var(--cream)" : undefined, zIndex: 2 }}>{t.b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
