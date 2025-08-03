export const GridBackground = () => (
  <div className="fixed inset-0 pointer-events-none opacity-30">
    {/* Grid pattern */}
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--blueprint-grid)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--blueprint-grid)) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />

    {/* Diagonal lines */}
    <div className="absolute inset-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="diagonals"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
          >
            <path
              d="M0,100 L100,0"
              stroke="hsl(var(--blueprint-line))"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonals)" />
      </svg>
    </div>
  </div>
);
