import styles from "./ProjectTile.module.scss";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import Modal from 'react-modal';
import { IProject } from "../../constants";
import Button, { ButtonTypes } from "../common/button";
import { isSmallScreen } from "pages";

const ProjectTile = ({
  project,
  animationEnabled,
  activeSlug,
  onOpenModal,
  onCloseModal,
}: {
  project: IProject;
  animationEnabled: boolean;
  activeSlug?: string;
  onOpenModal?: (slug: string) => void;
  onCloseModal?: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectCard: MutableRefObject<HTMLDivElement> = useRef(null);
  const {
    name,
    slug,
    tech,
    image,
    blurImage,
    description,
    details,
    url,
    github,
    embed,
    gradient: [stop1, stop2],
  } = project;

  useEffect(() => {
    VanillaTilt.init(projectCard.current, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      gyroscope: false,
    });
  }, [projectCard]);

  // Set app element for react-modal accessibility
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  // Open modal if activeSlug matches this project's slug (only when URL handling is enabled)
  useEffect(() => {
    if (onOpenModal && onCloseModal) {
      // URL-based modal control
      const shouldBeOpen = activeSlug === slug;
      if (shouldBeOpen !== isModalOpen) {
        setIsModalOpen(shouldBeOpen);
      }
    }
  }, [activeSlug, slug, isModalOpen, onOpenModal, onCloseModal]);

  const renderTechIcons = (techStack: string[]): React.ReactNode => (
    <div
      className={`
      ${styles.techIcons} w-1/2 h-full absolute left-24 top-0 flex items-center 
    `}
    >
      <div className="flex flex-col pb-14">
        {techStack.slice(0, 5).map((tech, i) => (
          <div className={`${i % 2 === 0 && "ml-14"} -mb-4 sm:mb-4`} key={tech}>
            <Image
              // src={`/projects/tech/${tech}.svg`}
              src={`/skills/${tech}.svg`}
              alt={tech}
              height={isSmallScreen ? 40 : 45}
              objectFit="contain"
              width={isSmallScreen ? 40 : 45}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderTechIconsSerially = (techStack: string[]): React.ReactNode => (
      <div className="flex pb-8 mt-4">
        {techStack.map((tech, i) => (
          <div className="mr-4" key={tech}>
            <Image
              // src={`/projects/tech/${tech}.svg`}
              src={`/skills/${tech}.svg`}
              alt={tech}
              height={40}
              objectFit="contain"
              width={40}
            />
          </div>
        ))}
      </div>
  );

  const renderDescription = (description: string): React.ReactNode => (
    <h2
      className={`z-10 tracking-wide font-medium ${
        description.length > 85 ? 'text-md md:text-lg' : 'text-lg'
      }`}
      style={{ transform: "translateZ(0.8rem)" }}
    >
      {description}
    </h2>
  );

  const renderProjectName = (name: string): React.ReactNode => (
    <h1
      className="text-2xl sm:text-3xl z-10 pl-2"
      style={{ transform: "translateZ(3rem)" }}
    >
      {name}
    </h1>
  );

  const renderTopBottomGradient = (gradient: string): React.ReactNode => (
    <>
      <div
        className="absolute top-0 left-0 w-full h-20"
        style={{
          background: `linear-gradient(180deg, ${gradient} 0%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-32"
        style={{
          background: `linear-gradient(0deg, ${gradient} 10%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
    </>
  );

  const renderProjectImage = (
    image: string,
    blurImage: string,
    name: string
  ): React.ReactNode => (
    <Image
      placeholder="blur"
      blurDataURL={blurImage}
      src={image}
      alt={name}
      layout="fill"
      className={`${styles.ProjectImg} z-0`}
    />
  );

  const openModal = () => {
    if (onOpenModal) {
      // URL-based modal: only update URL, let useEffect handle state
      onOpenModal(slug);
    } else {
      // Direct modal: update state directly
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    if (onCloseModal) {
      // URL-based modal: only update URL, let useEffect handle state
      onCloseModal();
    } else {
      // Direct modal: update state directly
      setIsModalOpen(false);
    }
  };

  return (
    <>
    <div
    onClick={openModal}
    className="link overflow-hidden rounded-3xl snap-start"
      style={{
        maxWidth: animationEnabled
          ? "calc(100vw - 2rem)"
          : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      
      <div
        ref={projectCard}
        className={`
          ${styles.ProjectTile}
           rounded-3xl relative p-6 flex-col flex justify-between max-w-full
        `}
        // style={{
        //   background: `linear-gradient(90deg, ${stop1} 0%, ${stop2} 100%)`,
        // }}
      >
        <Image
          src={image}
          alt="Project"
          layout="fill"
          loading="lazy"
          className="absolute w-full h-full top-0 left-0 opacity-40"
        />
        {/* {renderProjectImage(image, blurImage, name)} */}
        {/* {renderTopBottomGradient(stop1)} */}
        {renderProjectName(name)}
        {renderTechIcons(tech)}
        {renderDescription(description)}
      </div>
    </div>
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Project Details"
      className={styles.modalContent} 
      overlayClassName={styles.modalOverlay} 
    >
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <div className="flex lg:flex-row flex-col my-8 lg:justify-between">
          <div className="lg:overflow-y-auto ml-4 pr-4 lg:mx-4 w-full lg:w-1/2">
            <div className="flex flex-col items-start w-full mt-12"> 
              <h2>Description: </h2>
              <p className="text-left justify-left">{details}</p>
              
              {renderTechIconsSerially(tech)}
              <div className="flex flex-col">
                { github && <div className="flex items-center"> 
                <h2>View Code: </h2>
                <a
                  href={github}
                  className="link hover:opacity-80 duration-300 ml-4 md:mr-4 mr-2 mt-3 transform hover:scale-110"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image src={`/social/github.svg`} alt="github" width={35} height={35} />
                </a> 
                </div>
                }
                { url && <div className="flex items-center"> 
                <h2>Live Demo: </h2>
                <a
                  href={url}
                  className="link hover:opacity-80 duration-300 ml-4 md:mr-4 mr-2 mt-3 transform hover:scale-110"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image src={`/projects/demo.svg`} alt="demo" width={40} height={40} />
                </a> 
                </div>
                }
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8">
            { embed && <div className="w-full aspect-video"
              dangerouslySetInnerHTML={{ __html: embed }}>
              </div>
            }
          </div>
        </div>
        <div className="link flex seq justify-center">
        <Button
          onClick={closeModal}
          classes="link mr-3"
          type={ButtonTypes.OUTLINE}
          name="Close"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
        ></Button>
        </div>
      </div>
    </Modal>
    </>
  );
};

export default ProjectTile;
