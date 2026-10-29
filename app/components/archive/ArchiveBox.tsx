import { useEffect, useRef, useState } from "react";

interface ArchiveBoxProps {
  /** The flaps are folded up */
  open: boolean;
}

// The box is drawn as a line drawing from the side, in the same projection
// all round: the front corner in the middle, the right face going back to the
// right and the left face going back to the left.
const COS = Math.cos(Math.PI / 6);
const SIN = 0.5;
const LONG = 110;
const SHORT = 80;
const HEIGHT = 100;
const FLAP = SHORT / 2;
// How far the flaps fold when the box is open, in radians
const OPEN_ANGLE = (115 * Math.PI) / 180;

type Point = [number, number];

const front: Point = [160, 270];
const right: Point = [front[0] + LONG * COS, front[1] - LONG * SIN];
const left: Point = [front[0] - SHORT * COS, front[1] - SHORT * SIN];
const back: Point = [right[0] - SHORT * COS, right[1] - SHORT * SIN];
const up = (point: Point): Point => [point[0], point[1] - HEIGHT];
const [frontTop, rightTop, leftTop, backTop] = [front, right, left, back].map(
  up,
);

const points = (list: Point[]) => list.map((p) => p.join(",")).join(" ");
const add = (point: Point, by: Point): Point => [
  point[0] + by[0],
  point[1] + by[1],
];

// Where the point of a flap ends up when it is folded `angle` up from lying flat
const fold = (inward: Point, angle: number): Point => [
  FLAP * Math.cos(angle) * inward[0],
  FLAP * (Math.cos(angle) * inward[1] - Math.sin(angle)),
];

const easeOut = (x: number) => 1 - (1 - x) ** 3;

export default function ArchiveBox({ open }: ArchiveBoxProps) {
  // 0 is shut and 1 is open. It moves by itself, since a drawing in this
  // projection cannot be moved by a style alone.
  const [progress, setProgress] = useState(0);
  const current = useRef(0);

  useEffect(() => {
    const target = open ? 1 : 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      current.current = target;
      setProgress(target);
      return;
    }
    const from = current.current;
    const duration = 350 * Math.abs(target - from);
    const start = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const done = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      current.current = from + (target - from) * easeOut(done);
      setProgress(current.current);
      if (done < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [open]);

  const angle = progress * OPEN_ANGLE;
  // The flap on the front edge leans back over the box, the one on the back edge stands behind
  const frontFold = fold([-COS, -SIN], angle);
  const backFold = fold([COS, SIN], angle);

  return (
    <svg
      className="archive-box"
      viewBox="60 20 220 270"
      aria-hidden="true"
      fill="none"
    >
      {/* The inside corner at the back, seen through the opening */}
      <line
        x1={backTop[0]}
        y1={backTop[1]}
        x2={backTop[0]}
        y2={frontTop[1] - 15}
      />

      {/* The flap on the back edge */}
      <polygon
        points={points([
          leftTop,
          backTop,
          add(backTop, backFold),
          add(leftTop, backFold),
        ])}
      />

      {/* The two sides of the box */}
      <polygon points={points([front, left, leftTop, frontTop])} />
      <polygon points={points([front, right, rightTop, frontTop])} />

      {/* The flap on the front edge */}
      <polygon
        points={points([
          frontTop,
          rightTop,
          add(rightTop, frontFold),
          add(frontTop, frontFold),
        ])}
      />
    </svg>
  );
}
