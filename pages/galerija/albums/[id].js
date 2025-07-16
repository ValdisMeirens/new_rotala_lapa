import Head from "next/head";
import AlbumContainer from "@/components/gallery/album_container.js";
import AlbumHeaderContainer from "@/components/gallery/album_header_container";
import { server } from "@/components/config/constants";
import Nav from "@/components/nav/nav";
export default function GalleryIdPage({ gallery }) {
  return (
    <>
      <Head>
        <title>Galerija - TDA Rotaļa</title>
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
      <div>
        <AlbumHeaderContainer />

        <AlbumContainer gallery={gallery} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`${server}/api/gallery`);
  const data = await res.json();
  const gallery = data.filter(
    (galleryItem) => galleryItem.PARENT_ID.toString() == params.id.toString()
  );

  return {
    props: {
      gallery,
    },
  };
}
