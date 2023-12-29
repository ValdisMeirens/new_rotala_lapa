import classes from "./DesktopGalleryHeader.module.css";
import Image from "next/image";
import rotala_logo from "../../../public/footer/rotala_logo.png";
import rimbulis from "../../../public/footer/rimbulis.png";
import Link from "next/link";

const DesktopGalleryHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.container2}>
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
        <Link href="/">
          <div className={classes.text}>Jaunumi</div>
        </Link>
        <Link href="/albumi">
          <div className={classes.text}>Galerija</div>
        </Link>
        <Link href="/vadiba">
          <div className={classes.text}>Vadība</div>
        </Link>
        <Link href="/dejotaji">
          <div className={classes.text}>Dejotāji</div>
        </Link>
        <Link href="/vesture">
          <div className={classes.text}>Vēsture</div>
        </Link>
        <div className={classes.circlecontainer}>
          <Link href="/">
            <Image
              src={rimbulis}
              className={classes.circle}
              alt="Rimbulis"
              quality={50}
              sizes="100vw"
            />
          </Link>
        </div>
      </div>
      {/* <div className={classes.logocontainer}>
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
      <Link href="/">
        <div className={classes.text}>Jaunumi</div>
      </Link>
      <Link href="/albumi">
        <div className={classes.text}>Galerija</div>
      </Link>
      <Link href="/vadiba">
        <div className={classes.text}>Vadība</div>
      </Link>
      <Link href="/dejotaji">
        <div className={classes.text}>Dejotāji</div>
      </Link>
      <Link href="/vesture">
        <div className={classes.text}>Vēsture</div>
      </Link>
      <div className={classes.circlecontainer}>
        <Link href="/">
          <Image
            src={rimbulis}
            className={classes.circle}
            alt="Rimbulis"
            quality={50}
            sizes="100vw"
          />
        </Link>
      </div> */}
    </div>
  );
};

export default DesktopGalleryHeader;
