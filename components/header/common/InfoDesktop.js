import classes from "./InfoDesktop.module.css";
import Image from "next/image";
const InfoDesktop = (props) => {
  return (
    <div className={classes.container}>
      <Image
        src={props.backgroundImage}
        alt={props.backgroundImageText}
        className={classes.backgroundImage}
        // quality={50}
        sizes="100vw"
      />
      <div className={classes.imageTextContainer}>
        <div className={classes.text}>{props.text}</div>
        {/* <Image
          src={props.image}
          alt={props.imageText}
          className={classes.imageText}
          quality={50}
          sizes="100vw"
        /> */}
      </div>
    </div>
  );
};

export default InfoDesktop;
