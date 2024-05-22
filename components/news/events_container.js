"use client";

import styles from "./events_container.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import valdis from "@/public/aboutus/valdis.jpg";
import Link from "next/link";

const EventContainer = ({ calendar }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [src, setSrc] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [tickets, setTickets] = useState("");

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
    const date_string = `${day}. ${month}`;
    setSrc(`/events/${calendar_data.afisa}`);
    setText(calendar_data.k_pasakums);
    setDate(date_string);
    setTickets(calendar_data.biletes_url);

    setShowOverlay(!showOverlay);
  };

  const calendar_array = calendar.map((calendar_data, index) => {
    const date = new Date(calendar_data.k_datums);
    const day = date.getDate();
    let month = "";

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
        transition={{ duration: 1, type: "tween", delay: 0.1 * index }}
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
    <section className={styles.container}>
      <h1 className={styles.heading}>KALENDĀRS</h1>
      <div className={styles.eventscontainer}>{calendar_array}</div>
      {showOverlay && (
        <div onClick={clickHandler} className={styles.click_container}>
          <div className={styles.image_container}>
            <Image src={src} fill className={styles.img_overlay} />
          </div>
          <div className={styles.text_container}>
            <div className={styles.titleoverlay}>{text}</div>
            <div className={styles.dateoverlay}>{date}</div>
            <div className={styles.ticketurloverlay}>
              <Link href={tickets} target="_blank">
                BIĻETES
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventContainer;
