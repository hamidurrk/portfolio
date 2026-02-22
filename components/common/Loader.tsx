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
    let imagesLoaded = false;
    let fontsLoaded = false;
    let minimumTimeReached = false;

    const updateProgress = (value: number) => {
      setProgress((prev) => Math.max(prev, value));
    };

    const simulateProgress = () => {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 85) return prev; 
          return prev + Math.random() * 5;
        });
      }, 300);
    };

    const forceLazyImagesToLoad = () => {
      const lazyImages = document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]');
      lazyImages.forEach((img) => {
        img.loading = 'eager';
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
    };

    const checkAllImagesLoaded = () => {
      return new Promise<void>((resolve) => {
        forceLazyImagesToLoad();
        
        setTimeout(() => {
          const images = Array.from(document.images);
          
          if (images.length === 0) {
            resolve();
            return;
          }

          let loadedCount = 0;
          const totalImages = images.length;

          const checkComplete = () => {
            loadedCount++;
            const imgProgress = Math.floor((loadedCount / totalImages) * 40) + 20;
            updateProgress(imgProgress);
            
            if (loadedCount === totalImages) {
              resolve();
            }
          };

          images.forEach((img) => {
            if (img.complete) {
              checkComplete();
            } else {
              img.addEventListener("load", checkComplete);
              img.addEventListener("error", checkComplete); // Count errors as "loaded" to prevent hanging
            }
          });
        }, 100);
      });
    };

    const checkFontsLoaded = () => {
      if (document.fonts) {
        return document.fonts.ready.then(() => {
          updateProgress(70);
        });
      }
      return Promise.resolve();
    };

    const waitForDynamicContent = () => {
      return new Promise<void>((resolve) => {
        const observer = new MutationObserver(() => {
          updateProgress(80);
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });

        setTimeout(() => {
          observer.disconnect();
          resolve();
        }, 500);
      });
    };

    const checkResourcesLoaded = async () => {
      if (document.readyState !== "complete") {
        await new Promise((resolve) => {
          window.addEventListener("load", resolve, { once: true });
        });
      }
      updateProgress(15);

      await checkAllImagesLoaded();
      imagesLoaded = true;
      updateProgress(60);

      await checkFontsLoaded();
      fontsLoaded = true;
      updateProgress(75);

      await waitForDynamicContent();
      updateProgress(90);

      resourcesLoaded = true;
      checkCompletion();
    };

    const minimumDisplayTime = setTimeout(() => {
      minimumTimeReached = true;
      checkCompletion();
    }, 2000);

    const checkCompletion = () => {
      if (resourcesLoaded && imagesLoaded && fontsLoaded && minimumTimeReached && mounted) {
        clearInterval(progressInterval);
        setProgress(100);
        
        setTimeout(() => {
          if (mounted) {
            setIsExiting(true);
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
