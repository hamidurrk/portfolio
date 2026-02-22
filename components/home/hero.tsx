import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import Button, { ButtonTypes } from "../common/button";
import HeroImage from "./hero-image";
import styles from "./Hero.module.scss"

const HERO_STYLES = {
  SECTION:
    "w-full flex items-center py-8 section-container min-h-screen relative mb-24 bg-gradient-to-t from-black to-transparent lg:from-transparent to-transparent overflow-hidden",
  CONTENT: "font-medium flex flex-col justify-end h-full pt-32 md:pt-32 select-none absolute bottom-36 sm:bottom-24 lg:relative lg:w-[40vw] cs2:w-auto",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER:
    "absolute right-0 lg:mr-20 -z-1 w-full scale-[2] lg:scale-100 flex justify-center lg:justify-end lg:items-center",
  TYPED_SPAN: "text-xl sm:text-2xl lg:text-3xl cs2:text-3xl seq",
};

const HeroSection = React.memo(() => {
  const typedSpanElement: MutableRefObject<HTMLSpanElement | null> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const initTypeAnimation = (
    typedSpanElement: MutableRefObject<HTMLSpanElement>
  ): () => void => {
    if (typedSpanElement.current) {
      const typed = new Typed(typedSpanElement.current, {
        strings: TYPED_STRINGS,
        typeSpeed: 15,
        backSpeed: 10,
        backDelay: 1300,
      });

      return () => {
        typed.destroy();
      };
    }
  };

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): GSAPTimeline => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

    return revealTl;
  };

  useEffect(() => {
    const typed = initTypeAnimation(typedSpanElement);
    initRevealAnimation(targetSection);

  }, [typedSpanElement, targetSection]);

  const renderBackgroundImage = (): React.ReactNode => (
    <div className={HERO_STYLES.BG_WRAPPER} style={{ maxHeight: "650px" }}>
      <HeroImage />
    </div>
  );

  const renderSocialLinks = (): React.ReactNode =>
    Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className={HERO_STYLES.SOCIAL_LINK}
        rel="noreferrer"
        target="_blank"
      >
        <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
      </a>
    )
  );

    const openChat = () => {
      const targetElement = document.querySelector('.chaport-launcher-operator-photo');
      
      if (targetElement) {
        (targetElement as HTMLElement).click();
      }
    };
    
  const renderHeroContent = (): React.ReactNode => (
    <div className={HERO_STYLES.CONTENT}>
      <div className="md:mb-4 mb-2">
        <h2 className="text-4xl seq">I am</h2>
        <h1 className="section-heading seq mt-2">Md Hamidur Rahman Khan</h1>
      </div>
      <p className="mb-4">
        <span className={HERO_STYLES.TYPED_SPAN} ref={typedSpanElement}></span>
      </p>
      <div className="flex seq mb-5">{renderSocialLinks()}
      <a href={`mailto:${EMAIL}`} className={`${styles.emailBox}`} 
        rel="noreferrer"
        target="_blank">
        <Image className={`${styles.emailSvg} link`} src={`/social/email.svg`} alt="Email" width={40} height={40} />
        <div className={styles.content}>
          hamidurrk@gmail.com
        </div>
      </a>
    </div>
      <div className="flex seq">
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="Resume"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href="/resume.pdf"
        ></Button>
        <Button
          classes="ml-3"
          type={ButtonTypes.PRIMARY}
          name="Let's Talk"
          onClick={openChat}
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
        ></Button>
      </div>
    </div>
  );

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className={HERO_STYLES.SECTION}
      id={heroSectionRef}
      ref={targetSection}
      style={{ opacity: 0 }}
    >
      {renderHeroContent()}
      {renderBackgroundImage()}
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
