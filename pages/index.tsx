import { METADATA } from "../constants";
import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Layout from "@/components/common/layout";
import Header from "@/components/common/header";
import ProgressIndicator from "@/components/common/progress-indicator";
import Cursor from "@/components/common/cursor";
import HeroParallax from "@/components/home/hero-parallax";
import HeroSection from "@/components/home/hero";
import ProjectsSection from "@/components/home/projects";
import QuoteSection from "@/components/home/quote";
import Interested from "@/components/common/Interested";
import SkillsSection from "@/components/home/skills";
import CollaborationSection from "@/components/home/collaboration";
import Footer from "@/components/common/footer";
import TimelineSection from "@/components/home/timeline";
import TawkMessenger from "@/components/common/tawk-messenger";
import Sidebar from "@/components/common/sidebar";
import AboutSection from "@/components/home/about";
import Lenis from "@studio-freight/lenis";

const DEBOUNCE_TIME = 100;

export const isSmallScreen = (): boolean => document.body.clientWidth < 1024;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setIsDesktop] = useState(null);

  const lenisRef = useRef<Lenis | null>(null);
  
  useEffect(() => {
    const lenis = new Lenis({
      // duration: 2, 
      // easing: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1, 
    });
    lenisRef.current = lenis;
    
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);
  
  let timer: NodeJS.Timeout = null;
  
  // const debouncedDimensionCalculator = () => {
  //   if (timer) {
  //     clearTimeout(timer);
  //   }
  //   timer = setTimeout(() => {
  //     const isDesktopResult = (window.innerWidth / window.innerHeight) > 1.4699;
  //     window.history.scrollRestoration = "manual";
  //     setIsDesktop(isDesktopResult);
      
  //   }, DEBOUNCE_TIME);
  // };

  const debouncedDimensionCalculator = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setIsDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  };
  
  useEffect(() => {
    debouncedDimensionCalculator();

    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, [timer]);

  const renderBackdrop = (): React.ReactNode => (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black -z-1"></div>
  );

  const renderGap = (): React.ReactNode => (
    <div style={{ height: "35vh" }}></div>
  );
  
  const renderHero = (): React.ReactNode => {
    if (!isDesktop) {
      // return <HeroSection />;
    }
    return <HeroParallax />;
  };
  if (isDesktop === null) {
    return null; // or a loading spinner, etc.
  } else {
    // console.log("Desktop not null: ", isDesktop);
    if (!isDesktop) {
      document.documentElement.style.overflowX = 'hidden';
    }

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
        <style>
        @import url(&apos;https://fonts.googleapis.com/css2?family=Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap&apos;);
        </style>
      </Head>
      {<Layout>
        <Header />
        <ProgressIndicator />
        <Cursor isDesktop={isDesktop} />
        <main className="flex-col flex">
          {renderBackdrop()}
          {renderHero()}
          { isSmallScreen() ? <Sidebar /> : null }
          {/* <HeroParallax /> */}
          {/* <HeroSection /> */}
          <ProjectsSection isDesktop={true} />
          { isSmallScreen() ? <Interested /> : null }
          <SkillsSection />
          <QuoteSection />
          {/* <CollaborationSection /> */}
          <TimelineSection isDesktop={isDesktop} />
          {isDesktop ? null : renderGap()}
          <AboutSection />
          <Footer />
        </main>
        <TawkMessenger />
      </Layout>}
    </>
  );
}
}
