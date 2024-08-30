import styles from "./managment.module.css";
import Footer from "@/components/footer/footer";
import ManagmentContainer from "@/components/managment/managment_container";
import ManagmentHeader from "@/components/managment/managment_header";
import Head from "next/head";
export default function Managment() {
  return (
    <>
      <Head>
        <title>Vadība - TDA Rotaļa</title>
        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content="TDA Rotaļa" />
        <link rel="icon" href="/rimbulis.png" />
      </Head>
      <div className={styles.container}>
        <ManagmentHeader />
        <ManagmentContainer />
        <Footer />
      </div>
    </>
  );
}
