"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./history_leaders.module.css";

const leaders = [
  {
    name: "Aija Baumane",
    years: "1977.–2002. gads",
    image: "/history/aija_baumane.jpg",
    imagePosition: "center top",
    intro:
      "Baletdejotāja, Latvijas Operas un baleta soliste, horeogrāfe. IX–XII Deju svētku virsvadītāja, XIII un XIV Deju svētku Goda virsvadītāja.",
    paragraphs: [
      "Savu dejotprasmi rādījusi arī kino, zināmākā loma – čigāniete Ringla kinofilmās “Vella kalpi” un “Vella kalpi Vella dzirnavās”.",
      "TDA “Rotaļu” vadījusi no 1977. gadam līdz 2002. gadam un šajā laikā skatuviskās tautas dejas fondu bagātinājusi ar daudzām spilgtām horeogrāfijām.",
      "Aijas “labās rokas” – Roze Kupča, Modris Gipmanis, Rita Spalva – bijušas viņai īpaši nozīmīgs atbalsts gan veidojot jaunas horeogrāfijas, gan palīdzot Rotaļniekiem “atrast sevi” dejā.",
      "Kopā ar Modri Gipmani tapusi Rotaļniekiem tik svarīgā deja “Kur tu augi, daiļa meita”, savukārt Rita Spalva ansamblim dāvājusi “Putnu sasaukšanos”. Roze Kupča bijusi līdzās visos nozīmīgākajos Aijas un Rotaļas kopīgajos notikumos kā balsts un sargātāja, strādājot gan kā repetitore, gan tērpu pārzine, un turpinājusi būt ar Rotaļu arī pēcāk, kad ansambļa vadītāja amatu pārņemis Gints Baumanis.",
    ],
  },
  {
    name: "Gints Baumanis",
    years: "2002.–2019. gads",
    image: "/history/gints_baumanis.jpg",
    imagePosition: "center center",
    intro:
      "Horeogrāfs, atbalstošs vadītājs, personība ar vienmēr spēcīgu viedokli. XV Deju svētku virsvadītājs.",
    paragraphs: [
      "Gints TDA “Rotaļa” vadības grožus pārņēma 2002. gadā, līdz tam vairākus gadus strādājot kopā ar Aiju un veidojot Rotaļniekus par spilgtām personībām gan uz skatuves, gan ārpus deju dzīvē.",
      "Rotaļā radījis daudzas horeogrāfijas, kas dejotājiem mīļas arī šobrīd, kā arī guvušas atzinību gan no žūrijām Jaunrades deju konkursos, gan citiem kolektīviem, kas tās turpina iekļaut savos repertuāros.",
      "Pats darbojies dažādos radošos projektos un bijis arī pirmās Dejas balvas žūrijā kā skatuviskās tautas dejas eksperts, žūrijas priekšsēdētājas vietnieks.",
      "2012. gadā, pievienojoties gadu agrāk izveidotajai Daces Adviljones “Manai Rotaļai”, dibinājis savus Rotaļas vidējos – vidējās paaudzes deju kolektīvu “Rotaļa XO”.",
      "Ansambļa vadīšanas laikā kopā ar Gintu Rotaļā darbojušies Ieva un Intars Jundzes, Kristīne Tops, Agnese Meliņa, Andris Pudāns, Diāna Gavare un Roberts Muciņš. Tieši pēc viņa uzaicinājuma 2005. gadā Rotaļā sākusi strādāt koncertmeistare Valentīna Popova.",
    ],
  },
  {
    name: "Diāna Gavare",
    years: "no 2019. gada",
    image: "/history/diana_gavare.jpeg",
    imagePosition: "center center",
    intro: "Horeogrāfe, iedvesmojoša personība, Rotaļniece.",
    paragraphs: [
      "Diāna ir Rotaļniece kopš 2012. gada, bet no 2019. gada – Rotaļas mākslinieciskā vadītāja, ansambļa dvēsele un mūžīgais dzinējs, kas liek traukties uz priekšu ne vien Rotaļniekiem, bet arī visiem apkārtējiem.",
      "Rotaļai ir ļoti paveicies, jo Diāna ir talantīga horeogrāfe, kuras radītās dejas jau vairākkārt augsti novērtētas jaunrades deju konkursos, kā arī iekļautas lielu deju notikumu repertuāros.",
      "Diāna ar savu entuziasmu “aplipina” visus blakus esošos, mudina DARĪT un IZDARĪT līdz galam un būt čakliem darbu darītājiem.",
      "Kopā ar Santu Irbi iemācījusi Rotaļniekiem lielāku uzmanību pievērst savai fiziskajai sagatavotībai.",
    ],
  },
];

const people = [
  "Donāts Rudzītis – Rotaļas “klasikas guru”, ar baletdejotāja pieredzi nodrošina, ka Rotaļnieki prot klasikas pamatsoļus un jūtas ērti pie baleta stangas.",
  "Anta Grīnvalde – horeogrāfe un Diānas asistente, palīdz dejotājiem atrast nozīmi un jēgu katrai kustībai, lai dejas tiktu izdejotas, ne vienkārši atdejotas.",
  "Valentīna Popova – koncertmeistare, ar savu muzikālo izjūtu palīdz Rotaļniekiem sajust ritmu un dejas noskaņu, kā arī katrā mēģinājumā liek sajusties kā klavierkoncertā.",
];

const HistoryLeaders = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedLeader = leaders[selectedIndex];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>VADĪTĀJI</h1>

        <div className={styles.leaders}>
          {leaders.map((leader, index) => {
            const isActive = index === selectedIndex;

            return (
              <button
                className={`${styles.leaderButton} ${
                  isActive ? styles.activeLeader : ""
                }`}
                key={leader.name}
                onClick={() => setSelectedIndex(index)}
                type="button"
              >
                <span className={styles.imageFrame}>
                  {leader.image ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className={styles.image}
                      style={{ objectPosition: leader.imagePosition }}
                      sizes="(max-width: 768px) 80vw, 26vw"
                    />
                  ) : (
                    <span className={styles.placeholder}>
                      <span>{leader.initials}</span>
                    </span>
                  )}
                </span>
                <span className={styles.cardName}>{leader.name}</span>
                <span className={styles.cardYears}>{leader.years}</span>
              </button>
            );
          })}
        </div>

        <article className={styles.details}>
          <div className={styles.detailsMeta}>{selectedLeader.years}</div>
          <h2>{selectedLeader.name}</h2>
          <p className={styles.intro}>{selectedLeader.intro}</p>
          {selectedLeader.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {selectedLeader.name === "Diāna Gavare" && (
            <div className={styles.people}>
              <h3>Komanda un nozīmīgi cilvēki</h3>
              <div className={styles.peopleGrid}>
                {people.map((person) => (
                  <p key={person}>{person}</p>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default HistoryLeaders;
