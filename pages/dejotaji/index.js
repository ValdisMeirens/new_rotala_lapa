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
        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content="TDA Rotaļa" />
        <link rel="icon" href="/rimbulis.png" />
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
