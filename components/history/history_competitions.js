import styles from "./history_competitions.module.css";

const competitions = [
  {
    year: "1975",
    place: "III pakāpe",
    dances: [],
    highlight: [],
  },
  {
    year: "1983",
    place: "2. vieta",
    dances: ["Plācenītis", "Trīs sidraba upes tek", "Lietuviešu deja"],
    highlight: [],
  },
  {
    year: "1985",
    place: "1. vieta",
    dances: ["Tūdaliņ’, tagadiņ’", "Dejotprieks", "Turku deja"],
    highlight: ["Dejotprieks"],
  },
  {
    year: "1990",
    place: "2. vieta",
    dances: ["Gatves deja", "Dejotprieks"],
    highlight: ["Dejotprieks"],
  },
  {
    year: "1998",
    place: "1. vieta",
    dances: ["Putnu sasaukšanās", "Kur tu augi, daiļa meita"],
    highlight: ["Putnu sasaukšanās", "Kur tu augi, daiļa meita"],
  },
  {
    year: "2003",
    place: "1. vieta",
    dances: ["Alsunģietis", "Virmo gaiss"],
    highlight: ["Virmo gaiss"],
  },
  {
    year: "2008",
    place: "1. vieta",
    dances: [
      "Kur tu augi, daiļa meita",
      "Paēduši, padzēruši pateicamies Dieviņam",
      "Tu kā, es kā",
    ],
    highlight: ["Kur tu augi, daiļa meita"],
  },
  {
    year: "2013",
    place: "",
    dances: ["Meitu māte", "Debesīs iemesties", "Vai es vainīgs?"],
    highlight: ["Debesīs iemesties", "Vai es vainīgs?"],
  },
  {
    year: "2023",
    place: "3. vieta",
    dances: ["Es tev došu skaistu sētu", "Daugaviņa", "Tūdaliņ’, tagadiņ’"],
    highlight: ["Es tev došu skaistu sētu"],
  },
];

const HistoryCompetitions = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerBlock}>
          <h1 className={styles.heading}>ROTAĻA SKATĒS</h1>
          <p className={styles.note}>
            <span>Zaļā krāsā</span> izceltas Rotaļas dejas.
          </p>
        </div>

        <div className={styles.timeline}>
          {competitions.map((item, index) => (
            <article
              className={`${styles.item} ${
                index % 2 === 0 ? styles.itemTop : styles.itemBottom
              }`}
              key={item.year}
            >
              <div className={styles.dot} />
              <div className={styles.card}>
                <div className={styles.year}>{item.year}. gads</div>
                {item.place && <h2>{item.place}</h2>}
                {item.dances.length > 0 && (
                  <p>
                    Dejota{" "}
                    {item.dances.map((dance, danceIndex) => (
                      <span key={dance}>
                        <span
                          className={
                            item.highlight.includes(dance)
                              ? styles.highlight
                              : undefined
                          }
                        >
                          “{dance}”
                        </span>
                        {danceIndex < item.dances.length - 1 ? ", " : "."}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryCompetitions;
