"use client";

const MILESTONES = [
  { y: "1951", t: "CECA", d: "Co-funda a Comunidade Europeia do Carvão e do Aço. A capital, ainda hoje, alberga a sede da Secretaria do Parlamento Europeu." },
  { y: "1957", t: "Tratado de Roma", d: "Estado signatário do tratado que cria a Comunidade Económica Europeia — base da União atual." },
  { y: "1985", t: "Schengen", d: "O Acordo é assinado a 14 de Junho a bordo do navio Princesse Marie-Astrid, na aldeia mosela de Schengen." },
  { y: "1992", t: "Maastricht", d: "Como membro fundador, ratifica o Tratado que cria a União Europeia e o caminho para a moeda única." },
  { y: "2002", t: "Euro", d: "O franco luxemburguês cede lugar ao euro a 1 de Janeiro. O Banco Central do Luxemburgo passa a fazer parte do Eurosistema." },
  { y: "2014", t: "Juncker · Comissão", d: "O ex-Primeiro-Ministro Jean-Claude Juncker torna-se Presidente da Comissão Europeia (2014–2019)." },
];

const INSTITUTIONS: [string, string][] = [
  ["Tribunal de Justiça da União Europeia", "Kirchberg · desde 1952"],
  ["Tribunal de Contas Europeu", "Kirchberg · desde 1977"],
  ["Banco Europeu de Investimento", "Kirchberg · desde 1968"],
  ["Secretariado-Geral do Parlamento Europeu", "Kirchberg · administração"],
];

export function UE() {
  return (
    <section className="section sky" id="eu" style={{ position: "relative" }}>
      <div className="eu-bg" aria-hidden>
        <svg viewBox="0 0 600 600">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
            const r = 220;
            const cx = 300 + r * Math.cos(a);
            const cy = 300 + r * Math.sin(a);
            return (
              <g key={i} transform={`translate(${cx} ${cy}) rotate(${(i / 12) * 360})`}>
                <polygon points="0,-20 5,-6 20,-6 8,3 13,17 0,8 -13,17 -8,3 -20,-6 -5,-6" fill="none" stroke="var(--ink)" strokeWidth="1.2" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="inner eu-content">
        <div className="chapter-tag reveal" style={{ opacity: 0.8 }}><span className="line" /> 08 — União Europeia</div>
        <h2 className="display reveal d1" style={{ color: "var(--ink)" }}>Pequeno país,<br /><em className="italic" style={{ color: "var(--ink)" }}>grande capital</em> europeia.</h2>
        <p className="lede reveal d2" style={{ marginTop: 30, color: "var(--ink-2)", opacity: 0.9 }}>
          Ao lado de Bruxelas, Estrasburgo e Frankfurt, Luxemburgo é uma das quatro capitais oficiais da União Europeia — e a única onde residem, em permanência, três Instituições da União.
        </p>

        <div className="eu-grid">
          {MILESTONES.map((m, i) => (
            <div key={m.y} className="eu-card reveal" style={{ transitionDelay: `${i * 80}ms`, color: "var(--ink)" }}>
              <div className="y">{m.y}</div>
              <div className="t">{m.t}</div>
              <div className="d">{m.d}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 100 }}>
          <div className="mono-label reveal" style={{ marginBottom: 20, color: "var(--ink-2)" }}>Instituições da UE sediadas em Luxemburgo</div>
          <div className="eu-inst" style={{ color: "var(--ink)" }}>
            {INSTITUTIONS.map(([nm, sub], i) => (
              <div key={i} className="reveal" style={{ borderLeft: "2px solid var(--red)", paddingLeft: 16, transitionDelay: `${i * 70}ms` }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.15 }}>{nm}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.6, marginTop: 8, textTransform: "uppercase", letterSpacing: "0.12em" }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="eu-fact-grid">
          <div className="eu-fact reveal d1" style={{ color: "var(--ink)" }}>
            <div className="big">3</div>
            <div className="lbl">Presidentes da Comissão Europeia</div>
            <div className="desc">Gaston Thorn (1981–85), Jacques Santer (1995–99) e Jean-Claude Juncker (2014–19) — todos nascidos no Grão-Ducado.</div>
          </div>
          <div className="eu-fact reveal d2" style={{ color: "var(--ink)" }}>
            <div className="big">12×</div>
            <div className="lbl">Presidência rotativa do Conselho</div>
            <div className="desc">Desde 1960, o Luxemburgo assumiu doze vezes a presidência rotativa, a última em 2015.</div>
          </div>
          <div className="eu-fact reveal d3" style={{ color: "var(--ink)" }}>
            <div className="big">6</div>
            <div className="lbl">Eurodeputados</div>
            <div className="desc">A delegação luxemburguesa no Parlamento Europeu — o mínimo garantido pelos tratados a qualquer Estado-membro.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
