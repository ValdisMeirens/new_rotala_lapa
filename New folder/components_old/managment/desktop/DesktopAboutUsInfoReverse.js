import classes from "./DesktopAboutUsInfoReverse.module.css";
import Image from "next/image";

const DesktopAboutUsInfoReverse = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.mainImageContainer}>
          <Image
            src={props.picture}
            alt={props.pictureText}
            className={classes.mainImage}
            width={1900}
            height={1900}
            sizes="50vw"
          />
        </div>
        <div className={classes.mainImageTextContainer}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.role}>{props.role}</div>
          <div className={classes.description}>{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopAboutUsInfoReverse;
