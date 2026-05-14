"use client";
import { useCountUp } from "../hooks";

const MAP_PATH =
  "M 116 33.6 L 113 38.2 L 109 42.9 L 108.4 47.5 L 107 52.1 L 101.8 56.7 L 94.4 61.4 L 89 66 L 86.5 70.6 L 85.4 75.2 L 83.1 79.9 L 79.6 84.5 L 76.5 89.1 L 76.8 93.7 L 77.2 98.4 L 75.6 103 L 72.1 107.6 L 67.8 112.3 L 65.1 116.9 L 66.9 121.5 L 68.3 126.1 L 65.5 130.8 L 58.1 135.4 L 51.6 140 L 48.2 144.6 L 47.3 149.3 L 46.7 153.9 L 44.5 158.5 L 41.4 163.2 L 40.7 167.8 L 43.7 172.4 L 45.2 177 L 43.4 181.7 L 42.2 186.3 L 41.2 190.9 L 39.7 195.5 L 39.7 200.2 L 40.4 204.8 L 41.4 209.4 L 43.6 214 L 49.2 218.7 L 55.7 223.3 L 58.2 227.9 L 60.2 232.6 L 62.7 237.2 L 64.8 241.8 L 66 246.4 L 71.3 251.1 L 78.5 255.7 L 80.8 260.3 L 78.8 264.9 L 77.2 269.6 L 79.8 274.2 L 85.3 278.8 L 88.6 283.5 L 88.2 288.1 L 85.5 292.7 L 81.5 297.3 L 78 302 L 76.5 306.6 L 74.5 311.2 L 73.1 315.8 L 74.5 320.5 L 74.8 325.1 L 72.3 329.7 L 66.4 334.3 L 64.8 339 L 66.9 343.6 L 69.6 348.2 L 71.2 352.9 L 80.4 357.5 L 94.8 362.1 L 107.2 366.7 L 109.4 371.4 L 110.5 376 L 121.7 380.6 L 138 385.2 L 143.1 386.4 L 233 386.4 L 233 385.2 L 232.6 380.6 L 231.7 376 L 231.4 371.4 L 231.4 366.7 L 231.6 362.1 L 231.1 357.5 L 229.8 352.9 L 229.3 348.2 L 230.3 343.6 L 233.1 339 L 235.3 334.3 L 234.6 329.7 L 234 325.1 L 236.4 320.5 L 238.5 315.8 L 242.7 311.2 L 250 306.6 L 253.7 302 L 252.5 297.3 L 253.9 292.7 L 255.1 288.1 L 254.8 283.5 L 253.7 278.8 L 253.2 274.2 L 259 269.6 L 266.3 264.9 L 269.4 260.3 L 272.9 255.7 L 277.3 251.1 L 276.2 246.4 L 274.1 241.8 L 275 237.2 L 276.7 232.6 L 278.2 227.9 L 278.9 223.3 L 280.4 218.7 L 280.3 214 L 274.6 209.4 L 260.5 204.8 L 245.2 200.2 L 233.6 195.5 L 226.3 190.9 L 218.9 186.3 L 211.7 181.7 L 203.8 177 L 195.2 172.4 L 193 167.8 L 191 163.2 L 188.6 158.5 L 186.8 153.9 L 185.6 149.3 L 182.2 144.6 L 178 140 L 172.1 135.4 L 168.3 130.8 L 166.3 126.1 L 164.3 121.5 L 162.4 116.9 L 161.1 112.3 L 160.2 107.6 L 158.9 103 L 157.2 98.4 L 155.1 93.7 L 153.9 89.1 L 153.9 84.5 L 154.1 79.9 L 155.2 75.2 L 156.7 70.6 L 158 66 L 158.3 61.4 L 156.2 56.7 L 154.5 52.1 L 154.1 47.5 L 149.6 42.9 L 138.2 38.2 L 126.2 33.6 Z";

export function Geografia() {
  const [r1, v1] = useCountUp(2586);
  const [, v3] = useCountUp(559, { suffix: " m", decimals: 0 });
  const [r4, v4] = useCountUp(135, { suffix: " km", decimals: 0 });

  return (
    <section className="section cream" id="geografia">
      <div className="inner">
        <div className="chapter-tag reveal"><span className="line" /> 01 — Geografia</div>
        <h2 className="display reveal d1">Pequeno <em className="italic">em escala,</em><br />imenso em contraste.</h2>

        <div className="geo-grid" style={{ marginTop: 80 }}>
          <div className="geo-map reveal d2">
            <svg viewBox="0 0 320 420">
              <path className="outline" d={MAP_PATH} />
              <path className="region-line" d="M 195 172 Q 230 200 260 230 Q 275 270 270 320 Q 270 360 250 380" />
              <path className="region-line" d="M 50 200 Q 160 215 280 220" />

              <text x="146" y="70" className="city-label">CLERVAUX</text>
              <circle className="city" cx="138" cy="76" r="3" />

              <text x="100" y="135" className="city-label">ÉSCH-SUR-SÛRE</text>
              <circle className="city" cx="111" cy="140" r="3" />

              <text x="180" y="160" className="city-label">DIEKIRCH</text>
              <circle className="city" cx="172" cy="167" r="3" />

              <text x="180" y="265" className="city-label">LUXEMBURGO</text>
              <circle className="city" cx="160" cy="262" r="5">
                <animate attributeName="r" values="5;9;5" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle className="city" cx="160" cy="262" r="3.5" />

              <text x="118" y="330" className="city-label">ESCH-SUR-ALZ.</text>
              <circle className="city" cx="115" cy="335" r="3" />

              <text x="200" y="378" className="city-label" style={{ opacity: 0.55 }}>SCHENGEN</text>
              <circle className="city" cx="265" cy="380" r="2.8" style={{ opacity: 0.75 }} />

              <text x="6" y="60" className="city-label" style={{ opacity: 0.4 }}>BÉLGICA</text>
              <text x="240" y="60" className="city-label" style={{ opacity: 0.4 }}>ALEMANHA</text>
              <text x="130" y="408" className="city-label" style={{ opacity: 0.4 }}>FRANÇA</text>

              <text x="0" y="14" className="city-label" style={{ opacity: 0.4 }}>50°10′N</text>
              <text x="0" y="415" className="city-label" style={{ opacity: 0.4 }}>49°27′N</text>
              <text x="272" y="14" className="city-label" style={{ opacity: 0.4 }}>6°31′E</text>
              <text x="270" y="415" className="city-label" style={{ opacity: 0.4 }}>5°44′E</text>
            </svg>
          </div>

          <div className="geo-stats">
            <div className="row reveal d2">
              <span className="label">Superfície</span>
              <span className="val" ref={r1}>{v1} <small>km²</small></span>
            </div>
            <div className="row reveal d3">
              <span className="label">Comprimento N-S</span>
              <span className="val" ref={r4}>{v4}</span>
            </div>
            <div className="row reveal d4">
              <span className="label">Largura E-O</span>
              <span className="val">57 <small>km</small></span>
            </div>
            <div className="row reveal d5">
              <span className="label">Ponto mais alto · Kneiff</span>
              <span className="val">{v3} <small>m</small></span>
            </div>
            <div className="row reveal d6">
              <span className="label">% floresta</span>
              <span className="val"><span style={{ opacity: 0.3 }}>~</span>33<small>%</small></span>
            </div>
            <div className="row reveal d6">
              <span className="label">Fronteira terrestre</span>
              <span className="val">359 <small>km</small></span>
            </div>
            <p className="body reveal d6" style={{ marginTop: 20 }}>
              O território divide-se em duas regiões fisiográficas: o <strong>Oesling</strong>, ao norte, prolongamento das Ardenas, com planaltos e vales encaixados; e o <strong>Gutland</strong>, ao sul, mais baixo, fértil e povoado, onde se encontra a capital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
