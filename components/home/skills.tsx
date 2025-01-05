import { MENULINKS, SKILLS } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none pt-40 mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "section-title-sm mb-4 seq",
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0.1, duration: 0.5, stagger: 0.9 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "300px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return revealAnimationRef.kill;
  }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="section-title-sm seq">SKILLS</p>
      <h1 className="section-heading seq mt-2">My Skills</h1>
      <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
        For past 8 years, I have developed skills in various 
        domains of technology through various projects.{" "}
      </h2>
    </div>
  );

  const renderBackgroundPattern = (): React.ReactNode => (
    <>
      <div className="absolute right-0 top-96 w-1/5 max-w-xs md:flex hidden justify-end">
        <Image
          src="/pattern-r.svg"
          loading="lazy"
          height={700}
          width={320}
          alt="pattern"
        />
      </div>
      <div className="absolute left-0 top-64 w-1/12 max-w-xs md:block hidden">
        <Image
          src="/pattern-l.svg"
          loading="lazy"
          height={335}
          width={140}
          alt="pattern"
        />
      </div>
    </>
  );

  const renderSkillColumn = (
    title: string,
    skills: string[]
  ): React.ReactNode => (
    <>
      <h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
      <div
        className={`flex flex-wrap seq ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        {skills.map((skill) => (
          <Image
            key={skill}
            src={`/skills/${skill}.svg`}
            alt={skill}
            width={76}
            height={76}
            className="skill"
          />
        ))}
      </div>
    </>
  );

  return (
    <section className="relative ">
      {renderBackgroundPattern()}
      <div className={SKILL_STYLES.SECTION}
        id={MENULINKS[2].ref}
        ref={targetSection}
      >
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          <div className="mt-10 seq">
            {renderSkillColumn("LANGUAGES", SKILLS.languages)}
          </div>

          <div className="flex flex-wrap mt-10">
            <div className="mr-6 mb-6 seq">
              {renderSkillColumn(
                "Frontend Development",
                SKILLS.frontend
              )}
            </div>
            <div className="mr-6 seq">
              {renderSkillColumn(
                "Backend Development", 
                SKILLS.backend
                )}
            </div>
            <div className="mr-6 mb-6">
              {renderSkillColumn(
                "Web Scraping",
                SKILLS.webscraping
              )}
            </div>
            <div>
              {renderSkillColumn(
                "Blockchain Technology", 
                SKILLS.blockchain
                )}
            </div>
          </div>

          <div className="flex flex-wrap mt-10">
            <div className="mr-6 mb-6">
              {renderSkillColumn(
                "Robotics, IoT & Embedded systems",
                SKILLS.roboticsIotEmbedded
              )}
            </div>
            <div className="mr-6 mb-6">
              {renderSkillColumn(
                "Machine Learning & Statistics",
                SKILLS.statistics
              )}
            </div>
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-6">
              {renderSkillColumn(
                "Database Experiences", 
                SKILLS.database
                )}
            </div>
            {/* <div>
              {renderSkillColumn(
                "Cloud Hosting", 
                SKILLS.hosting
                )}
            </div> */}
            <div className="mr-6">
              {renderSkillColumn(
                "Desktop App Development", 
                SKILLS.desktopApp
                )}
            </div>
            <div>
              {renderSkillColumn(
                "Graphics Designing, Video Editing", 
                SKILLS.gfxdesign
                )}
            </div>
          </div>

          {/* <div className="flex flex-wrap mt-10">
            <div className="mr-6 mb-6">
              {renderSkillColumn(
                "Machine Learning & Statistics",
                SKILLS.statistics
              )}
            </div>
          </div>

          <div className="flex flex-wrap mt-10">
            <div className="mr-6 mb-6">
              {renderSkillColumn(
                "3D Modeling, PCB Designing",
                SKILLS.threedgfx
              )}
            </div>
            <div>
              {renderSkillColumn(
                "Others", 
                SKILLS.other
                )}
            </div>
          </div> */}
          
        </div>
        </div>
    </section>
  );
};

export default SkillsSection;
