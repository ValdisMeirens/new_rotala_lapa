import Image from "next/image";
import styles from "./dancers_container.module.css";
import adele_kozlovska from "@/public/dancers/adele_kozlovska.webp";
import agate_baumane from "@/public/dancers/agate_baumane.webp";
import aiga_drucka from "@/public/dancers/aiga_drucka.webp";
import alise_gailite from "@/public/dancers/alise_gailite.webp";
import ance_zubere from "@/public/dancers/ance_zubere.webp";
import anete_kalnina from "@/public/dancers/anete_kalnina.webp";
import anna_cudure from "@/public/dancers/anna_cudure.webp";
import anna_simina from "@/public/dancers/anna_simina.webp";
import annija_barbale from "@/public/dancers/annija_barbale.webp";
import annija_berkule from "@/public/dancers/annija_berkule.webp";
import annija_vaivode from "@/public/dancers/annija_vaivode.webp";
import armands_grinbergs from "@/public/dancers/armands_grinbergs.webp";
import artis_batalovs from "@/public/dancers/artis_batalovs.webp";
import asnate_moiseja from "@/public/dancers/asnate_moiseja.webp";
import austra_bebre from "@/public/dancers/austra_bebre.webp";
import edgars_grincevics from "@/public/dancers/edgars_grincevics.webp";
import edvards_selikovs from "@/public/dancers/edvards_selikovs.webp";
import elza_treimane from "@/public/dancers/elza_treimane.webp";
import emilija_vaitkevica from "@/public/dancers/emilija_vaitkevica.webp";
import ernests_riekstins from "@/public/dancers/ernests_riekstins.webp";
import eleonora_rieksta from "@/public/dancers/eleonora_rieksta.webp";

import estere_cipote from "@/public/dancers/estere_cipote.webp";
import ineta_irbe from "@/public/dancers/ineta_irbe.webp";
import jekabs_rutkovskis from "@/public/dancers/jekabs_rutkovskis.webp";
import karlis_baidekalns from "@/public/dancers/karlis_baidekalns.webp";
import kristaps_baumanis from "@/public/dancers/kristaps_baumanis.webp";
import kristaps_kalis from "@/public/dancers/kristaps_kalis.webp";
import kristians_nolmanis from "@/public/dancers/kristians_nolmanis.webp";
import laura_greiskane from "@/public/dancers/laura_greiskane.webp";
import laura_sirmele from "@/public/dancers/laura_sirmele.webp";
import liga_grincevica from "@/public/dancers/liga_grincevica.webp";
import linards_graumanis from "@/public/dancers/linards_graumanis.webp";
import liva_burmistre from "@/public/dancers/liva_burmistre.webp";
import luize_rubene from "@/public/dancers/luize_rubene.webp";
import luize_sarsuna from "@/public/dancers/luize_sarsuna.webp";
import luize_vitola from "@/public/dancers/luize_vitola.webp";
import madara_graudina from "@/public/dancers/madara_graudina.webp";
import maris_eglitis from "@/public/dancers/maris_eglitis.webp";
import maris_jakabsons from "@/public/dancers/maris_jakabsons.webp";
import marta_putne from "@/public/dancers/marta_putne.webp";
import martins_silins from "@/public/dancers/martins_silins.webp";
import matiss_melderis from "@/public/dancers/matiss_melderis.webp";
import matiss_pauls from "@/public/dancers/matiss_pauls.webp";
import paula_paegle from "@/public/dancers/paula_paegle.webp";
import renate_lejiete from "@/public/dancers/renate_lejiete.webp";
import rihards_berzins from "@/public/dancers/rihards_berzins.webp";
import rihards_vaivods from "@/public/dancers/rihards_vaivods.webp";
import rita_renko from "@/public/dancers/rita_renko.webp";
import roberts_grinfelds from "@/public/dancers/roberts_grinfelds.webp";
import ruta_berzina from "@/public/dancers/ruta_berzina.webp";
import sanita_prese from "@/public/dancers/sanita_prese.webp";
import sintija_zubecka from "@/public/dancers/sintija_zubecka.webp";
import svens_adviljons from "@/public/dancers/svens_adviljons.webp";
import zermena_laupace from "@/public/dancers/zermena_laupace.webp";
import arturs_bercenko from "@/public/dancers/arturs_bercenko.webp";
import toms_cinitis from "@/public/dancers/toms_cinitis.webp";
import niklavs_dimants from "@/public/dancers/niklavs_dimants.webp";
import zane_holma from "@/public/dancers/zane_holma.webp";
import zane_jasinska from "@/public/dancers/zane_jasinska.webp";
import elina_kovalevska from "@/public/dancers/elina_kovalevska.webp";
import kristaps_kovalevskis from "@/public/dancers/kristaps_kovalevskis.webp";
import laura_lutoka from "@/public/dancers/laura_lutoka.webp";
import karina_olsevska from "@/public/dancers/karina_olsevska.webp";
import roberts_petersons from "@/public/dancers/roberts_petersons.webp";
import tristans_laucis from "@/public/dancers/tristans_laucis.webp";
import brigita_stratane from "@/public/dancers/brigita_stratane.webp";
import gita_vaice from "@/public/dancers/gita_vaice.webp";
import elizabete_vilne from "@/public/dancers/elizabete_vilne.webp";

const DancersContainer = () => {
  const dancers2 = [
    {
      dejotaji_id: 323,
      dejotaji_name: "Aiga",
      dejotaji_surname: "Andra Dručka",
      dejotaji_dz: "siev",
      dejotaji_foto: aiga_drucka,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 321,
      dejotaji_name: "Kārlis",
      dejotaji_surname: "Baidekalns",
      dejotaji_dz: "virs",
      dejotaji_foto: karlis_baidekalns,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 278,
      dejotaji_name: "Annija",
      dejotaji_surname: "Bārbale",
      dejotaji_dz: "siev",
      dejotaji_foto: annija_barbale,
      rotalnieks: 0,
    },
    // {
    //   dejotaji_id: 342,
    //   dejotaji_name: "Artis",
    //   dejotaji_surname: "Batalovs",
    //   dejotaji_dz: "virs",
    //   dejotaji_foto: artis_batalovs,
    //   rotalnieks: 0,
    // },
    {
      dejotaji_id: 316,
      dejotaji_name: "Agate",
      dejotaji_surname: "Baumane-Kuka",
      dejotaji_dz: "siev",
      dejotaji_foto: agate_baumane,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 7,
      dejotaji_name: "Kristaps",
      dejotaji_surname: "Baumanis",
      dejotaji_dz: "virs",
      dejotaji_foto: kristaps_baumanis,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 299,
      dejotaji_name: "Austra",
      dejotaji_surname: "Bebre",
      dejotaji_dz: "siev",
      dejotaji_foto: austra_bebre,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 363,
      dejotaji_name: "Artūrs",
      dejotaji_surname: "Berčenko",
      dejotaji_dz: "virs",
      dejotaji_foto: arturs_bercenko,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 351,
      dejotaji_name: "Annija",
      dejotaji_surname: "Berkule",
      dejotaji_dz: "siev",
      dejotaji_foto: annija_berkule,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 346,
      dejotaji_name: "Rūta",
      dejotaji_surname: "Bērziņa",
      dejotaji_dz: "siev",
      dejotaji_foto: ruta_berzina,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 308,
      dejotaji_name: "Rihards",
      dejotaji_surname: "Bērziņš",
      dejotaji_dz: "virs",
      dejotaji_foto: rihards_berzins,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 166,
      dejotaji_name: "Līva",
      dejotaji_surname: "Burmistre",
      dejotaji_dz: "siev",
      dejotaji_foto: liva_burmistre,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 373,
      dejotaji_name: "Toms",
      dejotaji_surname: "Cinītis-Ozoliņš",
      dejotaji_dz: "virs",
      dejotaji_foto: toms_cinitis,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 347,
      dejotaji_name: "Anna",
      dejotaji_surname: "Čudare",
      dejotaji_dz: "siev",
      dejotaji_foto: anna_cudure,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 365,
      dejotaji_name: "Niklāvs",
      dejotaji_surname: "Dimants",
      dejotaji_dz: "virs",
      dejotaji_foto: niklavs_dimants,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 274,
      dejotaji_name: "Ance",
      dejotaji_surname: "Dreijere",
      dejotaji_dz: "siev",
      dejotaji_foto: ance_zubere,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 97,
      dejotaji_name: "Māris",
      dejotaji_surname: "Eglītis",
      dejotaji_dz: "virs",
      dejotaji_foto: maris_eglitis,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 350,
      dejotaji_name: "Martins",
      dejotaji_surname: "Emīls Millers-Siliņš",
      dejotaji_dz: "virs",
      dejotaji_foto: martins_silins,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 337,
      dejotaji_name: "Alise",
      dejotaji_surname: "Gailīte",
      dejotaji_dz: "siev",
      dejotaji_foto: alise_gailite,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 216,
      dejotaji_name: "Madara",
      dejotaji_surname: "Graudiņa",
      dejotaji_dz: "siev",
      dejotaji_foto: madara_graudina,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 225,
      dejotaji_name: "Linards",
      dejotaji_surname: "Graumanis",
      dejotaji_dz: "virs",
      dejotaji_foto: linards_graumanis,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 348,
      dejotaji_name: "Laura",
      dejotaji_surname: "Greiškāne",
      dejotaji_dz: "siev",
      dejotaji_foto: laura_greiskane,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 181,
      dejotaji_name: "Armands",
      dejotaji_surname: "Grīnbergs",
      dejotaji_dz: "virs",
      dejotaji_foto: armands_grinbergs,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 146,
      dejotaji_name: "Līga",
      dejotaji_surname: "Grinceviča",
      dejotaji_dz: "siev",
      dejotaji_foto: liga_grincevica,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 290,
      dejotaji_name: "Edgars",
      dejotaji_surname: "Grincevičs",
      dejotaji_dz: "virs",
      dejotaji_foto: edgars_grincevics,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 309,
      dejotaji_name: "Roberts",
      dejotaji_surname: "Grīnfelds",
      dejotaji_dz: "virs",
      dejotaji_foto: roberts_grinfelds,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 369,
      dejotaji_name: "Zane",
      dejotaji_surname: "Holma",
      dejotaji_dz: "siev",
      dejotaji_foto: zane_holma,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 203,
      dejotaji_name: "Ineta",
      dejotaji_surname: "Irbe",
      dejotaji_dz: "siev",
      dejotaji_foto: ineta_irbe,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 280,
      dejotaji_name: "Māris",
      dejotaji_surname: "Jākabsons",
      dejotaji_dz: "virs",
      dejotaji_foto: maris_jakabsons,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 370,
      dejotaji_name: "Zane",
      dejotaji_surname: "Justīne Jasinska",
      dejotaji_dz: "siev",
      dejotaji_foto: zane_jasinska,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 343,
      dejotaji_name: "Kristaps",
      dejotaji_surname: "Kālis",
      dejotaji_dz: "virs",
      dejotaji_foto: kristaps_kalis,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 276,
      dejotaji_name: "Anete",
      dejotaji_surname: "Kalniņa",
      dejotaji_dz: "siev",
      dejotaji_foto: anete_kalnina,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 360,
      dejotaji_name: "Elīna",
      dejotaji_surname: "Kovaļevska",
      dejotaji_dz: "siev",
      dejotaji_foto: elina_kovalevska,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 364,
      dejotaji_name: "Kristaps",
      dejotaji_surname: "Kovaļevskis",
      dejotaji_dz: "virs",
      dejotaji_foto: kristaps_kovalevskis,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 301,
      dejotaji_name: "Adele",
      dejotaji_surname: "Kozlovska",
      dejotaji_dz: "siev",
      dejotaji_foto: adele_kozlovska,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 212,
      dejotaji_name: "Žermēna",
      dejotaji_surname: "Laupace",
      dejotaji_dz: "siev",
      dejotaji_foto: zermena_laupace,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 325,
      dejotaji_name: "Renāte",
      dejotaji_surname: "Lejiete",
      dejotaji_dz: "siev",
      dejotaji_foto: renate_lejiete,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 355,
      dejotaji_name: "Estere",
      dejotaji_surname: "Līva Čipote",
      dejotaji_dz: "siev",
      dejotaji_foto: estere_cipote,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 320,
      dejotaji_name: "Marta",
      dejotaji_surname: "Luīze Fīlipa",
      dejotaji_dz: "siev",
      dejotaji_foto: marta_putne,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 368,
      dejotaji_name: "Laura",
      dejotaji_surname: "Lutoka",
      dejotaji_dz: "siev",
      dejotaji_foto: laura_lutoka,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 349,
      dejotaji_name: "Edvards",
      dejotaji_surname: "Markuss Selikovs",
      dejotaji_dz: "virs",
      dejotaji_foto: edvards_selikovs,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 312,
      dejotaji_name: "Luīze",
      dejotaji_surname: "Marta Vītola",
      dejotaji_dz: "siev",
      dejotaji_foto: luize_vitola,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 344,
      dejotaji_name: "Matīss",
      dejotaji_surname: "Melderis",
      dejotaji_dz: "virs",
      dejotaji_foto: matiss_melderis,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 314,
      dejotaji_name: "Asnate",
      dejotaji_surname: "Moiseja",
      dejotaji_dz: "siev",
      dejotaji_foto: asnate_moiseja,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 307,
      dejotaji_name: "Kristians",
      dejotaji_surname: "Nolmanis",
      dejotaji_dz: "virs",
      dejotaji_foto: kristians_nolmanis,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 372,
      dejotaji_name: "Karīna",
      dejotaji_surname: "Oļševska",
      dejotaji_dz: "siev",
      dejotaji_foto: karina_olsevska,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 341,
      dejotaji_name: "Paula",
      dejotaji_surname: "Paegle",
      dejotaji_dz: "siev",
      dejotaji_foto: paula_paegle,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 332,
      dejotaji_name: "Matīss",
      dejotaji_surname: "Pauls",
      dejotaji_dz: "virs",
      dejotaji_foto: matiss_pauls,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 366,
      dejotaji_name: "Roberts",
      dejotaji_surname: "Pētersons",
      dejotaji_dz: "virs",
      dejotaji_foto: roberts_petersons,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 221,
      dejotaji_name: "Sanita",
      dejotaji_surname: "Prese",
      dejotaji_dz: "siev",
      dejotaji_foto: sanita_prese,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 300,
      dejotaji_name: "Rita",
      dejotaji_surname: "Reņko",
      dejotaji_dz: "siev",
      dejotaji_foto: rita_renko,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 340,
      dejotaji_name: "Ernests",
      dejotaji_surname: "Riekstiņš",
      dejotaji_dz: "virs",
      dejotaji_foto: ernests_riekstins,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 500,
      dejotaji_name: "Eleonora",
      dejotaji_surname: "Rieksta",
      dejotaji_dz: "siev",
      dejotaji_foto: eleonora_rieksta,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 353,
      dejotaji_name: "Luīze",
      dejotaji_surname: "Rubene",
      dejotaji_dz: "siev",
      dejotaji_foto: luize_rubene,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 356,
      dejotaji_name: "Jēkabs",
      dejotaji_surname: "Rutkovskis",
      dejotaji_dz: "virs",
      dejotaji_foto: jekabs_rutkovskis,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 371,
      dejotaji_name: "Tristans",
      dejotaji_surname: "Sandis Laucis",
      dejotaji_dz: "virs",
      dejotaji_foto: tristans_laucis,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 345,
      dejotaji_name: "Luīze",
      dejotaji_surname: "Šaršune",
      dejotaji_dz: "siev",
      dejotaji_foto: luize_sarsuna,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 313,
      dejotaji_name: "Anna",
      dejotaji_surname: "Simina",
      dejotaji_dz: "siev",
      dejotaji_foto: anna_simina,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 191,
      dejotaji_name: "Laura",
      dejotaji_surname: "Sirmele",
      dejotaji_dz: "siev",
      dejotaji_foto: laura_sirmele,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 358,
      dejotaji_name: "Brigita",
      dejotaji_surname: "Stratane",
      dejotaji_dz: "siev",
      dejotaji_foto: brigita_stratane,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 310,
      dejotaji_name: "Ivo",
      dejotaji_surname: "Svens Adviljons",
      dejotaji_dz: "virs",
      dejotaji_foto: svens_adviljons,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 295,
      dejotaji_name: "Elza",
      dejotaji_surname: "Treimane",
      dejotaji_dz: "siev",
      dejotaji_foto: elza_treimane,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 362,
      dejotaji_name: "Gita",
      dejotaji_surname: "Vaice",
      dejotaji_dz: "siev",
      dejotaji_foto: gita_vaice,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 315,
      dejotaji_name: "Emīlija",
      dejotaji_surname: "Vaitkevica",
      dejotaji_dz: "siev",
      dejotaji_foto: emilija_vaitkevica,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 171,
      dejotaji_name: "Annija",
      dejotaji_surname: "Vaivode",
      dejotaji_dz: "siev",
      dejotaji_foto: annija_vaivode,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 222,
      dejotaji_name: "Rihards",
      dejotaji_surname: "Vaivods",
      dejotaji_dz: "virs",
      dejotaji_foto: rihards_vaivods,
      rotalnieks: 1,
    },
    {
      dejotaji_id: 359,
      dejotaji_name: "Elizabete",
      dejotaji_surname: "Vilne",
      dejotaji_dz: "siev",
      dejotaji_foto: elizabete_vilne,
      rotalnieks: 0,
    },
    {
      dejotaji_id: 326,
      dejotaji_name: "Sintija",
      dejotaji_surname: "Žubecka",
      dejotaji_dz: "siev",
      dejotaji_foto: sintija_zubecka,
      rotalnieks: 0,
    },
  ];
  const items = dancers2.map((item) => {
    const src = item.dejotaji_foto;
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
          sizes="(max-width: 650px) 100vw, (max-width: 900px) 35vw, 25vw"
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
