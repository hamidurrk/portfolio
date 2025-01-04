import { MENULINKS } from "../../constants";
import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import styles from "./Footer.module.scss";
import Button, { ButtonTypes } from "./button";
import { isSmallScreen } from "pages";
import TawkMessenger from "../common/tawk-messenger";

const Footer = () => {
  const tawkMessengerRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(1440);
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
  
  useEffect(() => {
    const updateWidth = () => {
      setImageWidth(window.innerWidth);
    };

    updateWidth(); // Set initial width
    window.addEventListener('resize', updateWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);
  const renderSocialIcons = (): React.ReactNode => {
    return Object.keys(descriptions).map((item : any) => (
      <a
        key={item}
        className={`link mx-1 ${styles[item.toLowerCase()]} ${styles.circle} ${styles.outline}`}
        href={descriptions[item as keyof typeof descriptions].link} 
        rel="noreferrer" 
        target="_blank">
        <Image
          src={`/social/${item.toLowerCase()}.svg`}
          alt={`${item} Icon`}
          width={25}
          height={25}
        />
        </a>
    ))
  };

  const openChat = () => {
    if (tawkMessengerRef.current) {
      tawkMessengerRef.current.maximize();
      // console.log(tawkMessengerRef.current);
    }
  };

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-medium text-3xl md:text-4xl text-center">
        Connect with me
      </h1>
      <div className="flex mt-8">{!isSmallScreen() && renderSocialIcons()}</div>
      <div className="flex mt-8">
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="Resume"
          href="/Hamidur_Resume.pdf"
        ></Button>
        <Button
          classes="ml-3"
          type={ButtonTypes.WHITE}
          name="Let's Talk"
          onClick={openChat}
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
        ></Button>
      </div>
      <h2 className="text-center text-sm sm:text-base mt-8 w-4/5">
        Designed and Developed{isSmallScreen() && <br/>} by Md Hamidur Rahman Khan
      </h2>
    </>
  );

  const { ref: footerRef } = MENULINKS[4];

  return (
    <footer
      className="w-full relative select-none bg-cover flex flex-col items-stretch"
      id={footerRef}
    >
      <img
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        role="presentation"
        width={imageWidth}
      />
      <TawkMessenger ref={tawkMessengerRef} />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-12">
          {renderFooterContent()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
