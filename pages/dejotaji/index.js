import DancersHeader from "@/components/dancers/dancers_header";
import DancersContainer from "@/components/dancers/dancers_container";

import styles from "./dancers.module.css";
import Footer from "@/components/footer/footer";
import Head from "next/head";

export default function Dancers() {
  return (
    <>
      <Head>
        <title>Dejotāji - TDA Rotaļa</title>
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
        <meta property="og:url" content="https://rotala.lv/" />
      </Head>
      <div className={styles.container}>
        <DancersHeader />
        <DancersContainer />
        <Footer />
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${server}/api/dancers`);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
