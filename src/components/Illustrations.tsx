import type { ComponentType, SVGProps } from "react";

type IconComp = ComponentType<SVGProps<SVGSVGElement>>;

/* Decorative dot-grid pattern for section backgrounds. */
export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern
          id="dotgrid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotgrid)" />
    </svg>
  );
}

/* Concentric fingerprint-style arcs (brand motif). */
export function Arcs({
  className = "",
  count = 5,
}: {
  className?: string;
  count?: number;
}) {
  const radii = Array.from({ length: count }, (_, i) => 40 + i * 40);
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className={className}>
      {radii.map((r) => (
        <path
          key={r}
          d={`M ${200 - r} 400 A ${r} ${r} 0 0 1 ${200 + r} 400`}
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/* Soft organic blob for layered backgrounds. */
export function Blob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M42.7,-64.6C55.3,-56.3,65.1,-44.2,70.6,-30.4C76.1,-16.6,77.3,-1.1,74.2,13.4C71.1,27.9,63.7,41.4,52.7,51.7C41.7,62,27.1,69.1,11.3,73.5C-4.6,77.9,-21.7,79.6,-36.3,73.9C-50.9,68.2,-63,55.1,-70.2,40C-77.4,24.9,-79.7,7.8,-76.3,-7.7C-72.9,-23.2,-63.8,-37.1,-51.6,-45.9C-39.4,-54.7,-24.1,-58.4,-8.9,-61.5C6.3,-64.6,21.5,-67.1,42.7,-64.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/**
 * Stylized cross-section of a smart home: rooms with activity icons and
 * sensor pulses. Line-art matched to the icon set. Fixed viewBox, scales fluid.
 */
export function HomeScene({ className = "" }: { className?: string }) {
  const stroke = "var(--color-navy)";
  return (
    <svg
      viewBox="0 0 360 300"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* soft backdrop */}
      <rect
        x="20"
        y="70"
        width="320"
        height="210"
        rx="20"
        fill="var(--color-sky)"
      />
      {/* roof */}
      <path
        d="M20 92 L180 20 L340 92"
        stroke={stroke}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* house body */}
      <rect
        x="40"
        y="92"
        width="280"
        height="176"
        rx="10"
        fill="#fff"
        stroke={stroke}
        strokeWidth="4"
      />
      {/* room dividers */}
      <line x1="180" y1="92" x2="180" y2="268" stroke={stroke} strokeWidth="3" />
      <line x1="40" y1="182" x2="320" y2="182" stroke={stroke} strokeWidth="3" />

      {/* top-left: bed */}
      <g stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M70 150 h60" />
        <path d="M70 150 v-14 h60 v14" />
        <path d="M78 136 a8 8 0 0 1 16 0" />
      </g>
      {/* top-right: kitchen */}
      <g stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M230 130 v22" />
        <path d="M226 130 h8" />
        <path d="M252 130 c-6 0 -6 10 0 10 v12" />
      </g>
      {/* bottom-left: chair / living */}
      <g stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M74 244 v-26 a8 8 0 0 1 8 -8 h24 a8 8 0 0 1 8 8 v26" />
        <path d="M70 234 h56" />
      </g>
      {/* bottom-right: bath */}
      <g stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M226 224 h44 a6 6 0 0 1 -6 12 h-32 a6 6 0 0 1 -6 -12z" />
        <path d="M262 224 v-8 a6 6 0 0 1 12 0" />
      </g>

      {/* sensor pulses */}
      {[
        [110, 116],
        [250, 116],
        [110, 206],
        [250, 206],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="9" fill="var(--color-blue)" opacity="0.15" />
          <circle cx={cx} cy={cy} r="4" fill="var(--color-blue)" />
        </g>
      ))}
    </svg>
  );
}

/**
 * "Circle of care" node graphic: a central hub (the senior's home) linked to
 * family, caregiver, and community nodes.
 */
export function CareNetwork({
  className = "",
  centerIcon: CenterIcon,
  nodeIconList,
}: {
  className?: string;
  centerIcon?: IconComp;
  nodeIconList?: IconComp[];
}) {
  const center = { x: 150, y: 150 };
  const nodes = [
    { x: 150, y: 40 },
    { x: 248, y: 205 },
    { x: 52, y: 205 },
  ];
  return (
    <svg viewBox="0 0 300 300" fill="none" aria-hidden="true" className={className}>
      {/* connecting lines */}
      {nodes.map((n, i) => (
        <line
          key={i}
          x1={center.x}
          y1={center.y}
          x2={n.x}
          y2={n.y}
          stroke="var(--color-sky-dark)"
          strokeWidth="2.5"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
      ))}
      {/* outer nodes */}
      {nodes.map((n, i) => {
        const NodeIcon = nodeIconList?.[i];
        return (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r="30"
              fill="#fff"
              stroke="var(--color-sky-dark)"
              strokeWidth="2.5"
            />
            {NodeIcon && (
              <NodeIcon
                x={n.x - 13}
                y={n.y - 13}
                width={26}
                height={26}
                className="text-navy"
              />
            )}
          </g>
        );
      })}
      {/* center hub */}
      <circle cx={center.x} cy={center.y} r="46" fill="var(--color-navy)" />
      {CenterIcon && (
        <CenterIcon
          x={center.x - 18}
          y={center.y - 18}
          width={36}
          height={36}
          className="text-cream"
        />
      )}
    </svg>
  );
}
