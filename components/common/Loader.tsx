import React, { useEffect, useRef } from "react";
import styles from "./Loader.module.scss";
import { SignatureSvg, writeSignature, showSignature } from "./signature";

interface LoaderProps {
  onLoadComplete: () => void;
}

// Timings (ms).
const WRITE_MS = 1500; // handwriting duration
const MAX_EXTRA_HOLD = 1000; // wait at most this long after writing for the page
const FLY_MS = 700; // signature flies into the hero
const FADE_MS = 400; // fallback exit when there's nowhere to fly
const FLY_EASE = "cubic-bezier(.65,0,.35,1)";

// The hero's copy of the signature; the loader flies onto it, then reveals it.
const TARGET_SELECTOR = "[data-signature-target]";

const waitForHeroImages = (): Promise<void> => {
  const images = Array.from(document.querySelectorAll<HTMLImageElement>("#home img"));
  return Promise.all(
    images.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          })
    )
  ).then((): void => undefined);
};

const revealTarget = (target: HTMLElement | SVGElement | null) => {
  if (!target) return;
  target.style.transition = "none";
  target.style.opacity = "";
};

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => timers.push(setTimeout(resolve, ms)));

    const svg = svgRef.current;
    const overlay = overlayRef.current;
    if (!svg || !overlay) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Page readiness: fonts + hero images (give content a frame to mount first).
    const ready = sleep(50).then(() =>
      Promise.all([
        document.fonts ? document.fonts.ready.then((): void => undefined) : Promise.resolve(),
        waitForHeroImages(),
      ])
    );

    const run = async () => {
      // 1. Write (or show instantly for reduced motion).
      if (reduceMotion) {
        showSignature(svg);
        await sleep(400);
      } else {
        await writeSignature(svg, WRITE_MS);
      }
      // 2. Hold briefly if the page still isn't ready.
      await Promise.race([ready, sleep(MAX_EXTRA_HOLD)]);
      if (cancelled) return;

      const target = document.querySelector<SVGElement>(TARGET_SELECTOR);
      const from = svg.getBoundingClientRect();
      const to = target ? target.getBoundingClientRect() : null;
      const onScreen =
        !!to && to.width > 0 && to.bottom > 0 && to.top < window.innerHeight &&
        to.right > 0 && to.left < window.innerWidth;

      if (!reduceMotion && target && to && onScreen) {
        // 3. Fly onto the hero signature (FLIP: translate + uniform scale).
        const targetOpacity = parseFloat(
          getComputedStyle(target.parentElement as Element).opacity || "1"
        );
        const dx = to.left - from.left;
        const dy = to.top - from.top;
        const scale = to.width / from.width;
        const fly = svg.animate(
          [
            { transform: "translate(0px, 0px) scale(1)", opacity: 1, color: "#FEF5E1" },
            {
              transform: `translate(${dx}px, ${dy}px) scale(${scale})`,
              opacity: targetOpacity,
              color: "#FFFFFF",
            },
          ],
          { duration: FLY_MS, easing: FLY_EASE, fill: "forwards" }
        );
        const fade = overlay.animate([{ backgroundColor: "rgba(0,0,0,1)" }, { backgroundColor: "rgba(0,0,0,0)" }], {
          duration: FLY_MS,
          easing: FLY_EASE,
          fill: "forwards",
        });
        await Promise.all([fly.finished, fade.finished]);
      } else {
        // 3b. Nowhere to fly (other page, off-screen on mobile): fade out.
        await overlay.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: FADE_MS,
          easing: "ease-out",
          fill: "forwards",
        }).finished;
      }
      if (cancelled) return;

      // 4. Hand off: hero signature appears exactly where the loader's landed.
      revealTarget(target);
      onLoadComplete();
    };

    run().catch(() => {
      // Never leave the page covered.
      revealTarget(document.querySelector<SVGElement>(TARGET_SELECTOR));
      if (!cancelled) onLoadComplete();
    });

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [onLoadComplete]);

  return (
    <div ref={overlayRef} className={styles.loader}>
      <SignatureSvg svgRef={svgRef} className={styles.signature} hidden />
    </div>
  );
};

export default Loader;
