"use client";

import styles from "./events_container.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import close from "@/public/svg/close.svg";

import Link from "next/link";

const EventContainer = ({ calendar }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [src, setSrc] = useState("");
  const [text, setText] = useState("");
  const [altText, setAltText] = useState("");
  const [showLongText, setShowLongText] = useState(false);
  const [longText, setLongText] = useState("");
  const [date, setDate] = useState("");
  const [tickets, setTickets] = useState("");
  const [place, setPlace] = useState("");

  const closeHandler = () => {
    if (showOverlay) {
      setShowOverlay(false);
    }
  };

  const clickHandler = (calendar_data) => {
    const date = new Date(calendar_data.k_datums);

    const day = date.getDate();
    let month = "";

    switch (date.getMonth()) {
      case 0:
        month = "Janvāris";
        break;
      case 1:
        month = "Februāris";
        break;
      case 2:
        month = "Marts";
        break;
      case 3:
        month = "Aprīlis";
        break;
      case 4:
        month = "Maijs";
        break;
      case 5:
        month = "Jūnijs";
        break;
      case 6:
        month = "Jūlijs";
        break;
      case 7:
        month = "Augusts";
        break;
      case 8:
        month = "Septembris";
        break;
      case 9:
        month = "Oktobris";
        break;
      case 10:
        month = "Novembris";
        break;
      case 11:
        month = "Decembris";
        break;
    }

    setSrc(`/events/${calendar_data.afisa}`);
    setText(calendar_data.k_pasakums);
    setTickets(calendar_data.biletes_url);
    setLongText(calendar_data.text);
    setShowLongText(calendar_data.biletes_url === "");
    let date_string = `${day}. ${month} ${calendar_data.k_laiks}`;
    if (calendar_data.k_apraksts === "Info") {
      date_string = `${month}`;
    }
    setAltText(calendar_data.k_pasakums);
    setShowOverlay(!showOverlay);
    setDate(date_string);
    setPlace(calendar_data.k_vieta);
  };

  const calendar_array = calendar.map((calendar_data, index) => {
    const date = new Date(calendar_data.k_datums);
    let month = "";
    let day = date.getDate();
    if (calendar_data.k_apraksts === "Info") {
      day = "";
    }

    switch (date.getMonth()) {
      case 0:
        month = "JAN";
        break;
      case 1:
        month = "FEB";
        break;
      case 2:
        month = "MAR";
        break;
      case 3:
        month = "APR";
        break;
      case 4:
        month = "MAI";
        break;
      case 5:
        month = "JŪN";
        break;
      case 6:
        month = "JŪL";
        break;
      case 7:
        month = "AUG";
        break;
      case 8:
        month = "SEP";
        break;
      case 9:
        month = "OKT";
        break;
      case 10:
        month = "NOV";
        break;
      case 11:
        month = "DEC";
        break;
    }

    return (
      <motion.div
        key={calendar_data.k_id}
        className={styles.event}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.75, type: "tween" }}
        viewport={{ once: true }}
        onClick={() => clickHandler(calendar_data)}
      >
        <Image
          src={`/events/${calendar_data.afisa}`}
          alt={calendar_data.k_pasakums}
          fill
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.datecontainer}>
          <div>{day}</div>
          <div>{month}</div>
        </div>
        <div className={styles.title}>
          {calendar_data.k_pasakums.toUpperCase()}
        </div>
      </motion.div>
    );
  });

  return (
    <section className={styles.container} onClick={closeHandler}>
      <h1 className={styles.heading}>KALENDĀRS</h1>
      <div className={styles.eventscontainer}>{calendar_array}</div>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className={styles.click_container}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <div className={styles.image_container}>
              <Image
                src={src}
                fill
                className={styles.img_overlay}
                alt={altText}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.text_container}>
              <div className={styles.close_container} onClick={closeHandler}>
                <Image
                  src={close}
                  alt="Close SVG"
                  className={styles.closesvg}
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.titleoverlay}>{text}</div>
              <div className={styles.dateoverlay}>{date}</div>
              <div className={styles.dateoverlay}>{place}</div>

              {showLongText && (
                <div className={styles.longtextcontainer}>{longText}</div>
              )}
              {!showLongText && (
                <div className={styles.ticketurloverlay}>
                  <Link href={tickets} target="_blank">
                    BIĻETES
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventContainer;
