import Image from "next/image";
import classes from "./DesktopFollowUsSocial.module.css";
import { useState } from "react";
import Link from "next/link";

const DesktopFollowUsSocial = (props) => {
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
        <Link href={props.url} target="_blank" rel="noreferrer">
          <Image
            src={props.srcwhite}
            alt={props.alt}
            className={classes.image}
            sizes="10vw"
            quality={10}
          />
        </Link>
      ) : (
        <Link href={props.url} target="_blank" rel="noreferrer">
          <Image
            src={props.src}
            alt={props.alt}
            className={classes.image}
            sizes="10vw"
            quality={10}
          />
        </Link>
      )}
    </div>
  );
};

export default DesktopFollowUsSocial;
