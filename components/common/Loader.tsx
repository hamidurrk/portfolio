import React, { useEffect, useState } from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {
  onLoadComplete: () => void;
}

// Timings (ms). The loader only waits for what is needed above the fold
// (fonts + hero images), never for the whole page's images.
const MIN_DISPLAY = 600;
const MAX_WAIT = 1500;
const EXIT_DURATION = 400; // keep in sync with .loader transition in Loader.module.scss

const waitForHeroImages = (): Promise<void> => {
  const images = Array.from(
    document.querySelectorAll<HTMLImageElement>("#home img")
  );
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

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let mounted = true;
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Cosmetic progress that eases toward 90% while we wait.
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 90 ? prev : prev + (90 - prev) * 0.25));
    }, 100);

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => timers.push(setTimeout(resolve, ms)));

    // Give the page content one frame to mount so hero <img> tags exist.
    const ready = sleep(50).then(() =>
      Promise.all([
        document.fonts ? document.fonts.ready.then((): void => undefined) : Promise.resolve(),
        waitForHeroImages(),
      ])
    );

    Promise.all([Promise.race([ready, sleep(MAX_WAIT)]), sleep(MIN_DISPLAY)]).then(() => {
      if (!mounted) return;
      clearInterval(progressInterval);
      setProgress(100);
      setIsExiting(true);
      timers.push(
        setTimeout(() => {
          if (mounted) onLoadComplete();
        }, EXIT_DURATION)
      );
    });

    return () => {
      mounted = false;
      clearInterval(progressInterval);
      timers.forEach(clearTimeout);
    };
  }, [onLoadComplete]);

  return (
    <div className={`${styles.loader} ${isExiting ? styles.exit : ""}`}>
      <div className={styles.loaderContent}>
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className={styles.progressText}>{Math.round(progress)}%</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
