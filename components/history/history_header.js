"use client";

import Image from "next/image";
import styles from "./history_header.module.css";
import div1 from "../../public/history_header/1.jpeg";
import div2 from "../../public/history_header/2.jpeg";
import div3 from "../../public/history_header/3.jpeg";
import div4 from "../../public/history_header/4.jpeg";
import div5 from "../../public/history_header/5.jpeg";
import div7 from "../../public/history_header/7.jpeg";
import div8 from "../../public/history_header/8.jpeg";
import div9 from "../../public/history_header/9.jpeg";
import div10 from "../../public/history_header/10.jpeg";
import div11 from "../../public/history_header/11.jpeg";
import div12 from "../../public/history_header/12.jpeg";
import Nav from "../nav/nav";

const HistoryHeader = () => {
  return (
    <section className={styles.container}>
      <div className={styles.navcontainer}>
        <Nav />
      </div>
      <div className={styles.gridcontainer}>
        <div className={styles.div1}>
          <Image
            src={div1}
            alt="Rotaļa"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div2}>
          <Image
            src={div2}
            alt="Rotaļa"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div3}>
          <Image
            src={div3}
            alt="Rotaļa"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div4}>
          <Image
            src={div4}
            alt="Rotaļa"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div5}>
          <Image
            src={div5}
            alt="Rotaļa"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div6}>
          <div className={styles.title}>VĒSTURE</div>
        </div>
        <div className={styles.div7}>
          <Image
            src={div7}
            alt="Rotaļa"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div8}>
          <Image
            src={div8}
            alt="Rotaļa"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div9}>
          <Image
            src={div9}
            alt="Rotaļa"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div10}>
          <Image
            src={div10}
            alt="Rotaļa"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div11}>
          <Image
            src={div11}
            alt="Rotaļa"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
        <div className={styles.div12}>
          <Image
            src={div12}
            alt="Rotaļa"
            fill
            className={styles.img}
            sizes="(max-width: 900px) 75vw, 30vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HistoryHeader;
