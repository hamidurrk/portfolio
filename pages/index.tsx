import { METADATA } from "../constants";
import Head from "next/head";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Layout from "@/components/common/layout";
import Header from "@/components/common/header";
import ProgressIndicator from "@/components/common/progress-indicator";
import Cursor from "@/components/common/cursor";
import HeroParallax from "@/components/home/hero-parallax";
import ProjectsSection from "@/components/home/projects-slider";
import SkillsSection from "@/components/home/skills";
import QuoteSection from "@/components/home/quote";
import Sidebar from "@/components/common/sidebar";
import Loader from "@/components/common/Loader";

import TimelineSection from "@/components/home/timeline";
import AboutSection from "@/components/home/about";
import Footer from "@/components/common/footer";

// Third-party chat widget: own chunk, mounted when the browser is idle.
const TawkMessenger = dynamic(() => import("@/components/common/tawk-messenger"), {
  ssr: false,
});

const DEBOUNCE_TIME = 100;

export const isSmallScreen = (): boolean => document.body.clientWidth < 1024;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
}

const detectDesktop = (): boolean =>
  typeof window.orientation === "undefined" &&
  navigator.userAgent.indexOf("IEMobile") === -1;

export default function Home() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Detect device on the client; content mounts right away (behind the loader)
  // so its images start downloading while the loader is visible.
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    setIsDesktop(detectDesktop());

    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setIsDesktop(detectDesktop()), DEBOUNCE_TIME);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (isDesktop === false) {
      document.documentElement.style.overflowX = "hidden";
    }
  }, [isDesktop]);

  // Lock scrolling while the loader covers the page.
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
  }, [isLoading]);

  // Recalculate scroll-driven animations once the loader is gone.
  useEffect(() => {
    if (isLoading) return;
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
      // Some sections size themselves on resize; nudge scroll so
      // scroll-driven animations initialise.
      window.dispatchEvent(new Event("resize"));
      window.scrollTo(0, 1);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
    window.scrollTo(0, 0);
  }, []);

  const renderBackdrop = (): React.ReactNode => (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black -z-1"></div>
  );

  const renderGap = (): React.ReactNode => (
    <div style={{ height: "35vh" }}></div>
  );

  const ready = isDesktop !== null;

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>
      <Layout>
        {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
        {ready && (
          <>
            <Header />
            <ProgressIndicator />
            <Cursor isDesktop={isDesktop} />
            <main className="flex-col flex">
              {renderBackdrop()}
              <HeroParallax />
              {isSmallScreen() ? <Sidebar /> : null}
              <ProjectsSection isDesktop={true} />
              <SkillsSection />
              <QuoteSection />
              <TimelineSection isDesktop={isDesktop} />
              {isDesktop ? null : renderGap()}
              <AboutSection />
              <Footer />
            </main>
            <TawkMessenger />
          </>
        )}
      </Layout>
    </>
  );
}
