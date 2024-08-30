"use client";

import Image from "next/image";
import styles from "./aboutus_header.module.css";
import div1 from "../../public/logo_container/div1.webp";
import div2 from "../../public/logo_container/div2.webp";
import div3 from "../../public/logo_container/div3.webp";
import div4 from "../../public/logo_container/div4.webp";
import div5 from "../../public/logo_container/div5.webp";
import div7 from "../../public/logo_container/div7.webp";
import div8 from "../../public/logo_container/div8.webp";
import div9 from "../../public/logo_container/div9.webp";
import div10 from "../../public/logo_container/div10.webp";
import div11 from "../../public/logo_container/div11.webp";
import div12 from "../../public/logo_container/div12.webp";
import Nav from "../nav/nav";

const AboutUsHeader = () => {
  return (
    <section className={styles.container}>
      <div className={styles.navcontainer}>
        <Nav />
      </div>
      <div className={styles.gridcontainer}>
        <div className={styles.div1}>
          <Image
            src={div1}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div2}>
          <Image
            src={div2}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div3}>
          <Image
            src={div3}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div4}>
          <Image
            src={div4}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div5}>
          <Image
            src={div5}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div6}>
          <div className={styles.title}>PAR MUMS</div>
        </div>
        <div className={styles.div7}>
          <Image
            src={div7}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div8}>
          <Image
            src={div8}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div9}>
          <Image
            src={div9}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div10}>
          <Image
            src={div10}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div11}>
          <Image
            src={div11}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div12}>
          <Image
            src={div12}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeader;
