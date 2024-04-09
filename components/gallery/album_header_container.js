import styles from "./album_header_container.module.css";

import Image from "next/image";
import rotala_logo from "@/public/nav/rotala_logo.png";
import rimbulis from "@/public/nav/rimbulis.png";
import Link from "next/link";

const AlbumHeaderContainer = () => {
  return (
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
  );
};

export default AlbumHeaderContainer;
