import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import Button, { ButtonTypes } from "../common/button";
import styles from "./Interested.module.scss";

const Interested = React.memo(() => {
  const openChat = () => {
    const targetElement = document.querySelector(
      ".chaport-launcher-operator-photo"
    );

    if (targetElement) {
      (targetElement as HTMLElement).click();
    }
  };

  const renderContent = (): React.ReactNode => (
    <div className={styles.contentContainer}>
      <h1>Interested in working together?</h1>
      <p className="mt-2 md:text-xl">
        I'd love to collaborate on research works and ambitious projects. 
      </p>
      <p className="mt-2 md:text-sm">
        Feel free to reach out
      </p>
    </div>
  );

  const renderButtons = (): React.ReactNode => (
    <div className={styles.buttonContainer}>
      <div className="flex">
        <Button
          classes="mr-3 z-50 px-4 text-base md:text-sm"
          type={ButtonTypes.OUTLINE}
          name="Resume"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href="/Hamidur_Resume.pdf"
        ></Button>
        <Button
          classes="ml-3 z-50 py-0 px-4 text-base md:text-sm"
          type={ButtonTypes.SECONDARY}
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

  return (
    <div className={styles.interestedContainer}
    >
      {renderContent()}
      {renderButtons()}
    </div>
  );
});

export default Interested;
