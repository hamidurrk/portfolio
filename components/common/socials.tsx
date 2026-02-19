import styles from "./Socials.module.scss"
import Image from "next/image";
import { useState } from 'react';

const Socials = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [copied, setCopied] = useState(false);

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
      content: "You can directly call me here.",
      link: "https://wa.me/8801646442575",
    },
    X: {
      title: "X",
      content: "I'm not that active here by the way.",
      link: "https://x.com/hamidurrk",
    },
    Email: {
      title: "Gmail",
      content: "You can mail me at: hamidurrk@gmail.com Click to copy",
      link: "hamidurrk@gmail.com",
    },
    Discord: {
      title: "Discord",
      content: "For casual meetings and collaborations.",
      link: "https://discord.com/users/416172992637173780",
    },
  };

  const handleHover = (item: keyof typeof descriptions) => {
    setHoveredItem(descriptions[item]);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClick = (item: keyof typeof descriptions) => {
    if (item.toLowerCase() === 'email') {
      navigator.clipboard.writeText(descriptions[item as keyof typeof descriptions].link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } else {
      window.open(descriptions[item as keyof typeof descriptions].link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {Object.keys(descriptions).map((item : any) => (
          <div
            key={item}
            className={`link ${styles.tab} ${styles[item.toLowerCase()]} ${
              hoveredItem?.title === descriptions[item as keyof typeof descriptions].title 
                ? styles.active 
                : ''
            }`}
            onMouseEnter={() => handleHover(item as keyof typeof descriptions)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(item)}
          >
            <Image
              src={`/social/${item.toLowerCase()}.svg`}
              alt={`${item} Icon`}
              width={30}
              height={30}
            />
            {copied && item.toLowerCase() === 'email' && hoveredItem && (
              <div className={styles.copiedNotification}>Copied!</div>
            )}
          </div>
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
