import HistoryHeader from "@/components/history/history_header";
import HistoryContainer from "@/components/history/history_container";
import HistoryLeaders from "@/components/history/history_leaders";
import HistoryCompetitions from "@/components/history/history_competitions";

import styles from "./vesture.module.css";
import Footer from "@/components/footer/footer";
import Head from "next/head";

export default function History() {
  return (
    <>
      <Head>
        <title>Vēsture - TDA Rotaļa</title>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Valdis Meirēns" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="TDA Rotaļa | Tautas deju ansamblis Rotaļa | VEF Kultūras Pils"
        />
        <meta
          name="keywords"
          content="TDA Rotaļa | Tautas deju ansamblis Rotaļa | VEF Kultūras Pils | Tautas dejas | Diāna Gavare"
        />

        <link rel="icon" href="/rimbulis.png" />

        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="TDA Rotaļa mājaslapa. Tautas deju ansamblis Rotaļa ir dibināts 1946. gadā. Savu vārdu Rotaļa ieguva pēc tādas pašas dejas nosaukuma"
        />
        <meta property="og:image" content="/public/rotala_logo.png" />
        <meta property="og:url" content="https://rotala.lv/vesture" />
      </Head>
      <div className={styles.container}>
        <HistoryHeader />
        <HistoryContainer />
        <HistoryLeaders />
        <HistoryCompetitions />
        <Footer />
      </div>
    </>
  );
}
