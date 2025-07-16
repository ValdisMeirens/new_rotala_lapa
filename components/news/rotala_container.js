"use client";
import styles from "./rotala_container.module.css";
import background1 from "@/public/contacts/div1.webp";
import background2 from "@/public/contacts/div2.webp";

import Image from "next/image";

const RotalaContainer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.div1}>
        <Image
          src={background1}
          fill
          alt="TDA ROTAĻA"
          className={styles.img}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 65vw"
        />
      </div>
      <div className={styles.div2}>
        <Image
          src={background2}
          fill
          alt="TDA ROTAĻA"
          className={styles.img}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 65vw"
        />
      </div>
    </section>
  );
};

export default RotalaContainer;
