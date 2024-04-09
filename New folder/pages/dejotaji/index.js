import { Fragment } from "react";

import Head from "next/head";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DancersContainer from "@/components/dancers/DancersContainer";
import { server } from "../../components/config/index";

export default function AboutUsMain({ collective }) {
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
      <DancersContainer collective={collective} />
      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/dejotaji`);
  const data = await res.json();

  return {
    props: {
      collective: data,
    },
  };
}
