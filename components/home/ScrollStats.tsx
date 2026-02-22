import React, { useEffect, useState } from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import styles from './ScrollStats.module.scss';

interface ScrollStatsProps {
  scrollYProgress: MotionValue<number>;
}

interface StatsValues {
  projectCount: number;
  experienceYears: number;
}

const ScrollStats: React.FC<ScrollStatsProps> = ({ scrollYProgress }) => {
  const [stats, setStats] = useState<StatsValues>({
    projectCount: 0,
    experienceYears: 0,
  });

  // Target values
  const targetProjects = 60;
  const targetYears = 8;
  const getNextStats = (latest: number): StatsValues => {
    if (latest >= 0.01 && latest <= 0.7) {
      const progress = (latest - 0.01) / 0.69;
      return {
        projectCount: Math.floor(targetProjects * progress),
        experienceYears: Math.floor(targetYears * progress),
      };
    }

    if (latest > 0.7) {
      return {
        projectCount: targetProjects,
        experienceYears: targetYears,
      };
    }

    return {
      projectCount: 0,
      experienceYears: 0,
    };
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const next = getNextStats(latest);

      setStats((current) => {
        if (
          current.projectCount === next.projectCount &&
          current.experienceYears === next.experienceYears
        ) {
          return current;
        }

        return next;
      });
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Fade in/out based on scroll progress - instant appearance with earlier start
  const opacity = useTransform(scrollYProgress, [0.01, 0.05, 0.98], [0, 1, 1]);
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
          <div className={styles.statNumber}>{stats.projectCount}+</div>
          <div className={styles.statLabel}>Projects Built</div>
        </div>

        <div className={styles.statItem}>
          <div className={styles.statNumber}>{stats.experienceYears}+</div>
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
