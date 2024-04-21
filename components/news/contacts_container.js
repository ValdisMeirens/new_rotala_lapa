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

const ContactsContainer = () => {
  const [instagramsrc, setInstragramSrc] = useState(instagram);
  const [fbsrc, setFBSrc] = useState(facebook);
  const [youtubesrc, setYoutubeSrc] = useState(youtube);

  return (
    <section className={styles.container}>
      <div className={styles.text_container}>
        <div>"Visu, ko daram,</div>
        <div>daram, cik labi varam,</div>
        <div>jo daram savam baram."</div>
        <div className={styles.rotala}>TDA Rotaļa</div>
      </div>
      <div className={styles.image_container}>
        <Image
          src={background}
          fill
          alt="TDA Rotaļa bilde"
          className={styles.img}
          sizes="(max-width: 1100) 100vw, 75vw"
          placeholder="blur"
        />
      </div>
      <div className={styles.contact_container_1}>
        <div className={styles.infocontainer}>
          <div className={styles.name}>Diāna Gavare</div>
          <div className={styles.title}>
            TDA &quot;Rotaļa&quot; mākslinieciskā vadītāja
          </div>
          <div className={styles.email}>gavarediana@gmail.com</div>
        </div>
      </div>
      <div className={styles.contact_container_2}>
        <div className={styles.infocontainer}>
          <div className={styles.name}>Linards Graumanis</div>
          <div className={styles.title}>TDA &quot;Rotaļa&quot; prezidents</div>
          <div className={styles.email}>linardsgraumanis@gmail.com</div>
        </div>
      </div>
      <div className={styles.social_container}>
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
      </div>
    </section>
  );
};

export default ContactsContainer;
