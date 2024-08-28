"use client";

import Image from "next/image";
import styles from "./logo_container.module.css";
import div1 from "../../public/logo_container/div1.jpg";
import div2 from "../../public/logo_container/div2.jpg";
import div3 from "../../public/logo_container/div3.jpg";
import div4 from "../../public/logo_container/div4.jpg";
import div5 from "../../public/logo_container/div5.jpg";
import div6 from "../../public/logo_container/div6.png";
import div7 from "../../public/logo_container/div7.jpg";
import div8 from "../../public/logo_container/div8.jpg";
import div9 from "../../public/logo_container/div9.jpg";
import div10 from "../../public/logo_container/div10.jpg";
import div11 from "../../public/logo_container/div11.jpg";
import div12 from "../../public/logo_container/div12.jpg";
import Nav from "../nav/nav";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import src from "../../public/events/uznemsana2.jpg";
import close from "@/public/svg/close.svg";

const LogoContainer = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const altText = "Uzņemšana";
  const closeHandler = () => {
    if (showOverlay) {
      setShowOverlay(false);
    }
  };
  return (
    <section className={styles.container} onClick={closeHandler}>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className={styles.click_container}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className={styles.close_container} onClick={closeHandler}>
              <Image
                src={close}
                alt="Close SVG"
                className={styles.closesvg}
                width={50}
                height={50}
              />
            </div>
            <div className={styles.image_container} onClick={closeHandler}>
              <Image
                src={src}
                fill
                className={styles.img_overlay}
                alt={altText}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            placeholder="blur"
            sizes="80vw"
          />
        </div>
        <div className={styles.div2}>
          <Image
            src={div2}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="80vw"
          />
        </div>
        <div className={styles.div3}>
          <Image
            src={div3}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="80vw"
          />
        </div>
        <div className={styles.div4}>
          <Image
            src={div4}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="80vw"
          />
        </div>
        <div className={styles.div5}>
          <Image
            src={div5}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="80vw"
          />
        </div>
        <div className={styles.div6}>
          <Image
            src={div6}
            alt="Rotaļa Logo"
            fill
            className={styles.img_logo}
            sizes="80vw"
          />
        </div>
        <div className={styles.div7}>
          <Image
            src={div7}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="80vw"
          />
        </div>
        <div className={styles.div8}>
          <Image
            src={div8}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="80vw"
          />
        </div>
        <div className={styles.div9}>
          <Image
            src={div9}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="80vw"
          />
        </div>
        <div className={styles.div10}>
          <Image
            src={div10}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="80vw"
          />
        </div>
        <div className={styles.div11}>
          <Image
            src={div11}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="80vw"
          />
        </div>
        <div className={styles.div12}>
          <Image
            src={div12}
            alt="Rotaļa Logo"
            fill
            className={styles.img}
            sizes="80vw"
          />
        </div>
      </div>
    </section>
  );
};

export default LogoContainer;
