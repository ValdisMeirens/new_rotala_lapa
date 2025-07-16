import React from "react";
import styles from "./calendar_container.module.css";

const CalendarConteiner = ({ data }) => {
  const calendar_list = data.map((entry) => {
    const date = new Date(entry.datums);
    const diena = date.getDate();
    const menesis = date.getMonth();
    const gads = date.getFullYear() + ". gada ";
    let month;
    switch (date.getMonth()) {
      case 0:
        month = "janvāris";
        break;
      case 1:
        month = "februāris";
        break;
      case 2:
        month = "marts";
        break;
      case 3:
        month = "aprīlis";
        break;
      case 4:
        month = "maijs";
        break;
      case 5:
        month = "jūnijs";
        break;
      case 6:
        month = "jūlijs";
        break;
      case 7:
        month = "augusts";
        break;
      case 8:
        month = "septembris";
        break;
      case 9:
        month = "oktobris";
        break;
      case 10:
        month = "novembris";
        break;
      case 11:
        month = "decembris";
        break;
    }
    return (
      <div className={styles.entry_container} key={entry.pasakums}>
        <div className={styles.datums}>
          {gads}
          {diena}. {month}
        </div>
        <div className={styles.vieta}>{entry.vieta}</div>
        <div className={styles.pasakums}>{entry.pasakums}</div>
      </div>
    );
  });
  return (
    <section className={styles.container}>
      <div className={styles.heading}>KALENDĀRS</div>
      <div className={styles.calendar_list_container}>{calendar_list}</div>
    </section>
  );
};

export default CalendarConteiner;
