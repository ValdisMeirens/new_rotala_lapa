import AboutUsHeader from "@/components/aboutus/aboutus_header";

import styles from "./aboutus.module.css";
import Footer from "@/components/footer/footer";
import AboutUsContainer from "@/components/aboutus/aboutus_container";
import Head from "next/head";

export default function Dancers() {
  return (
    <>
      <Head>
        <title>Par mums - TDA Rotaļa</title>
        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content="TDA Rotaļa" />
        <link rel="icon" href="/rimbulis.png" />
      </Head>
      <div className={styles.container}>
        <AboutUsHeader />
        <AboutUsContainer />
        <Footer />
      </div>
    </>
  );
}
