import styles from "./album_header_container.module.css";

import Image from "next/image";
import rotala_logo from "@/public/nav/rotala_logo.png";
import rimbulis from "@/public/nav/rimbulis.png";
import Link from "next/link";
import { useState } from "react";
import facebook from "../../public/svg/facebook-svgrepo-com.svg";
import instagram from "../../public/svg/instagram-svgrepo-com.svg";
import youtube from "../../public/svg/youtube-svgrepo-com.svg";
import close from "../../public/svg/close-svgrepo-com.svg";

const AlbumHeaderContainer = () => {
  const [overlay, setOverlay] = useState(false);

  const onClickHandler = () => {
    setOverlay(!overlay);
  };

  return (
    <div>
      <div className={styles.mobile_container}>
        {!overlay && (
          <div className={styles.mobile_container_start}>
            <div className={styles.logo_container}>
              <Image
                src={rotala_logo}
                className={styles.img}
                alt="TDA Rotala"
                fill
              />
            </div>
            <div className={styles.rimbulis_container} onClick={onClickHandler}>
              <Image
                src={rimbulis}
                className={styles.img}
                alt="Rimbulis"
                fill
              />
            </div>
          </div>
        )}

        {overlay && (
          <div className={styles.mobile_container_end}>
            <div className={styles.mobile_first_part}>
              <div className={styles.logo_container}>
                <Image
                  src={rotala_logo}
                  className={styles.img}
                  alt="TDA Rotala"
                  fill
                />
              </div>
              <div
                className={styles.rimbulis_container}
                onClick={onClickHandler}
              >
                <Image src={close} className={styles.img} alt="Rimbulis" fill />
              </div>
            </div>
            <div className={styles.test1}>
              <Link href="/" className={styles.text}>
                JAUNUMI
              </Link>
              <Link href="/galerija" className={styles.text}>
                GALERIJA
              </Link>
              <Link href="/vadiba" className={styles.text}>
                VADĪBA
              </Link>
              <Link href="/dejotaji" className={styles.text}>
                DEJOTĀJI
              </Link>
              <Link href="/par_mums" className={styles.text}>
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
      </div>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <Link href="/">
            <Image
              src={rotala_logo}
              className={styles.img}
              alt="TDA Rotala"
              fill
            />
          </Link>
        </div>
        <div className={styles.navtextcontainer}>
          <Link href="/" className={styles.size}>
            JAUNUMI
          </Link>
          <Link href="/galerija" className={styles.size}>
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
        <div className={styles.rimbulis_container}>
          <Link href="/">
            <Image src={rimbulis} className={styles.img} alt="Rimbulis" fill />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlbumHeaderContainer;
