"use client";

import Image from "next/image";
import styles from "./contacts_container.module.css";
import instagram from "../../public/contacts/instagram.svg";
import facebook from "../../public/contacts/fb.svg";
import youtube from "../../public/contacts/youtube.svg";
import facebookgrey from "../../public/contacts/fbgrey.svg";
import instagramgrey from "../../public/contacts/instagramgrey.svg";
import youtubegrey from "../../public/contacts/youtubegrey.svg";
import Link from "next/link";
import background from "@/public/contacts/dziesmusvetki_slikta.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactsContainer = () => {
  const [instagramsrc, setInstragramSrc] = useState(instagram);
  const [fbsrc, setFBSrc] = useState(facebook);
  const [youtubesrc, setYoutubeSrc] = useState(youtube);

  return (
    <section className={styles.container}>
      <motion.div
        initial={{ x: "-30vw" }}
        whileInView={{ x: "0vw" }}
        transition={{ duration: 0.75, type: "tween", delay: 0.2 }}
        viewport={{ once: true }}
        className={styles.text_container}
      >
        <div>"Visu, ko darām,</div>
        <div>darām, cik labi varam,</div>
        <div>jo darām savam baram!"</div>
        <div className={styles.rotala}>TDA Rotaļa</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, type: "tween" }}
        viewport={{ once: true }}
        className={styles.image_container}
      >
        <Image
          src={background}
          fill
          alt="TDA Rotaļa bilde"
          className={styles.img}
          sizes="(max-width: 1100) 100vw, 75vw"
          placeholder="blur"
        />
      </motion.div>
      <div className={styles.contact_container_1}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, type: "tween", delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.infocontainer}
        >
          <div className={styles.name}>Diāna Gavare</div>
          <div className={styles.title}>
            TDA &quot;Rotaļa&quot; mākslinieciskā vadītāja
          </div>
          <div className={styles.email}>gavarediana@gmail.com</div>
        </motion.div>
      </div>
      <div className={styles.contact_container_2}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, type: "tween", delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.infocontainer}
        >
          <div className={styles.name}>Linards Graumanis</div>
          <div className={styles.title}>TDA &quot;Rotaļa&quot; prezidents</div>
          <div className={styles.email}>linardsgraumanis@gmail.com</div>
        </motion.div>
      </div>
      <div className={styles.social_container}>
        <motion.div
          initial={{ x: "30vw" }}
          whileInView={{ x: "0vw" }}
          transition={{ duration: 1, type: "tween", delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.social_container_motion}
        >
          <Link
            href="https://instagram.com/tdarotala"
            className={styles.socialnetwork}
            target="_blank"
          >
            <Image
              src={instagramsrc}
              alt="Instagram"
              fill
              onMouseOver={(e) => setInstragramSrc(instagramgrey)}
              onMouseLeave={(e) => setInstragramSrc(instagram)}
              className={styles.img_s}
              sizes="25vw"
            />
          </Link>
          <Link
            href="https://www.facebook.com/TdaRotala"
            className={styles.socialnetwork}
            target="_blank"
          >
            <Image
              src={fbsrc}
              alt="Facebook"
              fill
              onMouseOver={(e) => setFBSrc(facebookgrey)}
              onMouseLeave={(e) => setFBSrc(facebook)}
              className={styles.img_s}
              sizes="25vw"
            />
          </Link>
          <Link
            href="https://www.youtube.com/@tdaRotala"
            className={styles.socialnetwork}
            target="_blank"
          >
            <Image
              src={youtubesrc}
              alt="youtube"
              fill
              onMouseOver={(e) => setYoutubeSrc(youtubegrey)}
              onMouseLeave={(e) => setYoutubeSrc(youtube)}
              className={styles.img_s}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactsContainer;
