import React, { useEffect, useState } from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {
  onLoadComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let mounted = true;
    let progressInterval: NodeJS.Timeout;
    let resourcesLoaded = false;
    let minimumTimeReached = false;

    // Simulate progress for visual feedback
    const simulateProgress = () => {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev; // Cap at 90% until real loading completes
          return prev + Math.random() * 10;
        });
      }, 200);
    };

    // Check if all resources are loaded
    const checkResourcesLoaded = () => {
      if (document.readyState === "complete") {
        resourcesLoaded = true;
        checkCompletion();
      } else {
        window.addEventListener("load", () => {
          resourcesLoaded = true;
          checkCompletion();
        });
      }
    };

    // Ensure minimum display time (1.5 seconds)
    const minimumDisplayTime = setTimeout(() => {
      minimumTimeReached = true;
      checkCompletion();
    }, 1500);

    const checkCompletion = () => {
      if (resourcesLoaded && minimumTimeReached && mounted) {
        clearInterval(progressInterval);
        setProgress(100);
        
        // Wait for progress animation to complete
        setTimeout(() => {
          if (mounted) {
            setIsExiting(true);
            // Wait for exit animation before calling onLoadComplete
            setTimeout(() => {
              if (mounted) {
                onLoadComplete();
              }
            }, 800);
          }
        }, 300);
      }
    };

    simulateProgress();
    checkResourcesLoaded();

    return () => {
      mounted = false;
      clearInterval(progressInterval);
      clearTimeout(minimumDisplayTime);
    };
  }, [onLoadComplete]);

  return (
    <div className={`${styles.loader} ${isExiting ? styles.exit : ""}`}>
      <div className={styles.loaderContent}>
        {/* Progress bar */}
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
