import classes from "./DesktopAboutUsInfo.module.css";
import Image from "next/image";

const DesktopAboutUsInfo = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.mainImageTextContainer}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.role}>{props.role}</div>
          <div className={classes.description}>{props.description}</div>
        </div>

        <div className={classes.mainImageContainer}>
          <Image
            src={props.picture}
            alt={props.pictureText}
            className={classes.mainImage}
            width={1000}
            height={1000}
            sizes="50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopAboutUsInfo;
