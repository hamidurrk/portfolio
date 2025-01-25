import styles from "./Button.module.scss";
import PropTypes from "prop-types";
import React, { useState } from 'react';

export enum ButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINE = "outline",
  WHITE = "white",
  FILTER = "filter",
}

const Button = ({
  type,
  onClick = () => {},
  name,
  href,
  classes = "",
  otherProps,
}: {
  type: ButtonTypes;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  name: string;
  href?: string;
  classes?: string;
  otherProps?: Record<string, string>;
}) => {
  const buttonClasses =
    "py-2 px-7 font-medium rounded text-base md:text-xl tracking-wide link duration-300 flex items-center";
  const [spanStyle, setSpanStyle] = useState<{ top: string; left: string }>({ top: '0px', left: '0px' });

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const relX = e.pageX - rect.left;
    const relY = e.pageY - rect.top;
    setSpanStyle({ top: `${relY}px`, left: `${relX}px` });
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const relX = e.pageX - rect.left;
    const relY = e.pageY - rect.top;
    setSpanStyle({ top: `${relY}px`, left: `${relX}px` });
  };

  return type === ButtonTypes.FILTER ? (
    <button
      {...otherProps}
      onClick={onClick}
      className={`${getButtonTypeStyles(type)} ${buttonClasses} ${classes}`}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
    >
      {name}
      <span style={spanStyle}></span>
    </button>
  ) : (
    <a
      {...otherProps}
      onClick={(e) => onClick && onClick(e as React.MouseEvent<HTMLAnchorElement>)}
      href={href}
      className={`${getButtonTypeStyles(type)} ${buttonClasses} ${classes}`}
    >
      {name}
    </a>
  );
};

  function getButtonTypeStyles(type: ButtonTypes) {
    return type === ButtonTypes.PRIMARY
      ? styles.primary
      : type === ButtonTypes.SECONDARY
      ? styles.secondary
      : type === ButtonTypes.WHITE
      ? styles.white
      : type === ButtonTypes.OUTLINE
      ? styles.outline
      : type === ButtonTypes.FILTER
      ? styles.filter
      : styles.outline;
  }
;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  classes: PropTypes.string,
};

export default Button;
