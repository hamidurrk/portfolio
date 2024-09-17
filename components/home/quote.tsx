import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const QuoteSection = () => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const [willChange, setWillChange] = useState(false);

  const initQuoteAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement>,
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const textStrongElements = gsap.utils.toArray(
      quoteRef.current.querySelectorAll(".text-strong")
    );

    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(textStrongElements, {
        backgroundPositionX: "100%",
        duration: 1,
        stagger: 0.2, // Add stagger to animate each element with a delay
      });

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setWillChange(self.isActive),
    });
  };

  useEffect(() => {
    const quoteAnimationRef = initQuoteAnimation(quoteRef, targetSection);

    return quoteAnimationRef.kill;
  }, [quoteRef, targetSection]);

  const renderQuote = (): React.ReactNode => (
    <div className="tall:py-40 py-48 section-container">
      <h1
        ref={quoteRef}
        className={`font-medium text-4xl md:text-5xl text-center ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        A student of
        <span className="text-3xl md:text-4xl"><br />Computational Engineering & Artificial Intelligence</span>
        {" "}
        <span className="text-strong font-bold"><br />intelligent robots</span>,{" "}
        <span className="text-strong font-bold"><br />machine learning</span>,{" "}
        <span className="text-strong font-bold">blockchain</span>, and{" "}
        <span className="text-strong font-bold"><br />dynamic web solutions</span>.
      </h1>
    </div>
  );

  return (
    <section className="w-full relative select-none" ref={targetSection}>
      {renderQuote()}
    </section>
  );
};

export default QuoteSection;
