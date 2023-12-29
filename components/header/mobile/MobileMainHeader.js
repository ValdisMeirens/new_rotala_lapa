import classes from "./MobileMainHeader.module.css";
import Image from "next/image";
import rotala_logo from "../../../public/footer/rotala_logo.png";
import rimbulis from "../../../public/footer/rimbulis.png";

const MobileMainHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.logocontainer}>
        <Image
          src={rotala_logo}
          alt="TDA Rotala"
          className={classes.logo}
          quality={50}
          sizes="100vw"
        />
      </div>
      <div className={classes.navcontainer} onClick={props.onClick}>
        <Image
          src={rimbulis}
          alt="Rimbulis"
          className={classes.nav}
          quality={50}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default MobileMainHeader;
