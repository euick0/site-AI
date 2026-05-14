"use client";
import { useCountUp } from "../hooks";

const AGES = [
  { label: "0–14", pct: 16 },
  { label: "15–29", pct: 19 },
  { label: "30–44", pct: 24 },
  { label: "45–64", pct: 26 },
  { label: "65+", pct: 15 },
];

export function Demografia() {
  const [rPop, vPop] = useCountUp(672050);
  const [rDens, vDens] = useCountUp(260);
  const [rForeign, vForeign] = useCountUp(47, { suffix: "%", decimals: 0 });
  const [rExp, vExp] = useCountUp(83);

  return (
    <section className="section ink" id="demografia">
      <div className="inner">
        <div className="chapter-tag reveal"><span className="line" /> 02 — Demografia</div>
        <h2 className="display reveal d1">Um país onde <em className="italic">quase metade</em><br />nasceu noutro lugar.</h2>

        <div className="demo-bigstat" style={{ marginTop: 80 }}>
          <div className="reveal d2" ref={rPop}>
            <div className="mono-label" style={{ marginBottom: 12 }}>População residente · 2024</div>
            <div className="demo-count">{vPop}<span className="tail">.</span></div>
          </div>
          <div className="reveal d3">
            <p className="lede">
              Luxemburgo é um caso único na Europa: 47% dos residentes têm nacionalidade estrangeira, e 200 000 trabalhadores fronteiriços atravessam diariamente para trabalhar.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 80 }} className="grid-4 reveal d2">
          <div>
            <div className="mono-label">Densidade</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 48, lineHeight: 1, marginTop: 6 }} ref={rDens}>
              {vDens}<span style={{ fontSize: 14, opacity: 0.6, marginLeft: 4 }}>hab/km²</span>
            </div>
          </div>
          <div>
            <div className="mono-label">Estrangeiros</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 48, lineHeight: 1, marginTop: 6 }} ref={rForeign}>{vForeign}</div>
          </div>
          <div>
            <div className="mono-label">Esperança de vida</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 48, lineHeight: 1, marginTop: 6 }} ref={rExp}>{vExp} <span style={{ fontSize: 14, opacity: 0.6 }}>anos</span></div>
          </div>
          <div>
            <div className="mono-label">Idade mediana</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 48, lineHeight: 1, marginTop: 6 }}>39,7</div>
          </div>
        </div>

        <div style={{ marginTop: 100 }}>
          <div className="mono-label reveal" style={{ marginBottom: 20 }}>Pirâmide etária — % da população</div>
          <div className="demo-bars reveal">
            {AGES.map((a, i) => (
              <div
                key={a.label}
                className="bar"
                style={{ ["--h" as string]: `${a.pct * 6}px`, transitionDelay: `${i * 120}ms` } as React.CSSProperties}
              >
                <span className="label">{a.label}</span>
                <span className="pct">{a.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="demo-langs">
          <div className="lang reveal d1">
            <div className="mono-label">Língua nacional</div>
            <div className="name">Lëtzebuergesch</div>
            <div className="note">Falada por toda a população luxemburguesa; reconhecida como língua nacional desde 1984.</div>
          </div>
          <div className="lang reveal d2">
            <div className="mono-label">Língua administrativa</div>
            <div className="name">Français</div>
            <div className="note">Usada na legislação, na justiça e na maioria dos documentos oficiais.</div>
          </div>
          <div className="lang reveal d3">
            <div className="mono-label">Língua mediática</div>
            <div className="name">Deutsch</div>
            <div className="note">Predominante na imprensa escrita, na rádio e no ensino primário.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
