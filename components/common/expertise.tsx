import { useState, useEffect, useRef } from 'react';
import styles from './Expertise.module.scss'; 
import Ball from "./ball";
import { isSmallScreen } from 'pages';

// One tab per full ball bounce (Ball.module.scss: 0.7s, alternate => 1.4s).
const CYCLE_MS = 1400;

const Expertise = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  // Bumped on resume so the ball's bounce restarts in sync with the timer.
  const [resumeCount, setResumeCount] = useState(0);
  // Index (in `keys`) of the tab currently shown; -1 = none yet.
  const indexRef = useRef<number>(-1);

  const descriptions = {
    // LinkedIn: {
    //   title: "Full-Stack Development",
    //   content: "Doing contract based work for last 6 years. I specialize in modern frameworks, web animations, and SEO optimized UI/UX.",
    // },
    // WhatsApp: {
    //   title: "Blockchain Tech",
    //   content: "Invented a new billing technology in 2022 & won an International Silver Medal for sustainable consumption (SDG 12).",
    // },
    // X: {
    //   title: "Web Scraping",
    //   content: "Scraping commercial sites for 4 years. Using my tool for research with researchers from UniKassel & TU Dortmund, Germany.",
    // },
    // Email: {
    //   title: "Machine Learning & AI",
    //   content: "Acted as the natioanal coach for the Bangladesh team in WRO-2023, focusing on AI & ML. Team won an International Silver.",
    // },
    // Discord: {
    //   title: "Robotics & IoT",
    //   content: "Over the past 8 years, I have been involved in robotics. Won a Silver Medal in the National Robotics Olympiad in 2019.",
    // },
        LinkedIn: {
      title: "AI & ML Research",
      content: "Junior Research Assistant at LUT, building data-driven AI systems and data-protected AI solutions with Finnish companies.",
    },
    WhatsApp: {
      title: "Data Engineering & Analysis",
      content: "Built a unified census and survey data processing pipeline for Bangladesh Government's Statistics Bureau.",
    },
    X: {
      title: "Robotics & Embedded",
      content: "Involved in robotics for 8+ years. National coach for Bangladesh at WRO 2023, won an International Silver among 451 teams.",
    },
    Email: {
      title: "Blockchain Tech",
      content: "Won Silver at the International Blockchain Olympiad among 44 countries for building blockchain-based billing system.",
    },
    Discord: {
      title: "Software Development",
      content: "Building tools in Python, C++ and Java. Developed IDLE-Mod, a cross-platform Python editor used by 650+ students at LUT.",
    },
  };

  const colorMapping: { [key: string]: string } = {
    LinkedIn: "#301435",
    WhatsApp: "#ffea00",
    X: "#BF1E2E",
    Email: "#95f9c3",
    Discord: "#E71B73",
  };

  const ballColor: { [key: string]: string } = {
    LinkedIn: "#ffea00",
    WhatsApp: "#BF1E2E",
    X: "#7BCDEC",
    Email: "#E71B73",
    Discord: "#322782",
  };

  const fontColor: { [key: string]: string } = {
    LinkedIn: "#ffea00",
    WhatsApp: "#55185D",
    X: "#FFF101",
    Email: "#E71B73",
    Discord: "#FFF101",
  };

  const keys = Object.keys(descriptions);

  // The only timer: runs while not paused, cleared on pause/unmount.
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % keys.length;
      setHoveredItem(keys[indexRef.current]);
    }, CYCLE_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  const handleHover = (item: keyof typeof descriptions) => {
    indexRef.current = keys.indexOf(item);
    setHoveredItem(item);
    setIsPaused(true);
  };

  // Resume from the hovered tab: it stays one full cycle, then rotation continues.
  const handleMouseLeave = () => {
    setIsPaused(false);
    setResumeCount((n) => n + 1);
  };

  return (
    <div className={styles.container}>
      {isSmallScreen() && <h1 className={styles.title}>My Domains</h1>}
      <div className={styles.grid}>
        {Object.keys(descriptions).map((item) => (
          <div
            key={item}
            className={`link ${styles.tab} ${styles[item.toLowerCase()]}`}
            onMouseEnter={() => handleHover(item as keyof typeof descriptions)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor: hoveredItem === item ? colorMapping[item] : "black",
              transform: hoveredItem === item ? `scale(1.2)` : "scale(1)",
              color: hoveredItem === item ? fontColor[item] : "white",
            }}
          >
            <h1>{descriptions[item as keyof typeof descriptions].title}</h1>
          </div>
        ))}
      </div>
      {hoveredItem && (
        <div 
          className={`${styles.description}`}
          style={{
            backgroundColor: hoveredItem ? colorMapping[hoveredItem] : "black",
            transform: isSmallScreen() ? `translate(0px, 0px)` : `translate(0px, 0px) scale(0.97)`,
            color: hoveredItem ? colorMapping[hoveredItem] : "white",
          }}
          onMouseEnter={() => handleHover(hoveredItem as keyof typeof descriptions)}
          onMouseLeave={handleMouseLeave}
        >
          <p
            style={{
              color: hoveredItem ? fontColor[hoveredItem] : "white",
            }}>
              {descriptions[hoveredItem as keyof typeof descriptions].content}
              </p>
          <div className={styles.ballContainer}>
            <Ball
              key={resumeCount}
              backgroundColor={colorMapping[hoveredItem]}
              ballColor={ballColor[hoveredItem]} 
              isBouncing={!isPaused}
            />
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Expertise;