import Link from "next/link";
import Image from "next/image";
import rimbulis from "../../public/nav/rimbulis.png";
import close from "../../public/svg/close-svgrepo-com.svg";

import rotala from "../../public/nav/rotala_logo.png";
import styles from "./nav.module.css";
import { useState, useEffect } from "react";
import facebook from "../../public/svg/facebook-svgrepo-com.svg";
import instagram from "../../public/svg/instagram-svgrepo-com.svg";
import youtube from "../../public/svg/youtube-svgrepo-com.svg";

const Nav = () => {
  const [showLinks, setShowNavLinks] = useState(false);
  const [showOverLay, setShowOverLay] = useState(false);

  const mouseEnterHandler = () => {
    setShowNavLinks(true);
  };

  const mouseLeaveHandler = () => {
    setShowNavLinks(false);
  };

  const onClickHandler = () => {
    setShowOverLay(!showOverLay);
  };

  return (
    <>
      <div className={styles.desktop_container}>
        <div className={styles.rotalacontainer}>
          <Link href="/">
            <Image
              src={rotala}
              alt="Rotaļas Logo"
              fill
              className={styles.rotala}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </Link>
        </div>
        <div
          className={styles.rimbuliscontainer}
          onMouseEnter={mouseEnterHandler}
        >
          <Image
            src={rimbulis}
            alt="rimbulis"
            fill
            className={styles.rimbulis}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
      </div>

      {!showOverLay && (
        <div className={styles.mobile_container}>
          <div className={styles.rotalacontainer}>
            <Link href="/">
              <Image
                src={rotala}
                alt="Rotaļas Logo"
                fill
                className={styles.rotala}
              />
            </Link>
          </div>

          <div className={styles.hambugercontainer} onClick={onClickHandler}>
            <Image
              src={rimbulis}
              alt="rimbulis"
              fill
              className={styles.rimbulis}
            />
          </div>
        </div>
      )}

      {showOverLay && (
        <div className={styles.overlaycontainer} onClick={onClickHandler}>
          <div className={styles.navlogocontainer}>
            <div className={styles.logocontainer}>
              <Image
                src={rotala}
                alt="Rotaļas Logo"
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.closecontainer} onClick={onClickHandler}>
              <Image src={close} alt="close" fill className={styles.close} />
            </div>
          </div>
          <div className={styles.navtextcontainer}>
            <Link href="/" className={styles.size}>
              JAUNUMI
            </Link>
            <Link
              href="/galerija"
              className={styles.size}
              onClick={onClickHandler}
            >
              GALERIJA
            </Link>
            <Link href="/vadiba" className={styles.size}>
              VADĪBA
            </Link>
            <Link href="/dejotaji" className={styles.size}>
              DEJOTĀJI
            </Link>
            <Link href="/par_mums" className={styles.size}>
              PAR MUMS
            </Link>
          </div>
          <div className={styles.socialnetworkcontainer}>
            <Link
              href="https://instagram.com/tdarotala"
              className={styles.socialnetwork}
              target="_blank"
            >
              <Image
                src={instagram}
                alt="Instagram"
                fill
                className={styles.img}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </Link>
            <Link
              href="https://www.facebook.com/TdaRotala"
              className={styles.socialnetwork}
              target="_blank"
            >
              <Image
                src={facebook}
                alt="Facebook"
                fill
                className={styles.img}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@tdaRotala"
              className={styles.socialnetwork}
              target="_blank"
            >
              <Image
                src={youtube}
                alt="youtube"
                fill
                className={styles.img}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </Link>
          </div>
        </div>
      )}

      {showLinks && (
        <nav className={styles.linkcontainer} onMouseLeave={mouseLeaveHandler}>
          <ul>
            <Link href="/" className={styles.link}>
              <li>JAUNUMI</li>
            </Link>
            <Link href="/galerija" className={styles.link}>
              <li>GALERIJA</li>
            </Link>
            <Link href="/vadiba" className={styles.link}>
              <li>VADĪBA</li>
            </Link>
            <Link href="/dejotaji" className={styles.link}>
              <li>DEJOTĀJI</li>
            </Link>
            <Link href="/par_mums" className={styles.link}>
              <li>PAR MUMS</li>
            </Link>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
