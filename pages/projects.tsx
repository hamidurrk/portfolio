import { METADATA } from "../constants";
import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import { PROJECTS } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Layout from "@/components/common/layout";
import Header from "@/components/common/header";
import ProgressIndicator from "@/components/common/progress-indicator";
import Cursor from "@/components/common/cursor";
import ProjectsSection from "@/components/home/projects-slider";
import ProjectTile from "@/components/common/project-tile";
import Footer from "@/components/common/footer";
import TawkMessenger from "@/components/common/tawk-messenger";
import Sidebar from "@/components/common/sidebar";
import Loader from "@/components/common/Loader";
import Lenis from "@studio-freight/lenis";
import Button, { ButtonTypes } from "@/components/common/button";

const DEBOUNCE_TIME = 100;

export const isSmallScreen = (): boolean => document.body.clientWidth < 1024;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

export default function ProjectsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);
  const [ctrlPressed, setCtrlPressed] = useState<boolean>(false);

  const categoryProjects = {
    "All": PROJECTS.map((project) => project.name),
    "UI/UX": ["Awake Website", "PyWebIDE", "Portfolio Website", "Dynamic Quizzer"],
    "Machine Learning": ["Tethr"],
    "Robotics": ["Spectre Bot & Operating System", "3D Simulation of Dijkstra's Algorithm"],
    "Blockchain": ["Block Meter"],
    "Frontend": ["Awake Website", "PyWebIDE", "Portfolio Website", "Dynamic Quizzer"],
    "Backend": ["Block Meter", "Awake Website", "Tethr"],
    "Web Scraping": ["Social Media Scraper", "E-paper Scraper", "Friend Finder Bot - Facebook"],
    "IoT": ["Block Meter", "Assistive Device for Visually Impaired People"],
    "Electronics": ["EduKit", "Spectre Bot & Operating System", "Block Meter"],
    "Simulation & Game": ["3D Simulation of Dijkstra's Algorithm", "2D Pong Game"],
  };

  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setIsDesktop] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  // Refresh ScrollTrigger after loader completes
  useEffect(() => {
    if (!isLoading) {
      // Delay to ensure DOM is fully rendered and painted
      const timeoutId = setTimeout(() => {
        // Refresh all ScrollTrigger instances
        ScrollTrigger.refresh();
        // Dispatch resize event to trigger any size-dependent calculations
        window.dispatchEvent(new Event('resize'));
        // Force a small scroll and back to ensure scroll-based animations initialize
        window.scrollTo(0, 1);
        requestAnimationFrame(() => {
          window.scrollTo(0, 0);
        });
      }, 200);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  let timer: NodeJS.Timeout = null;

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

  const handleLoadComplete = () => {
    setIsLoading(false);
    // Force scroll to top when loader completes
    window.scrollTo(0, 0);
  };

  if (isDesktop === null) {
    return null;
  } else {
    // console.log("Desktop not null: ", isDesktop);
    if (!isDesktop) {
      document.documentElement.style.overflowX = "hidden";
    }

    const renderSectionTitle = (): React.ReactNode => (
      <div className={`flex flex-col inner-container`}>
        <p className="section-title-sm seq">PROJECTS</p>
        <div className="flex justify-between h-full w-[90vw] md:w-auto">
          <h1 className="section-heading seq mt-2 pb-2">All Projects</h1>
        </div>
        <h2 className="text-2xl md:max-w-3xl w-full seq max-w-sm mt-2">
          I have contributed in projects ranging from Frontend & Backend
          development, Embedded Systems & Automation, Robotics, Machine
          Learning, and Blockchain
        </h2>
      </div>
    );

    //   const renderProjectTiles = (): React.ReactNode =>
    //     PROJECTS.map((project) => (
    //       <ProjectTile
    //         project={project}
    //         key={project.name}
    //         animationEnabled={true}
    //       ></ProjectTile>
    //     ));

    const handleCategoryToggle = (category: string, event: React.MouseEvent) => {
      if (category === 'All') {
          setSelectedCategories(['All']);
      } else {
          setSelectedCategories((prevCategories) => {
              if (event.ctrlKey) {
                  setCtrlPressed(true);
                  if (prevCategories.includes(category)) {
                      const newCategories = prevCategories.filter((cat) => cat !== category);
                      return newCategories.length === 0 ? ['All'] : newCategories;
                  } else {
                      return prevCategories.filter((cat) => cat !== 'All').concat(category);
                  }
              } else {
                  return [category];
              }
          });
      }
  };

  const filteredProjectNames =
    selectedCategories.length === 0
      ? PROJECTS.map((project) => project.name)
      : Object.keys(categoryProjects)
          .filter((category) => selectedCategories.includes(category))
          .reduce((acc, category) => {
            acc.push(...(categoryProjects as any)[category]);
            return acc;
          }, [] as string[]);

  const filteredProjects = PROJECTS.filter((project) =>
    filteredProjectNames.includes(project.name)
  );
    const renderProjectTiles = (): React.ReactNode =>
      filteredProjects.map((project) => (
        <ProjectTile
          project={project}
          key={project.name}
          animationEnabled={true}
        ></ProjectTile>
      ));

    return (
      <>
        <Head>
          <title>{METADATA.title}</title>
          <style>
            @import
            url(&apos;https://fonts.googleapis.com/css2?family=Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap&apos;);
          </style>
        </Head>
        {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
        {!isLoading && <Layout>
            <Header />
            <ProgressIndicator />
            <Cursor isDesktop={isDesktop} />
            <main className="flex-col flex">
              {renderBackdrop()}
              {isSmallScreen() ? <Sidebar /> : null}
              <section className="w-full relative select-none section-container flex-col flex py-8 justify-center mt-20">
                {renderSectionTitle()}
                <div className="flex flex-col justify-center w-[90vw] md:w-[60vw] m-auto">
                    <div className="flex flex-wrap justify-center mb-6 mt-6">
                    {Object.keys(categoryProjects).map((category) => (
                        <Button
                        key={category}
                        type={ButtonTypes.FILTER}
                        name={category}
                        classes={`link px-4 py-2 rounded m-2 ${
                            selectedCategories.includes(category)
                            ? "bg-[#BF1E2E]"
                            : ""
                        }`}
                        onClick={(e) => handleCategoryToggle(category, e)}
                        ></Button>
                    ))}
                    </div>
                    {isDesktop && <p 
                      className="text-lg text-[#BF1E2E] text-center tracking-wide"
                      style={{ display: ctrlPressed ? 'none' : 'block',
                                transform: 'translateY(-10px)'
                       }}
                      >
                        Hold CTRL to select multiple categories
                    </p>}
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 project-wrapper w-full">
                  {renderProjectTiles()}
                </div>
              </section>
              {/* <ProjectsSection isDesktop={true} /> */}
              {/* <Footer /> */}
            </main>
            <TawkMessenger />
          </Layout>}
      </>
    );
  }
}
