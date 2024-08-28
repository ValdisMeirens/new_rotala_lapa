import "@/styles/globals.css";
import { Alegreya, Exo, Lato, Poppins, Raleway } from "next/font/google";
import Head from "next/head";

const roboto = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </>
    // <Component {...pageProps} />
  );
}
