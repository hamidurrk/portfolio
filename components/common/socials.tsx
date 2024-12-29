import styles from "./Socials.module.scss"
import { EMAIL, MENULINKS, SOCIAL_LINKS } from "../../constants";
import Image from "next/image";
import Button, { ButtonTypes } from "./button";
import { useState, useEffect } from 'react';

const Socials = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    console.log('hoveredItem:', hoveredItem);
  }, [hoveredItem]);
  const descriptions = {
    LinkedIn: {
      title: "LinkedIn",
      content: "Let's get connected!",
      link: "https://www.linkedin.com/in/hamidurrk/",
    },
    GitHub: {
      title: "GitHub",
      content: "See my regular contributions and projects here.",
      link: "https://github.com/hamidurrk",
    },
    WhatsApp: {
      title: "WhatsApp",
      content: "Contact here for emergrcy purposes.",
      link: "https://wa.me/8801646442575",
    },
    X: {
      title: "X",
      content: "I'm not that active here by the way.",
      link: "https://x.com/hamidurrk",
    },
    Email: {
      title: "Gmail",
      content: "You can mail me at: hamidurrk@gmail.com",
      link: "mailto:hamidurrk@gmail.com",
    },
    Discord: {
      title: "Discord",
      content: "For virtual collaboration.",
      link: "https://wa.me/8801646442575",
    },
  };

  const handleHover = (item: keyof typeof descriptions) => {
    console.log('handleHover called with item:', item);
    setHoveredItem(descriptions[item]);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {Object.keys(descriptions).map((item : any) => (
          <a
            key={item}
            className={`link ${styles.tab} ${styles[item.toLowerCase()]}`}
            onMouseEnter={() => handleHover(item as keyof typeof descriptions)}
            onMouseLeave={handleMouseLeave}
            href={descriptions[item as keyof typeof descriptions].link} 
            rel="noreferrer" 
            target="_blank">
            <Image
              src={`/social/${item.toLowerCase()}.svg`}
              alt={`${item} Icon`}
              width={30}
              height={30}
            />
            </a>
        ))}
      </div>
      {hoveredItem && (
  <div className={`${styles.description} ${styles[hoveredItem.title.toLowerCase()]}`}>
    <h1>{hoveredItem.title}</h1>
    <p>{hoveredItem.content}</p>
  </div>
)}
    </div>
  );
};

export default Socials;
