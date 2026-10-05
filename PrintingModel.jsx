// Decorative: a vase-like shape that "prints" layer by layer, echoing the 3D-printing project.
const LAYERS = 22;
const STEP = 12;
const BASE = 330;

export default function PrintingModel() {
  const layers = Array.from({ length: LAYERS }, (_, i) => {
    const rx = 62 + 34 * Math.sin(i * 0.38) + i * 0.6;
    return { i, rx, cy: BASE - i * STEP };
  });
  const top = layers[LAYERS - 1].cy;

  return (
    <svg viewBox="0 0 320 380" role="img" aria-label="Illustration of an object being 3D printed layer by layer" className="mx-auto w-full max-w-sm">
      <line x1="30" y1={BASE + 14} x2="290" y2={BASE + 14} stroke="rgb(var(--line))" strokeWidth="2" />
      {layers.map(({ i, rx, cy }) => (
        <ellipse key={i} className="layer" style={{ "--i": i }} cx="160" cy={cy} rx={rx} ry={rx * 0.28}
          fill="rgb(var(--bg))" stroke="rgb(var(--filament))" strokeWidth="2" />
      ))}
      <g className="nozzle" style={{ "--rise": `${-(BASE - top)}px` }}>
        <polygon points={`150,${BASE - 34} 170,${BASE - 34} 160,${BASE - 12}`} fill="rgb(var(--accent))" />
        <rect x="146" y={BASE - 62} width="28" height="28" rx="4" fill="rgb(var(--accent))" />
      </g>
    </svg>
  );
}
