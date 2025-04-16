import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import Button, { ButtonTypes } from "../common/button";
import styles from "./Interested.module.scss";
import TawkMessenger from "../common/tawk-messenger";


const Interested = React.memo(() => {
  const tawkMessengerRef = useRef(null);

  const openChat = () => {
    if (tawkMessengerRef.current) {
      tawkMessengerRef.current.maximize();
      // console.log(tawkMessengerRef.current);
    }
  };

  const renderContent = (): React.ReactNode => (
    <div className={styles.contentContainer}>
      {/* <h1>Interested in working together?</h1> */}
      <p>
        I&apos;d love to collaborate on research works and projects. 
      </p>
      <p>
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
          href="/resume.pdf"
        ></Button>
        <Button
          classes="ml-3 z-50 py-0 px-4 text-base md:text-sm"
          type={ButtonTypes.SECONDARY}
          name="Projects"
          // onClick={openChat}
          href="/projects"
        ></Button>
      </div>
    </div>
  );

  return (
    <div className={styles.interestedContainer}
    >
      <TawkMessenger ref={tawkMessengerRef} />
      {renderContent()}
      {renderButtons()}
    </div>
  );
});
Interested.displayName = "Interested";
export default Interested;
