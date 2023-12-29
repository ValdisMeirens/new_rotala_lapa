import classes from "./MobileGalleryHeader.module.css";
import Image from "next/image";
const MobileGalleryHeader = (props) => {
  return (
    <div className={classes.container}>
      <Image
        src={props.backgroundImage}
        alt={props.backgroundImageText}
        className={classes.backgroundImage}
        width={600}
        height={600}
        sizes="75vw"
      />
      <div className={classes.imageTextContainer}>
        <h3 className={classes.title}>{props.imageText}</h3>
      </div>
    </div>
  );
};

export default MobileGalleryHeader;
