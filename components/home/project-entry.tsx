import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { PROJECTS } from "../../constants";
import { PROJECT_THUMBS } from "./project-thumbs";
import styles from "./ProjectEntry.module.scss";

const ProjectEntry: React.FC = () => {
  const router = useRouter();
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
    router.push("/projects");
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className={styles.projectEntry}
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
          {duplicatedProjects.map((project, index) => {
            // Tiny pre-generated WebP (see scripts/make-project-thumbs.js),
            // served directly (no optimizer round-trip) over an inline blur.
            const thumb = PROJECT_THUMBS[project.image];
            return (
              <div
                key={`${project.name}-${index}`}
                className={styles.projectCard}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={styles.projectImage}
                  style={thumb ? { backgroundImage: `url(${thumb.blur})` } : undefined}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumb ? thumb.src : project.image}
                    alt={project.name}
                    width={480}
                    height={270}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectEntry;
