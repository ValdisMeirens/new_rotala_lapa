"use client";
import Head from "next/head";
import styles from "./home.module.css";
import Footer from "@/components/footer/footer";
import ContactsContainer from "@/components/news/contacts_container";
import EventContainer from "@/components/news/events_container";
import LogoContainer from "@/components/news/logo_container";
import RotalaContainer from "@/components/news/rotala_container";
import { server } from "@/components/config/constants";

export default function Home({ calendar }) {
  return (
    <>
      <Head>
        <title>TDA Rotaļa</title>
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
        <meta property="og:image" content="https://rotala.lv/rotala_logo.png" />
        <meta property="og:url" content="https://rotala.lv/" />
      </Head>

      <div className={styles.container}>
        <LogoContainer />
        <EventContainer calendar={calendar} />
        <RotalaContainer />
        <ContactsContainer />
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const resCalendar = await fetch(`${server}/api/kalendars`);
  const dataCalendar = await resCalendar.json();

  return {
    props: {
      calendar: dataCalendar,
    },
  };
}
