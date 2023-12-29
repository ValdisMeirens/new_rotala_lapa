import classes from "./InfoMobile.module.css";
import Image from "next/image";
const InfoMobile = (props) => {
  return (
    <div className={classes.container}>
      <Image
        src={props.backgroundImage}
        alt={props.backgroundImageText}
        className={classes.backgroundImage}
        quality={50}
        sizes="75vw"
      />
      <div className={classes.imageTextContainer}>
        <div className={classes.text}>{props.text}</div>

        {/* <Image
          src={props.image}
          alt={props.imageText}
          className={classes.imageText}
          quality={50}
          sizes="75vw"
        /> */}
      </div>
    </div>
  );
};

export default InfoMobile;
