import React from "react";
import { useState } from "react";
import classes from "./DesktopNewSocialNetwork.module.css";
import Image from "next/image";

function DesktopNewSocialNetwork(props) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={classes.socialcontainer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovering ? (
        <a href={props.url} target="_blank" rel="noreferrer">
          <Image
            src={props.srcwhite}
            alt={props.alt}
            className={classes.image}
            sizes="10vw"
            quality={10}
          />
        </a>
      ) : (
        <a href={props.url} target="_blank" rel="noreferrer">
          <Image
            src={props.src}
            alt={props.alt}
            className={classes.image}
            sizes="10vw"
            quality={10}
          />
        </a>
      )}
    </div>
  );
}

export default DesktopNewSocialNetwork;
