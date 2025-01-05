import { useState, useEffect } from "react";
import Image from "next/image";
import Audio from "./Audio";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const tawkIframe = document.querySelector("iframe[title='chat widget']") as HTMLIFrameElement;
      // tawkIframe.style.transform = "translateY(20px)";
      if (tawkIframe) {
        tawkIframe.style.bottom = "0px";
        tawkIframe.style.maxWidth = "36px";
        tawkIframe.style.minWidth = "36px";
        tawkIframe.style.maxHeight = "36px";
        tawkIframe.style.minHeight = "36px";
        tawkIframe.style.marginBottom = "20px";
        tawkIframe.width = "36px";
        tawkIframe.height = "36px";
        const tawkDoc = tawkIframe.contentDocument || tawkIframe.contentWindow.document;
        if (tawkDoc) {
          const tawkStyle = tawkDoc.createElement("style");
          tawkStyle.innerHTML = `
            
            .tawk-min-container {
              transform: scale(0.6) !important; 
            }
          `;
          tawkDoc.head.appendChild(tawkStyle);
          // clearInterval(interval);
        }
      }
    }, 400);
  }, []);

  const handleToggle = () => {
    setSpinning(true);
    setTimeout(() => {
      setExpanded(!expanded);
      setSpinning(false);
    }, 200);
  };

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
      link: "hamidurrk@gmail.com",
    },
    Discord: {
      title: "Discord",
      content: "For virtual collaboration.",
      link: "https://wa.me/8801646442575",
    },
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
    <div className="fixed right-0 bottom-0 p-5 mb-12 z-50 flex flex-col items-center">
      <div className={`${styles.socials} ${expanded ? styles.expanded : ""}`}>
        {Object.keys(descriptions).map((item : any) => (
          <div
            key={item}
            className={`link my-2 ${styles[item.toLowerCase()]} ${styles.circle}`}
            onClick={() => handleClick(item)}
            >
            <Image
              src={`/social/${item.toLowerCase()}.svg`}
              alt={`${item} Icon`}
              width={item.toLowerCase() === "x" ? 20 : 25}
              height={item.toLowerCase() === "x" ? 20 : 25}
            />
            {copied && item.toLowerCase() === 'email' &&  (
              <div className={styles.copiedNotification}>Copied!</div>
            )}
            </div>
        ))}
      </div>
      <div className="socialButton flex justify-center items-center w-10 h-10 my-2">
        <div 
          onClick={handleToggle}
          className={`${spinning ? styles.spin : ""} w-full h-full`}
        >
          {expanded ? 
          <Image
          src={`/social/cross.svg`}
          alt={`Cancel`}
          width={40}
          height={40}
          />
          : 
          <div className="relative w-full h-full rounded-full">
          <div className="absolute inset-0 bg-black rounded-full opacity-50"></div>
          <Image
            src={`/social/connect.svg`}
            alt={`Socials`}
            width={40}
            height={40}
            className="relative z-10"
          />
        </div>
          
           }
        </div>
      </div>
      <div className="w-9 h-9 rounded-full bg-[#573217] flex justify-center items-center">
        <Audio />
      </div>
    </div>
  );
};

export default Sidebar;
