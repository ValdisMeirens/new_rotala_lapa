import Image from "next/image";
import classes from "./MobileSocialNetwork.module.css";
import { useState } from "react";

const MobileSocialNetwork = (props) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={classes.imageContainer}
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
};

export default MobileSocialNetwork;
