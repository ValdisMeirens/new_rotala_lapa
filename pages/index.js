"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./home.module.css";
import Footer from "@/components/footer/footer";
import ContactsContainer from "@/components/news/contacts_container";
import EventContainer from "@/components/news/events_container";
import ImageContainer from "@/components/news/image_container";
import LogoContainer from "@/components/news/logo_container";
import RotalaContainer from "@/components/news/rotala_container";
import { server } from "@/components/config/constants";

export default function Home({ calendar }) {
  return (
    <>
      <Head>
        <title>TDA Rotaļa</title>
        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content="TDA Rotaļa" />
      </Head>

      <div className={styles.container}>
        <LogoContainer />
        {/* <ImageContainer news={news} /> */}
        <EventContainer calendar={calendar} />
        <RotalaContainer />
        <ContactsContainer />
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // const resCalendar = await fetch(`${HOST}/api/kalendars`);
  const resCalendar = await fetch(`${server}/api/kalendars`);
  const dataCalendar = await resCalendar.json();

  return {
    props: {
      calendar: dataCalendar,
    },
  };
}
