import React, { CSSProperties, Ref } from "react";

// Single-line handwritten "Hamidur", in writing order.
// Same viewBox as the hero signature slot so loader and hero copies line up.
export const SIGNATURE_VIEWBOX = "0 0 207.68 68.64";

export const SIGNATURE_STROKES: string[] = [
  // H · left stem (ends in a small hook)
  "M50,9 C44,19 33,36 27,47 C25,51 24,54 23,55 C20,51 16,45 13,41",
  // H · right stem
  "M84,1 C71,21 59,41 53,57 C51,61 50,64 49,67",
  // H · crossbar
  "M1,38 C10,40 28,40.5 46,38.5 C60,37 71,33 78,30",
  // "amidu" in one connected movement
  "M89,36 C84,34 76,40 73,47 C71,52 76,52 80,48 C84,44 87,39 89,36 C88,41 87,46 88,50 C89,52 92,49 96,44 C98,42 98,47 97,52 C99,45 101,38 106,37 C109,37 108,44 107,50 C109,43 112,36 116,36 C119,37 117,44 117,48 C118,51 122,50 126,45 C127,43 128,41 129,40 C129,44 128,47 129,50 C131,51 136,49 140,46 C143,43 147,40 149,41 C146,40 141,44 141,48 C141,51 146,50 150,46 C152,40 145,25 147,17 C149,11 157,10 161,15 C165,21 162,33 157,44 C156,48 161,48 166,45 C168,43 170,39 172,36 C171,41 170,47 172,51 C175,52 182,44 186,38 C186,44 184,50 183,56",
  // "r" with its hook
  "M190,52 C191,46 191,41 192,36 C194,38 197,35 201,34 C205,33 207,36 205,40",
  // i · dot (written last)
  "M133.4,34 C134.1,33.6 134.9,33 135.5,32",
];

export const SIGNATURE_STROKE_WIDTH = 2.4;

interface SignatureSvgProps {
  className?: string;
  style?: CSSProperties;
  svgRef?: Ref<SVGSVGElement>;
  /** Hidden until written (stroke-dash set by writeSignature). */
  hidden?: boolean;
  [dataAttr: `data-${string}`]: string | boolean | undefined;
}

export const SignatureSvg = ({ className, style, svgRef, hidden, ...rest }: SignatureSvgProps) => (
  <svg
    ref={svgRef}
    viewBox={SIGNATURE_VIEWBOX}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ overflow: "visible", ...style }}
    aria-label="Hamidur signature"
    role="img"
    {...rest}
  >
    {SIGNATURE_STROKES.map((d, i) => (
      <path
        key={i}
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={SIGNATURE_STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
        // Long dash offset hides the stroke before first paint.
        style={hidden ? { strokeDasharray: "1000 1000", strokeDashoffset: 1001 } : undefined}
      />
    ))}
  </svg>
);

const WRITE_EASE = "cubic-bezier(.45,.05,.55,.95)";
const PEN_LIFT_MS = 90; // pause between strokes
const DOT_LIFT_MS = 200; // longer pause before the i-dot
const MIN_STROKE_MS = 70; // short strokes shouldn't flash

/**
 * Writes the signature stroke by stroke, like a pen. Resolves when finished.
 * The pen moves at a steady speed: each stroke's time is proportional to its length.
 */
export const writeSignature = (svg: SVGSVGElement, totalMs: number): Promise<void> => {
  const paths = Array.from(svg.querySelectorAll("path"));
  const lengths = paths.map((p) => p.getTotalLength());
  const pauses = paths.map((_, i) =>
    i === 0 ? 0 : i === paths.length - 1 ? DOT_LIFT_MS : PEN_LIFT_MS
  );
  const penTime = Math.max(totalMs - pauses.reduce((a, b) => a + b, 0), 300);
  const sumL = lengths.reduce((a, b) => a + b, 0);

  let t = 0;
  const animations = paths.map((p, i) => {
    const L = lengths[i];
    p.style.strokeDasharray = `${L} ${L + 10}`;
    p.style.strokeDashoffset = `${L + 1}`;
    t += pauses[i];
    const duration = Math.max(penTime * (L / sumL), MIN_STROKE_MS);
    const anim = p.animate(
      [{ strokeDashoffset: L + 1 }, { strokeDashoffset: 0 }],
      { duration, delay: t, easing: WRITE_EASE, fill: "forwards" }
    );
    t += duration;
    return anim;
  });

  return Promise.all(animations.map((a) => a.finished)).then((): void => undefined);
};

/** Shows the finished signature instantly (reduced motion). */
export const showSignature = (svg: SVGSVGElement): void => {
  svg.querySelectorAll("path").forEach((p) => {
    p.style.strokeDasharray = "none";
    p.style.strokeDashoffset = "0";
  });
};
