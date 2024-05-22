import Head from "next/head";
import AlbumContainer from "@/components/gallery/album_container.js";
import AlbumHeaderContainer from "@/components/gallery/album_header_container";
import { server } from "@/components/config/constants";
import Nav from "@/components/nav/nav";
export default function GalleryIdPage({ gallery }) {
  return (
    <>
      <Head>
        <title>TDA Rotaļa</title>
        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content="TDA Rotaļa" />
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
