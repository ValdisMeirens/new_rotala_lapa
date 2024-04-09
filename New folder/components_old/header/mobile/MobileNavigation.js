import classes from "./MobileNavigation.module.css";
import { useState, useEffect } from "react";
import rotala_logo from "../../../public/footer/rotala_logo.png";
import rimbulis from "../../../public/footer/rimbulis.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import closegreen from "../../../public/svg/closegreen.svg";

import instagrey from "../../../public/svg/instagramsvgrepocomgreen.svg";
import facebookgrey from "../../../public/svg/facebooksvgrepocomgreen.svg";
import youtubegrey from "../../../public/svg/youtubesvgrepocomgreen.svg";

const MobileNavigation = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const clickHandler = () => {
    setShowNavLinks(!showNavLinks);
  };

  const setWindowDimensions = () => {
    if (window.innerWidth > 750) {
      setShowNavLinks(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);

    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  return (
    <div className={classes.mobileContainer}>
      <div className={classes.container}>
        <div className={classes.logocontainer}>
          {!showNavLinks && (
            <Link href="/" className={classes.size}>
              <Image
                src={rotala_logo}
                alt="TDA Rotala"
                className={classes.logo}
                quality={50}
                sizes="25vw"
              />
            </Link>
          )}
        </div>
        <div className={classes.navcontainer} onClick={clickHandler}>
          {!showNavLinks && (
            <Image
              src={rimbulis}
              alt="Rimbulis"
              className={classes.nav}
              quality={50}
              sizes="25vw"
            />
          )}
        </div>
      </div>
      <motion.div
        animate={{
          visibility: showNavLinks ? "visible" : "hidden",
          opacity: showNavLinks ? 1 : 0,
        }}
        transition={{ type: "tween", duration: 0.3 }}
        onClick={() => {
          setShowNavLinks(!showNavLinks);
        }}
        className={classes.overlaycontainer}
      >
        <div className={classes.overlay}>
          <div className={classes.logocontainer}>
            <Image
              src={rotala_logo}
              alt="TDA Rotala"
              className={classes.logo}
              quality={50}
              sizes="25vw"
            />
          </div>
          <div className={classes.close} onClick={clickHandler}>
            <Image
              src={closegreen}
              alt="CloseGreen SVG"
              className={classes.closegreensvg}
              quality={50}
              sizes="25vw"
            />
          </div>
        </div>

        <div className={classes.navtextcontainer}>
          <ul className={classes.childnavtextcontainer}>
            <Link href="/" className={classes.size}>
              <li>JAUNUMI</li>
            </Link>
            <Link href="/albumi" className={classes.size}>
              <li>GALERIJA</li>
            </Link>
            <Link href="/vadiba" className={classes.size}>
              <li>VADĪBA</li>
            </Link>
            <Link href="/dejotaji" className={classes.size}>
              <li>DEJOTĀJI</li>
            </Link>
            <Link href="/vesture" className={classes.size}>
              <li>VĒSTURE</li>
            </Link>
          </ul>
        </div>

        <div className={classes.socialnetworkcontainer}>
          <Link
            href="https://instagram.com/tdarotala"
            className={classes.sociallink}
          >
            <Image
              src={instagrey}
              alt="teksts"
              className={classes.image}
              sizes="10vw"
              quality={10}
            />
          </Link>
          <Link
            href="https://www.facebook.com/TdaRotala"
            className={classes.sociallink}
          >
            <Image
              src={facebookgrey}
              alt="teksts"
              className={classes.image}
              sizes="10vw"
              quality={10}
            />
          </Link>
          <Link
            href="https://www.youtube.com/user/tdaRotala"
            className={classes.sociallink}
          >
            <Image
              src={youtubegrey}
              alt="teksts"
              className={classes.image}
              sizes="10vw"
              quality={10}
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNavigation;
