"use client";

export function Footer() {
  return (
    <footer className="footer">
      <div className="f-inner">
        <div className="reveal">
          <span className="flag" style={{ marginBottom: 24 }}>
            <span /><span /><span />
          </span>
        </div>
        <div className="f-mega reveal d1">
          Mir wëlle bleiwe<br /><em>wat mir sinn.</em>
        </div>
        <p className="lede reveal d2" style={{ maxWidth: 720 }}>
          Queremos continuar a ser o que somos. — Lema nacional, inscrito no fronte do Palácio Grão-Ducal.
        </p>

        <div className="f-bottom">
          <span>© 2026 · Luxemburgo Showcase</span>
          <span>Conteúdos para fins educativos · pt-PT</span>
          <span>Lëtzebuerg / Luxembourg / Luxemburg</span>
        </div>
      </div>
    </footer>
  );
}
