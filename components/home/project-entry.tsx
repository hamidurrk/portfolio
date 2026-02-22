import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { PROJECTS } from "../../constants";
import styles from "./ProjectEntry.module.scss";

const ProjectEntry: React.FC = () => {
  const router = useRouter();
  const [isZooming, setIsZooming] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0); // Persist scroll position

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.3; // Slow scrolling speed

    const scroll = () => {
      if (!isPaused) {
        scrollPositionRef.current += scrollSpeed;
        
        // Reset scroll position for seamless loop
        const maxScroll = scrollContainer.scrollHeight / 3;
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }
        
        scrollContainer.scrollTop = scrollPositionRef.current;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  const handleClick = () => {
    setIsZooming(true);
    
    // Wait for zoom animation to start, then navigate
    setTimeout(() => {
      router.push("/projects");
    }, 300);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className={`${styles.projectEntry} ${isZooming ? styles.zooming : ''}`}
      onClick={handleClick}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>View All →</p>
      </div>

      <div 
        ref={scrollRef}
        className={styles.scrollContainer}
      >
        <div className={styles.projectGrid}>
          {duplicatedProjects.map((project, index) => (
            <div 
              key={`${project.name}-${index}`}
              className={styles.projectCard}
              style={{
                background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.projectImage}>
                <Image 
                  src={project.image} 
                  alt={project.name}
                  width={640}
                  height={360}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectEntry;
