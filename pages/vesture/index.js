import { Fragment } from "react";

import Head from "next/head";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import HistoryContainer from "@/components/history/HistoryContainer";

export default function AboutUsMain(props) {
  const description = "TDA Rotaļa ir deju kolektīvs ar vēsturi";

  return (
    <Fragment>
      <Head>
        <title>TDA Rotaļa</title>
        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
      </Head>

      <Header />
      <HistoryContainer />

      <Footer />
    </Fragment>
  );
}
