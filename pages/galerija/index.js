import GalleryHeader from "@/components/gallery/gallery_header";
import styles from "./gallery.module.css";
import GalleryContainer from "@/components/gallery/gallery_container";
import Footer from "@/components/footer/footer";
import { server } from "@/components/config/constants";
import Head from "next/head";

export default function Gallery({ data }) {
  return (
    <>
      <Head>
        <title>Galerija - TDA Rotaļa</title>
        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content="TDA Rotaļa" />
        <link rel="icon" href="/rimbulis.png" />
      </Head>
      <div className={styles.container}>
        <GalleryHeader />
        <GalleryContainer data={data} />
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/gallery_headers`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
