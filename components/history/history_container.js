import styles from "./history_container.module.css";

const historyItems = [
  {
    year: "1946. gads",
    title: "Dibināšana",
    text: "Tautas deju ansamblis “Rotaļa” dibināts 1946. gadā kā VEF (Valsts elektrotehniskās fabrikas) rūpnīcas pašdarbnieku kolektīvs. Kolektīva pirmā vadītāja bija Ludmila Krūmiņa. Pirmais koncerts tika aizvadīts Akadēmiskajā Drāmas teātrī ar viencēliena uzvedumu “Krauklītis” jeb “Kur aizveda mūs’ māsiņu”.",
    align: "right",
  },
  {
    year: "1963. gads",
    title: "Nosaukums",
    text: "1963. gadā kolektīvam piešķirts Tautas deju ansambļa goda tituls, un ansamblis nosaukts pirmās vadītājas veidotās dejas “Rotaļa” vārdā.",
    align: "left",
  },
];

const HistoryContainer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>SĀKUMS</h1>
        <div className={styles.timeline}>
          {historyItems.map((item) => (
            <div
              className={`${styles.item} ${
                item.align === "left" ? styles.itemLeft : styles.itemRight
              }`}
              key={item.title}
            >
              <div className={styles.marker} />
              <div className={styles.itemText}>
                <div className={styles.year}>{item.year}</div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryContainer;
