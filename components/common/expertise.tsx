import { useState, useEffect, useRef } from 'react';
import styles from './Expertise.module.scss'; 
import Ball from "./ball";

const Expertise = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isBouncing, setIsBouncing] = useState<boolean>(true);
  const [animDelay, setAnimDelay] = useState<number>(1400);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const remainingTimeRef = useRef<number>(1400);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    console.log('hoveredItem:', hoveredItem);
  }, [hoveredItem]);

  const handleMouseLeave = () => {
    setIsBouncing(true); // Resume animation
    setAnimDelay(remainingTimeRef.current);
    startTimeRef.current = Date.now();
    setAnimationKey((prevKey) => prevKey + 1);

    const keys = Object.keys(descriptions);
    let index = keys.indexOf(hoveredItem as string);

    intervalRef.current = setInterval(() => {
      setHoveredItem(keys[index]);
      index = (index + 1) % keys.length;
      setIsBouncing(true);
    }, animDelay);
  };

  useEffect(() => {
    if (isBouncing) {
      startTimeRef.current = Date.now();
      const timeoutId = setTimeout(() => {
        setAnimDelay(1400); // Reset to 1000ms after the remaining time
      }, remainingTimeRef.current);

      return () => clearTimeout(timeoutId);
    }
  }, [isBouncing]);

  const descriptions = {
    LinkedIn: {
      title: "Full-Stack Development",
      content: "Let's get connected!",
    },
    WhatsApp: {
      title: "Blockchain Tech",
      content: "Contact here for emergency purposes.",
    },
    X: {
      title: "Web Scraping & Data Analysis",
      content: "I'm not that active here by the way.",
    },
    Email: {
      title: "Software Development",
      content: "You can mail me at: hamidurrk@gmail.com",
    },
    Discord: {
      title: "Embedded Systems",
      content: "For virtual collabs.",
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

  useEffect(() => {
    const keys = Object.keys(descriptions);
    let index = 0;

    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setHoveredItem(keys[index]);
        setIsBouncing(true);
        index = (index + 1) % keys.length;
      }, animDelay);
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [animDelay]);

  const handleHover = (item: keyof typeof descriptions) => {
    console.log('handleHover called with item:', item);
    setHoveredItem(item);
    setIsBouncing(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div className={styles.container} key={animationKey}>
      <div className={styles.grid}>
        {Object.keys(descriptions).map((item) => (
          <div
            key={item}
            className={`link ${styles.tab} ${styles[item.toLowerCase()]}`}
            onMouseEnter={() => handleHover(item as keyof typeof descriptions)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor: hoveredItem === item ? colorMapping[item] : "black",
              transform: hoveredItem === item ? `translate(0px, 0px) scale(1.05)` : "",
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
            transform: `translate(0px, 0px) scale(0.97)`,
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
              backgroundColor={colorMapping[hoveredItem]}
              ballColor={ballColor[hoveredItem]} 
              isBouncing={isBouncing}
            />
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Expertise;