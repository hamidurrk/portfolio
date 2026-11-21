import { MENULINKS } from "../../constants";
import styles from "./Styles.module.scss";
import Picture1 from "../../public/hero-parallax/hero_img_5.png";
import Picture2 from "../../public/hero-parallax/hero_img_6.png";
import Socials from "../common/socials";
import Expertise from "../common/expertise";
import AudioPlayer from "../common/Audio";
import ProjectEntry from "./project-entry";
import ScrollStats, { PHOTO_END_SCALE } from "./ScrollStats";
import { SignatureSvg } from "../common/signature";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, MutableRefObject, useState } from "react";
import { gsap, Linear } from "gsap";
import { scrollToId } from "../../utils/scroll";
import { isSmallScreen } from "pages";

// matter-js is ~80 kB; load it in its own chunk on the client only.
const PhysicsPage = dynamic(() => import("../common/physics"), { ssr: false });

const HeroParallax = () => {
  const container = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const [containerHeight, setContainerHeight] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const handleClick = () => scrollToId("skills");

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): GSAPTimeline => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.3, stagger: 0.3 },
        "<"
      );

    return revealTl;
  };

  useEffect(() => {
    initRevealAnimation(targetSection);
  }, [targetSection]);

  useEffect(() => {
    if (textContainerRef.current) {
      const width = textContainerRef.current.offsetWidth;
      const height = textContainerRef.current.offsetHeight;
      // console.log(`Width: ${width}px, Height: ${height}px`);
      setContainerWidth(width);
      setContainerHeight(height);
    }
  }, []);

  useEffect(() => {
    if (containerWidth !== null && containerHeight !== null) {
      setIsInitialized(true);
    }
  }, [containerWidth, containerHeight]);

  // Photo card ends as a framed card (~69% of the viewport), not full screen.
  const scalePhoto = useTransform(scrollYProgress, [0, 1], [1, PHOTO_END_SCALE]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const items = [
    {
      // 1
      content: (
        <div className={`seq ${styles.imageContainer}`}>
          <Image src={isSmallScreen() ?Picture2 : Picture1} layout="fill" alt="image" placeholder="blur" priority />
          <div className="w-full fixed top-0 py-20 lg:py-4 z-49 bg-gradient-to-b from-black to-transparent"></div>
          <ScrollStats scrollYProgress={scrollYProgress} />
        </div>
      ),
      scale: scalePhoto,
    },
    {
      // 2
      content: (
        <div className={`seq ${styles.textContainer}`}>
          <div className={`flex-col`}>
            {/* <div className={`font-normal text-6xl`}>
                    Hamidur
                    </div> */}
            <div className={styles.text}>
              I&apos;m a programmer based in Finland. Currently studying
              Computational Science & Artificial Intelligence.
            </div>
            <div className={styles.svg}>
              {/* Hidden until the intro loader's signature flies onto it (Loader.tsx). */}
              <SignatureSvg
                className={styles.responsiveSvg}
                style={{ opacity: 0, color: "#FFFFFF" }}
                data-signature-target
              />
            </div>
          </div>
        </div>
      ),
      scale: scale5,
    }, // 3
    {
      content: (
        <div ref={textContainerRef} className={`seq ${styles.textContainer}`}>
          {isInitialized && (
            <>
              <div
                className={styles.sim}
                style={{ width: containerWidth - 10, height: containerHeight }}
              ></div>

              <PhysicsPage
                worldWidth={containerWidth - 10}
                worldHeight={containerHeight}
              />
            </>
          )}
          <div
            className={`flex-col ${styles.simText}`}
            style={{ width: "150px", height: "75px" }}
          >
            <p>My stack</p>
            <div 
            onClick={handleClick}
            className={`link ${styles.simLink} `}>
              More about my skills
            </div>
          </div>
        </div>
      ),
      scale: scale6,
    },
    {
      // 4
      content: (
        <div className={`seq ${styles.textContainer}`}>
          <ProjectEntry />
        </div>
      ),
      scale: scale5,
    },
    {
      // 5
      content: <div className={`seq ${styles.textContainer}`}>
        <AudioPlayer />
      </div>,
      scale: scale6,
    },
    {
      content: <div className={`seq ${styles.textContainer}`}>
        <Expertise />
      </div>,
      scale: scale8,
    },
    {
      // 7
      content: (
        <div className={`seq ${styles.textContainer}`}>
            <Socials />
        </div>
      ),
      scale: scale9,
    },
  ];

  const predefinedOrder = [0, 1, 5, 2]; 
  const reorderedItems = predefinedOrder.map(index => items[index]);

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section id={heroSectionRef} ref={targetSection}>
      <div
        ref={container}
        className={isSmallScreen() ? styles.containers : styles.container}
        style={{ pointerEvents: "auto" }}
      >
        {isSmallScreen() ? (
          <div className={styles.stickys}>
            {reorderedItems.map(({ content }, index) => {
              return (
                <motion.div key={index} className={styles.els}>
                  {content}
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className={styles.sticky}>
            {items.map(({ content, scale }, index) => {
              return (
                <motion.div key={index} style={{ scale }} className={styles.el}>
                  {content}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroParallax;
