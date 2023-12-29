import classes from "./DesktopMainHeader.module.css";
import Image from "next/image";
import rotala_logo from "../../../public/footer/rotala_logo.png";
import rimbulis from "../../../public/footer/rimbulis.png";
import Link from "next/link";

const DesktopMainHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.logocontainer}>
        <Link href="/">
          <Image
            src={rotala_logo}
            className={classes.logo}
            alt="TDA Rotala"
            quality={50}
            sizes="100vw"
          />
        </Link>
      </div>
      <div className={classes.navcontainer}>
        <Image
          src={rimbulis}
          className={classes.nav}
          alt="Rimbulis"
          onMouseEnter={props.onMouseEnter}
          quality={50}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default DesktopMainHeader;
