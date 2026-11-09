import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type VehicleKind =
  | "sedan"
  | "hatchback"
  | "taxi"
  | "suv"
  | "van"
  | "minibus"
  | "pickup"
  | "truck"
  | "motorbike";

type Detail = { d: string; kind: "dark" | "line" | "frame" | "accent" | "glass" };

type Spec = {
  body: string;
  roof?: string;
  windows: string[];
  details?: Detail[];
  wheels: number[];
  wheelY: number;
  wheelR: number;
  rearX: number;
  frontX: number;
  lightY: number;
};

const SEDAN_BODY =
  "M22 72 C22 60 30 56 44 54 L70 50 C86 34 104 26 130 26 L162 26 C184 26 198 36 214 52 L236 56 C246 58 250 64 250 72 L250 78 C250 82 247 84 243 84 L224 84 A20 20 0 0 0 184 84 L92 84 A20 20 0 0 0 52 84 L30 84 C25 84 22 81 22 77 Z";

/* Every vehicle shares a 260×100 box so they all sit on the same road line. */
const SPECS: Record<VehicleKind, Spec> = {
  sedan: {
    body: SEDAN_BODY,
    roof: "M86 50 C98 38 112 32 130 32 L160 32 C178 32 190 40 204 52 Z",
    windows: ["M94 50 C104 40 114 34 128 34 L128 50 Z", "M136 34 L162 34 C176 34 186 40 198 50 L136 50 Z"],
    details: [
      { d: "M132 52 L132 80", kind: "line" },
      { d: "M138 60 h12 v3 h-12 Z", kind: "dark" },
    ],
    wheels: [72, 204],
    wheelY: 76,
    wheelR: 17,
    rearX: 22,
    frontX: 250,
    lightY: 62,
  },
  taxi: {
    body: SEDAN_BODY,
    roof: "M86 50 C98 38 112 32 130 32 L160 32 C178 32 190 40 204 52 Z",
    windows: ["M94 50 C104 40 114 34 128 34 L128 50 Z", "M136 34 L162 34 C176 34 186 40 198 50 L136 50 Z"],
    details: [
      // Accra taxi: yellow fenders and a roof sign
      { d: "M22 72 C22 60 30 56 44 54 L46 84 L30 84 C25 84 22 81 22 77 Z", kind: "accent" },
      { d: "M212 52 L236 56 C246 58 250 64 250 72 L250 78 C250 82 247 84 243 84 L224 84 L214 84 Z", kind: "accent" },
      { d: "M126 18 h36 v8 h-36 Z", kind: "accent" },
      { d: "M138 26 h12 v3 h-12 Z", kind: "dark" },
      { d: "M132 52 L132 80", kind: "line" },
      { d: "M138 60 h12 v3 h-12 Z", kind: "dark" },
    ],
    wheels: [72, 204],
    wheelY: 76,
    wheelR: 17,
    rearX: 22,
    frontX: 250,
    lightY: 62,
  },
  hatchback: {
    body: "M26 74 C26 60 36 44 56 34 C62 28 70 26 80 26 L160 26 C180 26 196 36 212 52 L236 56 C244 58 248 64 248 72 L248 78 C248 82 245 84 241 84 L222 84 A19 19 0 0 0 184 84 L96 84 A19 19 0 0 0 58 84 L34 84 C29 84 26 81 26 77 Z",
    roof: "M50 50 C56 40 66 34 80 33 L160 33 C172 33 184 40 196 50 Z",
    windows: ["M52 50 C58 40 68 34 82 34 L106 34 L106 50 Z", "M114 34 L156 34 C170 34 182 40 194 50 L114 50 Z"],
    details: [
      { d: "M110 52 L110 80", kind: "line" },
      { d: "M116 60 h12 v3 h-12 Z", kind: "dark" },
    ],
    wheels: [68, 204],
    wheelY: 76,
    wheelR: 17,
    rearX: 26,
    frontX: 248,
    lightY: 58,
  },
  suv: {
    body: "M20 74 C20 64 26 60 36 58 L60 54 L78 32 C82 26 88 22 98 22 L176 22 C186 22 192 26 198 34 L214 54 L240 58 C248 60 252 66 252 74 L252 80 C252 84 249 86 245 86 L226 86 A22 22 0 0 0 182 86 L94 86 A22 22 0 0 0 50 86 L28 86 C23 86 20 83 20 78 Z",
    roof: "M84 52 L98 30 L180 30 L198 52 Z",
    windows: ["M86 52 L100 32 L126 32 L126 52 Z", "M134 32 L164 32 L164 52 L134 52 Z", "M172 32 L182 32 L196 52 L172 52 Z"],
    details: [
      { d: "M96 18 h84 v4 h-84 Z", kind: "dark" },
      { d: "M130 54 L130 82", kind: "line" },
      { d: "M168 54 L168 82", kind: "line" },
      { d: "M136 62 h12 v3 h-12 Z", kind: "dark" },
      { d: "M174 62 h12 v3 h-12 Z", kind: "dark" },
    ],
    wheels: [72, 204],
    wheelY: 78,
    wheelR: 19,
    rearX: 20,
    frontX: 252,
    lightY: 62,
  },
  van: {
    body: "M18 76 C18 66 22 62 30 60 L40 58 L58 32 C60 26 64 22 72 22 L222 22 C232 22 238 28 238 38 L238 60 L246 62 C252 64 254 70 254 76 L254 80 C254 84 251 86 247 86 L222 86 A20 20 0 0 0 182 86 L96 86 A20 20 0 0 0 56 86 L26 86 C21 86 18 83 18 78 Z",
    roof: "M62 52 L74 30 L232 30 L232 52 Z",
    windows: ["M64 52 L76 30 L110 30 L110 52 Z", "M118 30 L160 30 L160 52 L118 52 Z", "M168 30 L228 30 L228 52 L168 52 Z"],
    details: [
      { d: "M164 54 L164 84", kind: "line" },
      { d: "M114 54 L114 84", kind: "line" },
      { d: "M120 64 h12 v3 h-12 Z", kind: "dark" },
      { d: "M170 64 h12 v3 h-12 Z", kind: "dark" },
    ],
    wheels: [76, 202],
    wheelY: 78,
    wheelR: 17,
    rearX: 18,
    frontX: 254,
    lightY: 64,
  },
  minibus: {
    // the trotro: tall box, flat face, three side windows
    body: "M16 78 C16 68 20 62 28 60 L30 58 L30 30 C30 24 34 20 40 20 L232 20 C242 20 248 26 248 36 L248 62 L250 64 C254 66 254 72 254 78 L254 82 C254 86 251 88 247 88 L222 88 A19 19 0 0 0 184 88 L92 88 A19 19 0 0 0 54 88 L24 88 C19 88 16 85 16 80 Z",
    roof: "M34 50 L34 28 L244 28 L244 50 Z",
    windows: [
      "M38 28 L80 28 L80 50 L38 50 Z",
      "M88 28 L136 28 L136 50 L88 50 Z",
      "M144 28 L192 28 L192 50 L144 50 Z",
      "M200 28 L240 28 L242 50 L200 50 Z",
    ],
    details: [
      { d: "M44 16 h180 v4 h-180 Z", kind: "dark" },
      { d: "M140 52 L140 84", kind: "line" },
      { d: "M196 52 L196 84", kind: "line" },
      { d: "M146 64 h12 v3 h-12 Z", kind: "dark" },
      { d: "M30 70 h218 v3 h-218 Z", kind: "accent" },
    ],
    wheels: [72, 200],
    wheelY: 80,
    wheelR: 17,
    rearX: 16,
    frontX: 254,
    lightY: 66,
  },
  pickup: {
    body: "M20 74 C20 64 26 60 36 58 L62 54 L80 32 C84 26 90 22 98 22 L138 22 C146 22 150 26 150 34 L150 56 L246 56 C252 56 254 60 254 66 L254 80 C254 84 251 86 247 86 L226 86 A20 20 0 0 0 186 86 L94 86 A20 20 0 0 0 54 86 L28 86 C23 86 20 83 20 78 Z",
    roof: "M86 54 L100 30 L144 30 L144 54 Z",
    windows: ["M88 52 L102 32 L140 32 L140 52 Z"],
    details: [
      { d: "M154 58 L242 58 L242 62 L154 62 Z", kind: "dark" },
      { d: "M132 54 L132 82", kind: "line" },
      { d: "M138 62 h10 v3 h-10 Z", kind: "dark" },
    ],
    wheels: [74, 206],
    wheelY: 78,
    wheelR: 18,
    rearX: 20,
    frontX: 254,
    lightY: 60,
  },
  truck: {
    // box lorry: cargo box behind, cab in front
    body: "M18 80 C18 74 22 70 28 68 L28 24 C28 20 31 18 35 18 L170 18 L170 66 L176 66 L184 42 C186 36 190 34 196 34 L226 34 C234 34 240 40 244 48 L252 66 C254 70 254 76 254 82 L254 86 C254 90 251 92 247 92 L226 92 A18 18 0 0 0 190 92 L158 92 A18 18 0 0 0 122 92 L90 92 A18 18 0 0 0 54 92 L24 92 C20 92 18 89 18 84 Z",
    windows: ["M192 40 L226 40 L238 58 L192 58 Z"],
    details: [
      { d: "M34 26 L164 26 L164 30 L34 30 Z", kind: "dark" },
      { d: "M34 56 L164 56 L164 60 L34 60 Z", kind: "dark" },
      { d: "M100 26 L100 60", kind: "line" },
      { d: "M212 60 L212 86", kind: "line" },
      { d: "M216 66 h10 v3 h-10 Z", kind: "dark" },
    ],
    wheels: [60, 128, 216],
    wheelY: 82,
    wheelR: 17,
    rearX: 18,
    frontX: 254,
    lightY: 70,
  },
  motorbike: {
    // okada: tank + seat body, engine block, swingarm, fork and handlebar
    body: "M94 54 C98 42 118 36 140 42 L182 42 L190 50 L170 58 L100 58 Z",
    windows: [],
    details: [
      { d: "M112 58 L152 58 L152 72 L118 72 Z", kind: "dark" },
      { d: "M72 76 L114 62", kind: "frame" },
      { d: "M176 48 L196 76", kind: "frame" },
      { d: "M178 44 L188 30 L204 30", kind: "frame" },
      { d: "M54 46 L92 46 L90 52 L58 52 Z", kind: "dark" },
    ],
    wheels: [72, 196],
    wheelY: 76,
    wheelR: 19,
    rearX: 52,
    frontX: 208,
    lightY: 36,
  },
};

const FILL: Record<Detail["kind"], string> = {
  dark: "hsl(220 50% 8% / 0.4)",
  line: "hsl(220 50% 8% / 0.35)",
  frame: "currentColor",
  accent: "hsl(45 100% 58%)",
  glass: "hsl(195 85% 70% / 0.85)",
};

/**
 * Side-profile vehicle with spinning wheels, exhaust puffs and a gentle
 * suspension bob. All CSS, motion-safe only. The body uses currentColor so
 * it takes its colour from the parent.
 */
export function Vehicle({
  kind = "sedan",
  className,
  spinning = true,
}: {
  kind?: VehicleKind;
  className?: string;
  spinning?: boolean;
}) {
  const s = SPECS[kind];
  const wheel = (cx: number) => (
    <g
      key={cx}
      className={cn(spinning && "motion-safe:animate-spin [animation-duration:0.9s]")}
      style={{ transformOrigin: `${cx}px ${s.wheelY}px`, transformBox: "view-box" }}
    >
      <circle cx={cx} cy={s.wheelY} r={s.wheelR} fill="hsl(220 50% 8%)" />
      <circle cx={cx} cy={s.wheelY} r={s.wheelR * 0.62} fill="none" stroke="hsl(175 100% 42%)" strokeWidth={2.5} />
      {[0, 60, 120].map((a) => (
        <line
          key={a}
          x1={cx}
          y1={s.wheelY - s.wheelR * 0.6}
          x2={cx}
          y2={s.wheelY + s.wheelR * 0.6}
          stroke="hsl(175 100% 42%)"
          strokeWidth={2}
          transform={`rotate(${a} ${cx} ${s.wheelY})`}
        />
      ))}
      <circle cx={cx} cy={s.wheelY} r={2.5} fill="hsl(0 0% 100%)" />
    </g>
  );

  return (
    <svg viewBox="0 0 260 100" className={cn("overflow-visible", className)} aria-hidden="true">
      {[0, 0.5, 1].map((d) => (
        <circle
          key={d}
          cx={s.rearX - 8}
          cy={s.wheelY + 4}
          r={4}
          fill="hsl(0 0% 100% / 0.35)"
          className={cn(spinning && "motion-safe:animate-puff")}
          style={{ animationDelay: `${d}s`, transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
      <ellipse cx={136} cy={s.wheelY + 18} rx={116} ry={4} fill="hsl(220 50% 5% / 0.45)" />
      <g className={cn(spinning && "motion-safe:animate-bob")}>
        <path d={s.body} fill="currentColor" />
        {s.roof && <path d={s.roof} fill="hsl(0 0% 100% / 0.12)" />}
        {s.windows.map((w) => (
          <path key={w} d={w} fill={FILL.glass} />
        ))}
        {s.details?.map(({ d, kind: k }) =>
          k === "line" || k === "frame" ? (
            <path
              key={d}
              d={d}
              stroke={FILL[k]}
              strokeWidth={k === "frame" ? 6 : 1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          ) : (
            <path key={d} d={d} fill={FILL[k]} />
          ),
        )}
        <rect x={s.frontX - 6} y={s.lightY} width={6} height={8} fill="hsl(45 100% 80%)" />
        <path
          d={`M${s.frontX} ${s.lightY - 2} L${s.frontX + 50} ${s.lightY - 12} L${s.frontX + 50} ${s.lightY + 20} L${s.frontX} ${s.lightY + 10} Z`}
          fill="hsl(45 100% 80% / 0.12)"
        />
        <rect x={s.rearX} y={s.lightY} width={6} height={9} rx={2} fill="hsl(0 85% 60%)" />
      </g>
      {s.wheels.map(wheel)}
    </svg>
  );
}

/** Backwards-compatible sedan. */
export function Car(props: { className?: string; spinning?: boolean }) {
  return <Vehicle kind="sedan" {...props} />;
}

type Look = { kind: VehicleKind; dark: string; light: string };

/* Two disjoint sets so the two cars on screen are never the same type. */
const NEAR_SET: Look[] = [
  { kind: "sedan", dark: "text-teal-500", light: "text-teal-500/90" },
  { kind: "taxi", dark: "text-navy-100", light: "text-navy-500/90" },
  { kind: "suv", dark: "text-teal-300", light: "text-navy-700/80" },
  { kind: "hatchback", dark: "text-teal-400", light: "text-teal-600/80" },
  { kind: "van", dark: "text-navy-200", light: "text-navy-600/80" },
];
const FAR_SET: Look[] = [
  { kind: "pickup", dark: "text-teal-400/70", light: "text-navy-500/60" },
  { kind: "minibus", dark: "text-navy-200/70", light: "text-teal-500/60" },
  { kind: "motorbike", dark: "text-teal-300/70", light: "text-navy-700/60" },
  { kind: "truck", dark: "text-navy-100/60", light: "text-navy-500/60" },
];

/** One vehicle crossing on a loop; the type changes each time it leaves the screen. */
function Mover({
  set,
  offset,
  dark,
  mirrored = false,
  className,
}: {
  set: Look[];
  offset: number;
  dark: boolean;
  mirrored?: boolean;
  className: string;
}) {
  const [turn, setTurn] = useState(offset);
  const v = set[turn % set.length];
  const onIteration = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && e.animationName.startsWith("drive")) setTurn((t) => t + 1);
  };
  return (
    <div className={cn("absolute left-0", className, dark ? v.dark : v.light)} onAnimationIteration={onIteration}>
      <Vehicle kind={v.kind} className={cn("w-full", mirrored && "-scale-x-100")} />
    </div>
  );
}

/**
 * A road along the bottom of a scene with two vehicles at a time, driving
 * in opposite directions: a car in the near lane heading right and a
 * smaller one in the far lane heading left. Each lane rotates through its
 * own set of types (sedan, taxi, SUV, hatchback, van / pickup, trotro,
 * okada, lorry) every time its vehicle leaves the screen. `scope` is
 * "viewport" for full-bleed sections and "container" for a rounded band.
 * `offset` staggers which vehicles go first so scenes on a page differ.
 */
export function Traffic({
  tone = "dark",
  scope = "viewport",
  size = "md",
  offset = 0,
  className,
}: {
  tone?: "dark" | "light";
  scope?: "viewport" | "container";
  size?: "md" | "sm";
  offset?: number;
  className?: string;
}) {
  const dark = tone === "dark";
  const viewport = scope === "viewport";
  const fwd = viewport ? "motion-safe:animate-drive" : "motion-safe:animate-drive-band";
  const back = viewport ? "motion-safe:animate-drive-back" : "motion-safe:animate-drive-band-back";
  const nearW = size === "md" ? "w-[190px] sm:w-[250px]" : "w-[120px] sm:w-[150px]";
  const farW = size === "md" ? "w-[120px] sm:w-[160px]" : "w-[80px] sm:w-[100px]";
  const nearBottom = size === "md" ? "bottom-5" : "bottom-3";
  const farBottom = size === "md" ? "bottom-[3.4rem] sm:bottom-16" : "bottom-9 sm:bottom-10";
  const lineColor = dark ? "bg-white/15" : "bg-navy-700/15";
  const dash = dark ? "hsl(175 100% 55%)" : "hsl(220 50% 20%)";
  return (
    <div className={cn("pointer-events-none absolute inset-x-0 bottom-0 h-32", className)} aria-hidden="true">
      {/* far lane: heads left, smaller and dimmer */}
      <Mover set={FAR_SET} offset={offset} dark={dark} mirrored className={cn(farBottom, farW, back, "motion-reduce:left-[22%]")} />
      <div className={cn("absolute inset-x-0 bottom-6 h-px", lineColor)} />
      <div
        className="absolute inset-x-0 bottom-[11px] h-px bg-[length:48px_1px] bg-repeat-x opacity-30 motion-safe:animate-lane"
        style={{ backgroundImage: `linear-gradient(90deg, ${dash} 0 22px, transparent 22px 48px)` }}
      />
      {/* near lane: heads right */}
      <Mover set={NEAR_SET} offset={offset} dark={dark} className={cn(nearBottom, nearW, fwd, "motion-reduce:left-[60%]")} />
    </div>
  );
}
