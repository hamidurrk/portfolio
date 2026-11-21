import styles from "./Cursor.module.scss";
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { IDesktop, isSmallScreen } from "pages";

const CURSOR_STYLES = {
  CURSOR: "fixed hidden bg-white w-4 h-4 select-none pointer-events-none z-50",
  FOLLOWER: "fixed hidden h-8 w-8 select-none pointer-events-none z-50",
};

const Cursor = ({ isDesktop }: IDesktop) => {
  const cursor: MutableRefObject<HTMLDivElement> = useRef(null);
  const follower: MutableRefObject<HTMLDivElement> = useRef(null);

  const onHover = () => {
    gsap.to(cursor.current, {
      scale: 0.5,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 3,
      duration: 0.3,
    });
  };

  const onUnhover = () => {
    gsap.to(cursor.current, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  const moveCircle = (e: MouseEvent) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: Linear.easeNone,
      overwrite: "auto", // replace only the previous x/y tween, keep hover scale
    });
    gsap.to(follower.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: Linear.easeNone,
      overwrite: "auto", // replace only the previous x/y tween, keep hover scale
    });
  };

  const initCursorAnimation = () => {
    follower.current.classList.remove("hidden");
    cursor.current.classList.remove("hidden");

    document.addEventListener("mousemove", moveCircle);
    // One delegated listener pair covers every `.link`, including ones rendered later.
    document.addEventListener("mouseover", onPointerOver);
    document.addEventListener("mouseout", onPointerOut);
  };

  // Currently hovered `.link`, so moving between its children doesn't re-trigger.
  const hoveredLink = useRef<Element | null>(null);

  const onPointerOver = (e: MouseEvent) => {
    const link = (e.target as Element).closest?.(".link");
    if (link && link !== hoveredLink.current) {
      hoveredLink.current = link;
      onHover();
    }
  };

  const onPointerOut = (e: MouseEvent) => {
    if (!hoveredLink.current) return;
    const next = e.relatedTarget as Element | null;
    if (!next || !hoveredLink.current.contains(next)) {
      const nextLink = next?.closest?.(".link") ?? null;
      hoveredLink.current = nextLink;
      if (!nextLink) onUnhover();
    }
  };

  useEffect(() => {
    if (!isDesktop) return;
    initCursorAnimation();
    return () => {
      document.removeEventListener("mousemove", moveCircle);
      document.removeEventListener("mouseover", onPointerOver);
      document.removeEventListener("mouseout", onPointerOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursor, follower, isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className={`${styles.cursor} ${CURSOR_STYLES.CURSOR}`}
      ></div>
      <div
        ref={follower}
        className={`${styles.cursorFollower} ${CURSOR_STYLES.FOLLOWER}`}
      ></div>
    </>
  );
};

export default Cursor;
