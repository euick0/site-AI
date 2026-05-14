"use client";

export function Politica() {
  return (
    <section className="section ink" id="politica">
      <div className="inner">
        <div className="chapter-tag reveal"><span className="line" /> 04 — Política</div>
        <h2 className="display reveal d1">Uma monarquia<br /><em className="italic">constitucional</em> à medida.</h2>
        <p className="lede reveal d2" style={{ marginTop: 30 }}>
          O Luxemburgo é uma democracia parlamentar com um Grão-Duque como Chefe de Estado e um Primeiro-Ministro à frente do governo. A Constituição de 1868, profundamente revista em 2023, define-o como Estado de direito.
        </p>

        <div className="politica-grid">
          <div className="politica-card reveal d2">
            <div className="role">Chefe de Estado</div>
            <div className="name">S.A.R. Henrique I</div>
            <div className="since">Grão-Duque desde 7 de Outubro de 2000</div>
            <p>Sucessor da Casa de Nassau-Weilburg. Em 2024 nomeou o filho, o príncipe herdeiro Guilherme, como Lugar-Tenente, preparando uma transição dinástica.</p>
            <svg className="crown" viewBox="0 0 40 40" fill="none">
              <path d="M5 28 L8 14 L14 22 L20 10 L26 22 L32 14 L35 28 Z" stroke="var(--red)" strokeWidth="1.6" />
              <circle cx="20" cy="6" r="2" fill="var(--red)" />
              <line x1="5" y1="32" x2="35" y2="32" stroke="var(--red)" strokeWidth="1.6" />
            </svg>
          </div>

          <div className="politica-card reveal d3">
            <div className="role">Chefe de Governo</div>
            <div className="name">Luc Frieden</div>
            <div className="since">Primeiro-Ministro desde 17 de Novembro de 2023</div>
            <p>Lidera uma coligação CSV–DP. O governo executa a agenda saída das eleições legislativas de 2023, com foco em habitação, transição energética e competitividade.</p>
          </div>
        </div>

        <div className="politica-facts">
          <div className="f reveal d1"><div className="n">60</div><div className="l">Deputados na Câmara — Chambre des Députés</div></div>
          <div className="f reveal d2"><div className="n">5</div><div className="l">Anos de mandato legislativo</div></div>
          <div className="f reveal d3"><div className="n">12</div><div className="l">Cantões administrativos</div></div>
          <div className="f reveal d4"><div className="n">100</div><div className="l">Comunas (municípios)</div></div>
        </div>
      </div>
    </section>
  );
}
