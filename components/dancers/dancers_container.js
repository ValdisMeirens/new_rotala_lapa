import Image from "next/image";
import styles from "./dancers_container.module.css";

const DancersContainer = () => {
  const dancers2 = [
    {
      dejotaji_id: 323,
      dejotaji_name: "Aiga",
      dejotaji_surname: "Andra Dručka",
      dejotaji_dz: "siev",
      dejotaji_foto: "aiga_drucka.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 321,
      dejotaji_name: "Kārlis",
      dejotaji_surname: "Baidekalns",
      dejotaji_dz: "virs",
      dejotaji_foto: "karlis_baidekalns.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 278,
      dejotaji_name: "Annija",
      dejotaji_surname: "Bārbale",
      dejotaji_dz: "siev",
      dejotaji_foto: "annija_barbale.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 342,
      dejotaji_name: "Artis",
      dejotaji_surname: "Batalovs",
      dejotaji_dz: "virs",
      dejotaji_foto: "artis_batalovs.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 316,
      dejotaji_name: "Agate",
      dejotaji_surname: "Baumane-Kuka",
      dejotaji_dz: "siev",
      dejotaji_foto: "agate_baumane.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 7,
      dejotaji_name: "Kristaps",
      dejotaji_surname: "Baumanis",
      dejotaji_dz: "virs",
      dejotaji_foto: "kristaps_baumanis.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 299,
      dejotaji_name: "Austra",
      dejotaji_surname: "Bebre",
      dejotaji_dz: "siev",
      dejotaji_foto: "austra_bebre.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 351,
      dejotaji_name: "Annija",
      dejotaji_surname: "Berkule",
      dejotaji_dz: "siev",
      dejotaji_foto: "annija_berkule.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 346,
      dejotaji_name: "Rūta",
      dejotaji_surname: "Bērziņa",
      dejotaji_dz: "siev",
      dejotaji_foto: "ruta_berzina.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 308,
      dejotaji_name: "Rihards",
      dejotaji_surname: "Bērziņš",
      dejotaji_dz: "virs",
      dejotaji_foto: "rihards_berzins.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 166,
      dejotaji_name: "Līva",
      dejotaji_surname: "Burmistre",
      dejotaji_dz: "siev",
      dejotaji_foto: "liva_burmistre.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 347,
      dejotaji_name: "Anna",
      dejotaji_surname: "Čudare",
      dejotaji_dz: "siev",
      dejotaji_foto: "anna_cudure.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 338,
      dejotaji_name: "Kate",
      dejotaji_surname: "Eglīte",
      dejotaji_dz: "siev",
      dejotaji_foto: "kate_eglite.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 97,
      dejotaji_name: "Māris",
      dejotaji_surname: "Eglītis",
      dejotaji_dz: "virs",
      dejotaji_foto: "maris_eglitis.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 350,
      dejotaji_name: "Martins",
      dejotaji_surname: "Emīls Millers-Siliņš",
      dejotaji_dz: "virs",
      dejotaji_foto: "martins_silins.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 337,
      dejotaji_name: "Alise",
      dejotaji_surname: "Gailīte",
      dejotaji_dz: "siev",
      dejotaji_foto: "alise_gailite.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 216,
      dejotaji_name: "Madara",
      dejotaji_surname: "Graudiņa",
      dejotaji_dz: "siev",
      dejotaji_foto: "madara_graudina.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 225,
      dejotaji_name: "Linards",
      dejotaji_surname: "Graumanis",
      dejotaji_dz: "virs",
      dejotaji_foto: "linards_graumanis.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 348,
      dejotaji_name: "Laura",
      dejotaji_surname: "Greiškāne",
      dejotaji_dz: "siev",
      dejotaji_foto: "laura_greiskane.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 181,
      dejotaji_name: "Armands",
      dejotaji_surname: "Grīnbergs",
      dejotaji_dz: "virs",
      dejotaji_foto: "armands_grinbergs.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 146,
      dejotaji_name: "Līga",
      dejotaji_surname: "Grinceviča",
      dejotaji_dz: "siev",
      dejotaji_foto: "liga_grincevica.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 290,
      dejotaji_name: "Edgars",
      dejotaji_surname: "Grincevičs",
      dejotaji_dz: "virs",
      dejotaji_foto: "edgars_grincevics.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 309,
      dejotaji_name: "Roberts",
      dejotaji_surname: "Grīnfelds",
      dejotaji_dz: "virs",
      dejotaji_foto: "roberts_grinfelds.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 203,
      dejotaji_name: "Ineta",
      dejotaji_surname: "Irbe",
      dejotaji_dz: "siev",
      dejotaji_foto: "ineta_irbe.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 280,
      dejotaji_name: "Māris",
      dejotaji_surname: "Jākabsons",
      dejotaji_dz: "virs",
      dejotaji_foto: "maris_jakabsons.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 336,
      dejotaji_name: "Kristaps",
      dejotaji_surname: "Kadiķis",
      dejotaji_dz: "virs",
      dejotaji_foto: "kristaps_kadikis.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 322,
      dejotaji_name: "Tomass",
      dejotaji_surname: "Kalējs",
      dejotaji_dz: "virs",
      dejotaji_foto: "tomass_kalejs.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 343,
      dejotaji_name: "Kristaps",
      dejotaji_surname: "Kālis",
      dejotaji_dz: "virs",
      dejotaji_foto: "kristaps_kalis.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 276,
      dejotaji_name: "Anete",
      dejotaji_surname: "Kalniņa",
      dejotaji_dz: "siev",
      dejotaji_foto: "anete_kalnina.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 301,
      dejotaji_name: "Adele",
      dejotaji_surname: "Kozlovska",
      dejotaji_dz: "siev",
      dejotaji_foto: "adele_kozlovska.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 212,
      dejotaji_name: "Žermēna",
      dejotaji_surname: "Laupace",
      dejotaji_dz: "siev",
      dejotaji_foto: "zermena_laupace.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 325,
      dejotaji_name: "Renāte",
      dejotaji_surname: "Lejiete",
      dejotaji_dz: "siev",
      dejotaji_foto: "renate_lejiete.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 355,
      dejotaji_name: "Estere",
      dejotaji_surname: "Līva Čipote",
      dejotaji_dz: "siev",
      dejotaji_foto: "estere_cipote.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 320,
      dejotaji_name: "Marta",
      dejotaji_surname: "Luīze Putne",
      dejotaji_dz: "siev",
      dejotaji_foto: "marta_putne.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 349,
      dejotaji_name: "Edvards",
      dejotaji_surname: "Markuss Selikovs",
      dejotaji_dz: "virs",
      dejotaji_foto: "edvards_selikovs.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 312,
      dejotaji_name: "Luīze",
      dejotaji_surname: "Marta Vītola",
      dejotaji_dz: "siev",
      dejotaji_foto: "luize_vitola.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 103,
      dejotaji_name: "Valdis",
      dejotaji_surname: "Meirēns",
      dejotaji_dz: "virs",
      dejotaji_foto: "valdis_meirens.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 344,
      dejotaji_name: "Matīss",
      dejotaji_surname: "Melderis",
      dejotaji_dz: "virs",
      dejotaji_foto: "matiss_melderis.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 314,
      dejotaji_name: "Asnate",
      dejotaji_surname: "Moiseja",
      dejotaji_dz: "siev",
      dejotaji_foto: "asnate_moiseja.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 307,
      dejotaji_name: "Kristians",
      dejotaji_surname: "Nolmanis",
      dejotaji_dz: "virs",
      dejotaji_foto: "kristians_nolmanis.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 49,
      dejotaji_name: "Santa",
      dejotaji_surname: "Ozoliņa",
      dejotaji_dz: "siev",
      dejotaji_foto: "santa_ozolina.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 111,
      dejotaji_name: "Kristaps",
      dejotaji_surname: "Ozols",
      dejotaji_dz: "virs",
      dejotaji_foto: "kristaps_ozols.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 341,
      dejotaji_name: "Paula",
      dejotaji_surname: "Paegle",
      dejotaji_dz: "siev",
      dejotaji_foto: "paula_paegle.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 332,
      dejotaji_name: "Matīss",
      dejotaji_surname: "Pauls",
      dejotaji_dz: "virs",
      dejotaji_foto: "matiss_pauls.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 221,
      dejotaji_name: "Sanita",
      dejotaji_surname: "Prese",
      dejotaji_dz: "siev",
      dejotaji_foto: "sanita_prese.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 209,
      dejotaji_name: "Rihards",
      dejotaji_surname: "Priedītis",
      dejotaji_dz: "virs",
      dejotaji_foto: "rihards_prieditis.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 300,
      dejotaji_name: "Rita",
      dejotaji_surname: "Reņko",
      dejotaji_dz: "siev",
      dejotaji_foto: "rita_renko.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 340,
      dejotaji_name: "Ernests",
      dejotaji_surname: "Riekstiņš",
      dejotaji_dz: "virs",
      dejotaji_foto: "ernests_riekstins.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 353,
      dejotaji_name: "Luīze",
      dejotaji_surname: "Rubene",
      dejotaji_dz: "siev",
      dejotaji_foto: "luize_rubene.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 53,
      dejotaji_name: "Līva",
      dejotaji_surname: "Rudzīte-Celmiņa",
      dejotaji_dz: "siev",
      dejotaji_foto: "liva_rudzite.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 356,
      dejotaji_name: "Jēkabs",
      dejotaji_surname: "Rutkovskis",
      dejotaji_dz: "virs",
      dejotaji_foto: "jekabs_rutkovskis.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 345,
      dejotaji_name: "Luīze",
      dejotaji_surname: "Šaršune",
      dejotaji_dz: "siev",
      dejotaji_foto: "luize_sarsuna.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 313,
      dejotaji_name: "Anna",
      dejotaji_surname: "Simina",
      dejotaji_dz: "siev",
      dejotaji_foto: "anna_simina.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 191,
      dejotaji_name: "Laura",
      dejotaji_surname: "Sirmele",
      dejotaji_dz: "siev",
      dejotaji_foto: "laura_sirmele.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 310,
      dejotaji_name: "Ivo",
      dejotaji_surname: "Svens Adviljons",
      dejotaji_dz: "virs",
      dejotaji_foto: "svens_adviljons.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 295,
      dejotaji_name: "Elza",
      dejotaji_surname: "Treimane",
      dejotaji_dz: "siev",
      dejotaji_foto: "elza_treimane.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 315,
      dejotaji_name: "Emīlija",
      dejotaji_surname: "Vaitkevica",
      dejotaji_dz: "siev",
      dejotaji_foto: "emilija_vaitkevica.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 171,
      dejotaji_name: "Annija",
      dejotaji_surname: "Vaivode",
      dejotaji_dz: "siev",
      dejotaji_foto: "annija_vaivode.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 222,
      dejotaji_name: "Rihards",
      dejotaji_surname: "Vaivods",
      dejotaji_dz: "virs",
      dejotaji_foto: "rihards_vaivods.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 163,
      dejotaji_name: "Mārtiņš",
      dejotaji_surname: "Vīksna",
      dejotaji_dz: "virs",
      dejotaji_foto: "martins_viksna.webp",
      rotalnieks: 1,
    },
    {
      dejotaji_id: 331,
      dejotaji_name: "Katrīna",
      dejotaji_surname: "Zeltiņa",
      dejotaji_dz: "siev",
      dejotaji_foto: "katrina_zeltina.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 326,
      dejotaji_name: "Sintija",
      dejotaji_surname: "Žubecka",
      dejotaji_dz: "siev",
      dejotaji_foto: "sintija_zubecka.webp",
      rotalnieks: 0,
    },
    {
      dejotaji_id: 274,
      dejotaji_name: "Ance",
      dejotaji_surname: "Žubēre",
      dejotaji_dz: "siev",
      dejotaji_foto: "ance_zubere.webp",
      rotalnieks: 1,
    },
  ];
  const items = dancers2.map((item) => {
    const src = `/dancers/${item.dejotaji_foto}`;
    let text = "";
    if (item.rotalnieks === 1) {
      if (item.dejotaji_dz === "virs") {
        text = "Rotaļnieks";
      } else {
        text = "Rotaļniece";
      }
    } else {
      if (item.dejotaji_dz === "virs") {
        text = "Topošais Rotaļnieks";
      } else {
        text = "Topošā Rotaļniece";
      }
    }

    return (
      <div key={item.dejotaji_id} className={styles.imagecontainer}>
        <Image
          src={src}
          className={styles.img}
          fill
          alt={item.dejotaji_id}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <div className={styles.overlay}>
          <div className={styles.name}>
            {item.dejotaji_name} {item.dejotaji_surname}
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.items_container}>{items}</div>
    </div>
  );
};

export default DancersContainer;
