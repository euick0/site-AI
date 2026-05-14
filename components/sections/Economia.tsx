"use client";
import { useCountUp } from "../hooks";

const BANKS: [string, string, string][] = [
  ["01", "Banque Internationale à Luxembourg", "1856"],
  ["02", "BGL BNP Paribas", "1919"],
  ["03", "Spuerkeess (BCEE)", "1856"],
  ["04", "BIL Group", "—"],
  ["05", "Banque de Luxembourg", "1920"],
];

const SECTORS = [
  { nm: "Serviços financeiros", v: 30, lbl: "30% PIB" },
  { nm: "Tecnologia & ICT", v: 17, lbl: "17% PIB" },
  { nm: "Comércio & retalho", v: 14, lbl: "14% PIB" },
  { nm: "Logística & transportes", v: 9, lbl: "9% PIB" },
  { nm: "Indústria (aço, vidro)", v: 8, lbl: "8% PIB" },
  { nm: "Imobiliário & construção", v: 7, lbl: "7% PIB" },
];

export function Economia() {
  const [r1, v1] = useCountUp(132);
  const [r2, v2] = useCountUp(85);
  const [r3, v3] = useCountUp(125);

  return (
    <section className="section ink" id="economia">
      <div className="inner">
        <div className="chapter-tag reveal"><span className="line" /> 07 — Economia</div>
        <h2 className="display reveal d1">O <em className="italic">PIB per capita</em><br />mais alto do mundo.</h2>

        <div className="eco-hero">
          <div className="reveal d2" ref={r1}>
            <div className="eco-big">€ {v1} k<small>PIB nominal per capita · 2024 · FMI</small></div>
          </div>
          <div className="reveal d3">
            <p className="lede" style={{ maxWidth: 480 }}>
              Ao lado da Suíça e dos países nórdicos, Luxemburgo está sistematicamente entre os três países com maior PIB <em>per capita</em> do planeta — graças à dimensão desproporcional do seu setor financeiro.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 100 }} className="split-2">
          <div>
            <div className="mono-label reveal" style={{ marginBottom: 16 }}>Pilares · setor financeiro</div>
            <div className="eco-list">
              {BANKS.map(([rk, nm, y]) => (
                <div key={rk} className="row reveal" style={{ transitionDelay: `${parseInt(rk) * 60}ms` }}>
                  <span className="rk">{rk}</span>
                  <span className="nm">{nm}</span>
                  <span className="v">est. {y}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40, display: "flex", gap: 60 }}>
              <div className="reveal" ref={r2}>
                <div className="mono-label">Fundos UCITS</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 1 }}>
                  € {v2}<small style={{ fontFamily: "var(--font-mono)", fontSize: 14, opacity: 0.6, marginLeft: 4 }}>milhões em ativos sob gestão</small>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mono-label reveal" style={{ marginBottom: 16 }}>Composição do PIB · estimativa 2024</div>
            <div className="eco-bars reveal">
              {SECTORS.map((s, i) => (
                <div key={s.nm} className="b" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="nm">{s.nm}</div>
                  <div className="track" style={{ ["--w" as string]: `${s.v * 3.3}%` } as React.CSSProperties} />
                  <div className="v">{s.lbl}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40 }} className="reveal" ref={r3}>
              <div className="mono-label">Trabalhadores fronteiriços diários</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 72, lineHeight: 1 }}>
                {v3} <small style={{ fontFamily: "var(--font-mono)", fontSize: 14, opacity: 0.6 }}>mil · 47% da força de trabalho</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
