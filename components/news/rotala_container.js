"use client";
import styles from "./rotala_container.module.css";
import background from "@/public/contacts/div4.jpg";
import Image from "next/image";

const RotalaContainer = () => {
  return (
    <section className={styles.container}>
      <Image
        src={background}
        fill
        alt="TDA ROTAĻA"
        className={styles.img}
        placeholder="blur"
        // sizes="100vw"
        // fill
      />
    </section>
  );
};

export default RotalaContainer;
