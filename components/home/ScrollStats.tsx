import React, { useEffect, useState } from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import styles from './ScrollStats.module.scss';

interface ScrollStatsProps {
  scrollYProgress: MotionValue<number>;
}

const ScrollStats: React.FC<ScrollStatsProps> = ({ scrollYProgress }) => {
  const [projectCount, setProjectCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);

  // Target values
  const targetProjects = 60;
  const targetYears = 8;
  const targetCoffee = 99999;

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Start counting when scroll is between 0.1 and 0.5
      if (latest >= 0.3 && latest <= 0.7) {
        const progress = (latest - 0.3) / 0.4; // Normalize to 0-1 range
        setProjectCount(Math.floor(targetProjects * progress));
        setExperienceYears(Math.floor(targetYears * progress));
        setCoffeeCount(Math.floor(targetCoffee * progress));
      } else if (latest > 0.7) {
        setProjectCount(targetProjects);
        setExperienceYears(targetYears);
        setCoffeeCount(targetCoffee);
      } else {
        setProjectCount(0);
        setExperienceYears(0);
        setCoffeeCount(0);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Fade in/out based on scroll progress - instant appearance with earlier start
  const opacity = useTransform(scrollYProgress, [0.01, 0.05, 0.92, 0.97], [0, 1, 1, 0]);
  const yPosition = useTransform(scrollYProgress, [0.01, 0.05], [20, 0]);

  // Progress bar height based on scroll
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div 
      className={styles.scrollStatsContainer}
      style={{ opacity, y: yPosition }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Scroll Progress Indicator */}
      <div className={styles.progressIndicator}>
        <div className={styles.progressTrack}>
          <motion.div 
            className={styles.progressBar}
            style={{ height: progressHeight }}
          />
        </div>
        <div className={styles.progressLabel}>Scroll</div>
      </div>

      {/* Stats Counter */}
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>{projectCount}+</div>
          <div className={styles.statLabel}>Projects Built</div>
        </div>

        <div className={styles.statItem}>
          <div className={styles.statNumber}>{experienceYears}+</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>

        <div className={styles.statItem}>
          <div className={styles.statNumber}>∞</div>
          <div className={styles.statLabel}>Cups of Coffee</div>
          {/* <div className={styles.statSubtext}>({coffeeCount}+)</div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollStats;
