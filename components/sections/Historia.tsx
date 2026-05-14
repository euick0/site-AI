"use client";

const EVENTS = [
  { year: "963", title: "Fundação por Sigefredo", desc: "O conde Sigefredo das Ardenas adquire o rochedo do Bock e ergue o castelo de Lucilinburhuc — origem do nome e do Estado." },
  { year: "1354", title: "Elevação a Ducado", desc: "Carlos IV eleva o condado a ducado do Sacro Império Romano-Germânico, sob a Casa de Luxemburgo." },
  { year: "1815", title: "Grão-Ducado", desc: "O Congresso de Viena cria o Grão-Ducado do Luxemburgo, em união pessoal com os Países Baixos." },
  { year: "1839", title: "Tratado de Londres", desc: "O território é repartido: a parte ocidental passa à Bélgica; o que sobra forma o Luxemburgo atual." },
  { year: "1867", title: "Neutralidade perpétua", desc: "O segundo Tratado de Londres garante independência e neutralidade — a fortaleza é desmantelada." },
  { year: "1890", title: "Casa de Nassau-Weilburg", desc: "Termina a união com os Países Baixos; Adolfo de Nassau ascende ao trono. A dinastia mantém-se até hoje." },
  { year: "1914 / 1940", title: "Ocupações alemãs", desc: "O país é ocupado nas duas Guerras Mundiais, apesar do estatuto de neutralidade." },
  { year: "1948", title: "Fim da neutralidade", desc: "A Constituição é revista; o Luxemburgo abraça a integração europeia e atlântica." },
  { year: "1957", title: "Tratado de Roma", desc: "É um dos seis Estados fundadores da Comunidade Económica Europeia." },
  { year: "1985", title: "Acordo de Schengen", desc: "Assinado na aldeia mosela de Schengen — pedra angular da livre circulação europeia." },
  { year: "2000", title: "Henrique I, Grão-Duque", desc: "Sucede ao pai, Jean. Sob o seu reinado, o país consolida-se como capital financeira e judicial da UE." },
];

export function Historia() {
  return (
    <section className="section cream" id="historia">
      <div className="inner">
        <div className="chapter-tag reveal"><span className="line" /> 03 — História</div>
        <h2 className="display reveal d1">Mil anos<br /><em className="italic">a equilibrar</em> impérios.</h2>
        <p className="lede reveal d2" style={{ marginTop: 30 }}>
          De fortaleza no Sacro Império a coração diplomático da Europa moderna, o Luxemburgo construiu-se à medida que era construído por outros.
        </p>

        <div className="timeline">
          {EVENTS.map((e, i) => (
            <div className="timeline-row reveal" key={e.year} style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="year">{e.year}</div>
              <div className="title">{e.title}</div>
              <div className="desc">{e.desc}</div>
              <div className="arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
