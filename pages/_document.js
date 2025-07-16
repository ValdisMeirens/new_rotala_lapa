import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Valdis Meirēns" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="TDA Rotaļa | Tautas deju ansamblis Rotaļa | VEF Kultūras Pils"
        />
        <meta
          name="keywords"
          content="TDA Rotaļa | Tautas deju ansamblis Rotaļa | VEF Kultūras Pils | Tautas dejas | Diāna Gavare"
        />

        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="TDA Rotaļa mājaslapa. Tautas deju ansamblis Rotaļa ir dibināts 1946. gadā. Savu vārdu Rotaļa ieguva pēc tādas pašas dejas nosaukuma"
        />
        <meta property="og:image" content="https://rotala.lv/rotala_logo.png" />
        <meta property="og:url" content="https://rotala.lv/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
